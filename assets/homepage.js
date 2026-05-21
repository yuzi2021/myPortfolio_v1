// Homepage-specific translations
const homepageTranslations = {
    en: {
        heroTitle: "Educator transitioning into cybersecurity — combining ten years of teaching with a BSc in Computer Science and hands-on security awareness programme delivery.",
        heroDescription: "Interested in GRC, security awareness, and the human side of information security. Explore my {0}, {1}, and {2} to see how education and technology meet.",
        typingProjects: "PROJECTS",
        typingExperiences: "EXPERIENCES",
        typingEducation: "EDUCATION"
    },
    fi: {
        heroTitle: "Opettaja siirtymässä kyberturvallisuuteen — yhdistän kymmenen vuoden opetuskokemuksen tietojenkäsittelytieteen kandidaatintutkintoon ja käytännön tietoturvatietoisuusohjelmien toteuttamiseen.",
        heroDescription: "Kiinnostunut GRC:stä, tietoturvatietoisuudesta ja tietoturvan inhimillisestä puolesta. Tutustu {0}, {1} ja {2} nähdäksesi, miten koulutus ja teknologia kohtaavat.",
        typingProjects: "PROJEKTIT",
        typingExperiences: "KOKEMUKSET",
        typingEducation: "KOULUTUS"
    }
};

// Function to update homepage content
function updateHomepageContent(lang) {
    document.querySelector('[data-i18n="heroTitle"]').textContent = homepageTranslations[lang].heroTitle;
    
    const heroDescription = document.querySelector('[data-i18n="heroDescription"]');
    const translatedDesc = homepageTranslations[lang].heroDescription
        .replace('{0}', `<span id="typing-projects" class="highlight-projects-link"></span>`)
        .replace('{1}', `<span id="typing-experiences" class="highlight-experiences-link"></span>`)
        .replace('{2}', `<span id="typing-education" class="highlight-education-link"></span>`);
    heroDescription.innerHTML = translatedDesc;

    startTyping(lang);
}

// Typing animation logic
function startTyping(lang) {
    const texts = [
        { element: document.getElementById("typing-projects"), text: homepageTranslations[lang].typingProjects, link: "projects.html" },
        { element: document.getElementById("typing-experiences"), text: homepageTranslations[lang].typingExperiences, link: "experiences.html" },
        { element: document.getElementById("typing-education"), text: homepageTranslations[lang].typingEducation, link: "education.html" }
    ];
    typeWriter(texts, 0, lang);
}

function typeWriter(texts, index = 0, lang) {
    if (index >= texts.length) return;

    const { element, text, link } = texts[index];
    let charIndex = 0;

    element.textContent = '';
    element.style.color = "var(--white)";

    function type() {
        if (charIndex < text.length) {
            element.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            const anchor = document.createElement("a");
            anchor.href = `${link}?lang=${lang}`; // Add language as a query parameter
            anchor.textContent = text;
            anchor.className = element.className;
            anchor.style.color = "var(--June-Bud)";
            anchor.style.textDecoration = "underline";
            element.replaceWith(anchor);

            setTimeout(() => typeWriter(texts, index + 1, lang), 1500);
        }
    }

    type();
}

// Event listener for language changes
document.addEventListener('languageChanged', function(e) {
    updateHomepageContent(e.detail.language);
});

// Initial setup
document.addEventListener('DOMContentLoaded', function() {
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    updateHomepageContent(preferredLanguage);
});

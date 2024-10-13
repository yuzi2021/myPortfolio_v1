
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang');
    if (lang && (lang === 'en' || lang === 'fi')) {
        localStorage.setItem('preferredLanguage', lang);
        changeLanguage(lang);
    }
});


const translations = {
    en: {
        home: "Home",
        projects: "Projects",
        education: "Education",
        experiences: "Experiences",
        contacts: "Contacts",
        accessibilityStatement: "Accessibility Statement",
        privacyPolicy: "Privacy Policy",
        skipToContent: "Skip to main content",
        projectsTitle: "Sarah Sandström - Projects",
        projectTimeline: "Project Timeline",
        cv: "CV"
    },
    fi: {
        home: "Koti",
        projects: "Projektit",
        education: "Koulutus",
        experiences: "Kokemukset",
        contacts: "Yhteystiedot",
        accessibilityStatement: "Saavutettavuusseloste",
        privacyPolicy: "Tietosuojaseloste",
        skipToContent: "Siirry pääsisältöön",
        projectsTitle: "Sarah Sandström - Projektit",
        projectTimeline: "Projektiaikajana",
        cv: "Ansioluettelo"
    }
};


// Function to update contact page content
function updateContactContent(lang) {
    document.querySelector('[data-i18n="contactTitle"]').textContent = contactTranslations[lang].contactTitle;
    document.querySelector('[data-i18n="letsTalk"]').textContent = contactTranslations[lang].letsTalk;
    document.querySelector('[data-i18n="contactIntro"]').textContent = contactTranslations[lang].contactIntro;
    document.querySelector('[data-i18n="getInTouch"]').textContent = contactTranslations[lang].getInTouch;
    document.querySelector('[data-i18n="email"]').textContent = contactTranslations[lang].email;
    document.querySelector('[data-i18n="linkedin"]').textContent = contactTranslations[lang].linkedin;
    document.querySelector('[data-i18n="github"]').textContent = contactTranslations[lang].github;
    document.querySelector('[data-i18n="linkedinProfile"]').textContent = contactTranslations[lang].linkedinProfile;
    document.querySelector('[data-i18n="githubProfile"]').textContent = contactTranslations[lang].githubProfile;
}

// Event listener for language changes
document.addEventListener('languageChanged', function(e) {
    updateContactContent(e.detail.language);
});

// Initial setup
document.addEventListener('DOMContentLoaded', function() {
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    updateContactContent(preferredLanguage);
});

function changeLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update page title
    document.title = translations[lang].projectsTitle;

    // Update active language link
    document.querySelectorAll('.lang-link').forEach(link => {
        if (link.getAttribute('data-lang') === lang) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Store the language preference
    localStorage.setItem('preferredLanguage', lang);

    // Dispatch a custom event for language change
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.lang-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });

    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(preferredLanguage);
});


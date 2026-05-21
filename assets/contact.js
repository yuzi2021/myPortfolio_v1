// Contact page-specific translations
window.contactTranslations = {
    en: {
        contactTitle: "Contact",
        letsTalk: "Let's Talk",
        contactIntro: "I'm a final-year Computer Science student at the University of London, transitioning into cybersecurity with a focus on GRC and security awareness. I combine ten years of teaching experience with hands-on security programme delivery and independent privacy engineering projects. I'm open to opportunities in information security, GRC, and compliance — as well as internships, project collaborations, and networking. Feel free to reach out.",
        getInTouch: "Get in Touch",
        email: "Email",
        linkedin: "LinkedIn",
        github: "GitHub",
        linkedinProfile: "LinkedIn Profile",
        githubProfile: "GitHub Profile"
    },
    fi: {
        contactTitle: "Ota yhteyttä",
        letsTalk: "Keskustellaan",
        contactIntro: "Olen viimeisen vuoden tietojenkäsittelytieteen opiskelija Lontoon yliopistossa ja siirryn kyberturvallisuuden alalle erikoistuen GRC:hen ja tietoturvatietoisuuteen. Yhdistän kymmenen vuoden opetuskokemuksen käytännön tietoturvaohjelmatyöhön ja itsenäisiin tietosuojainsinöörointiprojekteihin. Olen kiinnostunut mahdollisuuksista tietoturvan, GRC:n ja vaatimustenmukaisuuden parissa — sekä harjoittelupaikoista, projektiyhteistyöstä ja verkostoitumisesta. Ota rohkeasti yhteyttä.",
        getInTouch: "Ota yhteyttä",
        email: "Sähköposti",
        linkedin: "LinkedIn",
        github: "GitHub",
        linkedinProfile: "LinkedIn-profiili",
        githubProfile: "GitHub-profiili"
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
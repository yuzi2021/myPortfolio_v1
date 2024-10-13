// Contact page-specific translations
window.contactTranslations = {
    en: {
        contactTitle: "Contact",
        letsTalk: "Let's Talk",
        contactIntro: "As a second-year Computer Science student, I'm passionate about leveraging technology to create innovative solutions across various fields. While my experience in education provides me with valuable insights, my interests and aspirations in technology extend far beyond this sector. I'm eager to apply my problem-solving skills, creativity, and unique perspective to a wide range of technological challenges and opportunities. I'm always open to connecting for internships, project collaborations, or networking opportunities in any area of tech that drives innovation. Whether you have questions about my projects, want to discuss potential collaborations, or just want to chat about the latest technological trends, feel free to reach out!",
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
        contactIntro: "Toisen vuoden tietojenkäsittelytieteen opiskelijana, olen intohimoinen teknologian hyödyntämisestä innovatiivisten ratkaisujen luomiseen eri aloilla. Vaikka kokemukseni koulutusalalta tarjoaa minulle arvokkaita näkemyksiä, kiinnostukseni ja tavoitteeni teknologian parissa ulottuvat paljon tätä sektoria laajemmalle. Olen innokas soveltamaan ongelmanratkaisutaitojani, luovuuttani ja ainutlaatuista näkökulmaani monenlaisiin teknologisiin haasteisiin ja mahdollisuuksiin. Olen aina avoin yhteydenotoille liittyen harjoittelumahdollisuuksiin, projekteihin tai verkostoitumiseen millä tahansa innovaatiota edistävällä teknologia-alalla. Jos sinulla on kysyttävää projekteistani, haluat keskustella mahdollisesta yhteistyöstä tai vain jutella uusimmista teknologiatrendeistä, ota rohkeasti yhteyttä!",
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
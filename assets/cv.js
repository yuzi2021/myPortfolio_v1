
// CV Section Translations
window.cvSectionTranslations = {
    en: {
        cvTitle: "Sarah Sandström CV",
        contactDetails: "Contact Details",
        education: "Education",
        projects: "Projects",
        workExperience: "Work Experience",
        languageSkills: "Language Skills",
        certificates: "Certificates"
    },
    fi: {
        cvTitle: "Sarah Sandströmin ansioluettelo",
        contactDetails: "Yhteystiedot",
        education: "Koulutus",
        projects: "Projektit",
        workExperience: "Työkokemus",
        languageSkills: "Kielitaito",
        certificates: "Sertifikaatit"
    }
};

window.cvSectionTranslations = {
    en: {
        // ... existing translations ...
        downloadCvEn: "Download CV (English)",
        downloadCvFi: "Download CV (Finnish)"
    },
    fi: {
        // ... existing translations ...
        downloadCvEn: "Lataa CV (Englanti)",
        downloadCvFi: "Lataa CV (Suomi)"
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    setActiveLanguage(preferredLanguage);
    changeLanguage(preferredLanguage);

    // Populate CV sections
    populateEducationForCV(preferredLanguage);
    populateProjectsForCV(preferredLanguage);
    populateWorkExperiencesForCV(preferredLanguage);
    populateLanguageSkillsForCV(preferredLanguage);
    populateCertificatesForCV(preferredLanguage);

    // Add event listeners for language change buttons
    document.querySelectorAll('.lang-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedLang = this.getAttribute('data-lang');
            localStorage.setItem('preferredLanguage', selectedLang);
            setActiveLanguage(selectedLang);
            changeLanguage(selectedLang);
        });
    });
});

function setActiveLanguage(lang) {
    document.querySelectorAll('.lang-link').forEach(link => {
        if (link.getAttribute('data-lang') === lang) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function changeLanguage(lang) {
    // Translate CV sections
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (window.cvSectionTranslations[lang] && window.cvSectionTranslations[lang][key]) {
            element.textContent = window.cvSectionTranslations[lang][key];
        }
    });

    // Translate other elements (if you have any)
    document.querySelectorAll('[data-i18n-general]').forEach(element => {
        const key = element.getAttribute('data-i18n-general');
        if (window.generalTranslations && window.generalTranslations[lang] && window.generalTranslations[lang][key]) {
            element.textContent = window.generalTranslations[lang][key];
        }
    });

    populateEducationForCV(lang);
    populateProjectsForCV(lang);
    populateWorkExperiencesForCV(lang);
    populateLanguageSkillsForCV(lang);
    populateCertificatesForCV(lang);
}

function populateEducationForCV(lang) {
    const educationList = document.getElementById('education-list');
    if (educationList) {
        educationList.innerHTML = '';
        window.educationData.forEach(edu => {
            const educationItem = document.createElement('li');
            educationItem.className = 'cv-item';

            const institution = document.createElement('h3');
            institution.textContent = edu.institution[lang] || edu.institution['en'];
            educationItem.appendChild(institution);

            const degree = document.createElement('h4');
            degree.textContent = edu.degree[lang] || edu.degree['en'];
            educationItem.appendChild(degree);

            const period = document.createElement('p');
            period.classList.add('cv-date');
            period.textContent = edu.period[lang] || edu.period['en'];
            educationItem.appendChild(period);

            educationList.appendChild(educationItem);
        });
    }
}

function populateProjectsForCV(lang) {
    const projectsList = document.getElementById('projects-list');
    if (projectsList) {
        projectsList.innerHTML = '';
        window.projectsData.forEach(project => {
            const projectItem = document.createElement('li');
            projectItem.className = 'cv-item';

            const projectTitle = document.createElement('h3');
            projectTitle.textContent = `${project.title[lang] || project.title['en']} (${project.year})`;
            projectItem.appendChild(projectTitle);

            const projectDescription = document.createElement('p');
            projectDescription.textContent = project.description[lang].split('.')[0] + '.';
            projectItem.appendChild(projectDescription);

            const techStack = document.createElement('p');
            techStack.innerHTML = `<strong>Tech Stack:</strong> ${project.techStack}`;
            projectItem.appendChild(techStack);

            projectsList.appendChild(projectItem);
        });
    }
}

function populateWorkExperiencesForCV(lang) {
    const experiencesList = document.getElementById('experience-list');
    if (experiencesList) {
        experiencesList.innerHTML = '';
        window.experiences.forEach(exp => {
            const experienceItem = document.createElement('li');
            experienceItem.className = 'cv-item';

            const jobTitle = document.createElement('h3');
            jobTitle.textContent = `${exp.title[lang] || exp.title['en']} (${exp.date[lang] || exp.date['en']})`;
            experienceItem.appendChild(jobTitle);

            const company = document.createElement('p');
            company.textContent = `${exp.company}, ${exp.location[lang] || exp.location['en']}`;
            experienceItem.appendChild(company);

            const description = document.createElement('p');
            description.textContent = exp.description[lang][0];
            experienceItem.appendChild(description);

            experiencesList.appendChild(experienceItem);
        });
    }
}

function populateLanguageSkillsForCV(lang) {
    const languageSkillsList = document.getElementById('cv-language-skills-list');
    if (languageSkillsList) {
        languageSkillsList.innerHTML = '';
        window.languageSkills.forEach(skill => {
            const skillItem = document.createElement('li');
            skillItem.className = 'cv-item';

            const language = document.createElement('h4');
            language.innerHTML = `${skill.language[lang] || skill.language['en']} <span>${skill.proficiency[lang] || skill.proficiency['en']}</span>`;
            skillItem.appendChild(language);

            languageSkillsList.appendChild(skillItem);
        });
    }
}

function populateCertificatesForCV(lang) {
    const certificatesList = document.getElementById('certificates-list');
    if (certificatesList) {
        certificatesList.innerHTML = '';
        window.certifications.forEach(cert => {
            const certItem = document.createElement('li');
            certItem.className = 'cv-item';

            const certName = document.createElement('h4');
            certName.textContent = `${cert.name[lang] || cert.name['en']} (${cert.year})`;
            certItem.appendChild(certName);

            const authority = document.createElement('p');
            if (typeof cert.authority === 'object') {
                authority.textContent = cert.authority[lang] || cert.authority['en'];
            } else {
                authority.textContent = cert.authority;
            }
            certItem.appendChild(authority);

            certificatesList.appendChild(certItem);
        });
    }
}

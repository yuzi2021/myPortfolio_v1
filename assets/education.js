document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang');
    if (lang && (lang === 'en' || lang === 'fi')) {
        localStorage.setItem('preferredLanguage', lang);
        changeLanguage(lang);
    }
});


// Education-specific translations
window.educationTranslations = {
    en: {
        educationTitle: "Education",
        certificationsTitle: "Certifications",
        languageSkillsTitle: "Language Skills",
        grade: "Grade",
        activities: "Activities and societies",
        present: "Present",
        showMore: "Show More",
        showLess: "Show Less"
    },
    fi: {
        educationTitle: "Koulutus",
        certificationsTitle: "Sertifikaatit",
        languageSkillsTitle: "Kielitaidot",
        grade: "Arvosana",
        activities: "Aktiviteetit ja yhdistykset",
        present: "Nykyhetki",
        showMore: "Näytä lisää",
        showLess: "Näytä vähemmän"
    }
};

// Education data
window.educationData = [
    {
        institution: {
            en: "University of London",
            fi: "Lontoon yliopisto"
        },
        degree: {
            en: "Bachelor's degree, Computer Science",
            fi: "Kandidaatin tutkinto, Tietojenkäsittelytiede"
        },
        period: {
            en: "Oct 2022 - Apr 2026",
            fi: "Loka 2022 - Huhti 2026"
        },
        description: {
            en: "I have completed the first year of study. Completed courses: Computational Mathematics, Discrete Mathematics, Algorithms and Data Structures, Introduction to Programming 1 & 2, How Computers Work, Fundamentals of Computer Science, Web Development, Graphics Programming",
            fi: "Olen suorittanut ensimmäisen vuoden opinnot. Suoritetut kurssit: Laskennallinen matematiikka, Diskreetti matematiikka, Algoritmit ja tietorakenteet, Ohjelmoinnin perusteet 1 & 2, Tietokoneiden toiminta, Tietojenkäsittelytieteen perusteet, Web-kehitys, Graafinen ohjelmointi"
        }
    },
    {
        institution: {
            en: "University of Helsinki",
            fi: "Helsingin yliopisto"
        },
        degree: {
            en: "Master's degree, Changing Education",
            fi: "Maisterin tutkinto, Muuttuva kasvatus"
        },
        period: {
            en: "2020 - 2025",
            fi: "2020 - 2025"
        },
        description: {
            en: "- Education, society and culture\n- Educational psychology and neuroscience\n- Pedagogy, educational institutions and research-based teacher education",
            fi: "- Koulutus, yhteiskunta ja kulttuuri\n- Kasvatuspsykologia ja neurotiede\n- Pedagogiikka, oppilaitokset ja tutkimusperustainen opettajankoulutus"
        }
    },
    {
        institution: {
            en: "Laurea University of Applied Sciences",
            fi: "Laurea-ammattikorkeakoulu"
        },
        degree: {
            en: "Socionomi, 60 credits",
            fi: "Socionomi, 60 opintopistettä"
        },
        period: {
            en: "2023 - 2024",
            fi: "2023 - 2024"
        },
        description: {
            en: "- Basics of Competence in Early Childhood Education and Care\n- Child-oriented Activity in Early Childhood Education and Care\n- Operational Culture Supporting the Inclusiveness of Early Childhood Education and Care and Multidisciplinary Cooperation\n- Placement for Professional Working Methods (ECE Qualifications)\n- Thesis Title: From Playgrounds to Pixels: Navigating Data Privacy and Ethical App Selection in Early Childhood Education",
            fi: "- Varhaiskasvatuksen ja lastenhoidon osaamisen perusteet\n- Lapsilähtöinen toiminta varhaiskasvatuksessa ja lastenhoidossa\n- Varhaiskasvatuksen inklusiivisuutta ja moniammatillista yhteistyötä tukeva toimintakulttuuri\n- Ammatillisten työmenetelmien harjoittelu (Varhaiskasvatuksen pätevyys)\n- Opinnäytetyön aihe: Leikkikentiltä pikseleihin: Tietosuojan ja eettisen sovellus-valinnan navigointi varhaiskasvatuksessa"
        }
    },
    {
        institution: {
            en: "Suomen Raamattuopisto",
            fi: "Suomen Raamattuopisto"
        },
        degree: {
            en: "Finnish language and culture",
            fi: "Suomen kieli ja kulttuuri"
        },
        period: {
            en: "2019 - 2020",
            fi: "2019 - 2020"
        },
        description: {
            en: "Intensive Finnish language and culture studies",
            fi: "Intensiivinen suomen kielen ja kulttuurin opiskelu"
        }
    },
    {
        institution: {
            en: "University of Helsinki",
            fi: "Helsingin yliopisto"
        },
        degree: {
            en: "Master of Arts - MA, English Studies with a Minor in Subject Teacher Training",
            fi: "Filosofian maisteri, Englannin kieli ja kirjallisuus, sivuaineena aineenopettajan koulutus"
        },
        period: {
            en: "2017 - 2019",
            fi: "2017 - 2019"
        },
        grade: {
            en: "Grade: 5",
            fi: "Arvosana: 5"
        },
        description: {
            en: "First year: advanced courses in English Studies\nMaster's thesis: Material adaptations for Content and Language Integrated Learning (CLIL)\nSecond year: Complete Finnish subject teacher training in the subject of English at lower and upper secondary level",
            fi: "Ensimmäinen vuosi: syventäviä kursseja englannin kielessä ja kirjallisuudessa\nPro gradu -tutkielma: Materiaalien mukauttaminen sisällön ja kielen yhdennettyyn oppimiseen (CLIL)\nToinen vuosi: Suomalainen aineenopettajakoulutus englannin kielessä yläkoulussa ja lukiossa"
        },
        activities: {
            en: "Activities and societies: Language centre trainee, Student Services Intern",
            fi: "Aktiviteetit ja yhdistykset: Kielikeskuksen harjoittelija, Opiskelijapalveluiden harjoittelija"
        }
    },
    {
        institution: {
            en: "University of Buckingham",
            fi: "Buckinghamin yliopisto"
        },
        degree: {
            en: "Bachelor's degree, English Studies for Teaching",
            fi: "Kandidaatin tutkinto, Englannin opinnot opetusta varten"
        },
        period: {
            en: "2011 - 2013",
            fi: "2011 - 2013"
        },
        grade: {
            en: "Grade: First Class Honours",
            fi: "Arvosana: Erinomainen (First Class Honours)"
        },
        activities: {
            en: "Activities and societies: Career Services Intern, University Alumni Magazine, Zumba Club",
            fi: "Aktiviteetit ja yhdistykset: Urapalveluiden harjoittelija, Yliopiston alumnitiedote, Zumba-kerho"
        }
    }
];

// Certifications data
window.certifications = [
    { 
        name: {
            en: "Python AI",
            fi: "Python Tekoäly"
        },
        year: "2024",
        authority: "Mimo"
    },
    {
        name: {
            en: "Full Stack Developer",
            fi: "Full Stack -kehittäjä"
        },
        year: "2024",
        authority: "Mimo"
    },
    {
        name: {
            en: "Early Childhood Education and Care Training",
            fi: "Varhaiskasvatuksen ja lastenhoidon koulutus"
        },
        year: "2023",
        authority: {
            en: "Laurea University of Applied Sciences",
            fi: "Laurea-ammattikorkeakoulu"
        }
    },
    {
        name: {
            en: "Finnish Language and Culture",
            fi: "Suomen kieli ja kulttuuri"
        },
        year: "2022",
        authority: {
            en: "Migri Integration Program",
            fi: "Migrin kotouttamisohjelma"
        }
    },
    {
        name: {
            en: "Understanding Research Methods",
            fi: "Tutkimusmenetelmien ymmärtäminen"
        },
        year: "2017",
        authority: {
            en: "University of London Coursera",
            fi: "Lontoon yliopiston Coursera-kurssi"
        }
    },
    {
        name: {
            en: "Transforming Your Classroom with Technology",
            fi: "Luokkahuoneen muuttaminen teknologian avulla"
        },
        year: "2016",
        authority: {
            en: "East Asia Regional Council of Schools",
            fi: "Itä-Aasian alueellinen kouluneuvosto"
        }
    },
    {
        name: {
            en: "Teaching ESL Students in mainstream classrooms",
            fi: "ESL-oppilaiden opettaminen tavallisissa luokkahuoneissa"
        },
        year: "2015",
        authority: {
            en: "Department for Education and Child Development Government of South Australia",
            fi: "Etelä-Australian hallituksen opetus- ja lasten kehitysosasto"
        }
    },
    {
        name: {
            en: "IBDP Language B Category 1: English",
            fi: "IBDP Kieli B Kategoria 1: Englanti"
        },
        year: "2015",
        authority: "IB Professional Development"
    }
];

// Language skills data
window.languageSkills = [
    {
        language: {
            en: "Chinese",
            fi: "Kiina"
        },
        proficiency: {
            en: "Native or bilingual proficiency",
            fi: "Äidinkieli tai kaksikielinen"
        }
    },
    {
        language: {
            en: "English",
            fi: "Englanti"
        },
        proficiency: {
            en: "Full professional proficiency",
            fi: "Täysi ammatillinen kielitaito"
        }
    },
    {
        language: {
            en: "Finnish",
            fi: "Suomi"
        },
        proficiency: {
            en: "Limited working proficiency",
            fi: "Rajoittunut työkielitaito"
        }
    },
    {
        language: {
            en: "Swedish",
            fi: "Ruotsi"
        },
        proficiency: {
            en: "Elementary proficiency",
            fi: "Perustason kielitaito"
        }
    }
];

function createEducationItem(education, lang) {
    try {
        const item = document.createElement('div');
        item.className = 'education-item';

        const mainContent = document.createElement('div');
        mainContent.className = 'education-main-content';

        const institution = document.createElement('h3');
        institution.textContent = education.institution[lang];

        const degree = document.createElement('p');
        degree.className = 'degree';
        degree.textContent = education.degree[lang];

        const period = document.createElement('p');
        period.className = 'duration';
        period.textContent = education.period[lang];

        mainContent.appendChild(institution);
        mainContent.appendChild(degree);
        mainContent.appendChild(period);

        const expandableContent = document.createElement('div');
        expandableContent.className = 'education-expandable-content';

        if (education.description) {
            const description = document.createElement('ul');
            description.className = 'description';
            const descriptionItems = education.description[lang].split('\n');
            descriptionItems.forEach(descItem => {
                const li = document.createElement('li');
                li.textContent = descItem.trim().replace(/^-\s*/, '');
                description.appendChild(li);
            });
            expandableContent.appendChild(description);
        }

        if (education.grade) {
            const grade = document.createElement('p');
            grade.className = 'grade';
            grade.textContent = `${educationTranslations[lang].grade}: ${education.grade[lang]}`;
            expandableContent.appendChild(grade);
        }

        if (education.activities) {
            const activities = document.createElement('p');
            activities.className = 'activities';
            activities.textContent = `${educationTranslations[lang].activities}: ${education.activities[lang]}`;
            expandableContent.appendChild(activities);
        }

        item.appendChild(mainContent);
        item.appendChild(expandableContent);

        item.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });

        return item;
    } catch (error) {
        console.error('Error creating education item:', error, education);
        return null;
    }
}

function createCertificationItem(cert, lang) {
    try {
        const item = document.createElement('div');
        item.className = 'certification-item';

        const name = document.createElement('h3');
        name.textContent = cert.name[lang];

        const details = document.createElement('p');
        const authority = typeof cert.authority === 'object' ? cert.authority[lang] : cert.authority;
        details.textContent = `${cert.year}${authority ? ' • ' + authority : ''}`;

        item.appendChild(name);
        item.appendChild(details);

        return item;
    } catch (error) {
        console.error('Error creating certification item:', error);
        return null;
    }
}

function createLanguageSkillItem(skill, lang) {
    try {
        const item = document.createElement('li');

        const language = document.createElement('span');
        language.className = 'language';
        language.textContent = skill.language[lang];

        const proficiency = document.createElement('span');
        proficiency.className = 'proficiency';
        proficiency.textContent = skill.proficiency[lang];

        item.appendChild(language);
        item.appendChild(proficiency);

        return item;
    } catch (error) {
        console.error('Error creating language skill item:', error);
        return null;
    }
}

function populateEducation(lang) {
    try {
        const educationList = document.getElementById('education-list');
        if (!educationList) {
            throw new Error('Education list element not found');
        }
        educationList.innerHTML = '';
        educationData.forEach(edu => {
            const item = createEducationItem(edu, lang);
            if (item) {
                educationList.appendChild(item);
            }
        });
    } catch (error) {
        console.error('Error populating education:', error);
    }
}

function populateCertifications(lang) {
    try {
        const certificationsList = document.getElementById('certifications-list');
        if (!certificationsList) {
            throw new Error('Certifications list element not found');
        }
        certificationsList.innerHTML = '';
        certifications.forEach(cert => {
            const item = createCertificationItem(cert, lang);
            if (item) {
                certificationsList.appendChild(item);
            }
        });
    } catch (error) {
        console.error('Error populating certifications:', error);
    }
}

function populateLanguageSkills(lang) {
    try {
        const languageSkillsList = document.getElementById('language-skills-list');
        if (!languageSkillsList) {
            throw new Error('Language skills list element not found');
        }
        languageSkillsList.innerHTML = '';
        languageSkills.forEach(skill => {
            const item = createLanguageSkillItem(skill, lang);
            if (item) {
                languageSkillsList.appendChild(item);
            }
        });
    } catch (error) {
        console.error('Error populating language skills:', error);
    }
}

function translatePageSpecificContent(lang) {
    try {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (educationTranslations[lang] && educationTranslations[lang][key]) {
                element.textContent = educationTranslations[lang][key];
            }
        });

        document.title = educationTranslations[lang].educationTitle;

        populateEducation(lang);
        populateCertifications(lang);
        populateLanguageSkills(lang);
    } catch (error) {
        console.error('Error translating page-specific content:', error);
    }
}

function handleLanguageChange(lang) {
    translatePageSpecificContent(lang);
}

document.addEventListener('DOMContentLoaded', function() {
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    handleLanguageChange(preferredLanguage);

    document.addEventListener('languageChanged', function(e) {
        handleLanguageChange(e.detail.language);
    });
});

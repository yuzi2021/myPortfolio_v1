
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang');
    if (lang && (lang === 'en' || lang === 'fi')) {
        localStorage.setItem('preferredLanguage', lang);
        changeLanguage(lang);
    }
});
// Experience-specific translations
window.experienceTranslations = {
    en: {
        experiencesTitle: "Experiences",
        skills: "Skills",
        description: "Description"
    },
    fi: {
        experiencesTitle: "Kokemukset",
        skills: "Taidot",
        description: "Kuvaus"
    }
};


// Experience data
    window.experiences = [
        {
            date: {
                en: "Jul 2024 - Present",
                fi: "Heinä 2024 - Nykyhetki"
            },
            title: {
                en: "Independent Developer & Educator",
                fi: "Itsenäinen kehittäjä & kouluttaja"
            },
            company: "Self-Employed",
            location: {
                en: "Remote",
                fi: "Etätyö"
            },
            skills: ["App Development", "Digital Privacy", "Education Technology", "Freelance"],
            description: {
                en: [
                    "Developing practical applications, focusing on efficiency and user-centric design",
                    "Conducting free workshops on digital privacy at local daycares, empowering educators and parents",
                    "Creating and developing training courses on various technology topics",
                    "Actively seeking and engaging in remote project work, applying technology skills to diverse challenges"
                ],
                fi: [
                    "Kehitän käytännöllisiä sovelluksia, keskittyen tehokkuuteen ja käyttäjäkeskeiseen suunnitteluun",
                    "Järjestän ilmaisia työpajoja digitaalisesta yksityisyydestä paikallisissa päiväkodeissa, voimaannuttaen kasvattajia ja vanhempia",
                    "Luon ja kehitän koulutuskursseja erilaisista teknologia-aiheista",
                    "Etsin aktiivisesti ja osallistun etäprojektityöhön, soveltaen teknologiataitoja monipuolisiin haasteisiin"
                ]
            }
        },
        {
            date: {
                en: "Mar 2022 - Jun 2024",
                fi: "Maalis 2022 - Kesä 2024"
            },
            title: {
                en: "Teacher Assistant",
                fi: "Opettajan avustaja"
            },
            company: "Pilke päiväkodit Oy",
            location: {
                en: "Kauniainen, Uusimaa, Finland",
                fi: "Kauniainen, Uusimaa, Suomi"
            },
            skills: ["Education", "Childcare"],
            description: {
                en: [
                    "Provided educational support and assistance in a Finnish daycare setting.",
                    "Identified the digital literacy gap and ran workshops on Data Privacy."
                ],
                fi: [
                    "Tarjosin opetuksellista tukea ja apua suomalaisessa päiväkotiympäristössä.",
                    "Tunnistin digitaalisen lukutaidon puutteen ja järjestin työpajoja tietosuojasta."
                ]
            }
        },
        {
            date: {
                en: "Aug 2021 - Feb 2022",
                fi: "Elo 2021 - Helmi 2022"
            },
            title: {
                en: "Pedagogy Consultant",
                fi: "Pedagoginen konsultti"
            },
            company: "LingoAce",
            location: {
                en: "Remote",
                fi: "Etätyö"
            },
            skills: ["Curriculum Development", "Educational Technology"],
            description: {
                en: [
                    "Reiterated student report V2.0 using dimensions from National Core Curriculum and Cambridge Life Competencies Framework",
                    "Improved report content quality and reduced teacher time by 70%",
                    "Received 100% positive feedback from parents"
                ],
                fi: [
                    "Uudistin oppilasraportin V2.0 käyttäen ulottuvuuksia kansallisesta opetussuunnitelmasta ja Cambridgen elämäntaitojen viitekehyksestä",
                    "Paransin raportin sisällön laatua ja vähensin opettajien ajankäyttöä 70%",
                    "Sain 100% positiivista palautetta vanhemmilta"
                ]
            }
        },
        {
            date: {
                en: "Jun 2019 - Sep 2021",
                fi: "Kesä 2019 - Syys 2021"
            },
            title: {
                en: "Mandarin Teacher",
                fi: "Mandariinikielen opettaja"
            },
            company: "Linguajoy Kielikerhot Oy",
            location: {
                en: "Finland",
                fi: "Suomi"
            },
            skills: ["Language Teaching", "Private Tutoring"],
            description: {
                en: [
                    "Hosted after-school Mandarin clubs",
                    "Provided private tutoring"
                ],
                fi: [
                    "Järjestin koulun jälkeisiä mandariinikielen kerhoja",
                    "Tarjosin yksityisopetusta"
                ]
            }
        },
        {
            date: {
                en: "Nov 2017 - Sep 2021",
                fi: "Marras 2017 - Syys 2021"
            },
            title: {
                en: "Freelance Translator",
                fi: "Freelance-kääntäjä"
            },
            company: "Universal Translation Services",
            location: {
                en: "Remote",
                fi: "Etätyö"
            },
            skills: ["Translation", "English to Mandarin"],
            description: {
                en: ["Provided English to Mandarin translation services"],
                fi: ["Tarjosin englanti-mandariini käännöspalveluita"]
            }
        },
        {
            date: {
                en: "Apr 2020 - Sep 2020",
                fi: "Huhti 2020 - Syys 2020"
            },
            title: {
                en: "Pedagogical Content Specialist",
                fi: "Pedagogisen sisällön asiantuntija"
            },
            company: "Integrate Us",
            location: {
                en: "Espoo, Finland",
                fi: "Espoo, Suomi"
            },
            skills: ["Content Development", "E-learning", "Project Coordination"],
            description: {
                en: [
                    "Developed English learning materials V2.0 using transversal competencies",
                    "Improved content quality with student-centred methodologies",
                    "Created game-based learning pack that scaffolded the skills in 'Learning How to Learn'",
                    "Coordinated global virtual classroom projects"
                ],
                fi: [
                    "Kehitin englannin oppimismateriaaleja V2.0 käyttäen laaja-alaisia osaamisia",
                    "Paransin sisällön laatua oppilaskeskeisillä menetelmillä",
                    "Loin pelipohjaisen oppimispaketin, joka tuki 'Oppimaan oppimisen' taitoja",
                    "Koordinoin globaaleja virtuaaliluokkaprojekteja"
                ]
            }
        },
        {
            date: {
                en: "Nov 2018 - Apr 2020",
                fi: "Marras 2018 - Huhti 2020"
            },
            title: {
                en: "Research Assistant",
                fi: "Tutkimusassistentti"
            },
            company: "University of Helsinki",
            location: {
                en: "Helsinki, Finland",
                fi: "Helsinki, Suomi"
            },
            skills: ["Research", "Academic Writing", "Data Analysis"],
            description: {
                en: [
                    "Finalized book manuscripts for submission",
                    "Created indexes for academic publications",
                    "Transcribed English interviews",
                    "Managed web material archiving"
                ],
                fi: [
                    "Viimeistelin kirjakäsikirjoituksia lähetettäväksi",
                    "Loin hakemistoja akateemisiin julkaisuihin",
                    "Litteroin englanninkielisiä haastatteluja",
                    "Hallinnoin verkkomateriaalien arkistointia"
                ]
            }
        },
        {
            date: {
                en: "Sep 2018 - Feb 2019",
                fi: "Syys 2018 - Helmi 2019"
            },
            title: {
                en: "Strategic Teaching International Trainee",
                fi: "Strategisen opetuksen kansainvälinen harjoittelija"
            },
            company: "University of Helsinki",
            location: {
                en: "Helsinki Area, Finland",
                fi: "Helsingin seutu, Suomi"
            },
            skills: ["Project Management", "Student Support"],
            description: {
                en: [
                    "Increased International Student Barometer response rate by 10%",
                    "Supported immigrants applying for higher education in Finland"
                ],
                fi: [
                    "Nostin kansainvälisen opiskelijabarometrin vastausprosenttia 10%:lla",
                    "Tuin maahanmuuttajia, jotka hakivat korkeakoulutukseen Suomessa"
                ]
            }
        },
        {
            date: {
                en: "Aug 2019 - Dec 2019",
                fi: "Elo 2019 - Joulu 2019"
            },
            title: {
                en: "Learning Materials Designer",
                fi: "Oppimismateriaalien suunnittelija"
            },
            company: "Dingmei Education",
            location: {
                en: "Remote",
                fi: "Etätyö"
            },
            skills: ["Content Creation", "Educational Design"],
            description: {
                en: [
                    "Wrote daily bilingual news",
                    "Designed SAT English learning materials"
                ],
                fi: [
                    "Kirjoitin päivittäisiä kaksikielisiä uutisia",
                    "Suunnittelin SAT-englannin oppimismateriaaleja"
                ]
            }
        },
        {
            date: {
                en: "Dec 2018 - Jan 2019",
                fi: "Joulu 2018 - Tammi 2019"
            },
            title: {
                en: "Substitute Teacher",
                fi: "Sijaisopettaja"
            },
            company: "Sibelius-lukio",
            location: {
                en: "Helsinki, Finland",
                fi: "Helsinki, Suomi"
            },
            skills: ["Teaching", "English Education"],
            description: {
                en: ["Taught English lessons to upper secondary school students"],
                fi: ["Opetin englannin tunteja lukio-opiskelijoille"]
            }
        },
        {
            date: {
                en: "Aug 2017 - May 2018",
                fi: "Elo 2017 - Touko 2018"
            },
            title: {
                en: "ALMS and OOTU Assistant",
                fi: "ALMS- ja OOTU-avustaja"
            },
            company: "University of Helsinki Language Centre",
            location: {
                en: "Helsinki, Finland",
                fi: "Helsinki, Suomi"
            },
            skills: ["Event Planning", "Student Support", "Educational Development"],
            description: {
                en: [
                    "Planned marketing videos for assistant activities",
                    "Organized events for local students",
                    "Contributed to KoeKampus event",
                    "Presented on student engagement in Language Centre development",
                    "Planned multilingual workshops exploring cultural phenomena"
                ],
                fi: [
                    "Suunnittelin markkinointivideoita avustajatoiminnalle",
                    "Järjestin tapahtumia paikallisille opiskelijoille",
                    "Osallistuin KoeKampus-tapahtumaan",
                    "Pidin esityksen opiskelijoiden osallistamisesta Kielikeskuksen kehittämisessä",
                    "Suunnittelin monikielisiä työpajoja kulttuuristen ilmiöiden tutkimiseksi"
                ]
            }
        },
        {
            date: {
                en: "Aug 2017 - May 2018",
                fi: "Elo 2017 - Touko 2018"
            },
            title: {
                en: "Career Services Trainee",
                fi: "Urapalveluiden harjoittelija"
            },
            company: "University of Helsinki",
            location: {
                en: "Helsinki, Finland",
                fi: "Helsinki, Suomi"
            },
            skills: ["Career Counseling", "Event Organization"],
            description: {
                en: [
                    "Provided career counselling and guidance on traineeships",
                    "Organised job seeking and career opportunity events"
                ],
                fi: [
                    "Tarjosin uraohjausta ja neuvontaa harjoitteluihin liittyen",
                    "Järjestin työnhaku- ja uratilaisuuksia"
                ]
            }
        },
        {
            date: {
                en: "Apr 2017 - Jul 2017",
                fi: "Huhti 2017 - Heinä 2017"
            },
            title: {
                en: "Learning Support Assistant",
                fi: "Oppimisen tukiassistentti"
            },
            company: "Chichester High School",
            location: {
                en: "Chichester, UK",
                fi: "Chichester, Iso-Britannia"
            },
            skills: ["Special Education", "Student Support"],
            description: {
                en: [
                    "Created Special Education Needs (SEN) student profiles",
                    "Provided in-class support for target pupils"
                ],
                fi: [
                    "Loin erityisopetuksen tarpeessa olevien oppilaiden profiileja",
                    "Tarjosin luokkahuonetukea kohdeoppilaille"
                ]
            }
        },
        {
            date: {
                en: "Jan 2014 - Apr 2017",
                fi: "Tammi 2014 - Huhti 2017"
            },
            title: {
                en: "Teacher of IB English B, IGCSE ESL and EAL",
                fi: "IB English B, IGCSE ESL ja EAL -opettaja"
            },
            company: "Wellington College International Tianjin",
            location: {
                en: "Tianjin, China",
                fi: "Tianjin, Kiina"
            },
            skills: ["IB Teaching", "CLIL", "Pastoral Care", "Curriculum Planning"],
            description: {
                en: [
                    "Lead teacher of IB English Language Acquisition",
                    "Taught various English and CLIL Science courses",
                    "Researched and planned whole-school CLIL program",
                    "Mentored new teaching staff",
                    "Managed student TA training and allocation",
                    "Organized school trips and after-school activities"
                ],
                fi: [
                    "Pääopettaja IB:n englannin kielen oppimisessa",
                    "Opetin erilaisia englannin ja CLIL-tieteen kursseja",
                    "Tutkin ja suunnittelin koko koulun CLIL-ohjelman",
                    "Ohjasin uusia opettajia",
                    "Hallinnoin opiskelijoiden opetusassistenttien koulutusta ja sijoittelua",
                    "Järjestin kouluretkiä ja koulun jälkeisiä aktiviteetteja"
                ]
            }
        },
        {
            date: {
                en: "Jan 2013 - Dec 2013",
                fi: "Tammi 2013 - Joulu 2013"
            },
            title: {
                en: "English Teacher",
                fi: "Englannin opettaja"
            },
            company: "Beijing New Oriental Education & Technology Group",
            location: {
                en: "Beijing, China",
                fi: "Peking, Kiina"
            },
            skills: ["English Teaching", "Adult Education"],
            description: {
                en: ["Taught English to adult learners"],
                fi: ["Opetin englantia aikuisopiskelijoille"]
            }
        },
        {
            date: {
                en: "Jan 2011 - Dec 2012",
                fi: "Tammi 2011 - Joulu 2012"
            },
            title: {
                en: "Career Services Intern",
                fi: "Urapalveluiden harjoittelija"
            },
            company: "University of Buckingham",
            location: {
                en: "Buckinghamshire, United Kingdom",
                fi: "Buckinghamshire, Yhdistynyt kuningaskunta"
            },
            skills: ["Graduate Recruitment", "Event Management"],
            description: {
                en: [
                    "Assisted with graduate recruitment",
                    "Sourced, screened, organized, and hosted recruitment events"
                ],
                fi: [
                    "Avustin vastavalmistuneiden rekrytoinnissa",
                    "Etsin, seuloin, järjestin ja isännöin rekrytointitapahtumia"
                ]
            }
        },
        {
            date: {
                en: "Feb 2010 - Jan 2011",
                fi: "Helmi 2010 - Tammi 2011"
            },
            title: {
                en: "TOEFL/IELTS Teacher",
                fi: "TOEFL/IELTS-opettaja"
            },
            company: "Beijing New Oriental Language School",
            location: {
                en: "Beijing, China",
                fi: "Peking, Kiina"
            },
            skills: ["Test Preparation", "Teacher Training", "Adult Education"],
            description: {
                en: [
                    "Taught English to adult learners planning to study, travel or live abroad",
                    "Provided Teacher Training to teachers from Beijing Primary school",
                    "Ran an online English news reading club",
                    "Participated in Management Trainee program"
                ],
                fi: [
                    "Opetin englantia aikuisopiskelijoille, jotka suunnittelivat opiskelua, matkustamista tai asumista ulkomailla",
                    "Tarjosin opettajakoulutusta Pekingin peruskoulun opettajille",
                    "Vedin verkossa toimivaa englanninkielisten uutisten lukukerhoa",
                    "Osallistuin johtajakoulutusohjelmaan"
                ]
            }
        }
    ];

    function createExperienceItem(experience, lang) {
        try {
            const item = document.createElement('div');
            item.className = 'experience-item';
    
            const dateElement = document.createElement('div');
            dateElement.className = 'experience-date';
            dateElement.textContent = experience.date[lang];
    
            const content = document.createElement('div');
            content.className = 'experience-content';
    
            const title = document.createElement('h3');
            title.textContent = experience.title[lang];
    
            const company = document.createElement('p');
            company.textContent = `${experience.company}, ${experience.location[lang]}`;
    
            const skillsContainer = document.createElement('div');
            skillsContainer.className = 'skills-container';
            experience.skills.forEach(skill => {
                const skillTag = document.createElement('span');
                skillTag.className = 'skill-tag';
                skillTag.textContent = skill;
                skillsContainer.appendChild(skillTag);
            });
    
            const expandedContent = document.createElement('div');
            expandedContent.className = 'expanded-content';
            
            // Add a heading for the description
            const descriptionHeading = document.createElement('h4');
            descriptionHeading.textContent = experienceTranslations[lang].description;
            expandedContent.appendChild(descriptionHeading);
    
            const descriptionList = document.createElement('ul');
            descriptionList.className = 'description-list';
            experience.description[lang].forEach(desc => {
                const li = document.createElement('li');
                li.innerHTML = `<span class="bullet">&bull;</span> ${desc}`;
                descriptionList.appendChild(li);
            });
            expandedContent.appendChild(descriptionList);
    
            content.appendChild(title);
            content.appendChild(company);
            content.appendChild(skillsContainer);
            content.appendChild(expandedContent);
    
            item.appendChild(dateElement);
            item.appendChild(content);
    
            return item;
        } catch (error) {
            console.error('Error creating experience item:', error);
            return null;
        }
    }
    

    function populateTimeline(lang) {
        try {
            const timeline = document.getElementById('experience-timeline');
            if (!timeline) {
                throw new Error('Timeline element not found');
            }
            timeline.innerHTML = ''; // Clear existing content
            experiences.forEach(exp => {
                const item = createExperienceItem(exp, lang);
                if (item) {
                    timeline.appendChild(item);
                }
            });
    
            // Re-apply intersection observer after populating content
            applyIntersectionObserver();
        } catch (error) {
            console.error('Error populating timeline:', error);
        }
    }
    
    function translatePageSpecificContent(lang) {
        try {
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (experienceTranslations[lang] && experienceTranslations[lang][key]) {
                    element.textContent = experienceTranslations[lang][key];
                }
            });
    
            document.title = experienceTranslations[lang].experiencesTitle;
            populateTimeline(lang);
        } catch (error) {
            console.error('Error translating page-specific content:', error);
        }
    }
    
    function applyIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        });
    
        // Observe all experience items
        document.querySelectorAll('.experience-item').forEach(item => {
            observer.observe(item);
        });
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
    
    // Add click event listener to toggle expanded content
    document.addEventListener('click', function(event) {
        if (event.target.closest('.experience-content')) {
            event.target.closest('.experience-content').classList.toggle('expanded');
        }
    });
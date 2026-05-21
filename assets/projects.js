
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang');
    if (lang && (lang === 'en' || lang === 'fi')) {
        localStorage.setItem('preferredLanguage', lang);
        changeLanguage(lang);
    }
});

// Project-specific translations
window.projectTranslations = {
    en: {
        projectTimeline: "Project Timeline",
        liveDemo: "Live Demo",
        githubRepo: "GitHub Repository",
        techStack: "Tech Stack:",
        report: "Report",
        publication: "Publication"
    },
    fi: {
        projectTimeline: "Projektiaikajana",
        liveDemo: "Live-demo",
        githubRepo: "GitHub-repositorio",
        techStack: "Teknologiat:",
        report: "Raportti",
        publication: "Julkaisu"
    }
};

// Project data
window.projectsData = [
    {
        year: "2026",
        title: {
            en: "FridgeReady — Privacy by Design Case Study",
            fi: "FridgeReady — Yksityisyys suunnitteluperiaatteena"
        },
        description: {
            en: "A consumer PWA concept repositioned as a compliance engineering portfolio piece. Demonstrates applied GDPR reasoning including Article 9 special category data classification, explicit consent architecture, data minimisation in schema design, Row-Level Security (RLS) at the database layer, and full DPIA and RoPA documentation. The compliance thinking — not the app — is the deliverable.",
            fi: "Kuluttaja-PWA-konsepti, joka on uudelleenasemoitu vaatimustenmukaisuustekniikan portfoliokappaleeksi. Osoittaa sovelletun GDPR-päättelyn, mukaan lukien artikla 9:n erityiskategoriadata-luokittelun, eksplisiittisen suostumusarkkitehtuurin, tiedon minimoinnin skeemasuunnittelussa, rivitason suojauksen (RLS) tietokantatasolla sekä täydellisen DPIA- ja RoPA-dokumentaation."
        },
        techStack: "React, Supabase, PostgreSQL, RLS, GDPR Articles 5, 6, 7, 9, 25, 30",
        reportLink: "./FridgeReady_GRC_Portfolio_Case_Study_v3.pdf",
        image: "assets/images/project1.png"
    },
    {
        year: "2026",
        title: {
            en: "PhishGuard EDU — Planned Final Project",
            fi: "PhishGuard EDU — Suunniteltu lopputyö"
        },
        description: {
            en: "Planned BSc Computer Science final project. An AI-powered phishing awareness training platform designed for school staff, building on three years of hands-on GDPR and security awareness programme delivery in early childhood education settings.",
            fi: "Suunniteltu tietojenkäsittelytieteen kandidaatintyö. Tekoälypohjainen tietojenkalastelutietoisuuden koulutusalusta koulujen henkilökunnalle, perustuen kolmen vuoden käytännön kokemukseen GDPR- ja tietoturvatietoisuusohjelmien toteuttamisesta varhaiskasvatusympäristöissä."
        },
        techStack: "In development — AI, security awareness, educational technology",
        image: "assets/images/project5.png"
    },
    {
        year: "2025",
        title: {
            en: "Weather Data Analysis & Prediction CLI",
            fi: "Säädatan analyysi ja ennustus komentorivityökalulla"
        },
        description: {
            en: "A technical analysis toolkit for visualising and predicting weather data using a command line interface, developed as part of BSc Computer Science Advanced Programming coursework.",
            fi: "Tekninen analyysityökalu säädatan visualisointiin ja ennustamiseen komentorivityökalulla, kehitetty osana tietojenkäsittelytieteen edistyneen ohjelmoinnin kurssityötä."
        },
        techStack: "C++",
        image: "assets/images/project1.png",
        note: {
            en: "Note: Repository and demo coming soon.",
            fi: "Huomautus: Repositorio ja demo tulossa pian."
        }
    },
    {
        year: "2025",
        title: {
            en: "DJ Application",
            fi: "DJ-sovellus"
        },
        description: {
            en: "An interactive DJ application developed as part of BSc Computer Science coursework, implementing audio mixing and playback functionality.",
            fi: "Interaktiivinen DJ-sovellus, kehitetty osana tietojenkäsittelytieteen kurssityötä, toteuttaen äänen miksaus- ja toistotoiminnallisuuden."
        },
        techStack: "C++",
        image: "assets/images/project2.png",
        note: {
            en: "Note: Repository and demo coming soon.",
            fi: "Huomautus: Repositorio ja demo tulossa pian."
        }
    },
    {
        year: "2025",
        title: {
            en: "Chatbot with NLP",
            fi: "Chatbot luonnollisen kielen käsittelyllä"
        },
        description: {
            en: "A chatbot developed across four stages: lists and string handling, dictionaries and regular expressions, file handling, and NLTK text pre-processing. Developed as part of BSc Computer Science coursework.",
            fi: "Chatbot kehitetty neljässä vaiheessa: listat ja merkkijonot, sanakirjat ja säännölliset lausekkeet, tiedostojen käsittely sekä NLTK-tekstin esikäsittely. Kehitetty osana tietojenkäsittelytieteen kurssityötä."
        },
        techStack: "Python, NLTK, Regular Expressions",
        image: "assets/images/project3.png",
        note: {
            en: "Note: Repository and demo coming soon.",
            fi: "Huomautus: Repositorio ja demo tulossa pian."
        }
    },
    {
        year: "2025",
        title: {
            en: "Event Manager Application",
            fi: "Tapahtumanhallintasovellus"
        },
        description: {
            en: "A deployable event management web application developed as part of BSc Computer Science coursework.",
            fi: "Käyttöönotettava tapahtumanhallintaverkkosovellus, kehitetty osana tietojenkäsittelytieteen kurssityötä."
        },
        techStack: "Web Development",
        image: "assets/images/project4.png",
        note: {
            en: "Note: Repository and demo coming soon.",
            fi: "Huomautus: Repositorio ja demo tulossa pian."
        }
    },
    {
        year: "2025",
        title: {
            en: "E-Learning Platform API",
            fi: "Verkko-oppimisalustan API"
        },
        description: {
            en: "A Django REST API backend for an e-learning platform, developed as part of BSc Computer Science coursework.",
            fi: "Django REST API -tausta verkko-oppimisalustalle, kehitetty osana tietojenkäsittelytieteen kurssityötä."
        },
        techStack: "Python, Django, REST API",
        image: "assets/images/project5.png",
        note: {
            en: "Note: Currently being graded. Repository and demo coming soon.",
            fi: "Huomautus: Parhaillaan arvioitavana. Repositorio ja demo tulossa pian."
        }
    },
    {
        year: "2024",
        title: {
            en: "Snooker Practice App",
            fi: "Snooker-harjoitussovellus"
        },
        description: {
            en: "In this project, I developed a virtual snooker table application that offers users an interactive and realistic environment to practice their snooker skills across three distinct modes.",
            fi: "Tässä projektissa kehitin virtuaalisen snooker-pöytäsovelluksen, joka tarjoaa käyttäjille interaktiivisen ja realistisen ympäristön snooker-taitojen harjoitteluun kolmessa eri tilassa."
        },
        techStack: "Javascript; Matter.js; HTML/CSS; p5.js",
        demoLink: "https://yuzi2021.github.io/snookerApp/snookerApp",
        repoLink: "https://github.com/yuzi2021/snookerApp",
        image: "assets/images/project1.png"
    },
    {
        year: "2024",
        title: {
            en: "AutoShareCalc App",
            fi: "AutoShareCalc-sovellus"
        },
        description: {
            en: "AutoShareCalc is a web-based Income Calculator designed to process financial data from Excel sheets and calculate adjusted income based on various percentage inputs.",
            fi: "AutoShareCalc on verkkopohjainen tulolaskuri, joka on suunniteltu käsittelemään taloudellisia tietoja Excel-taulukoista ja laskemaan mukautetun tulon erilaisten prosenttisyötteiden perusteella."
        },
        techStack: "HTML5/CSS3, JavaScript (ES6+), SheetJS for Excel file parsing",
        demoLink: "https://yuzi2021.github.io/AutoShareCalc",
        repoLink: "https://github.com/yuzi2021/AutoShareCalc",
        image: "assets/images/project2.png"
    },
    {
        year: "2024",
        title: {
            en: "Order List Generator App",
            fi: "Tilauslistan generointisovellus"
        },
        description: {
            en: "This simple web application was designed specifically for Pilke Espoonlahti to streamline their order management process. I created it for my mom to use at her work, aiming to make her daily tasks more efficient.",
            fi: "Tämä yksinkertainen web-sovellus suunniteltiin erityisesti Pilke Espoonlahdelle virtaviivaistamaan heidän tilausten hallintaprosessiaan. Loin sen äidilleni käytettäväksi hänen työssään, tavoitteena tehostaa hänen päivittäisiä tehtäviään."
        },
        techStack: "HTML/CSS, JavaScript, jsPDF",
        demoLink: "https://yuzi2021.github.io/order-app",
        repoLink: "https://github.com/yuzi2021/order-app",
        image: "assets/images/project3.png"
    },
    {
        year: "2024",
        title: {
            en: "Image Processing App",
            fi: "Kuvankäsittelysovellus"
        },
        description: {
            en: "I developed a real-time image processing application that captures live video from a webcam and allows users to apply various visual effects, color space conversions, and privacy filters.",
            fi: "Kehitin reaaliaikaisen kuvankäsittelysovelluksen, joka kaappaa live-videota webkamerasta ja mahdollistaa käyttäjille erilaisten visuaalisten efektien, väriavaruusmuunnosten ja yksityisyyssuodattimien käytön."
        },
        techStack: "Javascript; p5.js; face-api.js; HTML/CSS; WebGL",
        demoLink: "#",
        repoLink: "#",
        image: "assets/images/project4.png",
        note: {
            en: "Note: This project is currently being graded. I will share it when I have received my grade.",
            fi: "Huomautus: Tämä projekti on parhaillaan arvioitavana. Jaan sen, kun olen saanut arvosanan."
        }
    },
    {
        year: "2024",
        title: {
            en: "Data Protection in ECEC",
            fi: "Tietosuoja varhaiskasvatuksessa"
        },
        description: {
            en: "As part of my Computer Science studies, I collaborated on a thesis aimed at enhancing data protection practices in early childhood education settings. Building on this research, I've also authored a book that further explores these practices, which is set for publication soon.",
            fi: "Osana tietojenkäsittelytieteen opintojani osallistuin opinnäytetyöhön, jonka tavoitteena oli parantaa tietosuojakäytäntöjä varhaiskasvatusympäristöissä. Tämän tutkimuksen pohjalta olen myös kirjoittanut kirjan, joka syventyy näihin käytäntöihin ja on pian julkaistavana."
        },
        techStack: "Data Protection, Cybersecurity, App Evaluation, Database Management, Ethical Digitalisation",
        reportLink: "https://urn.fi/URN:NBN:fi:amk-2024052716087",
        bookLink: "https://www.canva.com/design/DAGDadVaJ04/oNvB9YX4JdYtHpU02RpLcg/view?utm_content=DAGDadVaJ04&utm_campaign=designshare&utm_medium=link&utm_source=editor",
        image: "assets/images/project5.png"
    },
    {
        year: "2023",
        title: {
            en: "Data Visualisation App",
            fi: "Tiedon visualisointisovellus"
        },
        description: {
            en: "In this project, I extended an existing visualization template by incorporating a waffle chart and a bubble chart to present complex data more effectively.",
            fi: "Tässä projektissa laajensin olemassa olevaa visualisointimallia lisäämällä siihen vohvelikaavion ja kuplakaavion esittääkseni monimutkaista dataa tehokkaammin."
        },
        techStack: "Javascript; HTML/CSS; p5.js; p5.dom.js; p5.collide2D.js; CSV Data Files",
        demoLink: "https://yuzi2021.github.io/dataVisApp",
        repoLink: "https://github.com/yuzi2021/dataVisApp",
        image: "assets/images/project6.png"
    },
    {
        year: "2021-2022",
        title: {
            en: "Edtech Transversal Competencies Integration",
            fi: "Laaja-alaisten osaamisalueiden integrointi opetusteknologiaan"
        },
        description: {
            en: "In my role as a Pedagogy Consultant at LingoAce, I led the development and reiteration of the Student Report V2.0, integrating dimensions from both the National Core Curriculum for General Upper Secondary Education and the Cambridge Life Competencies Framework.",
            fi: "Roolissani LingoAcen pedagogisena konsulttina johdin opiskelijaraportin V2.0:n kehittämistä ja uudistamista, yhdistäen ulottuvuuksia sekä lukion opetussuunnitelman perusteista että Cambridge Life Competencies -viitekehyksestä."
        },
        techStack: "Data Management and analysis, Learning Management System; Google Data Studio",
        image: "assets/images/project7.png"
    },
    {
        year: "2020",
        title: {
            en: "Improving Student Models with a Human-Machine Approach",
            fi: "Opiskelijamallien parantaminen ihminen-kone-lähestymistavalla"
        },
        description: {
            en: "In this data mining project, I replicated and enhanced student models from the Datashop repository. I compared machine-generated and hand-generated knowledge component (KC) models to identify the best predictors of student performance.",
            fi: "Tässä tiedonlouhintaprojektissa toistin ja paransin opiskelijamalleja Datashop-tietovarastosta. Vertasin koneellisesti tuotettuja ja käsin tehtyjä tietokomponentti (KC) -malleja tunnistaakseni parhaat opiskelijoiden suorituskyvyn ennustajat."
        },
        techStack: "Data Analysis and Processing, Learning Factor Analysis (LFA), Datashop Visualization Tools",
        reportLink: "https://docs.google.com/document/d/1BE0jIJIs7CaTikfF4NUK9zAGMatVUqbHs6R0D0kZB2I/edit?usp=sharing",
        image: "assets/images/project8.png"
    },
    {
        year: "2018-2019",
        title: {
            en: "Approaches to Text Modification",
            fi: "Tekstin muokkaamisen lähestymistavat"
        },
        description: {
            en: "This study sets two main objectives to address this research gap in CLIL materials design: to identify and to evaluate teachers' approaches to text modification.",
            fi: "Tämä tutkimus asettaa kaksi päätavoitetta CLIL-materiaalien suunnittelun tutkimusaukon täyttämiseksi: tunnistaa ja arvioida opettajien lähestymistapoja tekstin muokkaamiseen."
        },
        techStack: "Content and Language Integrated Learning, CLIL in Finland, materials adaptation, text modification, CLIL teaching materials",
        publicationLink: "https://doi.org/10.5294/laclil.2021.14.2.3",
        image: "assets/images/project9.png"
    },
    {
        year: "2017",
        title: {
            en: "Supporting ESL Students' Science Vocabulary Learning Using Corpus Tools",
            fi: "ESL-opiskelijoiden luonnontieteiden sanaston oppimisen tukeminen korpustyökaluilla"
        },
        description: {
            en: "In this project, I explored how two corpus analysis tools, VocabProfile and Text Inspector, can assist science teachers in supporting ESL students' vocabulary development in an English as a Medium of Instruction (EMI) setting.",
            fi: "Tässä projektissa tutkin, miten kaksi korpusanalyysityökalua, VocabProfile ja Text Inspector, voivat auttaa luonnontieteiden opettajia tukemaan ESL-opiskelijoiden sanaston kehitystä englanninkielisessä opetusympäristössä (EMI)."
        },
        techStack: "Corpus Analysis Tools, VocabProfile (VP Classic), Text Inspector",
        reportLink: "https://docs.google.com/document/d/11Zy9RAyQ3IguXfDDIDRc1kfK2SzUd9dJecv3TY27kEs/edit?usp=sharing",
        image: "assets/images/project10.png"
    }
];

function createProjectItem(project, lang) {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    
    item.innerHTML = `
        <div class="timeline-year-circle">
            <span class="timeline-year">${project.year}</span>
            <div class="timeline-circle"></div>
        </div>
        <div class="timeline-content-wrapper">
            <div class="timeline-content">
                <img src="${project.image}" alt="${project.title[lang]}">
                <h3>${project.title[lang]}</h3>
            </div>
            <div class="timeline-description">
                <ul class="project-description">
                    <li>${project.description[lang]}</li>
                    <li>${projectTranslations[lang].techStack} <span class="tech-stack">${project.techStack}</span></li>
                    ${project.note ? `<li><em>${project.note[lang]}</em></li>` : ''}
                </ul>
                <div class="project-links">
                    ${project.demoLink ? `<a href="${project.demoLink}" target="_blank" class="project-link live-demo-link"><i class="fas fa-play-circle"></i> ${projectTranslations[lang].liveDemo}</a>` : ''}
                    ${project.repoLink ? `<a href="${project.repoLink}" target="_blank" class="project-link github-link"><i class="fab fa-github"></i> ${projectTranslations[lang].githubRepo}</a>` : ''}
                    ${project.reportLink ? `<a href="${project.reportLink}" target="_blank" class="project-link report-link"><i class="fas fa-file-alt"></i> ${projectTranslations[lang].report}</a>` : ''}
                    ${project.publicationLink ? `<a href="${project.publicationLink}" target="_blank" class="project-link publication-link"><i class="fas fa-book"></i> ${projectTranslations[lang].publication}</a>` : ''}
                    ${project.bookLink ? `<a href="${project.bookLink}" target="_blank" class="project-link book-link"><i class="fas fa-book-open"></i> ${projectTranslations[lang].publication}</a>` : ''}
                </div>
            </div>
        </div>
    `;
    
    return item;
}
// ... (rest of the code remains the same)
function populateProjects(lang) {
    const timeline = document.querySelector('.project-timeline-content-layout');
    timeline.innerHTML = ''; // Clear existing content
    projectsData.forEach(project => {
        const item = createProjectItem(project, lang);
        timeline.appendChild(item);
    });
}

function translatePageSpecificContent(lang) {
    // Translate project-specific elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (projectTranslations[lang] && projectTranslations[lang][key]) {
            element.textContent = projectTranslations[lang][key];
        }
    });

    // Repopulate projects with the new language
    populateProjects(lang);
}

document.addEventListener('DOMContentLoaded', function() {
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    populateProjects(preferredLanguage);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    // Observe all timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
});


// Add this function to handle language changes
function handleLanguageChange(lang) {
    translatePageSpecificContent(lang);
}

// Update the DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    handleLanguageChange(preferredLanguage);

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    // Observe all timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });

    // Add event listener for language changes
    document.addEventListener('languageChanged', function(e) {
        handleLanguageChange(e.detail.language);
    });
});


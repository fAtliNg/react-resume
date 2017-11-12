import {put, takeLatest} from 'redux-saga/effects';
import {setHomePageData, setAboutMePageData, setSkillsPageData, setExperiencePageData, setCertificatesPageData} from "../actions/actions";

// HOME PAGE
export function* fetchHomePageData() {
    try {
        yield put(setHomePageData({
            header: 'HELLO',
            typists: [
                'I am Denisenko Sergey',
                'I am a developer',
                'I am a football player'
            ]
        }));
    } catch (e) {
        console.log(e);
    }
}

// ABOUT ME PAGE
export function* fetchAboutMePageData() {
    try {
        yield put(setAboutMePageData({
            personalInfo: {
                Name: 'Denisenko Sergey',
                Age: '20 years',
                City: 'Rostov-on-Don',
                Job: 'Developer',
                Phone: '+7(918)-503-65-50',
                Email: 'korgeflus@mail.ru'
            },
            hobby: 'I love to play football.',
            quote: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
            photo: `static/img/photo.jpg`
        }));
    } catch (e) {
        console.log(e);
    }
}

// SKILLS PAGE
export function* fetchSkillsPageData() {
    try {
        yield put(setSkillsPageData({
            skills: {
                'JAVA': [
                    'core',
                    'collections',
                    'multithredings',
                    'hibernet',
                    'JUnit',
                    'Maven'
                ],
                'JavaScript': [
                    'React',
                    'Redux',
                    'Redux Form',
                    'Saga',
                    'Material-UI'
                ],
                'Python': [
                    'Flask',
                    'Selenium',
                    'Unittest'
                ],
                'Database': [
                    'SQLite',
                    'MySQL',
                    'PostgreSQL'
                ],
                'OS/Servers': [
                    'Windows',
                    'Linux',
                    'apache',
                    'nginx'
                ],
                'Continuous Integration': [
                    'TeamCity'
                ],
                'Other': [
                    'OOP',
                    'Agile',
                    'Scrum',
                    'Git',
                    'Jira'
                ]
            }
        }));
    } catch (e) {
        console.log(e);
    }
}

// EXPERIENCE PAGE
export function* fetchExperiencePageData() {
    try {
        yield put(setExperiencePageData({
            firms: [{
                period: '2015 – present',
                company: 'ФГАНУ НИИ "СПЕЦВУЗАВТОМАТИКА"',
                position: 'Software Developer'
            }]
        }));
    } catch (e) {
        console.log(e);
    }
}

// CERTIFICATES PAGE
export function* fetchCertificatesPageData() {
    try {
        yield put(setCertificatesPageData({
            certificates: [
                `static/img/cert1.jpg`,
                `static/img/cert2.jpg`,
                `static/img/cert3.jpg`,
                `static/img/cert4.jpg`,
                `static/img/cert5.jpg`
            ]
        }));
    } catch (e) {
        console.log(e);
    }
}



export default function* root() {
    yield [
        // HOME PAGE
        takeLatest('FETCH.HOMEPAGE.DATA', fetchHomePageData),

        // ABOUT ME PAGE
        takeLatest('FETCH.ABOUTMEPAGE.DATA', fetchAboutMePageData),

        // SKILLS PAGE
        takeLatest('FETCH.SKILLSPAGE.DATA', fetchSkillsPageData),

        // EXPERIENCE PAGE
        takeLatest('FETCH.EXPERIENCEPAGE.DATA', fetchExperiencePageData),

        // CERTIFICATES PAGE
        takeLatest('FETCH.CERTIFICATESPAGE.DATA', fetchCertificatesPageData),
    ]
}
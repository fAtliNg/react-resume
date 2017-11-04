import {put, takeLatest} from 'redux-saga/effects';

// HOME PAGE
export function* fetchHomePageData() {
    try {
        yield put({
            type: 'SET.HOMEPAGE.DATA',
            payload: {
                header: 'HELLO',
                typists: [
                    'I am Denisenko Sergey',
                    'I am a developer',
                    'I am a football player'
                ]
            }
        });
    } catch (e) {
        console.log(e);
    }
}

// SKILLS PAGE
export function* fetchSkillsPageData() {
    try {
        yield put({
            type: 'SET.SKILLSPAGE.DATA',
            payload: {
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
            }
        });
    } catch (e) {
        console.log(e);
    }
}

export default function* root() {
    yield [
        // HOME PAGE
        takeLatest('FETCH.HOMEPAGE.DATA', fetchHomePageData),

        // SKILLS PAGE
        takeLatest('FETCH.SKILLSPAGE.DATA', fetchSkillsPageData),
    ]
}
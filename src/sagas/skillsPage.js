import { put } from 'redux-saga/effects';

import { setSkillsPageData } from '../actions';

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
                    'Maven',
                ],
                'JavaScript': [
                    'React',
                    'Redux',
                    'Redux Form',
                    'Saga',
                    'Material-UI',
                ],
                'Python': [
                    'Flask',
                    'Selenium',
                    'Unittest',
                ],
                'Database': [
                    'SQLite',
                    'MySQL',
                    'PostgreSQL',
                ],
                'OS/Servers': [
                    'Windows',
                    'Linux',
                    'apache',
                    'nginx',
                ],
                'Continuous Integration': [
                    'TeamCity',
                ],
                'Other': [
                    'OOP',
                    'Agile',
                    'Scrum',
                    'Git',
                    'Jira',
                ]
            }
        }));
    } catch (e) {
        console.log(e);
    }
};

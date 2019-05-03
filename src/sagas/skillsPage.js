import { put } from 'redux-saga/effects';

import { setSkillsPageData } from '../actions';

export function* fetchSkillsPageData() {
    try {
        yield put(setSkillsPageData({
            skills: {
                'JavaScript': [
                    'React',
                    'Redux',
                    'Redux Form',
                    'Saga',
                    'Material-UI',
                    'Antd',
                    'TS',
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

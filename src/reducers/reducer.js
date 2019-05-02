// TODO:: вообще все reducers кажутся одинаковыми, поэтому возможно стоит сделать механизм генерации дня них
import { combineReducers } from 'redux'

import homePage from './homePage'
import aboutMePage from './aboutMePage'
import skillsPage from './skillsPage'
import experiencePage from './experiencePage'
import certificatesPage from './certificatesPage'

export default combineReducers({
    homePage: homePage,
    aboutMePage: aboutMePage,
    skillsPage: skillsPage,
    experiencePage: experiencePage,
    certificatesPage: certificatesPage,
});

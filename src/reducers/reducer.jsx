import { combineReducers } from 'redux'
import homePage from './homePage'
import aboutMePage from './aboutMePage'
import skillsPage from './skillsPage'
import experiencePage from './experiencePage'

export default combineReducers({
    homePage: homePage,
    aboutMePage: aboutMePage,
    skillsPage: skillsPage,
    experiencePage: experiencePage
});
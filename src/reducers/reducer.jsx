import { combineReducers } from 'redux'
import homePage from './homePage'
import aboutMePage from './aboutMePage'
import skillsPage from './skillsPage'

export default combineReducers({
    homePage: homePage,
    aboutMePage: aboutMePage,
    skillsPage: skillsPage
});
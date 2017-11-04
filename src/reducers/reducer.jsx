import { combineReducers } from 'redux'
import homePage from './homePage'
import skillsPage from './skillsPage'

export default combineReducers({
    homePage: homePage,
    skillsPage: skillsPage
});
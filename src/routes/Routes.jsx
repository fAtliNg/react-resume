import React from 'react'
import {Router, Route, IndexRoute, hashHistory, IndexRedirect} from 'react-router';
import App from '../components/App/App';
import HomePage from '../containers/HomePage/HomePage';
import AboutMePage from '../containers/AboutMePage/AboutMePage';
import SkillsPage from '../containers/SkillsPage/SkillsPage';
import ExperiencePage from '../containers/ExperiencePage/ExperiencePage';
import CertificatesPage from '../containers/CertificatesPage/CertificatesPage';
import ContactPage from '../containers/ContactPage/ContactPage';

import { ROUTES } from '../constants/routes';

const Routes = () => {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRedirect to={ROUTES.HOME}/>
                <Route path={ROUTES.HOME}>
                    <IndexRoute component={HomePage}/>
                </Route>
                <Route path={ROUTES.ABOUT_ME}>
                    <IndexRoute component={AboutMePage}/>
                </Route>
                <Route path={ROUTES.SKILLS}>
                    <IndexRoute component={SkillsPage}/>
                </Route>
                <Route path={ROUTES.EXPERIENCE}>
                    <IndexRoute component={ExperiencePage}/>
                </Route>
                <Route path={ROUTES.CERTIFICATES}>
                    <IndexRoute component={CertificatesPage}/>
                </Route>
                <Route path={ROUTES.CONTACT}>
                    <IndexRoute component={ContactPage}/>
                </Route>
            </Route>
            {/*<Redirect from='/*' to='/404'/>*/}
        </Router>
    )
};

export default Routes;
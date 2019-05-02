import React, {Component} from 'react';
import { withRouter } from 'react-router'

import {Drawer, Avatar} from 'material-ui';
import {grey900} from 'material-ui/styles/colors';

import MenuItem from './MenuItem';

import { ROUTES } from '../../constants/routes';

class Navigation extends Component {
    navigationStyle = {
        backgroundColor: grey900
    };

    render() {
        const pathname = this.props.location.pathname;

        return (
            <div>
                <Drawer width={200} open={true} containerStyle={this.navigationStyle}>
                    <Avatar size={200} style={{overflow: "hidden"}} src={`${ROUTES.STATIC}/img/avatar.jpg`}/>
                    <MenuItem
                        url={ROUTES.HOME}
                        icon="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
                        label="Home"
                        active={pathname === ROUTES.HOME}
                    />
                    <MenuItem
                        url={ROUTES.ABOUT_ME}
                        icon="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
                        label="About me"
                        active={pathname === ROUTES.ABOUT_ME}
                    />
                    <MenuItem
                        url={ROUTES.SKILLS}
                        icon="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
                        label="Skills"
                        active={pathname === ROUTES.SKILLS}
                    />
                    <MenuItem
                        url={ROUTES.EXPERIENCE}
                        icon="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"
                        label="Experience"
                        active={pathname === ROUTES.EXPERIENCE}
                    />
                    <MenuItem
                        url={ROUTES.CERTIFICATES}
                        icon="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"
                        label="Certificates"
                        active={pathname === ROUTES.CERTIFICATES}
                    />
                    {/*<MenuItem*/}
                        {/*url="/contact/"*/}
                        {/*icon="M21 8V7l-3 2-3-2v1l3 2 3-2zm1-5H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm8-6h-8V6h8v6z"*/}
                        {/*label="Contact"*/}
                        {/*active={pathname === ROUTES.CONTACT}*/}
                    {/*/>*/}
                </Drawer>
            </div>
        );
    }
}

export default withRouter(Navigation);
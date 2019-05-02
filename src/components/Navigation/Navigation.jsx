import React, {Component} from 'react';

import {Drawer, Avatar} from 'material-ui';
import {grey900} from 'material-ui/styles/colors';

import MenuItem from './MenuItem';

import { ROUTES, ICONS } from '../../constants';

class Navigation extends Component {
    navigationStyle = {
        backgroundColor: grey900
    };

    render() {
        return (
            <div>
                <Drawer width={200} open={true} containerStyle={this.navigationStyle}>
                    <Avatar size={200} style={{overflow: "hidden"}} src={`${ROUTES.STATIC}/img/avatar.jpg`}/>
                    <MenuItem
                        url={ROUTES.HOME}
                        icon={ICONS.HOME}
                        label="Home"
                    />
                    <MenuItem
                        url={ROUTES.ABOUT_ME}
                        icon={ICONS.ABOUT_ME}
                        label="About me"
                    />
                    <MenuItem
                        url={ROUTES.SKILLS}
                        icon={ICONS.SKILLS}
                        label="Skills"
                    />
                    <MenuItem
                        url={ROUTES.EXPERIENCE}
                        icon={ICONS.EXPERIENCE}
                        label="Experience"
                    />
                    <MenuItem
                        url={ROUTES.CERTIFICATES}
                        icon={ICONS.CERTIFICATES}
                        label="Certificates"
                    />
                    {/*<MenuItem*/}
                        {/*url="/contact/"*/}
                        {/*icon={ICONS.CONTACT}*/}
                        {/*label="Contact"*/}
                    {/*/>*/}
                </Drawer>
            </div>
        );
    }
}

export default Navigation;

import React, {Component} from 'react';
import {withRouter, hashHistory} from 'react-router'

import {FlatButton, Divider, SvgIcon} from 'material-ui';
import {
    grey300,
    grey800,
    grey900,
    deepOrange400
} from 'material-ui/styles/colors';

class MenuItem extends Component {
    redirect = (url) => {
        hashHistory.push(url);
    };

    menuItemStyle = {
        width: "100%",
        height: 60,
        lineHeight: null
    };
    menuItemLabelStyle = {
        color: grey300
    };

    dividerStyle = {
        backgroundColor: grey800,
        marginTop: 0,
    };

    render() {
        const {url, label, icon, location} = this.props;
        return (
            <div>
                { location.pathname === url &&
                    <div style={{zIndex: 2, position: "absolute", right: 0, width: 4, height: 62, backgroundColor: deepOrange400}}/>
                }

                <Divider style={this.dividerStyle}/>
                <FlatButton hoverColor={grey900} style={this.menuItemStyle} onClick={() => {this.redirect(url)}}>
                    <SvgIcon style={this.menuItemLabelStyle}>
                        <path d={icon}/>
                    </SvgIcon>
                    <div style={this.menuItemLabelStyle}>
                        {label}
                    </div>
                </FlatButton>
                <Divider style={this.dividerStyle}/>
            </div>
        );
    }
}

export default withRouter(MenuItem);
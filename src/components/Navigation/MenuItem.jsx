import React, {Component} from 'react';
import {hashHistory} from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import SvgIcon from 'material-ui/SvgIcon';
import {
    grey300,
    grey800,
    grey900,
    deepOrange400
} from 'material-ui/styles/colors';

class MenuItem extends Component {
    redirect = (url) => {
        console.log(url);
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
        const {url, label, icon, active} = this.props;
        return (
            <div>
                { active &&
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

export default MenuItem;
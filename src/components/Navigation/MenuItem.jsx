import React, { Component } from 'react';
import { withRouter, hashHistory } from 'react-router';

import { FlatButton, Divider, SvgIcon } from 'material-ui';
import { grey900 } from 'material-ui/styles/colors';

import * as styles from './styles';

class MenuItem extends Component {
    redirect = (url) => {
        hashHistory.push(url);
    }

    render() {
        const { url, label, icon, location } = this.props;
        return (
            <div>
                {location.pathname === url && <div style={styles.active}/>}
                <Divider style={styles.dividerStyle}/>
                <FlatButton hoverColor={grey900} style={styles.menuItemStyle} onClick={() => {this.redirect(url)}}>
                    <SvgIcon style={styles.menuItemLabelStyle}>
                        <path d={icon}/>
                    </SvgIcon>
                    <div style={styles.menuItemLabelStyle}>
                        {label}
                    </div>
                </FlatButton>
                <Divider style={styles.dividerStyle}/>
            </div>
        );
    }
}

export default withRouter(MenuItem);

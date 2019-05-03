import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { hashHistory } from 'react-router';

import { Dialog } from 'material-ui';
import { Row, Col } from 'react-flexbox-grid';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import { grey200 } from 'material-ui/styles/colors';

import { ROUTES } from '../../constants';

import * as styles from './styles';

class DialogCustom extends Component {
    onClose = () => {
        hashHistory.push(ROUTES.HOME);
    }

    renderTitle = title => {
        return (
            <Row middle="xs" style={styles.row}>
                <Col lg={4}>
                    {title}
                </Col>
                <Col lg={7}/>
                <Col lg={1} style={styles.col}>
                    <IconButton tooltip="Close" onClick={this.onClose}>
                        <NavigationClose color={grey200}/>
                    </IconButton>
                </Col>
            </Row>
        );
    }

    render() {
        const { title, body } = this.props;
        return (
            <Dialog
                {...this.props}
                title={this.renderTitle(title)}
                modal={true}
                open={true}
                style={styles.dialog}
                bodyStyle={styles.dialogBody}
                autoScrollBodyContent={true}
            >
                {body}
            </Dialog>
        );
    }
}

export default withRouter(DialogCustom);

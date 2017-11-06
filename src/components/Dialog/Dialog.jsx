import React, {Component} from 'react';
import {withRouter} from 'react-router'
import {hashHistory} from 'react-router';
import Dialog from 'material-ui/Dialog';
import {Row, Col} from 'react-flexbox-grid';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import {
    grey200,
    grey900
} from 'material-ui/styles/colors';

class DialogCustom extends Component {
    renderTitle = (title) => {
        return <Row middle="xs" style={{backgroundColor: grey900, color: grey200, padding: "0px 24px 0px"}}>
            <Col lg={4}>
                {title}
            </Col>
            <Col lg={7}/>
            <Col lg={1} style={{textAlign: "right"}}>
                <IconButton tooltip="Close" onClick={() => {hashHistory.push("home")}}>
                    <NavigationClose color={grey200}/>
                </IconButton>
            </Col>
        </Row>;
    };

    render() {
        const {title, body} = this.props;
        return (
            <Dialog
                title={this.renderTitle(title)}
                modal={true}
                open={true}
                style={{zIndex: null, left: 100}}
                bodyStyle={{backgroundColor: grey200, overflow: "hidden"}}
                autoScrollBodyContent={true}
            >
                {body}
            </Dialog>
        );
    }
}

export default withRouter(DialogCustom);
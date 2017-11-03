import React, {Component} from 'react';
import {withRouter} from 'react-router'
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Dialog from '../../components/Dialog/Dialog';
import Divider from 'material-ui/Divider';
import {
    grey900
} from 'material-ui/styles/colors';

class ExperiencePage extends Component {
    renderExperienceLine = (key, value) => {
        return <Row>
            <Col lg={3} style={{fontWeight: "bold", marginBottom: 12}}>
                {key}:
            </Col>
            <Col lg={9}>
                {value}
            </Col>
        </Row>
    };
    renderBody = () => {
        return <Grid fluid style={{marginTop: "2rem", color: grey900}}>
            <Row>
                <Col lg={12}>
                    2015 – present
                    <Divider style={{marginBottom: 12}}/>
                    {this.renderExperienceLine('Company', 'ФГАНУ НИИ "Спецвузавтоматика"')}
                    {this.renderExperienceLine('Position', 'Software Developer')}
                    {/*{this.renderExperienceLine('Description', '12123')}*/}
                    {/*{this.renderExperienceLine('Project role', '12123')}*/}
                </Col>
            </Row>
        </Grid>
    };

    render() {
        const {} = this.props;
        return (
            <div>
                <Dialog title="Experience" body={this.renderBody()}/>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    dispatch => ({})
)(withRouter(ExperiencePage));
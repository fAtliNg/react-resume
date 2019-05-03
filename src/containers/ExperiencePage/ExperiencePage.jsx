import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';

import { Grid, Row, Col } from 'react-flexbox-grid';
import Divider from 'material-ui/Divider';
import { grey900 } from 'material-ui/styles/colors';

import Dialog from '../../components/Dialog/Dialog';

import { fetchExperiencePageData, clearExperiencePageData } from '../../actions';

import * as styles from './styles';

class ExperiencePage extends Component {
    componentDidMount() {
        this.props.fetchExperiencePageData();
    }

    componentWillUnmount() {
        this.props.clearExperiencePageData();
    }

    renderExperienceLine = (key, value) => (
        <Row>
            <Col lg={3} style={styles.col}>
                {key}:
            </Col>
            <Col lg={9}>
                {value}
            </Col>
        </Row>
    );

    renderBody = firms => (
        <Grid fluid style={styles.grid}>
            {firms.map(firm => (
                <Row key={firm}>
                    <Col lg={12}>
                        {firm.period}
                        <Divider style={styles.divider}/>
                        {this.renderExperienceLine('Company', firm.company)}
                        {this.renderExperienceLine('Position', firm.position)}
                    </Col>
                </Row>
            ))}
        </Grid>
    );

    render() {
        const { firms } = this.props.experiencePage;
        return (
            <Dialog title="Experience" body={this.renderBody(firms)}/>
        );
    }
}

export default connect(
    state => ({
        experiencePage: state.experiencePage,
    }),
    dispatch => ({
        fetchExperiencePageData: () => dispatch(fetchExperiencePageData()),
        clearExperiencePageData: () => dispatch(clearExperiencePageData()),
    })
)(withRouter(ExperiencePage));

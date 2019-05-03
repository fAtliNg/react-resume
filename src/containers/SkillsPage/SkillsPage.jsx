import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';

import { Grid, Row, Col } from 'react-flexbox-grid';

import Dialog from '../../components/Dialog/Dialog';

import { fetchSkillsPageData, clearSkillsPageData } from '../../actions';

import * as styles from './styles';

class SkillsPage extends Component {
    componentDidMount() {
        this.props.fetchSkillsPageData();
    }

    componentWillUnmount() {
        this.props.clearSkillsPageData();
    }

    renderBody = () => {
        const { skills } = this.props.skillsPage;
        return (
            <Grid fluid style={styles.grid}>
                {Object.keys(skills).map(key => (
                    <Row key={key}>
                        <Col lg={4} style={styles.col}>
                            {key}:
                        </Col>
                        <Col lg={8}>
                            {skills[key].join(', ')}
                        </Col>
                    </Row>
                ))}
            </Grid>
        );
    };

    render() {
        return (
            <Dialog title="Skills" body={this.renderBody()}/>
        );
    }
}

export default connect(
    state => ({
        skillsPage: state.skillsPage,
    }),
    dispatch => ({
        fetchSkillsPageData: () => dispatch(fetchSkillsPageData()),
        clearSkillsPageData: () => dispatch(clearSkillsPageData()),
    })
)(withRouter(SkillsPage));

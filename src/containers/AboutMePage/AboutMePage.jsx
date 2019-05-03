import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';

import { Grid, Row, Col } from 'react-flexbox-grid';
import Divider from 'material-ui/Divider';

import Dialog from '../../components/Dialog/Dialog';

import { fetchAboutMePageData, clearAboutMePageData } from '../../actions';

import * as styles from './styles';

class AboutMePage extends Component {
    componentDidMount() {
        this.props.fetchAboutMePageData();
    }

    componentWillUnmount() {
        this.props.clearAboutMePageData();
    }

    renderPersonInfo = () => {
        const { personalInfo } = this.props.aboutMePage;
        return Object.keys(personalInfo).map(key => (
            <Row key={key}>
                <Col lg={3} style={styles.personInfo}>
                    {key}:
                </Col>
                <Col lg={9}>
                    {personalInfo[key]}
                </Col>
            </Row>
        ));
    };

    renderHobby = () => (
        <div style={styles.hobbyBlock}>
            <div style={styles.hobbyLabel}>Hobby:</div><br/>
            {this.props.aboutMePage.hobby}
        </div>
    );

    renderQuote = () => (
        <div>
            <div style={styles.quote}>Favorite quote:</div><br/>
            {this.props.aboutMePage.quote}
        </div>
    );

    renderPhoto = () => (
        <img src={this.props.aboutMePage.photo} style={styles.photo} alt="Avatar"/>
    );

    renderBody = () => {
        return (
            <Grid fluid style={styles.grid}>
                <Row>
                    <Col lg={4}>
                        {this.renderPersonInfo()}
                        <Divider style={styles.divider}/>
                        {this.renderHobby()}
                        <Divider style={styles.divider}/>
                        {this.renderQuote()}
                    </Col>
                    <Col lg={8}>
                        {this.renderPhoto()}
                    </Col>
                </Row>
            </Grid>
        );
    };

    render() {
        return (
            <Dialog title="About Me" body={this.renderBody()}/>
        );
    }
}

export default connect(
    state => ({
        aboutMePage: state.aboutMePage,
    }),
    dispatch => ({
        fetchAboutMePageData: () => dispatch(fetchAboutMePageData()),
        clearAboutMePageData: () => dispatch(clearAboutMePageData()),
    }),
)(withRouter(AboutMePage));

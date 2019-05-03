import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';

import { Grid, Row, Col } from 'react-flexbox-grid';
import Divider from 'material-ui/Divider';
import { grey900 } from 'material-ui/styles/colors';

import Dialog from '../../components/Dialog/Dialog';

import { fetchAboutMePageData, clearAboutMePageData } from '../../actions';

class AboutMePage extends Component {
    componentDidMount() {
        this.props.fetchAboutMePageData();
    }

    componentWillUnmount() {
        this.props.clearAboutMePageData();
    }

    renderPersonInfo = () => {
        const {personalInfo} = this.props.aboutMePage;
        return Object.keys(personalInfo).map(key => (
            <Row key={key}>
                <Col lg={3} style={{fontWeight: "bold", marginBottom: 12}}>
                    {key}:
                </Col>
                <Col lg={9}>
                    {personalInfo[key]}
                </Col>
            </Row>

        ));
    };

    renderHobby = () => (
        <div style={{marginBottom: 12}}>
            <div style={{fontWeight: "bold"}}>Hobby:</div><br/>
            {this.props.aboutMePage.hobby}
        </div>
    );

    renderQuote = () => (
        <div>
            <div style={{fontWeight: "bold"}}>Favorite quote:</div><br/>
            {this.props.aboutMePage.quote}
        </div>
    );

    renderPhoto = () => (
        <img src={this.props.aboutMePage.photo} style={{height: 600}}/>
    );

    renderBody = () => {
        return <Grid fluid style={{marginTop: "2rem", color: grey900}}>
            <Row>
                <Col lg={4}>
                    {this.renderPersonInfo()}
                    <Divider style={{backgroundColor: grey900, marginBottom: 30}}/>
                    {this.renderHobby()}
                    <Divider style={{backgroundColor: grey900, marginBottom: 30}}/>
                    {this.renderQuote()}
                </Col>
                <Col lg={8}>
                    {this.renderPhoto()}
                </Col>
            </Row>
        </Grid>
    };

    render() {
        const {} = this.props;
        return (<Dialog title="About Me" body={this.renderBody()}/>)
    }
}

export default connect(
    state => ({
        aboutMePage: state.aboutMePage
    }),
    dispatch => ({
        fetchAboutMePageData: () => dispatch(fetchAboutMePageData()),
        clearAboutMePageData: () => dispatch(clearAboutMePageData())
    })
)(withRouter(AboutMePage));
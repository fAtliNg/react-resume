import React, {Component} from 'react';
import {withRouter, hashHistory} from 'react-router'
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Dialog from '../../components/Dialog/Dialog';
import Divider from 'material-ui/Divider';
import {
    grey900
} from 'material-ui/styles/colors';

class ResumePage extends Component {
    renderResumeLine = (key, value) => {
        return <Row>
            <Col lg={4} style={{fontWeight: "bold", marginBottom: 12}}>
                {key}:
            </Col>
            <Col lg={8}>
                {value}
            </Col>
        </Row>
    };
    renderBody = () => {
        return <Grid fluid style={{marginTop: "2rem", color: grey900}}>
            <Row>
                <Col lg={12}>
                    {this.renderResumeLine('C++', 'Qt, boost, STL')}
                    {this.renderResumeLine('Java', 'Maven, Jetty, JUnit')}
                    {this.renderResumeLine('Python', 'Flask, Django, Selenium, Unittest')}
                    {this.renderResumeLine('Information Security', 'SQL Injection, XSS, same-origin policy, CSRF')}
                    {this.renderResumeLine('DATABASE', 'SQLite, MySQL, MongoDB, PostgreSQL')}
                    {this.renderResumeLine('WEB', 'JSON, XML, HTML, CSS, MVC, AJAX')}
                    {this.renderResumeLine('OS/Servers', 'Windows, Linux, Apache, nginx')}
                    {this.renderResumeLine('Continuous Integration', 'TeamCity')}
                    {this.renderResumeLine('Other', 'OOP, Agile, SCRUM, Git, Jira, English')}
                </Col>
            </Row>
        </Grid>
    };

    render() {
        const {} = this.props;
        return (
            <div>
                <Dialog title="Skills" body={this.renderBody()}/>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    dispatch => ({})
)(withRouter(ResumePage));
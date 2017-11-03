import React, {Component} from 'react';
import {withRouter} from 'react-router'
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Dialog from '../../components/Dialog/Dialog';
import Divider from 'material-ui/Divider';
import Y3ztIf9ai5U from '../../images/Y3ztIf9ai5U.jpg';
import {
    grey900
} from 'material-ui/styles/colors';

class AboutMePage extends Component {
    renderAboutMeLine = (key, value) => {
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
                <Col lg={4}>
                    {this.renderAboutMeLine('Name', 'Denisenko Sergey')}
                    {this.renderAboutMeLine('Age', '25 years')}
                    {this.renderAboutMeLine('City', 'Rostov-on-Don')}
                    {this.renderAboutMeLine('Job', 'Developer')}
                    {this.renderAboutMeLine('Phone', '(+7)918-503-65-50')}
                    {this.renderAboutMeLine('Email', 'korgeflus@mail.ru')}
                    <Divider style={{backgroundColor: grey900, marginBottom: 30}}/>
                    <div style={{fontWeight: "bold"}}>Hobby:</div><br/>
                    <div style={{marginBottom: 12}}>I love to play football.</div>
                    <Divider style={{backgroundColor: grey900, marginBottom: 30}}/>
                    <div style={{fontWeight: "bold"}}>Favorite quote:</div><br/>
                    Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.
                </Col>
                <Col lg={8}>
                    <img src={Y3ztIf9ai5U} style={{height:600  }}/>
                </Col>
            </Row>
        </Grid>
    };

    render() {
        const {} = this.props;
        return (
            <div>
                <Dialog title="About Me" body={this.renderBody()}/>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    dispatch => ({})
)(withRouter(AboutMePage));
import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';

import {
    grey200,
    grey900,
} from 'material-ui/styles/colors';

import Typists from '../../components/Typists/Typists';

import { fetchHomePageData, clearHomePageData } from '../../actions';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lineId: 0
        };
    }

    backgroundStyle = {
        position: "fixed",
        height: "100%",
        width: "100%",
        left: 200,
        top: 0,
        float: "left",
        backgroundSize: "cover",
        backgroundColor: grey900,
        opacity: 0.4
    };

    componentWillMount() {
        this.props.fetchHomePageData();
    }

    componentWillUnmount() {
        this.props.clearHomePageData();
    }

    render() {
        const {homePage} = this.props;
        return (
            <div>
                <div style={this.backgroundStyle}/>
                <div style={{position: "fixed", height: "100%", width: "100%", textAlign: "center", left: 0, right: 0, marginLeft: 100}}>
                    <div style={{fontSize: 180, color: grey200, margin: "auto"}}>
                        <b>{homePage.header}</b>
                    </div>
                    <Typists typists={homePage.typists}/>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        homePage: state.homePage
    }),
    dispatch => ({
        fetchHomePageData: () => dispatch(fetchHomePageData()),
        clearHomePageData: () => dispatch(clearHomePageData())
    })
)(withRouter(HomePage));
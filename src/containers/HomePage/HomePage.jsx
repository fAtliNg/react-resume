import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';

import Typists from '../../components/Typists/Typists';

import { fetchHomePageData, clearHomePageData } from '../../actions';

import * as styles from './styles';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lineId: 0,
        };
    }

    componentDidMount() {
        this.props.fetchHomePageData();
    }

    componentWillUnmount() {
        this.props.clearHomePageData();
    }

    render() {
        const { homePage } = this.props;
        return (
            <div>
                <div style={styles.backgroundStyle}/>
                <div style={styles.typist}>
                    <div style={styles.header}>
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
        homePage: state.homePage,
    }),
    dispatch => ({
        fetchHomePageData: () => dispatch(fetchHomePageData()),
        clearHomePageData: () => dispatch(clearHomePageData()),
    })
)(withRouter(HomePage));

import React, { Component } from 'react';
import { withRouter, hashHistory } from 'react-router'
import { connect } from 'react-redux';

class ContactPage extends Component {
    render() {
        const {} = this.props;

        return (
            <div>
                <h1>ContactPage</h1>
            </div>
        )
    }
}

export default connect(
    state => ({
    }),
    dispatch => ({
    })
)(withRouter(ContactPage));
import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';

class ContactPage extends Component {
    render() {
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
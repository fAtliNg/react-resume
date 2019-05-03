import React, { Component } from 'react';
import Typist from 'react-typist';

import * as styles from './styles';

class Typists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typistId: 0
        };
    }

    onLineTyped = () => {
        this.setState({typistId: this.state.typistId+1});
    }

    render() {
        const { typists } = this.props;
        if (typists.length === 0) return null;
        return (
            <Typist cursor={{show: false}} onLineTyped={this.onLineTyped}>
                <b style={styles.typist}>{typists[this.state.typistId]}</b>
            </Typist>
        );
    }
}

export default Typists;

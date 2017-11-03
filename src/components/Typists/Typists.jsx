import React, {Component} from 'react';
import Typist from 'react-typist';
import {
    grey200
} from 'material-ui/styles/colors';

class Typists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typistId: 0
        };
    };

    render() {
        const {typists} = this.props;
        if (typists.length == 0) return null;
        return (
            <Typist cursor={{show: false}} onLineTyped={() => {
                this.setState({typistId: this.state.typistId+1});
            }}>
                <b style={{fontSize: 60, color: grey200}}>{typists[this.state.typistId]}</b>
            </Typist>
        );
    };
}

export default Typists;
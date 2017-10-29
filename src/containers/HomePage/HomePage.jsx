import React, {Component} from 'react';
import {withRouter} from 'react-router'
import {connect} from 'react-redux';
import Typist from 'react-typist';
import {
    grey200,
    grey900,
} from 'material-ui/styles/colors';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lineId: 0
        };
    }

    backgroundStyle = {
        width: "100%",
        position: "fixed",
        left: 200,
        top: 0,
        float: "left",
        backgroundSize: "cover"
    };

    render() {
        const {} = this.props;
        return (
            <div>
                <div style={{...this.backgroundStyle, backgroundColor: grey900, opacity: 0.4, height: "100%"}}>
                </div>
                <div style={{position: "fixed", height: "100%", textAlign: "center", left: 0, right: 0}}>
                    <div style={{marginLeft: 100, width: "100%"}}>
                        <div style={{fontSize: 180, color: grey200, margin: "auto"}}>
                            <b>HELLO</b>
                            {/*<Dialog title="Dialog With Actions1111" body="The actions in this window were passed in as an array of React objects.11"/>*/}
                        </div>

                    {this.state.lineId == 0 &&
                    <Typist cursor={{show: false}} onLineTyped={() => {
                        setTimeout(() => {
                            this.setState({lineId: 1})
                        }, 1000)
                    }}>
                        <b style={{fontSize: 60, color: grey200}}>I am Denisenko Sergey</b>
                    </Typist>
                    }
                    {this.state.lineId == 1 &&
                    <Typist cursor={{show: false}} onLineTyped={() => {
                        setTimeout(() => {
                            this.setState({lineId: 2})
                        }, 1000)
                    }}>
                        <b style={{fontSize: 60, color: grey200}}>I am a Developer</b>
                    </Typist>
                    }
                    {this.state.lineId == 2 &&
                    <Typist cursor={{show: false}}>
                        <b style={{fontSize: 60, color: grey200}}>I am a football player</b>
                    </Typist>
                    }


                </div>
                </div>

            </div>
        );
    }
}

export default connect(
    state => ({}),
    dispatch => ({})
)(withRouter(HomePage));
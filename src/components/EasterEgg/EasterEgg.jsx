import React, {Component} from 'react';

class EasterEgg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pressedKeys: [],
            cheat: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65], // UP UP DOWN DOWN LEFT RIGHT LEFT RIGHT B A
            isShow: false
        };
        document.onkeydown = this.handleButtonPress;
    };

    handleButtonPress = e => {
        this.state.pressedKeys.push(e.keyCode);
        if (this.state.pressedKeys.join(',').includes(this.state.cheat.join(','))) {
            this.onEnterCheat();
        }
    };

    onEnterCheat = () => {
        this.setState({
            pressedKeys: []
        });
        this.showEasterEgg();
        setTimeout(this.hideEasterEgg, 5150)
    };

    showEasterEgg = () => {
        this.setState({
            isShow: true
        });
    };

    hideEasterEgg = () => {
        this.setState({
            isShow: false
        });
    };

    render() {
        if (this.state.isShow)
            return (<div style={{position: "fixed", top: "25%", left: "33%", zIndex: 2000}}><img src='https://i.giphy.com/4hnQDVKVARZ6w.gif'/></div>)
        return null;
    }
}

export default EasterEgg;
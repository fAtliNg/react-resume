import React from 'react'
import Navigation from '../Navigation/Navigation';
import video from '../../containers/HomePage/video.mp4';

let backgroundStyle = {
    minWidth: "100%",
    minHeight: "100%",
    position: "fixed",
    left: 200,
    top: 0,
    float: "left",
    backgroundSize: "cover"
};

export default props => (
    <div>
        <Navigation/>
        <video autoPlay loop muted style={backgroundStyle}>
            <source src={video} type="video/mp4"/>
            <source src={video} type="video/ogg"/>
        </video>
        <div className={"app"} style={{marginLeft: 200, right: 0}}>
            {props.children}
        </div>
    </div>
);

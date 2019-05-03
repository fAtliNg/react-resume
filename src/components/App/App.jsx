import React from 'react'

import Navigation from '../Navigation/Navigation';
import EasterEgg from '../../components/EasterEgg/EasterEgg';

import { ROUTES } from '../../constants';

import * as styles from './styles';

export default props => (
    <div>
        <Navigation/>
        <video style={styles.backgroundStyle} autoPlay loop muted>
            <source src={`${ROUTES.STATIC}/video/background.mp4`} type='video/mp4'/>
        </video>
        <EasterEgg/>
        <div className="app" style={styles.main}>
            {props.children}
        </div>
    </div>
);

import React, {Component} from 'react';
import {withRouter} from 'react-router'
import {connect} from 'react-redux';
import Dialog from '../../components/Dialog/Dialog';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cert1 from '../../images/cert1.jpg';
import cert2 from '../../images/cert2.jpg';
import cert3 from '../../images/cert3.jpg';
import cert4 from '../../images/cert4.jpg';
import cert5 from '../../images/cert5.jpg';

class CertificatesPage extends Component {
    settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        adaptiveHeight: true,
        arrows: false
    };

    renderBody = () => {
        return <div>
            <Slider {...this.settings}>
                <img src={cert1} onLoad={() => {this.forceUpdate()}}/>
                <img src={cert2}/>
                <img src={cert3}/>
                <img src={cert4}/>
                <img src={cert5}/>
            </Slider>
        </div>
    };

    render() {
        const {} = this.props;
        return (
            <div>
                <Dialog title="Certificates" body={this.renderBody()}/>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    dispatch => ({})
)(withRouter(CertificatesPage));
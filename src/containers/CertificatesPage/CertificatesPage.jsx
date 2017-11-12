import React, {Component} from 'react';
import {withRouter} from 'react-router'
import {connect} from 'react-redux';
import Dialog from '../../components/Dialog/Dialog';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {fetchCertificatesPageData, clearCertificatesPageData} from "../../actions/actions";

class CertificatesPage extends Component {
    componentWillMount() {
        this.props.fetchCertificates();
    }

    componentWillUnmount() {
        this.props.clearCertificates();
    }

    settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    renderBody = certificates => (
        <Slider {...this.settings}>
            {certificates.map(cert => (<img key={cert} src={cert}/>))}
        </Slider>
    );

    render() {
        const {certificates} = this.props.certificatesPage;
        return (certificates.length ? <Dialog title="Certificates" body={this.renderBody(certificates)}/> : null)
    }
}

export default connect(
    state => ({
        certificatesPage: state.certificatesPage
    }),
    dispatch => ({
        fetchCertificates: () => dispatch(fetchCertificatesPageData()),
        clearCertificates: () => dispatch(clearCertificatesPageData())
    })
)(withRouter(CertificatesPage));
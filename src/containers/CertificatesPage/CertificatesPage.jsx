import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Dialog from '../../components/Dialog/Dialog';

import './CertificatesPage.css';

import { fetchCertificatesPageData, clearCertificatesPageData } from '../../actions';

class CertificatesPage extends Component {
    componentDidMount() {
        this.props.fetchCertificates();
    }

    componentWillUnmount() {
        this.props.clearCertificates();
    }

    renderBody = certificates => {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <Slider {...settings}>
                {certificates.map(cert => (<img key={cert} src={cert} alt={cert}/>))}
            </Slider>
        );
    }

    render() {
        const { certificates } = this.props.certificatesPage;
        return (certificates.length ?
            <Dialog title="Certificates" body={this.renderBody(certificates)} bodyClassName="certificatesModal"/> : null)
    }
}

export default connect(
    state => ({
        certificatesPage: state.certificatesPage,
    }),
    dispatch => ({
        fetchCertificates: () => dispatch(fetchCertificatesPageData()),
        clearCertificates: () => dispatch(clearCertificatesPageData()),
    }),
)(withRouter(CertificatesPage));

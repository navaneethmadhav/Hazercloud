import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { BsArrowRight } from "react-icons/bs";
import './Footer.css'
import FooterSections from './FooterSections';
import FooterEnd from './FooterEnd';

const Footer = () => {
    return (
        <div className='footer-container mt-5'>
            <Row>
                <div className='container d-flex justify-content-center mt-5'>
                    <Col md={6} >
                        <Row className='container'>
                            <Col md={8} className='d-flex justify-content-center'>
                                <img src='https://hazercloud.com/assets/images/logo/logo.png' alt='hazercloud' className='footer-img' />
                            </Col>
                        </Row>
                        <Row className='container mt-3'>
                            <Col md={11} className='d-flex justify-content-center ms-3 footer-hire-text'>
                            <p>We also provide a Dedicated Team of Developers <br /> and Engineers for your entire operations and support.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={5} className='text-center ms-5'>
                        <button size='lg' className='footer-hire-btn fw-5'>Hire Talent Now &nbsp; <BsArrowRight /></button>
                    </Col>
                </div>
            </Row>

            <Col className='d-flex justify-content-center'>
                    <hr style={{ border: '1px solid #acacac',marginTop:'80px', width: '1055px' }} />
            </Col>

            <Row>
                <FooterSections />
            </Row>

            <Row>
                <FooterEnd />
            </Row>
        </div>
    )
}

export default Footer
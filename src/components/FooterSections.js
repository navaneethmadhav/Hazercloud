import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FiFacebook,FiInstagram,FiTwitter,FiLinkedin } from "react-icons/fi";
import './FooterSection.css'

const FooterSections = () => {
    return (
        <div className='section-container mb-5 mt-5'>
            <Row>
                <Col md={3} className='text-end'>
                    <Row>
                        <h5 className='section-header'>
                            Services
                        </h5>
                    </Row>
                    <Row>
                        <p className='section-name1'>DevOps Engineers</p>
                    </Row>
                    <Row>
                        <p className='section-name1'>CloudOps Engineers</p>
                    </Row>
                    <Row>
                        <p className='section-name1'>SysOps Engineers</p>
                    </Row>
                    <Row>
                        <p className='section-name1'>Services</p>
                    </Row>
                </Col>

                <Col md={3} className='text-center'>
                    <Row>
                        <h5 className='section-header'>
                            Solutions
                        </h5>
                    </Row>
                    <Row>
                        <p className='section-name2'>RedminePRO</p>
                    </Row>
                    <Row>
                        <p className='section-name2'>Managed Wordpress</p>
                    </Row>
                    <Row>
                        <p className='section-name2'>Mattermost Slack Alternative</p>
                    </Row>
                    <Row>
                        <p className='section-name2'>TryMailio</p>
                    </Row>
                </Col>

                <Col md={1}>
                    <Row>
                        <h5 className='section-header'>
                            Company
                        </h5>
                    </Row>
                    <Row>
                        <p className='section-name3'>About</p>
                    </Row>
                    <Row>
                        <p className='section-name3'>Location</p>
                    </Row>
                    <Row>
                        <p className='section-name3'>Careers</p>
                    </Row>
                    <Row>
                        <p className='section-name3'>Join Us</p>
                    </Row>
                </Col>

                <Col md={1}>
                    <Row>
                        <h5 className='section-header'>
                            Resources
                        </h5>
                    </Row>
                    <Row>
                        <p className='section-name4'>Team</p>
                    </Row>
                    <Row>
                        <p className='section-name4'>Testimonials</p>
                    </Row>
                    <Row>
                        <p className='section-name4'>Service</p>
                    </Row>
                    <Row>
                        <p className='section-name4'>Timeline</p>
                    </Row>
                </Col>

                <Col md={4} >
                    <Row>
                        <h6 className='ms-5 section-header'>40+ Clients Around the World</h6>
                    </Row>
                    <Row className='d-flex justify-content-start mt-4'>
                        <section class="mb-4 text-start ms-5">
                            <button
                                class="btn btn-outline-light rounded-pill btn-floating m-1 social-media-btn"
                            ><FiFacebook className='m-1'/></button>

                            <button
                                class="btn btn-outline-light rounded-pill btn-floating m-1"
                            ><FiTwitter className='m-1'/></button>

                            <button
                                class="btn btn-outline-light rounded-pill btn-floating m-1"
                            ><FiInstagram className='m-1'/></button>

                            <button
                                class="btn btn-outline-light rounded-pill btn-floating m-1"
                            ><FiLinkedin className='m-1'/></button>
                        </section>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default FooterSections
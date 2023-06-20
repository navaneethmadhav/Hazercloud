import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Pricing.css'

const Pricing = () => {
    return (
        <div>
            <Row className='mb-5'>
                <Col md={12} className='d-flex justify-content-center mt-5'>
                    <div className='pricing-tag'>
                        <p className='p-2' style={{ backgroundColor: '#0f0f11', borderRadius: '5px', }}>
                            <span className='text-primary p-2 pricing-tag-header w-25'>Pricing</span>
                        </p>
                    </div>
                </Col>

                <Col md={12}>
                    <div className='d-flex justify-content-center'>
                        <h2 className='pricing-header'>
                            Flexible and Easy Pricing
                        </h2>
                    </div>
                </Col>
            </Row>

            <div className='d-flex justify-content-center'>
                <Row>
                    <Col className='mb-5'>
                        <Card className='text-center ' style={{ width: '24rem', backgroundColor: '#0f0f11' }}>

                            <Card.Title className='p-3'>
                                <h5 className='pack-header'>DevOps Engineer</h5>
                            </Card.Title>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item className='pack-price' style={{ backgroundColor: '#1e1e1e', color: 'white' }}>
                                    <h4 className='fs-1'>
                                        $2400
                                    </h4>
                                    <p>USD per month</p>
                                </ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Text>
                                    <ul className='pack-features p-4'>
                                        <li>&nbsp; CI/CD Pipelines</li>
                                        <li>&nbsp; Automated Deployment</li>
                                        <li>&nbsp; Setup Ansible, Git, Jenkins,Docker,ELK stack and Pipelines</li>
                                        <li>&nbsp; Infrastrcuture as a Code</li>
                                        <li>&nbsp; Migrartion of Web Apps and services</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <button className='pricing-hire-btn'>Hire DevOps Engineer</button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className='mb-5'>
                        <Card className='text-center ' style={{ width: '24rem', height: '32rem', backgroundColor: '#0f0f11' }}>

                            <Card.Title className='p-3'>
                                <h5 className='pack-header'>CloudOps Engineer</h5>
                            </Card.Title>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item className='pack-price' style={{ backgroundColor: '#1e1e1e', color: 'white' }}>
                                    <h4 className='fs-1'>
                                        $3000
                                    </h4>
                                    <p>USD per month</p>
                                </ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Text>
                                    <ul className='pack-features p-4'>
                                        <li>&nbsp; AWS Azure Google Cloud Management</li>
                                        <li>&nbsp; Cloud Migration and Support</li>
                                        <li>&nbsp; 24/7/365 Monitoring & Support</li>
                                        <li>&nbsp; AutoScaling & High Availability</li>
                                        <li>&nbsp; Monitoring & Cost Optimization</li>
                                        <li>&nbsp; Certified Cloud Engineers</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <button size='lg' className='cloudops-hire-btn'>Hire CloudOps Engineer</button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className='mb-5'>
                        <Card className='text-center ' style={{ width: '24rem', height: '33rem', backgroundColor: '#0f0f11' }}>

                            <Card.Title className='p-3'>
                                <h5 className='pack-header'>SysOps Engineer</h5>
                            </Card.Title>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item className='pack-price' style={{ backgroundColor: '#1e1e1e', color: 'white' }}>
                                    <h4 className='fs-1'>
                                        $2200
                                    </h4>
                                    <p>USD per month</p>
                                </ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Text>
                                    <ul className='pack-features p-4'>
                                        <li>&nbsp; Linux Server Administration Red Hat, AlmaLinux, CentOS, Debian, Ubuntu</li>
                                        <li>&nbsp; Web Apps, SSL, DNS, and Email service Management</li>
                                        <li>&nbsp; Hardening, Backup & Server Audit</li>
                                        <li>&nbsp; Server Backup & Migrartion</li>
                                        <li>&nbsp; cPanel Server Management</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <button className='pricing-hire-btn'>Hire SysOps Engineer</button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>

            <Col className='d-flex justify-content-center'>
                <hr style={{ border: '1px solid #acacac', marginTop: '100px', width: '1000px' }} />
            </Col>
        </div>
    )
}

export default Pricing
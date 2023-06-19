import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Pricing.css'

const Pricing = () => {
    return (
        <div>
            <Row>
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

            <Row>
                <Col>
                    <Card className='text-center ' style={{ width: '24rem', backgroundColor:'#0f0f11' }}>

                        <Card.Title className='p-3'>
                            <h5 className='pack-header'>DevOps Engineer</h5>
                        </Card.Title>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item className='pack-price'>
                                <h4>
                                    $2400
                                </h4>
                                <p>USD per month</p>
                            </ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Text>
                                <ul className='pack-features p-4'>
                                    <li> CI/CD Pipelines</li>
                                    <li>Automated Deployment</li>
                                    <li>Setup Ansible, Git, Jenkins,Docker,ELK stack and Pipelines</li>
                                    <li>Infrastrcuture as a Code</li>
                                    <li>Migrartion of Web Apps and services</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Button>Hire DevOps Engineer</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
                <Col></Col>
            </Row>
        </div>
    )
}

export default Pricing
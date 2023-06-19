import React from 'react'
import './Services.css'
import ServiceTimeline from './ServiceTimeline'
import { Col, Row } from 'react-bootstrap'

const Services = () => {
    return (
        <div>
            <Row>
                <Col md={12}>
                    <div className='service-tag d-flex justify-content-center'>
                        <p className='p-2' style={{ backgroundColor: '#0f0f11', borderRadius: '5px', }}>
                            <span className='text-primary p-2 service-tag-header w-25'>Remote DevOps And CloudOps Engineer</span>
                        </p>
                    </div>
                </Col>

                <Col md={12}>
                    <div className='d-flex justify-content-center'>
                        <h2 className='service-header'>
                            A Remote Team Isn't Just a Trend - It's the Future
                        </h2>
                    </div>
                </Col>

                <Col md={12} sm={3} xs={1}>
                    <div className='text-center mt-4'>
                        <p className='service-header-text'>Tech has shifted to a remote-first world, and companies are in competition for the benefits of remote employees. Whether you want to hire a specific <br /> expert or an entire department, we have pre-validated candidates ready at short notice.</p>
                    </div>
                </Col>

                <Col md={12}>
                    <div>
                        <ServiceTimeline />
                    </div>
                </Col>

            </Row>

            <hr style={{ border: '1px solid #acacac', marginTop: '100px', marginLeft: '250px', marginBottom: '100px', width: '1000px' }} />
        </div>
    )
}

export default Services
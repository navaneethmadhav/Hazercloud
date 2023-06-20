import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Clients.css'

const Clients = () => {
    return (
        <div>
            <Row className=''>
                <Col md={12} className='d-flex justify-content-center mt-5'>
                    <div className='clients-tag'>
                        <p className='p-2' style={{ backgroundColor: '#0f0f11', borderRadius: '5px', }}>
                            <span className='text-primary p-2 clients-tag-header w-25'>Awesome Clients</span>
                        </p>
                    </div>
                </Col>

                <Col md={12}>
                    <div className='d-flex justify-content-center'>
                        <h2 className='clients-header'>
                            Join over our happy clients!
                        </h2>
                    </div>
                </Col>
            </Row>

            <div className='d-flex justify-content-center mt-5 mb-5 img-container-div'>
                <Row>
                    <Col md={3} className='img-container'>
                        <img src='https://hazercloud.com/assets/images/brand/elektroline.png' alt='elektroline' className='w-75 me-5' />
                        <img src='https://hazercloud.com/assets/images/brand/xalgorithms.png' alt='xalgorithm' className='w-75' />
                        <img src='https://hazercloud.com/assets/images/brand/planar.png' alt='planar' className='w-75' />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Clients
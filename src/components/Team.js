import React from 'react'
import './Team.css'
import { Row, Col } from 'react-bootstrap'
import TeamImageTab from './TeamImageTab'

const Team = () => {
    return (
        <div>
            <Row>
                <Col md={12} className='d-flex justify-content-center'>
                    <div className='team-tag'>
                        <p className='p-2' style={{ backgroundColor: '#0f0f11', borderRadius: '5px', }}>
                            <span className='text-primary p-2 team-tag-header w-25'>Remote DevOps And CloudOps Engineer</span>
                        </p>
                    </div>
                </Col>
                <Col md={12}>
                    <div className='d-flex justify-content-center'>
                        <h2 className='team-header'>
                            DevOps CloudOps & SysOps Engineers
                        </h2>
                    </div>
                </Col>

                <Col md={12} className='text-center'>
                    <div className='mt-4'>
                        <p className='team-header-text'>We have Highly Talented and Certified DevOps, CloudOps and SysOps Engineers ready to handle your Infrastrcuture.</p>
                    </div>
                </Col>

                <Col md={12}>
                    <div>
                        <TeamImageTab />
                    </div>
                </Col>

                <Col className='d-flex justify-content-center mb-5'>
                    <hr style={{ border: '1px solid #acacac',marginTop:'120px', width: '1000px' }} />
                </Col>
            </Row>
        </div>
    )
}

export default Team
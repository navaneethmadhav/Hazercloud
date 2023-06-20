import React from 'react'
import { Col, Row } from 'react-bootstrap'

const FooterEnd = () => {
    return (
        <div className='bg-dark pt-3' style={{ color: '#acacac', width:'1530px' }}>
            <Row>
                <Col>
                    <div className="copyright-menu d-flex justify-content-start ms-5">
                        <ul className='list-unstyled d-flex flex-wrap'>
                            <li>
                                <p className='me-3'>Privacy Policy &nbsp;&nbsp;&nbsp; |</p>
                            </li>
                            <li>
                                <p className='me-3'>Terms and Conditions &nbsp;&nbsp;&nbsp; |</p>
                            </li>
                            <li>
                                <p className='me-3'>Contact Us </p>
                            </li>
                        </ul>
                    </div>
                </Col>

                <Col className='text-end me-5'>
                    <div>
                        <span>© HAZERCLOUD 2022</span>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default FooterEnd
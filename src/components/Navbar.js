import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <Row className='p-2'>
            <Col className='d-flex justify-content-start ms-5 mt-2 nav-header'>
                <img src='https://hazercloud.com/assets/images/logo/logo.png' alt='hazercloud' className='nav-img' />
            </Col>

            <Col>
                <ul className='nav-list'>
                    <li className='me-5 mt-3 nav-list-item'>
                        <p>Home</p>
                    </li>
                    <li className='me-5 mt-3 nav-list-item'>
                        <p>Services</p>
                    </li>
                    <li className='me-5 mt-3 nav-list-item'>
                        <p>Solutions</p>
                    </li>
                    <li className='me-5 mt-3 nav-list-item'>
                        <p>Careers</p>
                    </li>
                    <li className='me-5 mt-3 nav-list-item'>
                        <p>Contact</p>
                    </li>
                    <li className='me-5 mt-2'>
                        <button className='nav-hire-btn rounded-pill'>Hire Now</button>
                    </li>
                </ul>
            </Col>
        </Row>
    </div>
  )
}

export default Navbar
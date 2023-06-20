import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Navbar.css'

const Navbar = () => {

    const [isSolutionDropdownVisible, setIsSolutionDropdownVisible] = useState(false);
    const [isServiceDropdownVisible, setIsServiceDropdownVisible] = useState(false);

    const handleServiceHover = () => {
        setIsSolutionDropdownVisible(true);
    };

    const handleServiceLeave = () => {
        setIsSolutionDropdownVisible(false);
    };

    const handleSolutionHover = () => {
        setIsServiceDropdownVisible(true);
    };

    const handleSolutionLeave = () => {
        setIsServiceDropdownVisible(false);
    };

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
                        <li onMouseEnter={handleServiceHover}
                            onMouseLeave={handleServiceLeave} 
                            className='me-5 mt-3 nav-list-item'>
                            <p>Services</p>
                            {isSolutionDropdownVisible && (
                                <div className='dropdown-container'>
                                    <ul className="dropdown">
                                        <li>DevOps Engineer</li>
                                        <li>CloudOps Engineer</li>
                                        <li>SysOps Engineer</li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li onMouseEnter={handleSolutionHover}
                            onMouseLeave={handleSolutionLeave} 
                            className='me-5 mt-3 nav-list-item'>
                            <p>Solutions</p>
                            {isServiceDropdownVisible && (
                                <div className='dropdown-container2'>
                                    <ul className="dropdown2">
                                        <li>rediminePRO</li>
                                        <li>Managed Wordpress</li>
                                        <li>Mattermost Slack Alternative</li>
                                    </ul>
                                </div>
                            )}
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
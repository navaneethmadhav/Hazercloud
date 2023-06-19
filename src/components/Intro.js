import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Typewriter } from 'react-simple-typewriter'
import { BsArrowRight } from "react-icons/bs";

import './Intro.css'
const Intro = () => {
  return (
    <div className='intro-container'>
      <Row>
        <Col md={6} className='intro-header'>
          <h1 className='intro-text' style={{ paddingTop: '4rem', margin: 'auto 0', fontWeight: 'normal' }}>
            Hire Top Talents <br /> For{' '}
            <span style={{ color: 'red', fontWeight: 'bold' }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={['DevOps', 'CloudOps', 'SysOps']}
                loop={true}
                cursor
                cursorColor='#FB5343'
                cursorBlinking='|'
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <h4 className='intro-sub-text mt-5'>We help Clients by providing Dedicated DevOps, CloudOps and <br />
            SysOps Engineers to work on their project immediately.</h4>

          <Row className='d-flex justify-content-around'>
            <Col md={4} className='mt-5'>
              <button size='lg' className='rounded-pill intro-hire-btn'>Hire Now <BsArrowRight /></button>
            </Col>
            <Col className='mt-5 d-flex justify-content-start'>
              <button className='rounded-pill intro-register-btn'>Register Now &nbsp;<BsArrowRight /></button>
            </Col>
          </Row>
        </Col>

        <Col>
          <img src='https://hazercloud.com/assets/images/bg/hazercloud.png' alt='banner-img' className='d-flex justify-content-center intro-img' />
        </Col>

        <Col className='d-flex justify-content-center m-5'>
        <hr style={{ border: '1px solid #acacac', width:'1000px'}}/>
        </Col>
        
      </Row>
    </div>
  )
}

export default Intro
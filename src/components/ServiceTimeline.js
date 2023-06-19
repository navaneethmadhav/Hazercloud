import React from 'react'
import './ServiceTimeline.css'

const ServiceTimeline = () => {
    return (
        <div className=''>
            <div className='timeline d-flex justify-content-center mt-5'>
                <div className="timeline-item">
                    <div className="timeline-item-circle1">1</div>
                    <div className="timeline-item-line"></div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-item-circle2">2</div>
                    <div className="timeline-item-line"></div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-item-circle3">3</div>
                    <div className="timeline-item-line"></div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-item-circle4">4</div>
                </div>
            </div>

            <div className='timeline-desc d-flex justify-content-evenly mt-3'>
                <div className='timeline-text ms-5 text-center'>
                    <h4 className='mb-4 timeline-header'>Place a Request</h4>
                    <p>Submit a request to Hire <br/> Dedicated DevOps or CloudOps <br/> Engineer.</p>
                </div>
                <div className='timeline-text text-center'>
                    <h4 className='mb-4 timeline-header'>Talk to Us</h4>
                    <p>Meet to your Account Manager</p>
                </div>
                <div className='timeline-text me-4 text-center'>
                    <h4 className='mb-4 timeline-header'>Brief the Project</h4>
                    <p>Tell us about your requirement <br/> and the project details.</p>
                </div>
                <div className='timeline-text text-center me-4'>
                    <h4 className='mb-4 timeline-header'>On board your <br/> Engineers</h4>
                    <p>Our Engineer will be pick up the <br/> project and start working on it.</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceTimeline
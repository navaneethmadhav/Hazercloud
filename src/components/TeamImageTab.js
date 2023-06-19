import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import './TeamImageTab.css'

const TeamImageTab = () => {

    const defaultImage = 'https://hazercloud.com/assets/images/advance-tab/cloudops_home.png'
    const defaultDiv = 'div1'

    const [selectedImage, setSelectedImage] = useState(defaultImage)
    const [selectedDiv, setSelectedDiv] = useState(defaultDiv);

    const handleDivClick = (imageURL,divId) =>{
        setSelectedImage(imageURL)
        setSelectedDiv(divId);
    }
    return (
        <div className='team-tab mt-5'>
            <Col md={3} className='team-tab-desc'>
                <Row>
                    <div className={selectedDiv === 'div1' ? 'selectedDiv' : 'team-desc-text mb-4 p-3'} onClick={()=> handleDivClick('https://hazercloud.com/assets/images/advance-tab/cloudops_home.png','div1')}>
                        <h6 className='mb-4 fs-4 team-header'>DevOps Team.</h6>
                        <p> Our Highly Talented DevOps Engineers will implement CI/CD Pipelines,
                            Monitor your Infrastrcuture and make it fully ready for High and Intensive Load.</p>
                    </div>
                </Row>

                <Row>
                    <div className={selectedDiv === 'div2' ? 'selectedDiv' : 'team-desc-text mb-4 p-3'} onClick={()=> handleDivClick('https://hazercloud.com/assets/images/advance-tab/sysops_home.png','div2')}>
                        <h6 className='mb-4 fs-4 team-header'>CloudOps Team.</h6>
                        <p> Our AWS and Azure Certified Cloud Engineer have extensive knowledge in Securing and Scaling
                            Web Applications. </p>
                    </div>
                </Row>

                <Row>
                    <div className={selectedDiv === 'div3' ? 'selectedDiv' : 'team-desc-text mb-4 p-3'} onClick={()=> handleDivClick('https://hazercloud.com/assets/images/advance-tab/devops_home.png','div3')}>
                        <h6 className='mb-4 fs-4 team-header'>SysOps Team.</h6>
                        <p> Our RHCE and cPanel Certified SysOps team is ready to handle 
                            your missing crtitical server and applicaiton. </p>
                    </div>
                </Row>
            </Col>

            <Col md={5} className='team-tab-img'>
                <div>
                    {
                        selectedImage && <img src={selectedImage} className='tab-img'  alt='selected'/>
                    }
                </div>
            </Col>
        </div>
    )
}

export default TeamImageTab
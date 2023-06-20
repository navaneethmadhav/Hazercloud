import React from 'react'
import Navbar from './Navbar'
import Intro from './Intro'
import Services from './Services'
import Team from './Team'
import Pricing from './Pricing'
import Clients from './Clients'
import Footer from './Footer'

const Homepage = () => {
  return (
    <div className='bg-dark'>
      <div className='navbar' style={{backgroundColor: 'black'}}>
        <Navbar />
      </div>

        <Intro />

        <Services />

        <Team />

        <Pricing />

        <Clients />

        <Footer />
    </div>
  )
}

export default Homepage
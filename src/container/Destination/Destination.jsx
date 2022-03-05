import React from 'react'
import { NavbarDesktop, DescriptionWindow } from '../../components'
import { moon } from '../../assets'
import './Destination.css'

const Destination = ({ title, avg, traveltime }) => {
  return (
    <div className='app__destination'>
      <NavbarDesktop />
      <div className='app__destination-content d-flex flex-column align-items-start mb-4 b'>
        <p className='textheading5__barlow'>
          <span style={{ opacity: 0.25 }}>01</span> pick your destination
        </p>
        <div />
        <div className='app__destination-content_planet d-flex justify-content-around align-items-center'>
          <img src={moon} alt={title} />
          <DescriptionWindow />
        </div>
      </div>
    </div>
  )
}

export default Destination

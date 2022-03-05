import React from 'react'
import { NavbarDesktop, DescriptionWindow } from '../../components'

const Destination = () => {
  return (
    <>
      <NavbarDesktop />
      <p>
        <span>01</span> pick your destination
      </p>
      <div className='d-flex flex-row justify-content-between align-items-center'>
        <img src='../../../assets/destination/image-moon.png' alt='moon' />
        <DescriptionWindow />
      </div>
    </>
  )
}

export default Destination

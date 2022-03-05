import React from 'react'
import './DescriptionWindow.css'

const DescriptionWindow = () => {
  return (
    <div className='app__descriptionWindow d-flex flex-column justify-content-start align-items-start'>
      <div className='app__descriptionWindow-navigator'>
        <ul className='d-flex align-items-center'>
          <li>moon</li>
          <li>mars</li>
          <li>europa</li>
          <li>titan</li>
        </ul>
      </div>
      <div className='app__descriptionWindow-content mt-5'>
        <h1 className='textheading2__bellefair'>moon</h1>
        <p>
          See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain
          perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2
          and Apollo 11 landing sites.
        </p>
      </div>
      <div className='divider' />
      <div className='app__descriptionWindow-information'>
        <div>
          <h5>avg. distance</h5>
          <h5>384,400 KM</h5>
        </div>
        <div className='mx-5'>
          <h5>est. travel time</h5>
          <h5>3 DAYS</h5>
        </div>
      </div>
    </div>
  )
}

export default DescriptionWindow

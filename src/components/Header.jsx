import React from 'react'
import AVATAR from '../assets/img/Avatar.png'
import { Button } from 'reactstrap'

export default function Header() {
  return (
    <div className='header-container'>
      <div className='header'>
        <img src={AVATAR} width={100} style={{position:'absolute', top: '1rem'}} />
          <div style={{marginLeft:'115px', marginRight:'15px', height: '100%'}}>
            <h2>John Doe</h2>
            <small>Last online : 2 days ago</small>
          </div>
          <div>
            <Button color='light' style={{marginRight:'15px'}}>Send Message</Button>
            <Button color='light' outline>Add Friend</Button>
          </div>
      </div>
    </div>
  )
}

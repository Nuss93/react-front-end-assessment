import React from 'react'
import AVATAR from '../assets/img/Avatar.png'
import { Button } from 'reactstrap'

export default function Header() {
  return (
    <div className='header'>
      <img src={AVATAR} width={100} style={{position:'absolute', top: '1rem'}} />
      <div style={{marginLeft:'100px', height: '100%'}} className='d-flex align-items-center justify-content-center'>
        <div>Name</div>
        <div>Last online</div>
      </div>
      <div>
        <Button color='light'>Send Message</Button>
        <Button color='light' outline>Add Friend</Button>
      </div>
    </div>
  )
}

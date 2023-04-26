import React from 'react'
import AVATAR from '../assets/img/Avatar.png'
import { Button } from 'reactstrap'

export default function Header() {
  return (
    <div className='header'>
      <img src={AVATAR} width={100} style={{position:'absolute', top: '1rem'}} />
      <div style={{marginLeft:'100px'}}>
        <div>Name</div>
        <div>Last online</div>
      </div>
      <div>
        <Button>Send Message</Button>
        <Button>Add Friend</Button>
      </div>
    </div>
  )
}

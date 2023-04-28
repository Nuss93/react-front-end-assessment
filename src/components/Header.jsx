import React from 'react'
import { Button } from 'reactstrap'
import AVATAR from '../assets/img/Avatar.png'
import SEND from '../assets/img/send.png'
import ADD from '../assets/img/add.png'

export default function Header() {
  return (
    <div className='header-container'>
      <div className='header'>
        <img src={AVATAR} width={100} style={{position:'absolute', top: '1rem'}} />
          <div style={{marginLeft:'115px', marginRight:'15px', height: '100%'}}>
            <h4 className='mb-0 fw-bold'>John Doe</h4>
            <small>Last online : 2 days ago</small>
          </div>
          <div>
            <Button color='light' style={{marginRight:'15px'}}>
              <img src={SEND} height={'14px'} />
              <span style={{color: '#35BAD8', marginLeft:'5px'}}>Send Message</span>
            </Button>
            <Button color='light' outline>
              <img src={ADD} height={'14px'} />
              <span style={{color: '#fff', marginLeft:'5px'}}>Add Friend</span>
            </Button>
          </div>
      </div>
    </div>
  )
}

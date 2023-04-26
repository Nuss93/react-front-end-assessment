import React from 'react'
import LOGO from '../assets/img/Logo.png'

export default function Navbar() {
  return (
    <div className='d-flex justify-content-between p-3'>
        <img src={LOGO} width='10%' />
        <div>
          <div>bell</div>
          <div>cog</div>
        </div>
    </div>
  )
}

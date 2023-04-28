import React from 'react'
import LOGO from '../assets/img/Logo.png'
import LOGOUT from "../assets/img/logout.png";
import BELL from "../assets/img/notifications.png";
import COG from "../assets/img/settings.png";

export default function Navbar() {
  return (
    <div className='navbar d-flex justify-content-between'>
        <img src={LOGO} height='44px' />
        <div>
          <img src={BELL} width='30px' />
          <img src={COG} width='30px' />
          <img src={LOGOUT} width='30px' />
        </div>
    </div>
  )
}

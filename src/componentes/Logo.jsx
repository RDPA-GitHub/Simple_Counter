import React from "react";
import Rp from '../img/Logo.png';

const Logo = () => {
  return (
    <div className='Logo-container'>
        <img className='Logo'
          src={Rp}
          alt="Logo Rp" />
    </div>
  );
}

export default Logo;
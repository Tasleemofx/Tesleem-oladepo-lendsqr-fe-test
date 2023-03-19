import React from 'react'
import lendsqr from '../../assets/images/lendsqr.png'
import Union from '../../assets/images/Union.png'
import './logo.scss'

const Logo= () => {
  return (
    <div className="logo-wrap">
      <img src={Union} alt="union logo" className="union-logo"/>
      <img src={lendsqr} alt="lender-logo" className="lendsqr-logo"/>
        
    </div>
  )
}

export default Logo
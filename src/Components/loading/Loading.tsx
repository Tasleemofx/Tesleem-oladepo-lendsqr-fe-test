import React from 'react'
import lend from '../../assets/images/Union.png'
import './loading.scss'

const Loading = () => {
  return (
    <div className="loadiv jcc-aic">
        <img src={lend} alt="loading" className="img-loader"/>
    </div>
  )
}

export default Loading
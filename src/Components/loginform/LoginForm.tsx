import React, { useState } from 'react'
import "./loginform.scss"

const LoginForm = () => {
    const [formvalues, setFormvalues] = useState({
        email: '',
        password:''
    })
    const [show, setShow] = useState(false)
    function handleshow(){
        setShow(!show)
    }
  return (
    <div className="login-form">
        <h1 className="w-head">Welcome!</h1>
        <p className="dets-log">Enter details to login.</p>
        <form>
            <div className="logform-div">
                <input type="email" onChange={(e)=> setFormvalues({...formvalues, email: e.target.value})}/>
                <label className={!formvalues.email? "show-label": "no-show"}>Email</label>
            </div>
            <div className="logform-div">
                <input type={show?'text':'password'} onChange={(e)=> setFormvalues({...formvalues, password: e.target.value})}/>
                <label className={!formvalues.password? 'show-label':'no-show'}>Password</label>
                <p className='show' onClick={handleshow}>SHOW</p>
            </div>
            <p>FORGOT PASSWORD</p>
            <button className="login-btn">LOG IN</button>
        </form>
    </div>
  )
}

export default LoginForm
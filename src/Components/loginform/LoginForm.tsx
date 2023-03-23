import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import "./loginform.scss"

const LoginForm = () => {
    const navigate = useNavigate()
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
                <input type="email" id="email" onChange={(e)=> setFormvalues({...formvalues, email: e.target.value})}/>
                <label htmlFor="email" className={!formvalues.email? "show-label": "no-show"}>Email</label>
            </div>
            <div className="logform-div">
                <input type={show?'text':'password'} id="pwd" onChange={(e)=> setFormvalues({...formvalues, password: e.target.value})}/>
                <label htmlFor="pwd" className={!formvalues.password? 'show-label':'no-show'}>Password</label>
                  <p className='show forgot-password' onClick={handleshow}>SHOW</p>
            </div>
            <p className="forgot-password">FORGOT PASSWORD</p>
            <button className="login-btn"
            onClick={()=> navigate(`/dashboard`)}>LOG IN</button>
        </form>
    </div>
  )
}

export default LoginForm
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import Navbar from '../Components/navbar/Navbar';
import Sidebar from '../Components/sidenav/Sidebar'
import { UserObj } from '../Components/model/model'
import "../assets/styles/userdetails.scss"

const UserDetails = ():JSX.Element => {
  const navigate = useNavigate()
 
  const [user, setUser] = useState<UserObj[]>(JSON.parse(localStorage.getItem('userdata') || ''))

  

  return (
    <div>
      <Navbar/>
      <Sidebar />
      <div className="user-details">
        <div className="top-items">
        <span className="d-flex" onClick={()=> navigate(-1)}><IoIosArrowRoundBack /> Back to Users</span>
        


        <div className="jsb-aic"> 
          <p className="udets">User Details</p>
          <span className="d-flex">
            <button className=" blist">BLACKLIST USER</button>
            <button className=" activat">ACTIVATE USER</button>
          </span>
        </div>
        </div>
        <div className='profile-box'>
          <div>
            <div className='avatar-symb'>
              <IoPersonOutline />
            </div>
          </div>
        </div>
        <div className="pi-box">

        </div>
      </div>
    </div>
  )
}

export default UserDetails
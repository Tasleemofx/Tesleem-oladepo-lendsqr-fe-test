import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import { AiFillStar  } from 'react-icons/ai'
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import Loading from '../Components/loading/Loading'
import Navbar from '../Components/navbar/Navbar';
import Sidebar from '../Components/sidenav/Sidebar'
import { useGetSingleUserQuery } from '../features/lendsqrApi'
import { UserObj } from '../Components/model/model'
import "../assets/styles/userdetails.scss"

const UserDetails = ():JSX.Element => {
  const navigate = useNavigate()
  const [user, setUser] = useState<UserObj|null>(null)
  const userId = (JSON.parse(localStorage.getItem('userId')|| ''))

  console.log(userId)
  const {data, isLoading, error} = useGetSingleUserQuery(userId)
  useEffect(()=>{
    console.log(data)
    setUser(data)
  },[data])
  if(isLoading || error){
    return <Loading />
  }else{
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
        <div className="jsb-aic">
            <div className='avatar-symb'>
            {
            <img src={user?.profile?.avatar} alt="userpic" className='avatar-symb' />
              || <IoPersonOutline/>
              }
            </div>
            <div className="user-fname">
              <p className="fname">{user?.profile.firstName}  {user?.profile.lastName}</p>
              <p className="act-no">{user?.accountNumber}</p>
            </div>
            <div className="user-tier">
              <p className="u-tier">User's Tier</p>
              <span>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              </span>
            </div>
            <div className="acct">
              <p className='act-bal'>{user?.education.monthlyIncome}</p>
              <p className="acct-no">{user?.accountNumber}</p>
            </div>
            </div>
            <nav className="low-nav jsa-aic">
              <p className='act-nav'>General Details</p>
              <p>Documents</p>
              <p>Bank Details</p>
              <p>Loans</p>
              <p>Savings</p>
              <p>App and System</p>
            </nav>
        </div>
        <div className="pi-box">
          <p className="mai-head">Personal Information</p>
          <div className="inf-body">
            <div className='s-grid'>
              <span className="fcolumn">
                <p className="h-t">FULL NAME</p>
                <p className="d-field">{user?.profile.firstName} {user?.profile.lastName}</p>
              </span>
              <span className="fcolumn">
                <p className="h-t">PHONE NUMBER</p>
                <p className="d-field">{user?.phoneNumber}</p>
              </span>
              <span className="fcolumn">
                <p className="h-t">EMAIL ADDRESS</p>
                <p className="d-field">{user?.email}</p>
              </span>
              <span className="fcolumn">
                <p className="h-t">BVN</p>
                <p className="d-field">{user?.profile.bvn}</p>
              </span>
              <span className="fcolumn">
                <p className="h-t">GENDER</p>
                <p className="d-field">{user?.profile.gender}</p>
              </span>
            </div>
              <div className="s-grid">
                <span className="fcolumn">
                  <p className="h-t">MARITAL STATUS</p>
                  <p className="d-field">Single</p>
                </span>
                <span className="fcolumn">
                  <p className="h-t">CHILDREN</p>
                  <p className="d-field">None</p>
                </span>
                <span className="fcolumn">
                  <p className="h-t">TYPE OF RESIDENCE</p>
                  <p className="d-field">Parent's Apartment</p>
                </span>
              </div>
            
          </div>
          <p className="mai-head">Education and Employment</p>
          <div className="inf-body">
            <div className='s-grid e-grid'>
              <span className="fcolumn">
                <p className="h-t">LEVEL OF EDUCATION</p>
                <p className="d-field">{user?.education.level}</p>
              </span>
              <span className="fcolumn">
                <p className="h-t">EMPLOYMENT STATUS</p>
                <p className="d-field">{user?.education.employmentStatus}</p>
              </span>
              <span className="fcolumn">
                <p className="h-t">SECTOR OF EMPLOYMENT</p>
                <p className="d-field">{user?.education.sector}</p>
              </span>
              <span className="fcolumn">
                <p className="h-t">DURATION OF EMPLOYMENT</p>
                <p className="d-field">{user?.education.duration}</p>
              </span>
                      
                <span className="fcolumn">
                  <p className="h-t">OFFICE EMAIL</p>
                  <p className="d-field">{user?.education.officeEmail}</p>
                </span>
                <span className="fcolumn">
                  <p className="h-t">MONTHLY INCOME</p>
                  <p className="d-field">{user?.education.monthlyIncome}</p>
                </span>
                <span className="fcolumn">
                  <p className="h-t">LOAN REPAYMENT</p>
                  <p className="d-field">{user?.education.loanRepayment}</p>
                </span>
            </div>
          </div>
          <p className="mai-head">Socials</p>
          <div className="inf-body">
            
              <div className="s-grid">           
              <span className="fcolumn">
                <p className="h-t">TWITTER</p>
                <p className="d-field">{user?.socials.twitter}</p>
              </span>
              <span className="fcolumn">
                <p className="h-t">FACEBOOK</p>
                <p className="d-field">{user?.socials.facebook}</p>
              </span>
              <span className="fcolumn">
                <p className="h-t">INSTAGRAM</p>
                <p className="d-field">{user?.socials.instagram}</p>
              </span>

            
          </div>
          <p className="mai-head">Guarantor</p>
          <div className="inf-body">
            <div className='s-grid'>
              <span className="fcolumn">
                <p className="h-t">FULL NAME</p>
                <p className="d-field">{user?.guarantor.firstName} {user?.guarantor.lastName}</p>
              </span>
              <span className="fcolumn">
                <p className="h-t">PHONE NUMBER</p>
                <p className="d-field">{user?.guarantor.phoneNumber}</p>
              </span>
              <span className="fcolumn">
                <p className="h-t">EMAIL ADDRESS</p>
                <p className="d-field">{user?.guarantor.address}</p>
              </span>
              <span className="fcolumn">
                <p className="h-t">GENDER</p>
                <p className="d-field">{user?.guarantor.gender}</p>
              </span>
            </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}
}
export default UserDetails
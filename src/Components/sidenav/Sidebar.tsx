import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./sidebar.scss"

const Sidebar = () => {
    const [openSidebar, setOpenSidebar] = useState(true)
  return (
    <div className="sidebar">
        <p className="section-head">Switch Organization</p>
        <nav className="nav-items fcolumn">
            <p className="section-head">CUSTOMERS</p>
            <NavLink to="/dashboard" className={({isActive, isPending}):string=>{
               return isPending? "nav-pending": isActive? 'nav-active':''
            }}>Users</NavLink>
            <NavLink to="/dashboard">Guarantors</NavLink>
            <NavLink to="/dashboard">Loans</NavLink>
            <NavLink to="/dashboard">Decision Models</NavLink>
            <NavLink to="/dashboard">Savings</NavLink>
            <NavLink to="/dashboard">Loan Requests</NavLink>
            <NavLink to="/dashboard">Whitelist</NavLink>
            <NavLink to="/dashboard">Karma</NavLink>
            <p className="section-head">BUSINESSES</p>
            <NavLink to="/dashboard">Organization</NavLink>
            <NavLink to="/dashboard">Loan Products</NavLink>
            <NavLink to="/dashboard">Savings Products</NavLink>
            <NavLink to="/dashboard">Fees and CHarges</NavLink>
            <NavLink to="/dashboard">Transactions</NavLink>
            <NavLink to="/dashboard">Services</NavLink>
            <NavLink to="/dashboard">Service Account</NavLink>
            <NavLink to="/dashboard">Settlements</NavLink>
            <NavLink to="/dashboard">Reports</NavLink>

              <p className="section-head">SETTINGS</p>
            <NavLink to="/dashboard">Preferences</NavLink>
            <NavLink to="/dashboard">Fees and Pricing</NavLink>
            <NavLink to="/dashboard">Audit Logs</NavLink>
        </nav>
    </div>
  )
}

export default Sidebar
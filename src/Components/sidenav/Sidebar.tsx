import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./sidebar.scss"

const Sidebar = () => {
    const [openSidebar, setOpenSidebar] = useState(true)
  return (
    <div className="sidebar">
        <p className="section-head">Switch Organization</p>
        <nav className="nav-items fcolumn">
          <p className="section-head jcc-aic">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
            <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
          </svg>
          Dashboard
          </p>
            <p className="section-head">CUSTOMERS</p>
            <NavLink to="/dashboard"> Users</NavLink>
            <NavLink to="/">Guarantors</NavLink>
            <NavLink to="/" >Loans</NavLink>
            <NavLink to="/" >Decision Models</NavLink>
            <NavLink to="/" >Savings</NavLink>
            <NavLink to="/" >Loan Requests</NavLink>
            <NavLink to="/" >Whitelist</NavLink>
            <NavLink to="/">Karma</NavLink>
            <p className="section-head">BUSINESSES</p>
            <NavLink to="/" >Organization</NavLink>
            <NavLink to="/" >Loan Products</NavLink>
            <NavLink to="/" >Savings Products</NavLink>
            <NavLink to="/" >Fees and CHarges</NavLink>
            <NavLink to="/" >Transactions</NavLink>
            <NavLink to="/" >Services</NavLink>
            <NavLink to="/" >Service Account</NavLink>
            <NavLink to="/" >Settlements</NavLink>
            <NavLink to="/" >Reports</NavLink>

              <p className="section-head">SETTINGS</p>
            <NavLink to="/dashboard">Preferences</NavLink>
            <NavLink to="/dashboard">Fees and Pricing</NavLink>
            <NavLink to="/dashboard">Audit Logs</NavLink>
        </nav>
    </div>
  )
}

export default Sidebar
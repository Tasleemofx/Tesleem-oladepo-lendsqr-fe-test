import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <p>Switch Organization</p>
        <nav className="nav-items">
            <p className="section-head">CUSTOMERS</p>
            <NavLink to="/dashboard">Users</NavLink>
            <NavLink>Guarantors</NavLink>
            <NavLink>Loans</NavLink>
            <NavLink>Decision Models</NavLink>
            <NavLink>Savings</NavLink>
            <NavLink>Loan Requests</NavLink>
            <NavLink>Whitelist</NavLink>
            <NavLink>Karma</NavLink>
            <p className="section-head">BUSINESSES</p>
            <NavLink>Organization</NavLink>
            <NavLink>Loan Products</NavLink>
            <NavLink>Savings Products</NavLink>
            <NavLink>Fees and CHarges</NavLink>
            <NavLink>Transactions</NavLink>
            <NavLink>Services</NavLink>
            <NavLink>Service Account</NavLink>
            <NavLink>Settlements</NavLink>
            <NavLink>Reports</NavLink>

              <p className="section-head">SETTINGS</p>
            <NavLink>Preferences</NavLink>
            <NavLink>Fees and Pricing</NavLink>
            <NavLink>Audit Logs</NavLink>
        </nav>
    </div>
  )
}

export default Sidebar
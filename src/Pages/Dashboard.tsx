import React, { useState } from 'react'
import Navbar from '../Components/navbar/Navbar'
import Sidebar from '../Components/sidenav/Sidebar'
import DisplayTable from '../Components/Table/DisplayTable'
import { useGetAllUsersQuery } from '../features/lendsqrApi'
import { UserObj } from '../Components/model/model'
import user from '../assets/images/user-l.png'
import '../assets/styles/dashboard.scss'


const Dashboard = ():JSX.Element => {
  const [pageNo, setPageNo] = useState(1)
  const [dataSize, setDataSize] = useState(10)
  const { data: allData, error, isLoading } = useGetAllUsersQuery('bulbasaur')

  
  return (
    <div className="dashboard-main">
        <Navbar />
        <Sidebar/>
        <div className="cards">
          <div className="card-comp">
            <div className="card-circle jcc-aic">
              
            </div>
          <div className="fcolumn">
            <p className="top-he">USERS</p>
            <p className="top-va">{allData?.length}</p>
          </div>
          </div>
        <div className="card-comp">
          <div className="card-circle jcc-aic">
            <img src={user} alt="active-user" />
          </div>
          <div className="fcolumn">
            <p className="top-he">ACTIVE USERS</p>
            <p className="top-va">{allData?.filter((item: UserObj) => item.lastActiveDate).length}</p>
          </div>
        </div>
        <div className="card-comp">
          <div className="card-circle jcc-aic">

          </div>
          <div className="fcolumn">
            <p className="top-he">USERS WITH LOANS</p>
            <p className="top-va">{allData?.filter((item: UserObj) => item.education.loanRepayment).length}</p>
          </div>
          
        </div>
        <div className="card-comp">
          <div className="card-circle jcc-aic">

          </div>
          <div className="fcolumn">
            <p className="top-he">USERS WITH SAVINGS</p>
            <p className="top-va">{allData?.filter((item: UserObj) => Number(item.accountBalance) > 100).length}</p>
          </div>
        </div>
        </div>
        <DisplayTable array={allData ? allData: []} pageNo={pageNo} handleNext={()=>setPageNo( pageNo+1)} handlePrev={()=>setPageNo(()=>pageNo-1)}
        setDataSize={setDataSize} dataSize={dataSize} />
        
    </div>
  )
}

export default Dashboard
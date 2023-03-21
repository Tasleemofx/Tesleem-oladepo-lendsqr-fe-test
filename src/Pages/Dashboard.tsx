import React, { useState } from 'react'
import Navbar from '../Components/navbar/Navbar'
import Sidebar from '../Components/sidenav/Sidebar'
import DisplayTable from '../Components/Table/DisplayTable'
import { useGetAllUsersQuery } from '../features/lendsqrApi'
import {RespData} from '../Components/model/model'


const Dashboard = ():JSX.Element => {
  const [pageNo, setPageNo] = useState(1)
  const [dataSize, setDataSize] = useState(10)
  const { data: allData, error, isLoading } = useGetAllUsersQuery('bulbasaur')

  
  return (
    <div className="dashboard-main">
        <Navbar />
        <Sidebar/>
        <DisplayTable array={allData ? allData: []} pageNo={pageNo} handleNext={()=>setPageNo( pageNo+1)} handlePrev={()=>setPageNo(()=>pageNo-1)}
        setDataSize={setDataSize} dataSize={dataSize} />
        
    </div>
  )
}

export default Dashboard
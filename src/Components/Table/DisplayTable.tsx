import React, { useState } from 'react'
import { AiOutlineEye  } from "react-icons/ai"
import { BsPersonCheck  } from 'react-icons/bs'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { MdOutlinePersonRemoveAlt1  } from 'react-icons/md'
import { NavLink } from 'react-router-dom';
import vector from "../../assets/images/Vector.png"

import { useNavigate } from 'react-router-dom';
import { RespData, UserObj } from '../model/model'
import './tables.scss'

interface Tabledata{
    array: Array<{}>,
    pageNo: number,
    setPageNo: React.Dispatch<React.SetStateAction<number>>,
    handleNext: any,
    handlePrev: any,
    dataSize: any,
    setDataSize: any
}
const DisplayTable = ({array, pageNo, setPageNo, handleNext, handlePrev, dataSize, setDataSize}: Tabledata):JSX.Element => {
    interface Arraydata {
        orgName: string | null,
        userName: string | null,
        email: string | null,
        phoneNumber: string | null,
        createdAt: string | null,
        id: string | null
    }
   
    const navigate = useNavigate()
    
    const [dialog, setDialog] = useState<{[key:string]: boolean}>({})
    const [orgDrop, setOrgDrop] = useState(false)
   

   

      async function handleClick(id: string){ 
        localStorage.setItem('userId', JSON.stringify(id))
        // setDialog({})
        navigate('/dashboard/Userdetails/')
      }
        return (
            <div className="dash-table">
                <table >
                    <thead>
                        <tr>
                            <td className=" head-td">
                                <span className="jsa-aic">
                                    <p>ORGANIZATION</p>
                                    <img src={vector} alt="dropdown" onClick={()=>setOrgDrop(!orgDrop)}/>

                                </span>
                                {
                                    orgDrop &&
                                    <span className="org-drop">
                                        <form>
                                            <span className="fcolumn">
                                            <label>Organisation</label>
                                            <select>
                                                <option value="Select">Select</option>
                                            </select>
                                            </span>
                                            <span className="fcolumn">
                                            <label >Username</label>
                                            <input type="text" placeholder="User"/>
                                            </span>
                                            <span className="fcolumn">
                                            <label>Email</label>
                                            <input type="email" placeholder="Email"/>
                                            </span>
                                            <span className="fcolumn">
                                            <label>Date</label>
                                            <input type="date" placeholder="Date"/>
                                            </span>
                                            <span className="fcolumn">
                                            <label>Phone Number</label>
                                            <input type="text" placeholder="Phone Number"/>
                                            </span>
                                            <span className="fcolumn">
                                            <label>Status</label>
                                            <select>
                                                <option>Select</option>
                                            </select>
                                            </span>
                                            <span className="d-flex">
                                            <button className="wh-btn">Reset</button>
                                            <button className="bl-btn">Filter</button>
                                            </span>
                                        </form>
                                    </span>
                                }
                            </td>
                            <td className="head-td">
                                <span className="jsa-aic">
                                <p>USERNAME</p>
                                <img src={vector} alt="dropdown" />
                                </span>
                            </td>
                            <td className=" head-td">
                                <span className="jsa-aic">
                                <p>EMAIL</p>
                                <img src={vector} alt="dropdown" />
                                </span>
                            </td>
                            <td className=" head-td">
                                <span className="jsa-aic">
                                <p>PHONE NUMBER</p>
                                <img src={vector} alt="dropdown" />
                                </span>
                            </td>
                            <td className=" head-td">
                                <span className="jsa-aic">
                                <p>DATE JOINED</p>
                                <img src={vector} alt="dropdown" />
                                </span>
                            </td>
                            <td className="stat-td">
                                <span className="jsa-aic">
                                <p>STATUS</p>
                                <img src={vector} alt="dropdown" />
                                </span>
                            </td>
                            <td></td>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {array.slice(pageNo-1,dataSize)
                            .map(({ orgName, userName, email, phoneNumber, createdAt, lastActiveDate, id}:any) => {
                            return (
                                <tr key={id} onMouseEnter={() => {
                                    setDialog({ ...dialog, [id]: !dialog[id] })
                                }} onMouseLeave={() => setDialog({})}>

                                    <td>{orgName}</td>
                                    <td>{userName}</td>
                                    <td>{email}</td>
                                    <td>{phoneNumber}</td>
                                    <td>{createdAt.toLocaleString()}</td>
                                    <td className='activer'>
                                        <span>{lastActiveDate? 'active': "inactive"}</span></td>
                                    <td className="stat-td">
                                        <BiDotsVerticalRounded  />
                                        {
                                            dialog[id] && <span className='dialogbox'>
                                                <div onClick={()=>handleClick(id)} className="jcc-aic">
                                                    <AiOutlineEye/> View Details</div>
                                                <div className="jcc-aic"> <MdOutlinePersonRemoveAlt1/>Blacklist User</div>
                                                <div className="jcc-aic"> <BsPersonCheck/> Activate User</div>
                                            </span>
                                        }
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>
                <div className="foot">
                    <span className="l-foot"> 
                        <span>Showing</span>
                    <select onChange={(e) => setDataSize(e.target.value)}>
                        <option value="10" >10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value='50'>50</option>
                    </select>
                        <span> out of {array.length}</span>
                    </span>
                    <span className="r-foot">
                        <button className="dir-btn" disabled={pageNo === 1}
                        onClick={()=>{
                            if(pageNo>1){
                                setPageNo(()=> pageNo-1)
                            }
                        }}><IoIosArrowBack /></button>
                        <span className="num-foot act"
                        >{pageNo}</span>
                        <span className="num-foot"
                            onClick={() => setPageNo((pageNo) => pageNo + 1)}>{pageNo+1}</span>
                        <span className="num-foot"
                            onClick={() => setPageNo((pageNo) => pageNo + 2)}>{pageNo+2}</span>
                        <span className="num-foot">...</span>
                      
                        <button  className="dir-btn" onClick={()=>{
                            setPageNo(()=> pageNo+1)
                        }}><IoIosArrowForward/></button>
                    </span>
                </div>
            </div>
        )
    }


export default DisplayTable
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Alltask = () => {
   const Authdata =  useContext(AuthContext)
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 h-60 '>
        <div className='bg-red-400 px-2  flex my-2 justify-between text-white text-2xl rounded-lg'>
            <h2>Employee</h2>
            <h3>New tasks</h3>
            <h5>AcceptedTask</h5>
            <h5>CompletedTask</h5>
            <h5>failed</h5>
        </div>
        <div className='h-48 overflow-auto'>
        {Authdata.employees.map((e,idx)=>{
            return  <div key={idx} className='bg-green-400 flex justify-between my-2 px-2 items-center text-white text-2xl rounded-lg '>
            <h2 className='w-10' >{e.firstName}</h2>
            <h3 className='text-center'>{e.taskCounts.newTask}</h3>
            <h5>{e.taskCounts.active}</h5>
            <h5>{e.taskCounts.completed}</h5>
            <h5>{e.taskCounts.failed}</h5>
        </div>
   
        })}
       </div>
       </div>
  )
}

export default Alltask
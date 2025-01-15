import React from 'react'
import Header from '../other/Header'
import TaskNumber from '../other/TaskNumber'
import TaskList from '../taskList/TaskList'

const EmployeeDash = (props) => {
  // console.log(data);
 return (
    <div>
    {/* <h1 className='text-yellow-400'>hello</h1> */}
    <Header changeUser = {props.changeUser} data={props.data}/>
   <TaskNumber data={props.data}/>
   <TaskList data={props.data}/>
    </div>
   
   
  )
}

export default EmployeeDash
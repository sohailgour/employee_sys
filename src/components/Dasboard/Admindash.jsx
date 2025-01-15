import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask';
import Alltask from '../other/Alltask';

const Admindash = (props) => {
  return (
    <div>
        <Header changeUser = {props.changeUser}/>
        <CreateTask/>
        <Alltask/>
    </div>
  )
}

export default Admindash;
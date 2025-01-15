import React from 'react'
import AcceptedTask from './AcceptedTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import RejectTask from './RejectTask'


const TaskList = ({data}) => {
  // console.log(data)
  return (
    <div id="tasklist" className=' h-[55vh]  m-10 overflow-x-auto flex items-center justify-around flex-nowrap gap-5'>
      {data.tasks.map((e,idx)=>{
        if(e.active){
          return <AcceptedTask key={idx} data={e}/>
        }
        if(e.newtask){
          return <NewTask key ={idx} data ={e}/>
        }
        if(e.completed){
          return <CompletedTask key={idx} data={e}/>
        }
        if(e.failed){
          return <RejectTask key={idx} data={e}/>
        }
       
      })}
        </div>
  )
}

export default TaskList
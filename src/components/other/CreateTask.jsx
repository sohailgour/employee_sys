
import React, { useState } from 'react'

const CreateTask = () => {
    const [TaskTittle, setTaskTittle] = useState('')
    const [TaskDate, setTaskDate] = useState('')
    const [AssignTo, setAssignTo] = useState('')
    const [Category, setCategory] = useState('')
    const [TaskDescription, setTaskDescription] = useState('')
    const [newtask, setNewTask] = useState({});
    const submitHandler =(e)=>{
        e.preventDefault();
        setNewTask({TaskTittle,TaskDate,AssignTo,Category,TaskDescription, newTask:true ,active:false,completed:false,failed:false})
       const  data = JSON.parse(localStorage.getItem('employees'))
       
       data.forEach((e) => {
        if(AssignTo === e.firstName){
           e.tasks.push(newtask)
          console.log(e);
        }
    });
    setTaskTittle('');
    setCategory('');
    setTaskDate('');
    setAssignTo('');
    setTaskDescription('');
        
    }
  return (
    <div className='p-5 bg-[#1c1c1c] w-full rounded '>
            <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input 
                        value={TaskTittle}
                        onChange={(e)=>{
                            setTaskTittle(e.target.value)
                        }}
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input 
                        value={TaskDate}
                        onChange={(e)=>{
                            setTaskDate(e.target.value)
                        }}
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
                        <input
                        value={AssignTo}
                        onChange={(e)=>{
                            setAssignTo(e.target.value)
                        }}
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                        value={Category}
                        onChange={(e)=>{
                            setCategory(e.target.value)
                        }}
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc' />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea
                    value={TaskDescription}
                    onChange={(e)=>{
                       setTaskDescription(e.target.value)
                    }}
                    className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>

            </form>
        </div>
  )
}

export default CreateTask
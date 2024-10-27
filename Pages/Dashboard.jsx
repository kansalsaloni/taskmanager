import React, { useEffect, useState } from 'react'
import '../Style/DashboardStyle.css';
import { IoPeopleOutline } from "react-icons/io5";

import DashboardCards from '../Component/DashboardCards';
import AddPeople from '../Component/AddPeople';

function Dashboard() {
    const date = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const [currentPeriod, setCurrentPeriod] = useState("week");
    const [openAddPeopleModel,setOpenAddPeopleModel]=useState(false)
    const [tasksValue, setTasksValue] = useState({
        backlog: [
          {
            type:'BACKLOG',
            title: 'Task 1 dnsjdnsjnd nejwfwfewr hiuwerhewuyrewfd ncjdhcksdsdf bkjcbkjbcdkjc',
            priority: 'low',
            checklist: { done: 1, total: 3 },
            dueDate: '10 Jan',
            assignedTo:'salonikansal@gmail.com'
          },
          {   type:'BACKLOG',
            title: 'Task 2',
            priority: 'high',
            checklist: { done: 2, total: 5 },
            dueDate: '15 Jan',
          },
        ],
        todo: [
          {
            type:'TO DO',
            title: 'Task 3',
            priority: 'moderate',
            checklist: { done: 0, total: 4 },
            dueDate: '12 Jan',
          },
        ],
        progress: [
          {
            type:'PROGRESS',
            title: 'Task 4',
            priority: 'high',
            checklist: { done: 1, total: 1 },
            dueDate: '20 Nov 2024',
          },
        ],
        done: [
          {
            type:'DONE',
            title: 'Task 5',
            priority: 'low',
            checklist: { done: 3, total: 3 },
            dueDate: '11 Nov 2024',
          },
        ],
      });
    
      const updateTaskType = (task, newType) => {
        const taskCategory = task.type;
        const newCategory = newType;

        setTasksValue(prevTasks => {
             const updatedCurrentCategory = prevTasks[taskCategory].filter(t => t.id !== task.id);
             
            const updatedTask = { ...task, type: newType };
            const updatedNewCategory = [...prevTasks[newCategory], updatedTask];
            
            return {
                ...prevTasks,
                 [taskCategory]: updatedCurrentCategory,
                [newCategory]: updatedNewCategory
            };
        });
    };

  return (
    <div className='dashboard-container'>
    <div className='welcome-container'>
      <h1 >
        Welcome! Saloni
      </h1>
      <p>12th Jan 2024</p>
    </div>

    <div className='dashboard-header'>
      <div className='dashboard-header-container'>
        <p className='title-board'>Board</p>
        <div className='add-people-icon' onClick={()=>setOpenAddPeopleModel(true)}>

        <IoPeopleOutline style={{ fontSize: '15px', color: 'gray' }} />
          <p>Add People</p>
        </div>
        {openAddPeopleModel&&(
<AddPeople setOpenAddPeopleModel={setOpenAddPeopleModel} openAddPeopleModel={openAddPeopleModel}/>
        )
}
      </div>

      <select
         value={currentPeriod}
        onChange={(e) => setCurrentPeriod(e.target.value)}
      >
        <option value="today">Today</option>
        <option value="week">This Week</option>
        <option value="month">This Month</option>
      </select>
    </div>

    <div className='cards'>
      <DashboardCards title="Backlog" task={tasksValue.backlog} updateTaskType={updateTaskType}/>
      <DashboardCards title="To do" task={tasksValue.todo} updateTaskType={updateTaskType}/>
      <DashboardCards title="In progress" task={tasksValue.progress} updateTaskType={updateTaskType}/>
      <DashboardCards title="Done" task={tasksValue.done} updateTaskType={updateTaskType}/>
    </div>
  </div>
  )
}

export default Dashboard


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
            id:1,
            type:'BACKLOG',
            title: 'Task 1 dnsjdnsjnd nejwfwfewr hiuwerhewuyrewfd ncjdhcksdsdf bkjcbkjbcdkjc',
            priority: 'low',
            checklist: [{ value: 'njdnd', checked: false }],
            dueDate: '10 Jan',
            assignedTo:'salonikansal@gmail.com'
          },
          {   id:2,
            type:'BACKLOG',
            title: 'Task 2',
            priority: 'high',
            checklist: [{ value: 'njdnd', checked: false }],
            dueDate: '15 Jan',
          },
        ],
        todo: [
          {
            id:1,
            type:'TO DO',
            title: 'Task 3',
            priority: 'moderate',
            checklist: [{ value: 'njdnd', checked: false }],
            dueDate: '12 Jan',
          },
        ],
        progress: [
          {
            id:1,
            type:'PROGRESS',
            title: 'Task 4',
            priority: 'high',
            checklist: [{ value: 'njdnd', checked: false }],
            dueDate: '20 Nov 2024',
          },
        ],
        done: [
          {
            id:1,
            type:'DONE',
            title: 'Task 5',
            priority: 'low',
            checklist: [{ value: 'njdnd', checked: false }],
            dueDate: '11 Nov 2024',
          },
        ],
      });
    
      const updateTaskType = (task, newType) => {
        const taskCategory = task.type.toLowerCase();
        const newCategory = newType.toLowerCase();
        setTasksValue(prevTasks => {
             const updatedCurrentCategory = prevTasks[taskCategory]?.filter(t => t.id !== task.id);
            const updatedTask = { ...task, type: newType };
            console.log(newCategory)

            const updatedNewCategory = [...prevTasks[newCategory], updatedTask];
            // console.log(prevTasks[newCategory])

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


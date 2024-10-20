import React , { useState } from 'react'
import '../Style/DashboardCardsStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus   } from '@fortawesome/free-solid-svg-icons';
import { VscCollapseAll } from "react-icons/vsc";
import TaskCard from './TaskCard';
import AddTaskModel from './AddTaskModel';


function DashboardCards({title,task}) {
const [addTaskModal, setAddTaskModal] = useState(false);

  return (
    <div className='cards-container'>
      <div className='cards-title-container'>
        <h2 >{title}</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "0 0.6rem" }}>
          {title === "To do" && (
           <FontAwesomeIcon
           icon={faPlus}
           style={{cursor:'pointer'}}
           onClick={()=>setAddTaskModal(true)}
         />  
          )}
          <VscCollapseAll size={25} fill="gray" />

            </div>

{addTaskModal&&(<AddTaskModel
          addTaskModal={addTaskModal}
          setAddTaskModal={setAddTaskModal}
        />)}
      </div>

      <div
        className='tasks-container'
        style={{ overflowY: "auto", height: "100%", paddingRight: "1rem" }}
      >
        {/* <TaskCard task={task}/> */}
        {task?.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  )
}

export default DashboardCards

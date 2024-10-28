import React , { useState } from 'react'
import '../Style/DashboardCardsStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus   } from '@fortawesome/free-solid-svg-icons';
import { VscCollapseAll } from "react-icons/vsc";
import TaskCard from './TaskCard';
import AddTaskModel from './AddTaskModel';


function DashboardCards({title,task,updateTaskType}) {
const [addTaskModal, setAddTaskModal] = useState(false);
const [collapseAllChecklists, setCollapseAllChecklists] = useState(false);

const handleCollapseAll = () => {
  setCollapseAllChecklists(prevState => !prevState);
};
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
          <VscCollapseAll size={25} fill="gray"  onClick={handleCollapseAll}
            style={{ cursor: 'pointer' }}/>

            </div>
      </div>
      {/* {addTaskModal&&(<AddTaskModel
          addTaskModal={addTaskModal}
          setAddTaskModal={setAddTaskModal}
          taskData={{}} 
          editingTask={false}
        />)} */}
      <div
        className='tasks-container'
        style={{ overflowY: "auto", height: "100%", paddingRight: "1rem" }} >
        <TaskCard task={task}  addTaskModal={addTaskModal}
          setAddTaskModal={setAddTaskModal} collapseAllChecklists={collapseAllChecklists}
          updateTaskType={updateTaskType} />
      </div>
     
    </div>
    
  )
}

export default DashboardCards

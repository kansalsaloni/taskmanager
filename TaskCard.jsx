import React, { useEffect, useState } from 'react'
import '../Style/TaskCardStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle,faChevronDown, faChevronUp,faEllipsisH   } from '@fortawesome/free-solid-svg-icons';
import '../Style/PublicPageStyle.css';
import LogoutModel from './LogoutModel';
import AddTaskModel from './AddTaskModel';

function TaskCard({task,addTaskModal,setAddTaskModal,collapseAllChecklists,updateTaskType }) {
    const [openTaskSetting, setOpenTaskSetting] = useState(false);
    const [openDeleteTaskModal, setOpenDeleteTaskModal] = useState(false);
    const [showChecklistData, setShowChecklistData] = useState(false);
const handleEditTask=(id)=>{
  console.log(addTaskModal)
  setAddTaskModal(!addTaskModal)
}
useEffect(() => {
  setShowChecklistData(!collapseAllChecklists);
}, [collapseAllChecklists]);

const taskType=['PROGRESS','TODO','DONE','BACKLOG'];

  return (
    <>
    {task?.map((task) => (
    <div className='task-card-container'>
    <div className='task-card-priority-container'>
      <div className='task-card-priority'>
      <FontAwesomeIcon icon={faCircle} style={{color:  task.priority === 'low' ? 'green' : 
      task.priority === 'high' ? 'red' : 
      task.priority === 'moderate' ? 'blue' : '#eeecec',
       fontSize:'10px'}}/>
        <p className='task-card-priority-value'>HIGH PRIORITY</p>
        {/* {task?.assignedTo && ( */}
          <p title={task?.assignedTo} className='task-assign-name'>
           SA
          </p>
        {/* )} */}
      </div>
      <FontAwesomeIcon
              icon={faEllipsisH}
              style={{ fontSize: '20px', cursor: "pointer"  }}
              onClick={() => setOpenTaskSetting(!openTaskSetting)}


            />
      {openTaskSetting && (
        <div className='task-edit-setting'>
          <p onClick={() => handleEditTask(task?._id)}>Edit</p>
          <p>Share</p>
          <p
            style={{ color: "red" }}
            onClick={() => setOpenDeleteTaskModal(true)}
          >
            Delete
          </p>
        </div>
      )}
{
  openDeleteTaskModal&&(
    <LogoutModel  openLogoutPopup={openDeleteTaskModal}
    setOpenLogoutPopup={setOpenDeleteTaskModal}
    title='Delete'
    id={task._id}/>
  )
}
{addTaskModal&&(<AddTaskModel
          addTaskModal={addTaskModal}
          setAddTaskModal={setAddTaskModal}
          taskData={openTaskSetting ? task : {}}
          editingTask={openTaskSetting ? true : false}
        />)}
    </div>

    <div className='task-title-container'>
      <h1 title={task?.title}>
      {task?.title?.length > 20 ? `${task.title.substring(0, 20)}...` : task.title}
      </h1>

      <div className='task-checklist-container'>
        <p>
          Checklist (1/3)
        </p>

        {showChecklistData ? (
            <FontAwesomeIcon
            icon={faChevronDown}
            onClick={() => setShowChecklistData(!showChecklistData)}
            size={20}
            className='show-checklist-icon'
          />
        ) : (
            <FontAwesomeIcon
            icon={faChevronUp}
    onClick={() => setShowChecklistData(!showChecklistData)}
            size={20}
            className='show-checklist-icon'
          />
        )}
      </div>
    </div>

    {showChecklistData && (
      <div className='checklist-inputs-container'>
 <div className='checklist-inputs'>
                <input type="checkbox" readOnly className='task-checkbox'  />
                <p className='task'>Task to be done</p>
              </div>
              <div className='checklist-inputs'>
                <input type="checkbox" readOnly  className='task-checkbox' />
                <p className='task'>Task to be done</p>
              </div>
              <div className='checklist-inputs'>
                <input type="checkbox" readOnly  className='task-checkbox' />
                <p className='task'>Task to be done</p>
              </div>
              <div className='checklist-inputs'>
                <input type="checkbox" readOnly  className='task-checkbox' />
                <p className='task'>This implementation will work without requiring an actual API, and you can replace the dummyTaskData later when you're ready to connect to the backend.</p>
              </div>
      </div>
    )}
    <div className='task-card-btns'>
      <div>
          <button className='due-date-btn'  style={{
    backgroundColor: 
     task.type === 'DONE' ? 'green' :
      new Date(task.dueDate) < new Date() || task.type === 'BACKLOG' ? 'red' : 'gray',
  }}>{task.dueDate}</button>
    
      </div>

      <div className='task-type-btns' >
      {taskType
    .filter((type) => type !== task.type)
    .map((type, index) => (
      <button key={index} className="task-type-btn" onClick={()=>updateTaskType(task,type)}>
        {type}
      </button>
    ))}
      </div>
    </div>
  </div>
  ))}
  </>
  )
}

export default TaskCard

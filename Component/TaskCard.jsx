import React, { useState } from 'react'
import '../Style/TaskCardStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle,faChevronDown, faChevronUp,faEllipsisH   } from '@fortawesome/free-solid-svg-icons';
import '../Style/PublicPageStyle.css';
import LogoutModel from './LogoutModel';

function TaskCard({task}) {
    const [openTaskSetting, setOpenTaskSetting] = useState(false);
    const [openDeleteTaskModal, setOpenDeleteTaskModal] = useState(false);
    const [showChecklistData, setShowChecklistData] = useState(false);

  return (
    <div className='task-card-container'>
    <div className='task-card-priority-container'>
      <div className='task-card-priority'>
      <FontAwesomeIcon icon={faCircle} style={{color:"#91c5cc" , fontSize:'10px'}}/> 
        <p className='task-card-priority-value'>HIGH PRIORITY</p>
        {/* {task?.assignedTo && ( */}
          <p title={task?.assignedTo} className='task-assign-name'>
           Saloni
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
          <p>Edit</p>
          <p 
        //   onClick={() => handleShareQuiz(task?._id)}
            >Share</p>
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
    title='Delete '/>
  )
}
    </div>

    <div className='task-title-container'>
      <h1 title={task?.title}>
       Hero section
      </h1>

      <div className='task-checklist-container'>
        <p>
          Checklist (1/3)
          {/* ({task?.checklist?.reduce((acc, t) => t.checked + acc, 0)}
          /{task?.checklist?.length}) */}
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
          <button className='due-date-btn'>10 feb</button>
    
      </div>

      <div className='task-type-btns'>
        {/* {filterType(task?.type)?.map((_) => ( */}
          <button
            // key={_}
            className='task-type-btn'
            // onClick={() => handleShiftTask(_)}
          >
            Progess
          </button>
        {/* ))} */}
      </div>
    </div>
  </div>
  )
}

export default TaskCard

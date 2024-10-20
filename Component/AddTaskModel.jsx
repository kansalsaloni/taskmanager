import React, { useState } from 'react'
import '../Style/AddTaskModelStyle.css';
import '../Style/PublicPageStyle.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle ,faTrash,faPlus } from '@fortawesome/free-solid-svg-icons';
function AddTaskModel({addTaskModal,setAddTaskModal}) {
    const [singleTask, setSingleTask] = useState({
        title: "",
        type: "todo",
        priority: "",
        checklist: [],
        assignTo: "",
        dueDate: "",
      }); 
    const [error, setError] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const handleCreateTask = async (e) => {
        e.preventDefault();

    }
    const handleCancel = () => {
    };
  const handleChangeTitle = (title) => {
  };
  const handleChangePriority = (priority) => {
  };
  const handleChangeAssignee = (asignee) => {
  };
  const handleChangeOptionCheckList = (i, checkVal) => {

  };
  const handleChangeOptionTask = (i, taskVal) => {
  };
  return (
    <div className='add-task-container-overlay'>
        <div className='add-task-container'>
        <form className='add-task-form' onSubmit={handleCreateTask}>
        <div className='add-task-top-container'>
          <label htmlFor="title">
            Title <span className='required-field'>*</span>
          </label>
          <input
            onChange={(e) => handleChangeTitle(e.target.value)}
            type="text"
            id="title"
            placeholder="Enter Task Title"
          />
        </div>

        <div className='add-task-priority-container'>
          <h4 className='select-priority'>
            Select Priority <span className='required-field'>*</span>
          </h4>

          <button
            onClick={() => handleChangePriority("high")}
            type="button"
            className='add-task-priority'
          >
            <FontAwesomeIcon icon={faCircle} style={{color:"#ff2473" , fontSize:'10px'}}/>
            <p>HIGH PRIORITY</p>
          </button>
          <button
            onClick={() => handleChangePriority("moderate")}
            type="button"
            className='add-task-priority'
          >
            <FontAwesomeIcon icon={faCircle} style={{color:"#ff2473" , fontSize:'10px'}}/>
            <p>MODERATE PRIORITY</p>
          </button>
          <button
            onClick={() => handleChangePriority("low")}
            type="button"
            className='add-task-priority'
          >
            <FontAwesomeIcon icon={faCircle} style={{color:"#ff2473" , fontSize:'10px'}}/>
            <p>LOW PRIORITY</p>
          </button>
        </div>

        {/* {currentUser?.myAssignies.length > 0 && ( */}
          <div className='add-task-assign-container'>
            <p>Assign to</p>

            <select
              onChange={(e) => handleChangeAssignee(e.target.value)}
              name=""
              id=""
            >
              <option value="">Add a assignee</option>
              {/* {currentUser?.myAssignies?.map((a) => ( */}
                <option >
                  {/* {a} */}
                </option>
               {/* ))} */}
            </select>
          </div>
         {/* )} */}
        <div className='add-task-checklist-container'>
          <p>
            Checklist(1/3)
             {/* (
            {singleTask?.checklist?.reduce((acc, t) => t.checked + acc, 0)}/
            {singleTask?.checklist.length}){" "} */}
            <span className='required-field'>*</span>
          </p>

          <div className='add-task-checklist-inputs'>
            {/* {singleTask.checklist?.map((t, _) => ( */}
              <div  className='add-task-checklist-input-container'>
                <div className='add-task-checklist-input'>
                  <input
                    type="checkbox"
                    checked={true}
                    className='input-checklist'
                    onChange={(e) =>
                        handleChangeOptionCheckList(e.target.checked)
                    }
                  />
                  <input
                    style={{ border: "none", outline: "none", width: "100%" ,color:'black'}}
                    type="text"
                    className='add-task-input-filed'
                    placeholder="Task content"
                    // value={t?.task}
                    onChange={(e) => handleChangeOptionTask( e.target.value)}
                  />
                </div>
                <FontAwesomeIcon icon={faTrash} style={{ fontSize: '14px', color: 'red' ,cursor: "pointer" }} />
              </div>
              <div  className='add-task-checklist-input-container'>
                <div className='add-task-checklist-input'>
                  <input
                    type="checkbox"
                    checked={true}
                    className='input-checklist'
                    onChange={(e) =>
                        handleChangeOptionCheckList(e.target.checked)
                    }
                  />
                  <input
                    style={{ border: "none", outline: "none", width: "100%" ,color:'black'}}
                    type="text"
                    className='add-task-input-filed'
                    placeholder="Task content"
                    // value={t?.task}
                    onChange={(e) => handleChangeOptionTask( e.target.value)}
                  />
                </div>
                <FontAwesomeIcon icon={faTrash} style={{ fontSize: '14px', color: 'red' ,cursor: "pointer" }} />
              </div>
              <div  className='add-task-checklist-input-container'>
                <div className='add-task-checklist-input'>
                  <input
                    type="checkbox"
                    checked={true}
                    className='input-checklist'
                    onChange={(e) =>
                        handleChangeOptionCheckList(e.target.checked)
                    }
                  />
                  <input
                    style={{ border: "none", outline: "none", width: "100%" ,color:'black'}}
                    type="text"
                    className='add-task-input-filed'
                    placeholder="Task content"
                    // value={t?.task}
                    onChange={(e) => handleChangeOptionTask( e.target.value)}
                  />
                </div>
                <FontAwesomeIcon icon={faTrash} style={{ fontSize: '14px', color: 'red' ,cursor: "pointer" }} />
              </div>
              <div  className='add-task-checklist-input-container'>
                <div className='add-task-checklist-input'>
                  <input
                    type="checkbox"
                    checked={true}
                    className='input-checklist'
                    onChange={(e) =>
                        handleChangeOptionCheckList(e.target.checked)
                    }
                  />
                  <input
                    style={{ border: "none", outline: "none", width: "100%" ,color:'black'}}
                    type="text"
                    className='add-task-input-filed'
                    placeholder="Task content"
                    // value={t?.task}
                    onChange={(e) => handleChangeOptionTask( e.target.value)}
                  />
                </div>
                <FontAwesomeIcon icon={faTrash} style={{ fontSize: '14px', color: 'red' ,cursor: "pointer" }} />
              </div>
             {/* ))} */}
          </div>

          <div className='add-new-task-filed'>
          <FontAwesomeIcon
           icon={faPlus}
           style={{cursor:'pointer',fontSize: '16px', }}
         />  
            Add New
          </div>
        </div>

        {/* {error && <div className='error'>{errorMessage}</div>} */}

        <div className='add-task-btns'>
          <div>
            <button
            //   onClick={openDatePicker}
              type="button"
              className='add-task-due-date-btn'
            >Select due date
              {/* {singleTask?.dueDate
                ? formatDate(singleTask?.dueDate)
                : "Select due date"} */}
            </button>
          </div>

          <div className='add-task-btn'>
            <button
            //   onClick={handleCancel}
              type="button"
              className='logout-cancel'
              style={{color:'red', borderColor:'red',width:'150px',height:'40px',padding:'0px',fontSize:'16px'}}
            >
              Cancel
            </button>
            <button type="submit" className='popup-logout-btn'  style={{borderRadius:'10px',width:'150px',height:'40px',padding:'0px',fontSize:'16px'}}>
              Save
            </button>
          </div>
        </div>
      </form>
    </div>  
    </div>
  )
}

export default AddTaskModel

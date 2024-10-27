import React, { useEffect, useState } from 'react'
import '../Style/AddTaskModelStyle.css';
import '../Style/PublicPageStyle.css';
import '../Style/TaskCardStyle.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle ,faTrash,faPlus ,faChevronDown} from '@fortawesome/free-solid-svg-icons';
import { createTask } from '../services/taskServices';
function AddTaskModel({addTaskModal,setAddTaskModal,taskData,editingTask}) {
  const isEditingTask = !!editingTask;
  const [showAssigneeDropdown, setShowAssigneeDropdown] = useState(false);
  const users = [
    { name: "SK", email: "salonikansal@gmail.com" },
    { name: "JD", email: "johndoe@example.com" },
  ];
  const [showDatePicker, setShowDatePicker] = useState(false); 
    const [task, setTask] = useState({
        title: "",
        type: "todo",
        priority: "",
        checklist: [],
        assignTo: "",
        dueDate: '',
      }); 
      useEffect(() => {
        if (editingTask && taskData) {
          setTask({
            title: taskData.title || "",
            type: taskData.type || "todo",
            priority: taskData.priority || "",
            checklist: taskData.checklist || [],
            assignTo: taskData.assignedTo || "",
            dueDate: taskData.dueDate || "",
          });
        }
      }, [editingTask,taskData]);
    
    const [error, setError] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const handleCreateTask = async (e) => {
        e.preventDefault();
        if(task?.title=== '' || task.priority==='')
        {
          alert('filed all manadatroy filed')
          return ;
        }
        if (task?.checklist?.length <1) {
          alert('Please add at least one checklist item.');
          return;
        }
    
    const hasCheckedItem = task.checklist.some(item => item.checked);
    const allChecklistItemsHaveTitles = task.checklist.every(item => item.title!== '');

    if(!hasCheckedItem)
    {
      alert('Please check at least one checklist item.');
      return;
    }
    if (!allChecklistItemsHaveTitles) {
      alert('Please provide a title for each checklist item.');
      return;
    }
       try{
        console.log("bdshbdsd");
        const taskCreate=await createTask(task);
        alert ('task created successfully');
        setAddTaskModal(!addTaskModal);
        setTask({
          title: "",
          type: "todo",
          priority: "",
          checklist: [
          ],
          assignTo: "",
          dueDate: "",
        });
       }catch(e)
       {
        throw 'Task Created failed';       }
        
    console.log('Task saved successfully:', task);
    }
  const handleAddChecklist=()=>{
    setTask(prevTask => ({
      ...prevTask,
      checklist: [...prevTask.checklist, { checked: false, value: '' }],
    }));
    }
const handleDeleteCheckList=(index)=>{

  setTask(prevTask=>({
    ...prevTask,
    checklist:prevTask.checklist.filter((_,i)=>i!==index)

  }))
}
    const handleCancel = () => {
      setAddTaskModal(!addTaskModal);
      setTask({
        title: "",
        type: "todo",
        priority: "",
        checklist: [
        ],
        assignTo: "",
        dueDate: "",
      });

    };
  const handleChangeTitle = (title) => {
    setTask(prev => ({ ...prev, title }));

  };
  const handleChangePriority = (priority) => {
    setTask(prev => ({ ...prev, priority }));  };

  const handleChangeAssignee = (asignee) => {
  };
  const handleChangeOptionCheckList = (index) => {
    setTask(prevTask => {
      const updatedChecklist = prevTask.checklist.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      );
      return { ...prevTask, checklist: updatedChecklist };
    });

  };
  const handleChangeOptionTaskTitle = (index, checkedTitle) => {
    setTask(prevTask => ({
      ...prevTask,
      checklist: prevTask.checklist.map((item, i) =>
        i === index ? { ...item, value: checkedTitle } : item
      ),
    }));
  };
  const handleDateChange = (date) => {
    if(date){
      const formattedDate = date.toLocaleDateString('en-GB');
    setTask(prevTask => ({
      ...prevTask,
      dueDate: formattedDate,
    }));
    setShowDatePicker(false);
  }
  };
  return (
    <div className='add-task-container-overlay'>
        <div className='add-task-container'>
        {showDatePicker && (
          <div className="date-picker-overlay">
            <DatePicker
selected={task.dueDate ? new Date(task.dueDate) : null} onChange={handleDateChange}
              inline  
            />
          </div>
        )}
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
            value={task.title}
          />
        </div>
        <div className='add-task-priority-container'>
          <h4 className='select-priority'>
            Select Priority <span className='required-field'>*</span>
          </h4>

          <button
            onClick={() => handleChangePriority("high")}
            type="button"
            className={`add-task-priority ${task.priority === 'high' ? 'active-priority':''}`}
          >
            <FontAwesomeIcon icon={faCircle} style={{color:"#ff2473" , fontSize:'10px'}}/>
            <p>HIGH PRIORITY</p>
          </button>
          <button
            onClick={() => handleChangePriority("moderate")}
            type="button"
            className={`add-task-priority ${task.priority === 'moderate' ? 'active-priority':''}`}
          >
            <FontAwesomeIcon icon={faCircle} style={{color:"blue" , fontSize:'10px'}}/>
            <p>MODERATE PRIORITY</p>
          </button>
          <button
            onClick={() => handleChangePriority("low")}
            type="button"
            className={`add-task-priority ${task.priority === 'low' ? 'active-priority':''}`}
          >
            <FontAwesomeIcon icon={faCircle} style={{color:"green" , fontSize:'10px'}}/>
            <p>LOW PRIORITY</p>
          </button>
        </div>

        {/* {currentUser?.myAssignies.length > 0 && ( */}
        <div className='add-task-assign-container'>
            <p>Assign to</p>
            <div className='custom-dropdown' onClick={() => setShowAssigneeDropdown(!showAssigneeDropdown)}>
              {task.assignTo || 'Select an assignee'}
              <FontAwesomeIcon
            icon={faChevronDown}
            size={20}
            onClick={() => setShowAssigneeDropdown(!showAssigneeDropdown)}
          />
            </div>
          </div>
        
        <div className='add-task-checklist-container'>
        {showAssigneeDropdown && (
              <div className='dropdown-menu'>
                {users.map((user, index) => (
                  <div key={index} className='dropdown-item'>
                    <span className='task-assign-name'>{user.name}</span>
                    <span className='user-email'>{user.email}</span>
                    <button 
                      className="add-task-due-date-btn" 
                      onClick={() => handleChangeAssignee(user.name)}
                    >
                      Assign
                    </button>
                  </div>
                ))}
              </div>
            )} 
          <p>
          Checklist ({(task.checklist || []).filter(item => item.checked).length}/{(task.checklist || []).length})
          <span className='required-field'>*</span>
          </p>
          
          <div className='add-task-checklist-inputs'>
            {
             task.checklist.map((checklistItem, index) => (
                <div  className='add-task-checklist-input-container' key={index}>
                <div className='add-task-checklist-input'>
                  <input
                    type="checkbox"
                    checked={checklistItem.checked}
                    className='input-checklist'
                    onChange={(e) =>
                        handleChangeOptionCheckList(index)
                    }
                  />
                  <input
                    style={{ border: "none", outline: "none", width: "100%" ,color:'black'}}
                    type="text"
                    className='add-task-input-filed'
                    placeholder="Task content"
                    value={checklistItem.value}   
                    onChange={(e) => handleChangeOptionTaskTitle(index,e.target.value)}
                  />
                </div>
                <FontAwesomeIcon icon={faTrash} style={{ fontSize: '14px', color: 'red' ,cursor: "pointer" }} onClick={()=>handleDeleteCheckList(index)}/>
              </div>
             ))       
            }  
              
          </div>

          <div className='add-new-task-filed' onClick={handleAddChecklist}>
          <FontAwesomeIcon
           icon={faPlus}
           style={{cursor:'pointer',fontSize: '14px', }}
         />  
            Add New
          </div>
          
        </div>

        {/* {error && <div className='error'>{errorMessage}</div>} */}

        <div className='add-task-btns'>
          <div>
            <button
              onClick={()=>
                setShowDatePicker(!showDatePicker)
               }
              type="button"
              className='add-task-due-date-btn'
            >
              {task?.dueDate
                ? task?.dueDate
                : "Select due date"}
            </button>
          </div>

          <div className='add-task-btn'>
            <button
              onClick={handleCancel}
              type="button"
              className='logout-cancel'
              style={{color:'red', borderColor:'red',width:'150px',height:'40px',padding:'0px',fontSize:'16px'}}
            >
              Cancel
            </button>
            <button type="submit" className='popup-logout-btn'  style={{borderRadius:'10px',width:'150px',height:'40px',padding:'0px',fontSize:'16px'}} onClick={handleCreateTask}>
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

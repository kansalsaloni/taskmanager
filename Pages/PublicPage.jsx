import React , { useEffect, useState }from 'react'
import '../Style/PublicPageStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { useParams } from "react-router-dom";
import LogoImage from '../assets/logo.svg';


function PublicPage() {
    const { taskId } = useParams();
    const [task, setTask] = useState({});
    const [error, setError] = useState("errornfn");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      }, [taskId]);

  return (
    <div className='public-main-container'>
    <div className='logo-heading'>
      <img src={LogoImage} alt="logo" />
      <p>Pro Manage</p>
    </div>

    {/* {loading ? (
      <p className='loader'>Loading...</p>
    ) : error ? (
      <p className='error'>{error}</p>
    ) : ( */}

      <div className='main-div'>
        <div className='main-div-center'>
          <div className='priority-main-container'>
            <div className='priority-container'>
              <FontAwesomeIcon icon={faCircle} style={{color: task?.priority === "low"
                    ? "#63c05b"
                    : task.priority === "moderate"
                    ? "#18b0ff"
                    : "#ff2473" , fontSize:'10px'}}/> HIGH

              <p>{task?.priority} PRIORITY</p>

              {task.assignedTo && (
                <p title={task?.assignedTo} className='task-assign'>
Saloni kansal </p>
              )}
            </div>
          </div>

          <div className='title-div'>
            <h1 title={task?.title} className='task-title'>
Hero Section
            </h1>

            <div className='checklist'>
              <p>
                Checklist (1/3)
                {/* Checklist (
                {task?.checklist?.reduce((acc, t) => t.checked + acc, 0)}/
                {task?.checklist?.length}) */}
              </p>
            </div>
          </div>

          <div className='checklist-inputs-container'>
            
            {/* {task?.checklist?.map((t) => ( */}
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
            {/* ))} */}
          </div>

          {/* {task.dueDate && ( */}
            <div className='due-date-container'>
              <p className='due-date'>Due Date</p>
              <button className='due-date-btn'>10 feb</button>
            </div>
         {/* )} */}
        </div>
      </div>
    {/* )}s */}
  </div>
  )
}

export default PublicPage

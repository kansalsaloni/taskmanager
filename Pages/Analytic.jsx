import React, { useEffect, useState } from "react";
import '../Style/AnalyticStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function Analytic() {
  const [analyticsData, setAnalyticsData] = useState({
    backlog: 0,
    todo: 0,
    inProgress: 0,
    completed: 0,
    lowPriority: 0,
    moderatePriority: 0,
    highPriority: 0,
    dueDate: 0,
  });

  useEffect(() => {
    setAnalyticsData({
      backlog: 5,
      todo: 5,
      inProgress: 5,
      completed: 5,
      lowPriority: 5,
      moderatePriority: 5,
      highPriority: 5,
      dueDate: 5,
    });
  }, []);

  const taskData = [
    { label: 'Backlog Tasks', value: analyticsData.backlog },
    { label: 'To-do Tasks', value: analyticsData.todo },
    { label: 'In-progress Tasks', value: analyticsData.inProgress },
    { label: 'Completed Tasks', value: analyticsData.completed },
  ];

  const priorityData = [
    { label: 'Low Priority', value: analyticsData.lowPriority },
    { label: 'Moderate Priority', value: analyticsData.moderatePriority },
    { label: 'High Priority', value: analyticsData.highPriority },
    { label: 'Due Date Tasks', value: analyticsData.dueDate },
  ];

  return (
    <div className="analytic-main-container">
      <h2>Analytics</h2>

      <div className="analytic-container">
        <div className="analytic-wrap">
          {taskData.map((task, index) => (
            <div className="analytic" key={index}>
              <p className="analytic-title-content">
                <FontAwesomeIcon icon={faCircle} style={{color:"#91c5cc" , fontSize:'10px'}}/> {task.label}
              </p>
              <strong>{task.value}</strong>
            </div>
          ))}
        </div>

        <div className="analytic-wrap">
          {priorityData.map((priority, index) => (
            <div className="analytic" key={index}>
              <p className="analytic-title-content">
                <FontAwesomeIcon icon={faCircle} style={{color:"#91c5cc" , fontSize:'10px'}} /> {priority.label}
              </p>
              <strong>{priority.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Analytic;

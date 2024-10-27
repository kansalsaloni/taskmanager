import React from 'react'
import '../Style/LogoutModelStyle.css';
import { useNavigate } from 'react-router-dom';
import { deleteTask } from '../services/taskServices';


function LogoutModel({openLogoutPopup,setOpenLogoutPopup,title,id}) {
  const navigate=useNavigate();
    const handleLogout = async () => {
    
      if(title==='Delete')
      {
        console.log(id)
        await deleteTask(id);
        alert('delete succss');
        setOpenLogoutPopup(!openLogoutPopup);
      }
      else{
        setOpenLogoutPopup(!openLogoutPopup);
      localStorage.removeItem('token');
    alert('logout successfluuy')     ;
 navigate('/');
      }
    }
  return (
    <div className='logout-container-overlay'>
        <div className='logout-container'>
        <p>{`Are you sure you want to ${title}?`}</p>
        <div className='logout-popup-buttons'>
        <button onClick={handleLogout} className='popup-logout-btn'>
          {`Yes, ${title}`}
        </button>
        <button
          onClick={() => setOpenLogoutPopup(false)}
          className='logout-cancel'
        >
          Cancel
        </button>
        </div>
      </div>
    </div>
  )
}

export default LogoutModel

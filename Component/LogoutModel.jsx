import React from 'react'
import '../Style/LogoutModelStyle.css';


function LogoutModel({openLogoutPopup,setOpenLogoutPopup,title}) {
    const handleLogout = async () => {
        setOpenLogoutPopup(false)
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

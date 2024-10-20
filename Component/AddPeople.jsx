import React, { useState } from 'react'
import '../Style/AddPeopleStyle.css';
import '../Style/LogoutModelStyle.css';

function AddPeople({openAddPeopleModel,setOpenAddPeopleModel}) {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [showSecondModel,setShowSecondModel]=useState(false);
    const handleCloseModal = () => {
        setEmail("");
        setError("");
       setOpenAddPeopleModel(false);
       setShowSecondModel(false);
      };
      const handleAddPeople=()=>{
        setShowSecondModel(true)

      }
  return (
    <div className='add-people-overlay-container'>
      <div className='add-people-container'>
{
    !showSecondModel?(
    <div className='add-people-div'>
    <p>Add people to the board</p>

    <form onSubmit={handleAddPeople} className='add-people-form'>
      <input
        type="email"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
        className='add-people-input'
      />
{error!=='' &&(
      <p className='error'>{error}</p>)}

      <div className='add-people-btns'>
        <button
          onClick={handleCloseModal}
          type="button"
          className='logout-cancel'
        >
          Cancel
        </button>
        <button type="submit" className='popup-logout-btn'>
          Add Email
        </button>
      </div>
    </form>
  </div>
    ):
  ( 
     <div className='show-email'>
    <p style={{ textAlign: "center" ,fontWeight:'bold'}}>
    salonikansal789@gmail.com added to board!
    </p>
      <button onClick={handleCloseModal} className='popup-logout-btn' style={{textAlign:'center'}}>
        Okay, Got it
      </button>
  </div>)
}
      </div>
    </div>
  )
}

export default AddPeople

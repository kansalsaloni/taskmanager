import React, { useState } from 'react';
import '../Style/SettingStyle.css';
import '../Style/LoginFormStyle.css';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope ,faLock, faEye, faEyeSlash ,faUser} from '@fortawesome/free-solid-svg-icons'; 

function Setting() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    const [error, setError] = useState({
      nameErr: "",
      emailErr: "",
      passwordErr: "",
      confirmPasswordErr: "",
    });
  
  
    const [responseError, setResponseError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleUpdateForm = async (e) => {
        e.preventDefault();
      };
      
  return (
    <div className='setting-main-container'>
    <h2>Settings</h2>

    <form className='form' onSubmit={handleUpdateForm}>
        <div className='input-main-container'>
          <div className='input-container'>
          <FontAwesomeIcon icon={faUser} />
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <p className='input-error'>{error.emailErr}</p>
        </div>
        <div className='input-main-container'>
          <div className='input-container'>
          <FontAwesomeIcon icon={faEnvelope} />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <p className='input-error'>{error.emailErr}</p>
        </div>

        <div className='input-main-container'>
          <div className='input-container'>
          <FontAwesomeIcon icon={faLock} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </div>
          <p className='input-error'>{error.passwordErr}</p>
        </div>
        <div className='input-main-container'>
          <div className='input-container'>
          <FontAwesomeIcon icon={faLock} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
          </div>
          <p className='input-error'>{error.confirmPasswordErr}</p>
        </div>

        <p className='input-error'>{responseError}</p>

        <button disabled={loading} className='btn' type="submit">
Update        </button>

      </form>
  </div>
  )
}

export default Setting

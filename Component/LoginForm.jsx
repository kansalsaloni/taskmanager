import React, { useState } from "react";
import '../Style/LoginFormStyle.css';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope ,faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; 


function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const [error, setError] = useState({
      emailErr: "",
      passwordErr: "",
    });
  
    const [responseError, setResponseError] = useState("");
    const [loading, setLoading] = useState(false);
  
    // const navigate = useNavigate();
  
    const handleLoginForm = async (e) => {    
    };
  
  return (
    <div className='form-main-containers'>
      <form className='form' onSubmit={handleLoginForm}>
        <h2>Login</h2>

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

        <p className='input-error'>{responseError}</p>

        <button disabled={loading} className='btn' type="submit">
           Log in
        </button>

        <p>Have no account yet?</p>

        <button
          className='without-fill-btn'
          type="button"  
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default LoginForm;

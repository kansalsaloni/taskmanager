import React, { useState } from "react";
import '../Style/LoginFormStyle.css';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope ,faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; 
import { loginUser } from "../services/userServices";


function LoginForm({setShowRegisterForm,showRegisterForm}) {
    const [showPassword, setShowPassword] = useState(false);
    const [loginFormData, setLoginFormData] = useState({
      email: '',
      password: '',
  
    });
    const [error, setError] = useState({
      emailErr: "",
      passwordErr: "",
    });
    const handleLoginFormChange = (e) => {
      const { name, value } = e.target;
      setLoginFormData({ ...loginFormData, [name]: value });
    };
    const handleToggle = () => {
      setShowRegisterForm(!showRegisterForm)
      setLoginFormData({ email: '', password: '' });      
      setError({});
    }
    const [loading, setLoading] = useState(false);
  
     const navigate = useNavigate();
     const validateLoginForm = () => {
      const newErrors = {};
      if (!loginFormData.email) {
        newErrors.email = 'Email is required';
      }
      if (!loginFormData.password) {
        newErrors.password = 'Password is required';
      }
      return newErrors;
    };
  
    const handleLoginForm = async (e) => {    
      e.preventDefault();
      const validationErrors = validateLoginForm();
      if (Object.keys(validationErrors).length > 0) {
        alert('enter field error')
        setError(validationErrors);
        return;
      }
      setError({});
      setLoading(true);
      try{
        const response = await loginUser(loginFormData);
        localStorage.setItem('token', response.token);
        alert('login successfully');
        console.log(response.token)
        navigate('/dashboard');
      }catch(err)
      {
        console.log(err);
      }  finally {
        setLoading(false); 
      }
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
              name="email"
              value={loginFormData.email}
              onChange={handleLoginFormChange}
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
              name="password"
              value={loginFormData.password}
              onChange={handleLoginFormChange}
            />
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} onClick={()=>setShowPassword(!showPassword)} />
          </div>
          <p className='input-error'>{error.passwordErr}</p>
        </div>
        <button disabled={loading} className='btn' type="submit">
           Log in
        </button>

        <p>Have no account yet?</p>

        <button
        disabled={loading}
          className='without-fill-btn'
          type="button"  
          onClick={()=>{handleToggle();
            setShowRegisterForm(true)}}
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default LoginForm;

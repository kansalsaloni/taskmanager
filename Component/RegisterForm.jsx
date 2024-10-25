import React, { useState } from "react";
import '../Style/LoginFormStyle.css';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope ,faLock, faEye, faEyeSlash ,faUser} from '@fortawesome/free-solid-svg-icons'; 
import {registerUser} from '../services/userServices'
function RegisterForm({setShowRegisterForm,showRegisterForm}) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    // const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    const [signUpFormData, setSignUpFormData] = useState({
      email: '',
      password: '',
      name: '',
      confirmPassword: '',
    });
  const navigate=useNavigate();
    const [error, setError] = useState({
      nameErr: "",
      emailErr: "",
      passwordErr: "",
      confirmPasswordErr: "",
    });
    const handleToggle = () => {
      setShowRegisterForm(!showRegisterForm)
        setSignUpFormData({ email: '', password: '', name: '', confirmPassword: '' });
      
      setError({});
    }
    const [loading, setLoading] = useState(false);
    const handleSignupFormChange = (e) => {
      const { name, value } = e.target;
      setSignUpFormData({ ...signUpFormData, [name]: value });
    };
    const validateSignUpForm = () => {
      const newErrors = {};
      if (!signUpFormData.name) {
        newErrors.name = 'Name is required';
      }
      if (!signUpFormData.email) {
        newErrors.email = 'Email is required';
      }
      if (!signUpFormData.password) {
        newErrors.password = 'Password is required';
      }
      if (signUpFormData.password !== signUpFormData.confirmPassword) {
        newErrors.confirmPassword = 'Password do not match';
      }
      return newErrors;
    };
    const handleRegisterForm = async (e) => {
        e.preventDefault();
        const validationErrors = validateSignUpForm();
        if (Object.keys(validationErrors).length > 0) {
          alert('enter field error')
          setError(validationErrors);
          return;
        }
        setError({});
        setLoading(true);
        try{
          const response = await registerUser(signUpFormData);
          alert('register successfully');
          console.log('done')
          setSignUpFormData({ email: '', password: '', name: '', confirmPassword: '' });
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
      <form className='form' onSubmit={handleRegisterForm}>
        <h2>Register</h2>
        <div className='input-main-container'>
          <div className='input-container'>
          <FontAwesomeIcon icon={faUser} />
            <input
              type="text"
              placeholder="Username"
              name="name"
              value={signUpFormData.name}
              onChange={handleSignupFormChange}          
                />
          </div>
          {/* <p className='input-error'>{error.emailErr}</p> */}
        </div>
        <div className='input-main-container'>
          <div className='input-container'>
          <FontAwesomeIcon icon={faEnvelope} />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={signUpFormData.email}
              onChange={handleSignupFormChange}          
            />
          </div>
          {/* <p className='input-error'>{error.emailErr}</p> */}
        </div>

        <div className='input-main-container'>
          <div className='input-container'>
          <FontAwesomeIcon icon={faLock} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={signUpFormData.password}
              onChange={handleSignupFormChange}   
            />
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} onClick={()=>setShowPassword(!showPassword)} />
          </div>
          {/* <p className='input-error'>{error.passwordErr}</p> */}
        </div>
        <div className='input-main-container'>
          <div className='input-container'>
          <FontAwesomeIcon icon={faLock} />
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              name="confirmPassword"
              value={signUpFormData.confirmPassword}
              onChange={handleSignupFormChange}   
            />
            <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye } onClick={()=>setShowConfirmPassword(!showConfirmPassword)} />
          </div>
          {/* <p className='input-error'>{error.confirmPasswordErr}</p> */}
        </div>

        {/* <p className='input-error'>{responseError}</p> */}

        <button disabled={loading} className='btn' type="submit">
Register        </button>

        <p>Have an account?</p>

        <button
        disabled={loading}
          className='without-fill-btn'
          type="button"  
          onClick={()=>
            {handleToggle();
              setShowRegisterForm(false)
            }
            }
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default RegisterForm

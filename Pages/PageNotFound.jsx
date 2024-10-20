import React from 'react'
import '../Style/PageNotFoundStyle.css';

function PageNotFound() {
  return (
    <div className='pnf-container'>
    <h2>Oops</h2>
    <h1 >404</h1>
    <p>Page Not Found!</p>
    <button className='btn'>Go Back To Home Page</button>
  </div>
  )
}

export default PageNotFound

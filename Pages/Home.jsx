import React, { useEffect, useState } from 'react'
import Sidebar from '../Component/Sidebar'
import Dashboard from './Dashboard'
import Analytic from './Analytic';
import Setting from './Setting';

function Home() {
  const [selectedPage, setSelectedPage] = useState(() => {
    const currentPath = window.location.pathname.slice(1); 
    return currentPath || 'dashboard'; 
  });  useEffect(() => {
      window.history.pushState(null, '', `/${selectedPage}`);
  }, [selectedPage]);
  return (
    <div className='home-main-container'>
      <Sidebar selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      {selectedPage==='dashboard' &&(
        <Dashboard />)}
      {selectedPage==='analytic' &&(
        <Analytic />)}
      {selectedPage==='setting' &&(
        <Setting />)}
    </div>
  )
}

export default Home

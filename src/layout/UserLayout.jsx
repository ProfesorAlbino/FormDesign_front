import React from 'react'
import Sidebar from '../components/Sidebar'
import '../styles/layout/UserLayoutStyle.css'

const UserLayout = ({ children, num}) => {
  return (
    <div className="mainContainer flex flex-col min-h-screen">

      <header>
      <Sidebar num={num}/>
      </header>

      <main className="flex-grow p-6 bg-gray-100">
        {children}
      </main>

      <footer>
      {/* <Footer /> */}
      </footer>
      
    </div>
  );
};

export default UserLayout
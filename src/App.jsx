import React from 'react'
import Navbar from './Components/Navbar'
import MainRoutes from './Routes/MainRoutes'

const App = () => {
  return (
    <div className='h-screen bg-[#0D0D0D] text-white'>
      <Navbar/>
      <MainRoutes/>
    </div>
  )
}

export default App

import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Sidebar from './utils/Sidebar'
// import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
  return (
    <>
    <Navbar/>
    <Sidebar/>

    {/* <Sidebar/> */}
    <Footer/>
    </>
  )
}

export default App

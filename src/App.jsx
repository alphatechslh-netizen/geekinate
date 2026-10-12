import React from 'react'
import Banner from './components/Banner'
import Stores from './components/Stores'
import About from './components/About'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Collab from './components/Collab'
import Contact from './components/Contact'
import End from './components/End'

const App = () => {
  return (
   <>
   <Navbar/>
   <Banner/>
   <Stores/>
   <About/>
   <Services/>
   <Collab/>
   <Contact/>
   <End/>
   
  
   </>
  )
}

export default App
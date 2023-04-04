import React, { useContext } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Intro from './component/Intro/Intro'
import Services from './component/Services/Services'
import Experience from './component/Experience/Experience'
import Work from './component/Works/Work'
import Portfolio from './component/Portfolio/Portfolio'
import Testinomial from './component/Testinomial/Testinomial'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Footer'
import { ThemeContext, themeContext } from './Context'

const App = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className='App' style={{
      background : darkMode ? 'black' : '',
      color : darkMode ? 'white' : '',
    }}>
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Work/>
      <Portfolio/>
      <Testinomial/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

import React, { useContext } from 'react';
import "./Services.css"
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card';
import MaterialIcon from '../Services/material.txt'
import { themeContext } from '../../Context';


const Services = () => {
  const theme = useContext (themeContext)
  const darkMode = theme.state.darkMode
  return (
   <div className="services" id='Services'>
    {/* left-side */}
    <div className="awesome">
     <span style={{color: darkMode? 'white': 'black'}}>My Awesome</span>
     <span>Services</span>
     <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim et, detur, quisquam veritatis at saepe? Nisi quaerat ab placeat ad repellat?</span><br />
     <span>Lorem ipsum, dolor sit amet consectetur adipisicing elloremque optio temporibus pariatur nulla.</span>
     <a href={MaterialIcon} target="_blank" download><button className="button s-button">Download</button></a>
     <div className="blur s-blur1" style={{background:"3ABF1FF94"}} ></div>
    </div>
    {/* right-side */}
    <div className="cards">
        <div style={{left:"14rem"}}>
            <Card
            emoji={HeartEmoji}
            heading = "Design"
            detail = "Html, Css, Javascript , BootStrap"
            />
        </div>
           <div style={{top:'12rem', left:'-4rem'}}>
            <Card
            emoji={Glasses}
            heading = "Developer"
            detail = "Html, Css, Javascript , BootStrap"
            />
            </div>
            <div style={{top:'20rem', left:'12rem'}}>
            <Card
            emoji={Humble}
            heading = "UI/UX"
            detail = "Html, Css, Javascript , BootStrap"
            />
            </div>
            <div className="blur s-blur2" style={{background:"var(--purple)"}} ></div>
    </div>
   </div>
  )
}

export default Services

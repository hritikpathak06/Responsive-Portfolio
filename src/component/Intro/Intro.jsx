import React from 'react'
import "./Intro.css"
import Github from "../../img/github.png"
import LinkedIn from '../../img/linkedin.png'
import Instagram from "../../img/instagram.png"
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import Boy from "../../img/boy.png"
import Thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import Glassesemoji from "../../img/glassesimoji.png"
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { Link } from 'react-scroll'

const Intro = () => {
    return (
        <div className='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am</span>
                    <span>Hritik Pathak</span>
                    <span>Full Stack Developer with good level of experience and development, production the Quality work</span>
                </div>
                <Link spy={true} to='Contact' smooth={true} >
                <button className="button i-button">Hire Me</button>
                </Link>
                
                <div className="intro-icon">
                    <a href="https://github.com/hritikpathak06" target="_blank"> <img src={Github} alt="github" /></a>
                    <a href="https://www.linkedin.com/in/ritik-kumar-pathak-b1a014256/" target="_blank"> <img src={LinkedIn} alt="LinkedIn" /></a>
                    <a href="https://www.instagram.com/___r__ocky___/" target="_blank">  <img src={Instagram} alt="Instagram" /></a>
                </div>
            </div>


            <div className="i-right">
                <img src={Vector1} alt="Vector1" />
                <img src={Vector2} alt="Vector2" />
                <img src={Boy} alt="Boy" />
                <img src={Glassesemoji} alt="Glassesemoji" />
                <div style={{top:'-10%', left:'68%'}}
                className='floatingDiv'
                >
                    <FloatingDiv style={{color:'red'}} 
                    image={Crown} 
                    txt1='Web'
                    txt2="Developer"
                    />
                </div>
                <div style={{top:'18rem', left:'0rem'}} className='floatingDiv'>
                    <FloatingDiv
                    image={Thumbup}
                    txt1 = "Best Design"
                    txt2 = "Award"
                    />
                </div>
                {/* blur dives */}
                <div className='blur' style={{background:'rgb(238 210 255'}}></div>
                <div className='blur'
                style={{
                    background:"gray",
                    top:'17rem',
                    width:'21rem',
                    height:'11rem',
                    left:'-9rem'
                }}
                ></div>
            </div>
        </div>
    )
}

export default Intro

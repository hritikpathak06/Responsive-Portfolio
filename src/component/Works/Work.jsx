import React from 'react'
import './Work.css'
import MaterialIcon from '../Services/material.txt'
import Upwork from '../../img/Upwork.png'
import Fiverr from "../../img/fiverr.png"
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'


const Work = () => {
    return (
        <div className="works">
            <div className="awesome">
                <span>Open to Work</span>
                <span>Brands And Clients</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim et, detur, quisquam veritatis at saepe? Nisi quaerat ab placeat ad repellat?</span><br />
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elloremque optio temporibus pariatur nulla.</span>
                <br />
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ea quis accusamus impedit officia placeat unde vel tempora deleniti vitae numquam nesciunt aperiam eius enim maxime nam. Suscipit iste ex ab cum dolore fugiat, eos, consequuntur sed dolorum maxime facere.</span>
                <br />
                
                <a href={MaterialIcon} target="_blank" download><button className="button s-button">Hire Me</button></a>
                <div className="blur s-blur1" style={{ background: "3ABF1FF94" }} ></div>
            </div>
            {/* Right sides */}
            <div className="m-right">
                <div className="m-mainCircle">
                    <div className="m-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="m-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="m-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="m-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="m-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </div>
                {/* baxckground circles */}
                <div className="m-backCircle blueCircle"></div>
                <div className="m-backCircle redCircle"></div>
            </div>
        </div>
    )
}

export default Work

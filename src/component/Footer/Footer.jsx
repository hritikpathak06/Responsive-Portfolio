import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div className="footer">
     <img src={Wave} alt="" style={{width:'100%'}} />
     <div className="f-content">
     <span>phritik06@gmail.com</span>
        <div className="f-icons">
              <InstagramIcon style={{color:'black', fontSize:'3rem'}} className='f-icon'/>
              <FacebookIcon style={{color:'black', fontSize:'3rem'}} className='f-icon'/>
              <GitHubIcon style={{color:'black', fontSize:'3rem'}} className='f-icon'/>
        </div>
     </div>
    </div>
  )
}

export default Footer

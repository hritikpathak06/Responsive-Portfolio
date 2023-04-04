import React, { useContext } from 'react'
import "./Toggle.css"
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { themeContext } from '../../Context';


const Toggle = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    const handleClick = () => {
        theme.dispatch({type: 'toggle'})
    }

    return (
        <div className="toggle" onClick={handleClick}>
            <DarkModeIcon style={{fontSize:'1rem'}}  />
            <LightModeIcon style={{fontSize:'1rem'}} />
            <div className="t-button" 
            style={
                darkMode ? {left:'2px'} : {right:'1.7px'}
            }></div>
        </div>
    )
}

export default Toggle

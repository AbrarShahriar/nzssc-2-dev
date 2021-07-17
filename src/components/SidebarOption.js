import React from 'react'
import './SidebarOption.css'
import Fade from "react-reveal/Fade";
import { useHistory } from 'react-router-dom'

function SidebarOption({ to, name, Icon, delay }) {
    const history = useHistory()
    return (
        <Fade left delay={delay*100}>
           <div className="sidebar__option">
                <Icon />
                <span className='link' onClick={() => history.push(to)}>{name}</span>
            </div>
        </Fade>
    )
}

export default SidebarOption

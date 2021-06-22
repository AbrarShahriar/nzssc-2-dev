import React from 'react'
import './SidebarOption.css'
import Fade from "react-reveal/Fade";
import { Link } from 'react-router-dom'

function SidebarOption({ to, name, Icon, delay }) {
    return (
        <Fade left delay={delay*100}>
           <div className="sidebar__option">
                <Icon />
                <Link className='link' to={to}>{name}</Link>
            </div>
        </Fade>
    )
}

export default SidebarOption

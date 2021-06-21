import React from 'react'
import './Title.css'

function Title({ title, Icon }) {
    return (
        <div className='title'>
            {Icon && <Icon />}
            <span>{title}</span>
        </div>
    )
}

export default Title

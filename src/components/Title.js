import React from 'react'
import './Title.css'

function Title({ title, Icon, year }) {
    return (
        <div className='title'>
            {Icon && <Icon />}
            <span>{title}  {year && `${year}-${year+1}`}</span>
        </div>
    )
}

export default React.memo(Title)

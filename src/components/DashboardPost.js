import React from 'react'
import './DashboardPost.css'
import { Link, useHistory } from 'react-router-dom'
import { ButtonGroup, IconButton } from '@material-ui/core'
import { Add, Done, LinkOutlined } from '@material-ui/icons'

const formatTopic = topic => {
    return topic.includes('&') 
        ? topic.split('&').join(' & ') 
        : (topic === 'bookreview') 
            ? 'book review'
            : topic
        ;
}

function DashboardPost({ img, title, authorName, topic, id }) {
    const history = useHistory()
    return (
        <div className="dashboard__post">
            <img src={img} alt=""/>
            <div className="dashboard__postInfo">
                <span className='dashboard__postTitle'>
                    <Link target='_blank' to={`/${topic}/${id}`}>{title}</Link>
                </span>
                <span className='dashboard__postAuthorName'>by {authorName}</span>
                <span className='dashboard__postTopic'>{formatTopic(topic)}</span>
            </div>
            <div className="dashboard__postActions">
                <ButtonGroup
                    size='large'
                    color='secondary'
                >
                    <IconButton onClick={() => history.push(`/${topic}/${id}`)} >
                        <LinkOutlined />
                    </IconButton>
                    <IconButton onClick={() => alert('deleted')} > 
                        <Add className='dashboard__postDelete'/>
                    </IconButton>
                    <IconButton onClick={() => alert('approved')} >
                        <Done />
                    </IconButton>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default DashboardPost

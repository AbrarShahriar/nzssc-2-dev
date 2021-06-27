import React, { useState } from 'react'
import { useStateValue } from '../StateProvider'
import './PostContent.css'
import Tiny from '../components/editor/Tiny'
import { Select } from '@material-ui/core'

function PostContent() {
    const [{ user }, dispatch] = useStateValue()
    const [topic, setTopic] = useState('')


    const handleTopicChange = e => {
        setTopic(e.target.value)
    }

    return (
        <div className='postContent'>
           <div className="postContent__content">
               <h1>Post Your Content</h1>

                <div className="postContent__inputs">

                    <div className="postContent__input">
                        <span>Select Topic:</span>
                        <Select
                            native
                            value={topic}      
                            onChange={handleTopicChange} 
                        >
                            <option value='news'>News</option>
                            <option value='article'>Article</option>
                            <option value='bookreview'>Book Review</option>
                        </Select>
                    </div>

                    <div className="postContent__input">
                        <span>Title: </span>
                        <input type="text" name='title' placeholder='Title of your post...' />
                    </div>

                    <div className="postContent__input editor">
                        <span>Cover:</span>
                        <input type="file" name='file' />
                    </div>

                    <div className="postContent__input">
                        <span>Post Body:</span>
                        <Tiny />
                    </div>

                    <div className="postContent__input">
                        <span>Tags:</span>
                        <input type="text" name='title' />
                    </div>

                    

                </div>
           </div>
        </div>
    )
}

export default PostContent

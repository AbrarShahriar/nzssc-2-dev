import React, { useState } from 'react'
import { useStateValue } from '../StateProvider'
import './PostContent.css'
import Tiny from '../components/editor/Tiny'
import { Select, Modal, IconButton } from '@material-ui/core'
import { CloudUploadOutlined, Add, Done } from '@material-ui/icons'

function PostContent() {
    const [{ user }, dispatch] = useStateValue()
    const [topic, setTopic] = useState('')
    const [coverPhotoModal, setCoverPhotoModal] = useState(false)

    const handleTopicChange = e => {
        setTopic(e.target.value)
    }

    const handleCoverPhotoModalClose = () => {
        setCoverPhotoModal(false)
    }

    return (
        <div className='postContent'>
           <div className="postContent__content">
               <h1>Post Your Content</h1>

                <div className="postContent__inputs">

                    <div className="postContent__input">
                        <span>Title *</span>
                        <input required type="text" name='title' placeholder='Title of your post...' />
                    </div>

                    <div className="select-tag">
                        <div className="postContent__input">
                            <span>Select Topic *</span>
                            <Select
                                required
                                native
                                value={topic}      
                                  onChange={handleTopicChange} 
                                variant='outlined'
                            >
                                <option value='news'>News</option>
                                <option value='article'>Article</option>
                                <option value='bookreview'>Book Review</option>
                            </Select>
                        </div>
                        <div className="postContent__input">
                            <span>Tags </span>
                            <input placeholder='tag' type="text" name='title' />
                        </div>
                    </div>

                    <div className="postContent__input editor">
                        
                        <span onClick={() => setCoverPhotoModal(true)} className='label__file' ><CloudUploadOutlined className='icon__upload' /> Upload/Link cover photo</span>

                        <Modal
                            open={coverPhotoModal}
                            onClose={handleCoverPhotoModalClose}
                        >
                            <div className="modal__upload-link">
                                <div className="upload-link-container">

                                    <div className="upload-link__header">
                                        <h3>Upload or Link</h3>
                                        <span onClick={handleCoverPhotoModalClose}><Add /></span>
                                    </div>

                                    

                                    <div className="upload-link__body">
                                        <input type="text" placeholder='Image Link...' />

                                        <p>or</p>

                                        <label for='file' className='label__file modal__upload__btn' ><CloudUploadOutlined className='icon__upload' />Upload</label>
                                        <input className='cover-photo' required type="file" name='file' id='file' />
                                    </div>

                                    <div className="upload-link__footer">
                                        <IconButton onClick={handleCoverPhotoModalClose} >
                                            <Done />
                                        </IconButton>
                                    </div>
                                    
                                </div>
                            </div>
                        </Modal>
                    </div>

                    <div className="postContent__input">
                        <span>Post Body *</span>
                        <Tiny />
                    </div>

                    <div className="postContent__actions">
                        <button className='save-as-draft action-btn'>Save as draft</button>
                        <button className='publish action-btn'>Publish</button>
                    </div>

                </div>
           </div>
        </div>
    )
}

export default PostContent

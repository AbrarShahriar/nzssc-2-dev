
import './PostContent.css'
import { Select, Modal, IconButton } from '@material-ui/core'
import { CloudUploadOutlined, Add, Done } from '@material-ui/icons'

import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/silver'
import 'tinymce/icons/default'
import 'tinymce/skins/ui/oxide/skin.min.css'

import 'tinymce/plugins/advlist'
import 'tinymce/plugins/autolink'
import 'tinymce/plugins/link'
import 'tinymce/plugins/image'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/charmap'
import 'tinymce/plugins/hr'
import 'tinymce/plugins/anchor'
import 'tinymce/plugins/spellchecker'
import 'tinymce/plugins/searchreplace'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/code'
import 'tinymce/plugins/fullscreen'
import 'tinymce/plugins/insertdatetime'
import 'tinymce/plugins/media'
import 'tinymce/plugins/nonbreaking'
import 'tinymce/plugins/table'
import 'tinymce/plugins/template'
import 'tinymce/plugins/help'
import { useStateValue } from '../StateProvider';
import { db } from '../firebase'
import firebase from 'firebase';

const allPlugins = [
  'advlist autolink lists link image charmap print preview anchor',
  'searchreplace visualblocks code fullscreen',
  'insertdatetime media table paste code help wordcount'
]

const pluginsUsed = [
  'lists link image',
  '',
  'media help'
]

const showUsernameOrEmail = user => {
    if(!user.displayName) return user.email.split('@')[0]
    return user.displayName
}

function PostContent() {
    const [{ user, postDataDraft }, dispatch] = useStateValue()

    //editor stuff
    const editorRef = useRef(null);
    
    const handleSave = () => {
        if (editorRef.current) {
        dispatch({
            type: 'SET_POST-DATA_DRAFT',
            postDataDraft: {
                ...postData, 
                body: editorRef.current.getContent()
            }
        })
        }
    };
    
    const handleReady = (evt, editor) => {
        editorRef.current = editor
    }

    //component
    const [coverPhotoModal, setCoverPhotoModal] = useState(false)
    const [postData, setPostData] = useState(postDataDraft)

    const handlePostDataChange = e => {
        setPostData({
            ...postData,
            [e.target.name]: e.target.value
        })
    }

    const handleCoverPhotoModalClose = () => {
        setCoverPhotoModal(false)
    }


    //firebase
    const handlePublish = e => {
        e.preventDefault()
        // alert(JSON.stringify({...postData, body: editorRef.current.getContent() }, null, 5))
        db.collection(postData.topic).add({
            ...postData,
            body: editorRef.current.getContent(),

            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            published: false,
            likes: 0,
            authorName: showUsernameOrEmail(user)
        })
        .then(docRef => {
            alert('Successful')
        })
        .catch(err => alert(err.message))
    }
    
    if(!user) return <p>You dont have access to this page. Only logged in users can post content.</p>


    return (
        <div className='postContent'>
           <div className="postContent__content">
               <h1>Post Your Content</h1>

                <div className="postContent__inputs">

                    <div className="postContent__input">
                        <span>Title *</span>
                        <input value={postData.title} onChange={handlePostDataChange} required type="text" name='title' placeholder='Title of your post...' />
                    </div>

                    <div className="select-tag">
                        <div className="postContent__input">
                            <span>Select Topic *</span>
                            <Select
                                required
                                native
                                value={postData.topic}      
                                onChange={handlePostDataChange} 
                                variant='outlined'
                                name='topic'
                            >
                                {(user.email === 'admin@gmail.com') &&
                                    <option value='news'>News</option>
                                }
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
                        
                        <span onClick={() => setCoverPhotoModal(true)} className='label__file__post' ><CloudUploadOutlined className='icon__upload' /> Upload/Link cover photo</span>

                        <Modal
                            open={coverPhotoModal}
                            onClose={handleCoverPhotoModalClose}
                        >
                            <div className="modal__upload-link">
                                <div className="upload-link-container">

                                    <div className="upload-link__header">
                                        <h3>Upload or Link</h3>
                                        <span className='icon__close' onClick={handleCoverPhotoModalClose}><Add /></span>
                                    </div>

                                    

                                    <div className="upload-link__body">
                                        <input 
                                            value={postData.cover} 
                                            onChange={handlePostDataChange}
                                            type="text" 
                                            name='cover'
                                            placeholder='Image Link...'
                                        />

                                        <p>or</p>

                                        <label for='file' className='label__file modal__upload__btn' ><CloudUploadOutlined className='icon__upload' />Upload</label>
                                        <input className='cover-photo' required type="file" name='file' id='file' />
                                    </div>

                                    <div className="upload-link__footer">
                                        <IconButton onClick={handleCoverPhotoModalClose} >
                                            <Done className='icon__okay'/>
                                        </IconButton>
                                    </div>
                                    
                                </div>
                            </div>
                        </Modal>
                    </div>

                    <div className="postContent__input">
                        <span>Post Body *</span>
                        
                        <Editor
                            // apiKey="myfnrt2tanaib58d4bteam4av4hu084vxinmrlekti85rp4k"
                            onInit={handleReady}
                            initialValue={postData.body}
                            init={{
                            height: 500,
                            menubar: false,
                            plugins: pluginsUsed,
                            toolbar: 'undo redo | formatselect | link | ' +
                            'bold italic backcolor | image media |  alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                        />

                        <div className="postContent__actions">
                            <button onClick={handleSave} className='save-as-draft action-btn'>Save as draft</button>
                            <button onClick={handlePublish} className='publish action-btn'>Publish</button>
                        </div>
                    </div>

                </div>
           </div>
        </div>
    )
}

export default PostContent

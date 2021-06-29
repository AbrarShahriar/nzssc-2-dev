import { IconButton, Modal } from '@material-ui/core'
import { Add, CloudUploadOutlined, Done } from '@material-ui/icons'
import React, { useState } from 'react'
import './DashboardMember.css'
import ss from '../images/ss.jpg'


function DashboardMember({ name, title, img }) {
    const [editMemberModal, setEditMemberModal] = useState(false)

    const handleEditMemberModalClose = () => {
        setEditMemberModal(false)
    }
    return (
        <div className="dashboard__member">
            <img src={img} alt=""/>
            <div className="dashboard__memberInfo">
                <span className='member__title'>{title}</span>
                <span className='member__name'>{name}</span>
                <button onClick={() => setEditMemberModal(true)}>Edit</button>
            </div>
            <Modal
                open={editMemberModal}
                onClose={handleEditMemberModalClose}
            >
                <div className="modal__edit-member">
                    <div className="edit-member-container">

                        <div className="edit-member__header">
                            <h3>Edit Member Info</h3>
                            <span className='icon__close' onClick={handleEditMemberModalClose}><Add /></span>
                        </div>

                        <div className="edit-member__body">


                            <input type="text" placeholder='Member Title' value={title} />
                            <input type="text" placeholder='Member Name' value={name} />

                            <input type="text" placeholder='Image Link...' />

                            <p>or</p>

                            <label for='file' className='label__file modal__upload__btn' ><CloudUploadOutlined className='icon__upload' />Upload</label>
                            <input className='cover-photo' required type="file" name='file' id='file' />
                        </div>

                        <div className="edit-member__footer">
                            <IconButton onClick={handleEditMemberModalClose} >
                                <Done className='icon__okay'/>
                            </IconButton>
                        </div>
                        
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default DashboardMember

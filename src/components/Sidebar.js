import { Divider } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import { Announcement, Email, Facebook, Group, Home, LibraryBooksOutlined, MenuBook, Message } from '@material-ui/icons'
import banner from '../images/banner.png'

function Sidebar() {
    return (
        <div className='sidebar'>

            <div className="sidebar__header">
                <div className="sidebar__banner">
                    <img src={banner} alt=""/>
                </div>
            </div>

            <Divider className='divider'/>

            <div className="sidebar__body">
                <div className="side__options">
                    <div className="sidebar__option --active__option">
                        <Home />
                        <Link to='/'>Home</Link>
                    </div>
                    <div className="sidebar__option">
                        <Announcement />
                        <Link to='news&notices'>News & Notices</Link>
                    </div>
                    <div className="sidebar__option">
                        <LibraryBooksOutlined />
                        <Link to='articles'>Articles</Link>
                    </div>
                    <div className="sidebar__option">
                        <MenuBook />
                        <Link to='/bookreview'>Book Review</Link>
                    </div>
                    <div className="sidebar__option">
                        <Group />
                        <Link to='/about'>About Us</Link>
                    </div>
                </div>
            </div>

            <div className="sidebar__footer">
                <div className="sidebar__footer__container">
                    <h4>Contact Us</h4>
                    <div className="sidebar__footer__options">
                        <div className="sidebar__footer__option">
                            <Email />
                            <span>mail2020@gmail.com</span>
                        </div>
                    </div>
                    <div className="sidebar__footer__options">
                        <div className="sidebar__footer__option">
                            <Facebook />
                            <span>fb.com/NZSSC</span>
                        </div>
                    </div>
                    <div className='sidebar__footer__messenger'>
                        <span>Send us a message </span>
                        <Message />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar

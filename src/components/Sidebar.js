import { Avatar, Divider, IconButton, Modal } from '@material-ui/core'
import React, { useState } from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import { Add, AddBox, Announcement, Email, ExitToApp, Facebook, Group, Home, LibraryBooksOutlined, MenuBook, Message, SecurityRounded, VpnKeySharp } from '@material-ui/icons'
import banner from '../images/banner.png'
import SidebarOption from './SidebarOption'

import { useStateValue } from "../StateProvider";

import loginBg from '../images/login-full.png'

const routes = [
    {
        name: 'Home',
        to: '/',
        Icon: Home
    },
    {
        name: 'News & Notices',
        to: '/news&notices',
        Icon: Announcement
    },
    {
        name: 'Articles',
        to: '/articles',
        Icon: LibraryBooksOutlined
    },
    {
        name: 'Book Review',
        to: '/bookreview',
        Icon: MenuBook
    },
    {
        name: 'About Us',
        to: '/about',
        Icon: Group
    }
]

function Sidebar() {

    const [{ user }, dispatch] = useStateValue()

    const [loginModalState, setloginModalState] = useState(false)

    const handleLoginModalState = () => {
        setloginModalState(false)
    }

    const handleSubmit = e => {
        e.preventDefault()
        e.stopPropagation()

        dispatch({
            type: 'SET_USER',
            user: 'Abrar'
        })

        handleLoginModalState()
    }
    
    return (
        <div className='sidebar '>

            <div className="sidebar__header">
                <div className="sidebar__header__container">
                    
                    {user
                    ?
                        <div className="loggedIn">
                            <Avatar />
                            <div className="user__info">
                                <span>Abrar Shahriar</span>
                                {/* <span>Role</span> */}
                            </div>  
                            <IconButton className='logout__btn'>
                                <ExitToApp onClick={() => dispatch({
                                    type: 'SET_USER',
                                    user: null
                                })} />
                            </IconButton>
                        </div>
                    :
                        <div className="not__loggedIn">
                            <Link onClick={() => setloginModalState(true)}>Join Us</Link>
                        </div>
                    }

                </div>
            </div>

            <Divider className='divider'/>

            <div className="sidebar__body">
                <div className="side__options">
                    {routes.map((route, i) => (
                        <SidebarOption 
                            delay={i} 
                            name={route.name} 
                            to={route.to} 
                            Icon={route.Icon}
                        />
                    ))}

                    {user && 
                        <SidebarOption  
                            delay={0}
                            name='Post Content' 
                            to='/new' 
                            Icon={AddBox}
                        />
                    }
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


            <Modal 
                open={loginModalState}
                onClose={handleLoginModalState}
            >
                <div className="login__modal">
                    <form>

                        <div className="main">
                            <h1>Log in</h1>

                            <div className="form__inputs">
                                <div className="form__input">
                                    <Email />
                                    <input type="email" name="email" placeholder='Email' />
                                </div>
                                <div className="form__input">
                                    <VpnKeySharp />
                                    <input type="password" name="password" placeholder='Password' />
                                </div>

                                <button onClick={handleSubmit}>Log in</button>
                            </div>
                            
                        </div>

                        <img src={loginBg} alt=""/>
                        <IconButton onClick={handleLoginModalState} className='cross'>
                            <Add  />
                        </IconButton>
                    </form>
                </div>
            </Modal>

        </div>
    )
}

export default Sidebar

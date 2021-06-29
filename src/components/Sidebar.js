import { LoginModal } from './LoginModal';
import { Avatar, Divider, IconButton, Modal } from '@material-ui/core'
import React, { useState } from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import { AddBox, AnnouncementOutlined, Email, ExitToApp, Facebook, LibraryBooksOutlined, Message, HomeOutlined, GroupOutlined, MenuBookOutlined, DashboardOutlined } from '@material-ui/icons'
import SidebarOption from './SidebarOption'

import { useStateValue } from "../StateProvider";

// import loginBg from '../images/login-bg-svg1.svg'
import bg from '../images/sidebar-bg1.png'
import AuthTabs from './AuthTabs';

const routes = [
    {
        name: 'Home',
        to: '/',
        Icon: HomeOutlined
    },
    {
        name: 'News & Notices',
        to: '/news&notices',
        Icon: AnnouncementOutlined
    },
    {
        name: 'Articles',
        to: '/articles',
        Icon: LibraryBooksOutlined
    },
    {
        name: 'Book Review',
        to: '/bookreview',
        Icon: MenuBookOutlined
    },
    {
        name: 'About Us',
        to: '/about',
        Icon: GroupOutlined
    }
]

function Sidebar() {

    const [{ user }, dispatch] = useStateValue()

    const [loginModalState, setloginModalState] = useState(false)


    const handleLoginModalState = () => {
        setloginModalState(false)
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
                    <>
                        <SidebarOption  
                            delay={0}
                            name='Post Content' 
                            to='/new' 
                            Icon={AddBox}
                        />
                        <SidebarOption  
                            delay={0}
                            name='Dashboard' 
                            to='/dashboard' 
                            Icon={DashboardOutlined}
                        />
                    </>
                    }
                </div>
            </div>

            <div className="sidebar__footer">
                <img className='sidebar__bg' src={bg} alt=""/>
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
                <AuthTabs 
                    handleLoginModalState={handleLoginModalState}
                />
            </Modal>

        </div>
    )
}

export default Sidebar

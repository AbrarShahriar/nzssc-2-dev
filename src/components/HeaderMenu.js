import { AnnouncementOutlined, LibraryBooksOutlined, HomeOutlined, GroupOutlined, MenuBookOutlined, MoreVertSharp, AddBoxOutlined, DashboardOutlined, PersonAddOutlined } from '@material-ui/icons'
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import { useStateValue } from "../StateProvider";


import './HeaderMenu.css'

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
    },
    {
        name: 'Join Us',
        to: '/login',
        Icon: PersonAddOutlined
    },
]

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function HeaderMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const history = useHistory()
  const [{ user }, dispatch] = useStateValue() 
  
  const handleMenuItemClick = (route) => {
    history.push(route)
  }

  return (
    <div className='headerMenu'>
      <IconButton
        onClick={handleClick}
        className='headerMenu__btn'
      >
        <MoreVertSharp />
      </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        >

        {routes.map((route, i) => (
            <StyledMenuItem onClick={e => handleMenuItemClick(route.to)} >
            <ListItemIcon>
                <route.Icon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={route.name} />
            </StyledMenuItem>
        ))}

        {user &&
            <StyledMenuItem onClick={e => handleMenuItemClick('/new')} >
            <ListItemIcon>
                <AddBoxOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={'Post Content'} />
            </StyledMenuItem>
        }

       {user &&
           <StyledMenuItem onClick={e => handleMenuItemClick('/dashboard')} >
            <ListItemIcon>
                <DashboardOutlined fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={'Dashboard'} />
            </StyledMenuItem>
        }
     
        </StyledMenu>
        
    </div>
  );
}
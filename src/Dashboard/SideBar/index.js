import * as React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import HomeIcon from '@mui/icons-material/Home'
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave'
import GroupIcon from '@mui/icons-material/Group'
import ForumIcon from '@mui/icons-material/Forum'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar, Button, Menu, MenuItem, Tooltip } from '@mui/material'
import { UserSignOut } from '../../redux/actions'
import { toast } from 'react-toastify'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn'
import LogoutIcon from '@mui/icons-material/Logout'

const drawerWidth = 240

function SidebarItem({ to, icon, primary }) {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <ListItem disablePadding>
      <ListItemButton component={Link} to={to} selected={isActive}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={primary} />
      </ListItemButton>
    </ListItem>
  )
}

function SideBar(props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  const { loggedInUser } = useSelector((state) => state.userManagementReducer)

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleSignout = () => {
    dispatch(UserSignOut()),
      toast.success('successfully signout !', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      })
  }
  const drawer = (
    <div>
      <Toolbar sx={{ backgroundColor: 'var(--navbar-bg)' }}>
        <Typography sx={{ color: 'var(--white-color)' }} variant="h6">
          Dashboard
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        <SidebarItem to="/dashboard" icon={<HomeIcon />} primary="Home" />
        <SidebarItem to="/dashboard/cars" icon={<TimeToLeaveIcon />} primary="Cars" />
        <SidebarItem to="/dashboard/users" icon={<GroupIcon />} primary="Users" />
        <SidebarItem to="/dashboard/live-chat" icon={<ForumIcon />} primary="Live Chat" />
        <SidebarItem to="/" icon={<KeyboardReturnIcon />} primary="Web App" />
        <div onClick={handleSignout}>
          <SidebarItem icon={<LogoutIcon />} primary="SignOut" />
        </div>
      </List>
    </div>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    loggedInUser && (
      <>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              backgroundColor: 'var(--navbar-bg)',
              width: { sm: `calc(100% - ${drawerWidth}px)` },
              ml: { sm: `${drawerWidth}px` },
              maxHeight: '64px'
            }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}>
                <MenuIcon />
              </IconButton>
              <Typography
                sx={{ color: 'var(--red-color)', fontWeight: 700 }}
                variant="h6"
                onClick={() => navigate('/')}>
                CAR HOUSE
              </Typography>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ms: 2 }}>
                    <Avatar
                      alt={loggedInUser[0].values.name.toUpperCase()}
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}>
                  <Typography sx={{ marginLeft: 2, marginRight: 2, fontWeight: 700 }}>
                    Profile Info
                  </Typography>
                  <Divider />
                  <Typography sx={{ marginLeft: 2, marginRight: 2, marginTop: 1 }}>
                    <b>name:</b> {loggedInUser[0].values.name}
                  </Typography>
                  <Typography sx={{ marginLeft: 2, marginRight: 2, marginBottom: 1 }}>
                    <b>email:</b> {loggedInUser[0].values.email}
                  </Typography>
                  <Divider />
                  <Divider />
                  <Divider />
                  <MenuItem onClick={handleCloseUserMenu} sx={{ marginTop: 1 }}>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        backgroundColor: 'var(--red-color)',
                        '&:hover': { backgroundColor: 'var(--btn-hover)' }
                      }}
                      onClick={handleSignout}>
                      SignOut
                    </Button>
                  </MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          </AppBar>
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true // Better open performance on mobile.
              }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
              }}>
              {drawer}
            </Drawer>
            <Drawer
              variant="permanent"
              sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': {
                  boxSizing: 'border-box',
                  width: drawerWidth
                }
              }}
              open>
              {drawer}
            </Drawer>
          </Box>
          <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 5 }}>
            {props.children}
          </Box>
        </Box>
      </>
    )
  )
}

export default SideBar

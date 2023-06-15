import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave'
import { useNavigate } from 'react-router-dom'
import AuthModel from '../../Auth/AuthModel'
import { useDispatch, useSelector } from 'react-redux'
import { HandleModel, UserSignOut } from '../../../redux/actions'
import { Avatar, Divider, Tooltip } from '@mui/material'
import { toast } from 'react-toastify'

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const navigate = useNavigate()
  const { modelOpen, loggedInUser, adminRole } = useSelector((state) => state.userManagementReducer)
  const dispatch = useDispatch()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = (path) => {
    path && navigate(path)
    setAnchorElNav(null)
  }

  const handleOpenSignUp = () => {
    dispatch(HandleModel(true))
  }

  const handleCloseSignUp = () => {
    dispatch(HandleModel(false))
  }

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

  return (
    <>
      <AppBar position="sticky" sx={{ Height: '80px', backgroundColor: 'var(--navbar-bg)' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <TimeToLeaveIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h1"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 900,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none'
              }}>
              <Typography variant="h5" component="span">
                CAR
              </Typography>{' '}
              <Typography variant="h5" component="span" color="#ed563b" ml={1}>
                HOUSE
              </Typography>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                open={Boolean(anchorElNav)}
                onClose={() => handleCloseNavMenu(null)}
                sx={{
                  display: { xs: 'block', md: 'none' }
                }}>
                {adminRole ? (
                  <MenuItem onClick={() => handleCloseNavMenu('/dashboard/cars')}>
                    <Typography textAlign="center" sx={{ color: 'var(--red-color)' }}>
                      Dashboard
                    </Typography>
                  </MenuItem>
                ) : (
                  ''
                )}
                <MenuItem onClick={() => handleCloseNavMenu('/')}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
                <MenuItem onClick={() => handleCloseNavMenu('/cars')}>
                  <Typography textAlign="center">Cars</Typography>
                </MenuItem>
                <MenuItem onClick={() => handleCloseNavMenu('/about')}>
                  <Typography textAlign="center">About</Typography>
                </MenuItem>
                <MenuItem onClick={() => handleCloseNavMenu('/contact')}>
                  <Typography textAlign="center">Contact</Typography>
                </MenuItem>
                <MenuItem onClick={() => handleCloseNavMenu('/team')}>
                  <Typography textAlign="center">Team</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <TimeToLeaveIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none'
              }}>
              <Typography variant="h6" component="span">
                CAR
              </Typography>{' '}
              <Typography variant="h6" component="span" className="em-color" ml={1}>
                HOUSE
              </Typography>
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' }
              }}>
              <Button
                onClick={() => navigate('/')}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                Home
              </Button>
              <Button
                onClick={() => navigate('/cars')}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                Cars
              </Button>
              <Button
                onClick={() => navigate('/about')}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                About
              </Button>
              <Button
                onClick={() => navigate('/contact')}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                Contact
              </Button>
              <Button
                onClick={() => navigate('/team')}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                Team
              </Button>
              {adminRole ? (
                <Button
                  onClick={() => navigate('/dashboard/cars')}
                  sx={{
                    my: 2,
                    color: 'var(--red-color)',
                    display: 'block',
                    fontWeight: 700,
                    marginRight: 2
                  }}>
                  Dashboard
                </Button>
              ) : (
                ''
              )}
            </Box>
            {loggedInUser == null ? (
              <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={handleOpenSignUp}>
                <i className="fa fa-sign-in fa-2x" aria-hidden="true"></i>
              </Button>
            ) : (
              <>
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
                    <Tooltip title="my deam cars">
                      <Typography
                        sx={{ marginLeft: 2, marginRight: 2, marginTop: 1, marginBottom: 1 }}
                        onClick={() => navigate('/wishlist')}>
                        <b>my wishlist</b> <i className="fa fa-heart" aria-hidden="true" />
                      </Typography>
                    </Tooltip>

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
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <AuthModel open={modelOpen} onClose={handleCloseSignUp} />
    </>
  )
}

export default Navbar

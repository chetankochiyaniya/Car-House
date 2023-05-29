import * as React from 'react'
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

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const navigate = useNavigate()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = (path) => {
    setAnchorElNav(null)
    navigate(path)
  }

  return (
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
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}>
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
            <Button onClick={() => navigate('/')} sx={{ my: 2, color: 'white', display: 'block' }}>
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Navbar

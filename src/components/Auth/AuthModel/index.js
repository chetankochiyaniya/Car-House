import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Tab, Tabs } from '@mui/material'
import SignIn from '../SignIn'
import SignUp from '../SignUp'
import './index.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 515,
  bgcolor: 'background.paper',
  p: 4
}

export default function AuthModel({ open, onClose }) {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const [currentTab, setCurrentTab] = useState(0)
  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue)
  }

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={isSmallScreen ? { ...style, width: '90%' } : style}>
          <Tabs value={currentTab} onChange={handleTabChange} centered>
            <Tab label="Sign Up" />
            <Tab label="Sign In" />
          </Tabs>
          {currentTab === 0 ? <SignUp /> : <SignIn />}
        </Box>
      </Modal>
    </>
  )
}

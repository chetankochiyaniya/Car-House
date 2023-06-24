import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'

function MainBanner() {
  const navigate = useNavigate()
  return (
    <>
      <Box position="relative">
        <video autoPlay muted loop id="bg-video" style={{ width: '100%' }}>
          <source src="/assets/video.mp4" type="video/mp4" />
        </video>
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bgcolor="var(--over-bg-color)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          textAlign="center">
          <Typography variant="h6" color="white" sx={{ fontWeight: '700' }}>
            Lorem ipsum dolor sit amet
          </Typography>
          <Typography variant="h3" color="white" sx={{ fontWeight: '700' }} mb={2}>
            Best{' '}
            <Typography
              component="span"
              variant="h2"
              className="em-color"
              sx={{ fontWeight: '700', justifyContent: 'center', alignItems: 'center' }}>
              car dealer
            </Typography>{' '}
            in town!
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'var(--red-color)',
              '&:hover': { backgroundColor: 'var(--btn-hover)' },
              fontWeight: '500'
            }}
            onClick={() => navigate('/contact')}>
            Contact Us
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default MainBanner

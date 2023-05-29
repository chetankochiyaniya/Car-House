import React from 'react'
import { Typography, Box, Grid, Container } from '@mui/material'

function Team() {
  return (
    <>
      <Box sx={{ textAlign: 'center', mb: 6, mt: 10 }}>
        <Typography variant="h4" component="h2">
          MEET OUR{' '}
          <Typography variant="h4" className="em-color" component="span">
            TEAM
          </Typography>
        </Typography>
        <img src="/assets/line-dec.png" alt="" />
        <Typography variant="body1">
          Ut consectetur, metus sit amet aliquet placerat, enim est ultricies ligula
        </Typography>
      </Box>
      <Box id="allcars" sx={{ py: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Box className="card-item">
                <Box className="image-thumb">
                  <img src="/assets/team-0.jpg" alt="" />
                </Box>
                <Box className="down-content mt-3">
                  <Typography sx={{ color: 'var(--red-color)', marginBottom: '0px' }}>
                    Owner
                  </Typography>
                  <Typography variant="h6">Chetan Kochiyaniya</Typography>
                  <Typography variant="body2" component="p" mb={2}>
                    Vestibulum id est eu felis vulputate hendrerit. Suspendisse dapibus turpis in
                    dui pulvinar imperdiet. Nunc consectetur.
                  </Typography>
                  <Typography variant="body1" className="d-flex justify-content-around">
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-linkedin"></i>
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Box className="card-item">
                <Box className="image-thumb">
                  <img src="/assets/team-2.jpg" alt="" />
                </Box>
                <Box className="down-content mt-3">
                  <Typography sx={{ color: 'var(--red-color)', marginBottom: '0px' }}>
                    Owner
                  </Typography>
                  <Typography variant="h6">Harsh Ved</Typography>
                  <Typography variant="body2" component="p" mb={2}>
                    Vestibulum id est eu felis vulputate hendrerit. Suspendisse dapibus turpis in
                    dui pulvinar imperdiet. Nunc consectetur.
                  </Typography>
                  <Typography variant="body1" className="d-flex justify-content-around">
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-linkedin"></i>
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Box className="card-item">
                <Box className="image-thumb">
                  <img src="/assets/team-1.jpg" alt="" />
                </Box>
                <Box className="down-content mt-3">
                  <Typography sx={{ color: 'var(--red-color)', marginBottom: '0px' }}>
                    Owner
                  </Typography>
                  <Typography variant="h6">Dipak Gorfad</Typography>
                  <Typography variant="body2" component="p" mb={2}>
                    Vestibulum id est eu felis vulputate hendrerit. Suspendisse dapibus turpis in
                    dui pulvinar imperdiet. Nunc consectetur.
                  </Typography>
                  <Typography variant="body1" className="d-flex justify-content-around">
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-linkedin"></i>
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Box className="card-item">
                <Box className="image-thumb">
                  <img src="/assets/team-3.jpg" alt="" />
                </Box>
                <Box className="down-content mt-3">
                  <Typography sx={{ color: 'var(--red-color)', marginBottom: '0px' }}>
                    Customer Support
                  </Typography>
                  <Typography variant="h6">Support Team</Typography>
                  <Typography variant="body2" component="p" mb={2}>
                    Vestibulum id est eu felis vulputate hendrerit. Suspendisse dapibus turpis in
                    dui pulvinar imperdiet. Nunc consectetur.
                  </Typography>
                  <Typography variant="body1" className="d-flex justify-content-around">
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-linkedin"></i>
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Team

import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Container, Grid, Box, Button } from '@mui/material'
import './index.css'

function FeaturedCar() {
  return (
    <>
      <Box id="cards" sx={{ py: 4 }}>
        <Container maxWidth="lg">
          <Grid container justifyContent="center" sx={{ mb: 4 }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h4">
                  FEATURED{' '}
                  <Typography variant="h4" component="span" className="em-color">
                    CARS
                  </Typography>
                </Typography>
                <img src="/assets/line-dec.png" alt="" />
                <Typography variant="body1">
                  Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum
                  dolor, ultricies fermentum massa consequat eu.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box className="card-item">
                <Box className="image-thumb">
                  <img src="/assets/product-1.jpg" alt="" />
                </Box>
                <Box className="down-content">
                  <Typography component="span">
                    <del>
                      <sup>₹</sup>11999{' '}
                    </del>{' '}
                    &nbsp; <sup>₹</sup>11779
                  </Typography>
                  <Typography variant="h4">Lorem ipsum dolor sit amet, consectetur</Typography>
                  <Typography variant="body1">
                    <i className="fa fa-dashboard"></i> 130 000km &nbsp;&nbsp;&nbsp;
                    <i className="fa fa-cube"></i> 1800 cc &nbsp;&nbsp;&nbsp;
                    <i className="fa fa-cog"></i> Manual &nbsp;&nbsp;&nbsp;
                  </Typography>
                  <Link to="car-details">+ View Car</Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="card-item">
                <Box className="image-thumb">
                  <img src="/assets/product-1.jpg" alt="" />
                </Box>
                <Box className="down-content">
                  <Typography component="span">
                    <del>
                      <sup>₹</sup>11999{' '}
                    </del>{' '}
                    &nbsp; <sup>₹</sup>11779
                  </Typography>
                  <Typography variant="h4">Lorem ipsum dolor sit amet, consectetur</Typography>
                  <Typography variant="body1">
                    <i className="fa fa-dashboard"></i> 130 000km &nbsp;&nbsp;&nbsp;
                    <i className="fa fa-cube"></i> 1800 cc &nbsp;&nbsp;&nbsp;
                    <i className="fa fa-cog"></i> Manual &nbsp;&nbsp;&nbsp;
                  </Typography>
                  <Link to="car-details">+ View Car</Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="card-item">
                <Box className="image-thumb">
                  <img src="/assets/product-3.jpg" alt="" />
                </Box>
                <Box className="down-content">
                  <Typography component="span">
                    <del>
                      <sup>₹</sup>11999{' '}
                    </del>{' '}
                    &nbsp; <sup>₹</sup>11779
                  </Typography>
                  <Typography variant="h4">Lorem ipsum dolor sit amet, consectetur</Typography>
                  <Typography variant="body1">
                    <i className="fa fa-dashboard"></i> 130 000km &nbsp;&nbsp;&nbsp;
                    <i className="fa fa-cube"></i> 1800 cc &nbsp;&nbsp;&nbsp;
                    <i className="fa fa-cog"></i> Manual &nbsp;&nbsp;&nbsp;
                  </Typography>
                  <Link to="car-details">+ View Car</Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              component={Link}
              to="cars"
              variant="contained"
              sx={{
                backgroundColor: 'var(--red-color)',
                '&:hover': { backgroundColor: 'var(--btn-hover)' }
              }}>
              View Cars
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default FeaturedCar

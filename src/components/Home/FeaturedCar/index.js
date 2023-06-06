import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Typography, Container, Grid, Box, Button } from '@mui/material'
import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateLike } from '../../../redux/actions'

function FeaturedCar() {
  const { data } = useSelector((state) => state.fetchDataReducer)
  const dispatch = useDispatch()
  const cars = data?.slice(0, 3)

  const navigate = useNavigate()

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
            {cars?.map((car, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box className="card-item">
                  <Box className="image-thumb">
                    <img src={car.images[0]} alt="" className="lg-image" />
                  </Box>
                  <Box className="down-content">
                    <Typography component="span">
                      <del>
                        <sup>₹</sup>
                        {car.price.originalPrice}{' '}
                      </del>{' '}
                      &nbsp; <sup>₹</sup> {car.price.discountedPrice}
                    </Typography>
                    <Typography variant="h4">{car.carName}</Typography>
                    <Typography variant="body1" className="description">
                      {car.description}
                    </Typography>
                    <Typography variant="body1">
                      <i className="fa fa-dashboard"></i> {car.tabOne[7].value} Km/L
                      &nbsp;&nbsp;&nbsp;
                      <i className="fa fa-cube"></i> {car.tabOne[6].value} &nbsp;&nbsp;&nbsp;
                      <i className="fa fa-cog"></i> {car.tabOne[5].value} &nbsp;&nbsp;&nbsp;
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography
                        color="var(--link-color)"
                        onClick={() => navigate(`/car-details/${car.car_id}`)}>
                        + View Car
                      </Typography>
                      <Typography color="var(--link-color)">
                        {data.find((item) => item.car_id === car.car_id)?.like ? (
                          <i
                            className="fa fa-heart fa-lg"
                            aria-hidden="true"
                            onClick={() => dispatch(updateLike(car.car_id))}
                          />
                        ) : (
                          <i
                            className="fa fa-heart-o fa-lg"
                            aria-hidden="true"
                            onClick={() => dispatch(updateLike(car.car_id))}
                          />
                        )}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
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

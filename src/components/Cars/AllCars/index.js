import React, { useEffect } from 'react'
import {
  Box,
  Container,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  Typography,
  Pagination
} from '@mui/material'
import Banner from '../Banner'
import './index.css'
import { useNavigate } from 'react-router-dom'
import Footer from '../../General/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { getCarDetails } from '../../../redux/actions'

const AllCars = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { data, isLoading, error } = useSelector((state) => state.fetchDataReducer)

  useEffect(() => {
    dispatch(getCarDetails())
  }, [dispatch])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <>
      <Banner />
      <Box
        component="section"
        sx={{ background: '#f9f9f9', paddingTop: '3.5rem', paddingBottom: '2rem' }}
        id="trainers">
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth size="small">
                <InputLabel>Used/New:</InputLabel>
                <Select>
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="new">New vehicle</MenuItem>
                  <MenuItem value="used">Used vehicle</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth size="small">
                <InputLabel>Vehicle Type:</InputLabel>
                <Select>
                  <MenuItem value="select - 1">select - 1</MenuItem>
                  <MenuItem value="select - 2">select - 2</MenuItem>
                  <MenuItem value="select - 3">select - 3</MenuItem>
                  <MenuItem value="select - 4">select - 4</MenuItem>
                  <MenuItem value="select - 5">select - 5</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth size="small">
                <InputLabel>Model:</InputLabel>
                <Select>
                  <MenuItem value="select - 1">select - 1</MenuItem>
                  <MenuItem value="select - 2">select - 2</MenuItem>
                  <MenuItem value="select - 3">select - 3</MenuItem>
                  <MenuItem value="select - 4">select - 4</MenuItem>
                  <MenuItem value="select - 5">select - 5</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth size="small">
                <InputLabel>Price:</InputLabel>
                <Select>
                  <MenuItem value="select - 1">select - 1</MenuItem>
                  <MenuItem value="select - 2">select - 2</MenuItem>
                  <MenuItem value="select - 3">select - 3</MenuItem>
                  <MenuItem value="select - 4">select - 4</MenuItem>
                  <MenuItem value="select - 5">select - 5</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth size="small">
                <InputLabel>Mileage:</InputLabel>
                <Select>
                  <MenuItem value="select - 1">select - 1</MenuItem>
                  <MenuItem value="select - 2">select - 2</MenuItem>
                  <MenuItem value="select - 3">select - 3</MenuItem>
                  <MenuItem value="select - 4">select - 4</MenuItem>
                  <MenuItem value="select - 5">select - 5</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth size="small">
                <InputLabel>Number of seats:</InputLabel>
                <Select>
                  <MenuItem value="select - 1">select - 1</MenuItem>
                  <MenuItem value="select - 2">select - 2</MenuItem>
                  <MenuItem value="select - 3">select - 3</MenuItem>
                  <MenuItem value="select - 4">select - 4</MenuItem>
                  <MenuItem value="select - 5">select - 5</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth size="small">
                <InputLabel>Fuel:</InputLabel>
                <Select>
                  <MenuItem value="select - 1">select - 1</MenuItem>
                  <MenuItem value="select - 2">select - 2</MenuItem>
                  <MenuItem value="select - 3">select - 3</MenuItem>
                  <MenuItem value="select - 4">select - 4</MenuItem>
                  <MenuItem value="select - 5">select - 5</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth size="small">
                <InputLabel>Make:</InputLabel>
                <Select>
                  <MenuItem value="select - 1">select - 1</MenuItem>
                  <MenuItem value="select - 2">select - 2</MenuItem>
                  <MenuItem value="select - 3">select - 3</MenuItem>
                  <MenuItem value="select - 4">select - 4</MenuItem>
                  <MenuItem value="select - 5">select - 5</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid container justifyContent="center" textAlign="center" marginTop="2rem">
            <Grid item xs={8} sm={6} md={4} lg={2}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'var(--red-color)',
                  '&:hover': { backgroundColor: 'var(--btn-hover)' }
                }}
                fullWidth
                size="medium">
                Search
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box id="allcars" sx={{ py: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {data.map((car, index) => {
              return (
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
                        <i className="fa fa-dashboard"></i> {car.tabOne[8].value} &nbsp;&nbsp;&nbsp;
                        <i className="fa fa-cube"></i>
                        {car.tabOne[5].value}c &nbsp;&nbsp;&nbsp;
                        <i className="fa fa-cog"></i> {car.transmissionType} &nbsp;&nbsp;&nbsp;
                      </Typography>
                      <Typography
                        color="var(--link-color)"
                        onClick={() => navigate('/car-details')}>
                        + View Car
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </Box>
      <Container sx={{ display: 'flex', justifyContent: 'center', paddingBottom: 6 }}>
        <Pagination count={10} color="error" />
      </Container>
      <Footer />
    </>
  )
}

export default AllCars

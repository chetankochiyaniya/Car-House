import React, { useEffect, useState } from 'react'
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
  Pagination,
  Tooltip
} from '@mui/material'
import Banner from '../Banner'
import './index.css'
import { useNavigate } from 'react-router-dom'
import Footer from '../../General/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist, getCarDetails, removeFromWishlist } from '../../../redux/actions'
import { CircularProgress } from '@mui/material'

const AllCars = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [condition, setConditon] = useState('all')
  const [vehicleType, setVehicleType] = useState('all')
  const [make, setMake] = useState('all')
  const [price, setPrice] = useState('all')
  const [mileage, setMileage] = useState('all')
  const [seats, setSeats] = useState('all')
  const [fuel, setFuel] = useState('all')
  const [year, setYear] = useState('all')

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const { data, isLoading, error } = useSelector((state) => state.fetchDataReducer)
  const { loggedInUser } = useSelector((state) => state.userManagementReducer)
  const wishlist = useSelector((state) => state.wishlistReducer)

  const [filteredData, setFilteredData] = useState(data)

  useEffect(() => {
    dispatch(getCarDetails())
  }, [dispatch])

  if (isLoading) {
    return <CircularProgress color="error" />
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  const handleSearch = () => {
    // Perform search with the selected filters
    const response = data.filter((item) => {
      if (condition !== 'all' && item.tabOne[0].value !== condition) {
        return false
      }
      if (
        vehicleType !== 'all' &&
        item.tabOne[1].value.toUpperCase() !== vehicleType.toUpperCase()
      ) {
        return false
      }
      if (
        (make !== 'all' &&
          make !== 'other' &&
          item.tabOne[2].value.toUpperCase() !== make.toLocaleUpperCase()) ||
        (make === 'other' &&
          ['tesla', 'bugatti', 'ferrari', 'rolls-royce'].includes(
            item.tabOne[2].value.toLowerCase()
          ))
      ) {
        return false
      }
      if (price !== 'all' && !isPriceInRange(item.price.discountedPrice, price)) {
        return false
      }
      if (mileage !== 'all' && !isMileageInRange(item.tabOne[7].value, mileage)) {
        return false
      }
      if (
        (seats !== 'all' && seats !== 'other' && item.tabOne[3].value !== seats) ||
        (seats === 'other' && [2, 4, 5].includes(item.tabOne[3].value))
      ) {
        return false
      }
      if (fuel !== 'all' && item.tabOne[6].value.toUpperCase() !== fuel.toUpperCase()) {
        return false
      }
      if (
        (year !== 'all' && year !== 'other' && item.tabOne[4].value !== year) ||
        (year === 'other' && [2023, 2022, 2021].includes(item.tabOne[4].value))
      ) {
        return false
      }
      return true
    })
    setFilteredData(response)
    setCurrentPage(1)
  }

  const isPriceInRange = (itemPrice, selectedPriceRange) => {
    const [minPrice, maxPrice] = selectedPriceRange.split('-')
    return itemPrice >= parseInt(minPrice) && itemPrice <= parseInt(maxPrice)
  }

  const isMileageInRange = (itemMileage, selectedMileageRange) => {
    const [minMileage, maxMileage] = selectedMileageRange.split('-')
    return itemMileage >= parseFloat(minMileage) && itemMileage <= parseFloat(maxMileage)
  }

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredData?.slice(indexOfFirstItem, indexOfLastItem)

  const handlePageChange = (event, page) => {
    setCurrentPage(page)
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
                <Select onChange={(e) => setConditon(e.target.value)}>
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="new">New vehicle</MenuItem>
                  <MenuItem value="used">Used vehicle</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth size="small">
                <InputLabel>Vehicle Type:</InputLabel>
                <Select onChange={(e) => setVehicleType(e.target.value)}>
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="sports">Sports cars</MenuItem>
                  <MenuItem value="sedan">Sedan cars</MenuItem>
                  <MenuItem value="other">Other cars</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth size="small">
                <InputLabel>Make:</InputLabel>
                <Select onChange={(e) => setMake(e.target.value)}>
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="tesla">Tesla</MenuItem>
                  <MenuItem value="bugatti">Bugatti</MenuItem>
                  <MenuItem value="ferrari">Ferrari</MenuItem>
                  <MenuItem value="rolls-royce">Rolls-Royce</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth size="small">
                <InputLabel>Price:</InputLabel>
                <Select onChange={(e) => setPrice(e.target.value)}>
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="0-1000">0-1000</MenuItem>
                  <MenuItem value="1001-2000">1001-2000</MenuItem>
                  <MenuItem value="2001-3000">2001-3000</MenuItem>
                  <MenuItem value="3001-4000">3001-4000</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth size="small">
                <InputLabel>Mileage:</InputLabel>
                <Select onChange={(e) => setMileage(e.target.value)}>
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="0-5">1 km/l - 5 km/l</MenuItem>
                  <MenuItem value="5.1-10">5.1 km/l - 10 km/l </MenuItem>
                  <MenuItem value="10.1-15">10.1 km/l - 15 km/l</MenuItem>
                  <MenuItem value="15.1-20">15.1 km/l - 20 km/l</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth size="small">
                <InputLabel>Number of seats:</InputLabel>
                <Select onChange={(e) => setSeats(e.target.value)}>
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value="other">other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth size="small">
                <InputLabel>Fuel:</InputLabel>
                <Select onChange={(e) => setFuel(e.target.value)}>
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="petrol">Petrol</MenuItem>
                  <MenuItem value="diesel">Diesel</MenuItem>
                  <MenuItem value="electric">Electric</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <FormControl fullWidth size="small">
                <InputLabel>Year:</InputLabel>
                <Select onChange={(e) => setYear(e.target.value)}>
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value={2023}>2023</MenuItem>
                  <MenuItem value={2022}>2022</MenuItem>
                  <MenuItem value={2021}>2021</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
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
                size="medium"
                onClick={handleSearch}>
                Search
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box id="allcars" sx={{ py: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {currentItems.length === 0 ? (
              <Grid item xs={12}>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    No Cars Found
                  </Typography>
                </Box>
              </Grid>
            ) : (
              currentItems?.map((car, index) => {
                if (!car?.price) {
                  return null
                }
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
                            {loggedInUser !== null ? (
                              wishlist[loggedInUser[0].values.email]?.includes(car.car_id) ? (
                                <Tooltip title="Remove from wishlist">
                                  <i
                                    className="fa fa-heart fa-lg"
                                    aria-hidden="true"
                                    onClick={() =>
                                      dispatch(
                                        removeFromWishlist(
                                          loggedInUser[0].values.email,

                                          car.car_id
                                        )
                                      )
                                    }
                                  />
                                </Tooltip>
                              ) : (
                                <Tooltip title="Add into wishlist">
                                  <i
                                    className="fa fa-heart-o fa-lg"
                                    aria-hidden="true"
                                    onClick={() =>
                                      dispatch(
                                        addToWishlist(loggedInUser[0].values.email, car.car_id)
                                      )
                                    }
                                  />
                                </Tooltip>
                              )
                            ) : (
                              ''
                            )}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                )
              })
            )}
          </Grid>
        </Container>
      </Box>
      <Container sx={{ display: 'flex', justifyContent: 'center', paddingBottom: 6 }}>
        {filteredData.length !== 0 && filteredData.length > itemsPerPage ? (
          <Pagination
            count={Math.ceil(filteredData.length / itemsPerPage)}
            color="error"
            page={currentPage}
            onChange={handlePageChange}
          />
        ) : (
          ''
        )}
      </Container>
      <Footer />
    </>
  )
}

export default AllCars

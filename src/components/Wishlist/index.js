import React, { useEffect, useState } from 'react'
import {
  Box,
  Container,
  Grid,
  Typography,
  Pagination,
  Tooltip,
  CircularProgress
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist, getCarDetails, removeFromWishlist } from '../../redux/actions'

const WishList = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const { data, isLoading, error } = useSelector((state) => state.fetchDataReducer)
  const { loggedInUser } = useSelector((state) => state.userManagementReducer)
  const wishlist = useSelector((state) => state.wishlistReducer)

  let filteredData

  useEffect(() => {
    dispatch(getCarDetails())
  }, [dispatch])

  if (isLoading) {
    return <CircularProgress color="error" />
  }

  if (error) {
    return <div>Error: {error}</div>
  }
  filteredData = data?.filter((item) => {
    return (
      loggedInUser?.[0]?.values?.email !== null &&
      wishlist?.[loggedInUser?.[0]?.values?.email]?.includes(item.car_id)
    )
  })

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem)

  const handlePageChange = (event, page) => {
    setCurrentPage(page)
  }

  return (
    <>
      <Box sx={{ textAlign: 'center', mb: 6, mt: 10 }}>
        <Typography variant="h4" component="h2">
          Dream{' '}
          <Typography variant="h4" className="em-color" component="span">
            Car Gallery
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
    </>
  )
}

export default WishList

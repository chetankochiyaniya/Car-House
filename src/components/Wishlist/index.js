import React, { useState } from 'react'
import { Typography, Box, Container, Grid, Pagination } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { updateLike } from '../../redux/actions'
import { useNavigate } from 'react-router-dom'

function WishList() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const navigate = useNavigate()
  const { data } = useSelector((state) => state.fetchDataReducer)

  let filteredData
  const dispatch = useDispatch()

  filteredData = data?.filter((item) => {
    return item.like === true
  })
  console.log('filte', filteredData)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredData?.slice(indexOfFirstItem, indexOfLastItem)

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
            {currentItems?.length === 0 ? (
              <Grid item xs={12}>
                <Box>
                  <Typography
                    variant="h5"
                    color="var(--link-color)"
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    onClick={() => navigate('/cars')}>
                    <u>Find your dream Car</u>
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
                            <i
                              className="fa fa-heart fa-lg"
                              aria-hidden="true"
                              onClick={() => dispatch(updateLike(car.car_id))}
                            />
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
        {filteredData?.length !== 0 && filteredData?.length > itemsPerPage ? (
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

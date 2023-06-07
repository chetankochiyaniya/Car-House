import { useEffect, useState } from 'react'
import { Box, Container, Typography, Grid, Link, Button } from '@mui/material'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useDispatch, useSelector } from 'react-redux'
import { getCarDetails } from '../../../redux/actions'
import { useParams } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import './index.css'

const CarDetails = () => {
  const [activeTab, setActiveTab] = useState('tabs-1')

  const handleTabClick = (event, tabId) => {
    event.preventDefault()
    setActiveTab(tabId)
  }
  let { id } = useParams()

  const dispatch = useDispatch()
  const { data, isLoading, error } = useSelector((state) => state.fetchDataReducer)

  useEffect(() => {
    dispatch(getCarDetails())
  }, [dispatch])

  if (isLoading) {
    return <CircularProgress color="error" />
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  const cardata = data?.filter((item) => item.car_id === id)
  console.log(cardata[0])

  return (
    <>
      {/* * Image Carousel Start */}
      <Container sx={{ marginTop: 5, display: 'flex', justifyContent: 'center' }}>
        <Grid container justifyContent="center">
          <Grid item>
            <Carousel>
              {cardata[0].images.map((item, index) => (
                <div key={index}>
                  <img src={item} alt="First slide" />
                </div>
              ))}
            </Carousel>
          </Grid>
        </Grid>
      </Container>
      {/** Image Carousel End

      {/** Car Details Start */}
      <Container>
        <Box component="section" className="section" id="trainers">
          <Container>
            <Box className="row" id="tabs">
              <Box className="col-lg-4">
                <ul>
                  <li>
                    <Typography
                      variant="body1"
                      component="a"
                      href="#tabs-1"
                      onClick={(e) => handleTabClick(e, 'tabs-1')}
                      className={activeTab === 'tabs-1' ? 'active' : ''}>
                      <i className="fa fa-cog"></i> Vehicle Specs
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      component="a"
                      href="#tabs-2"
                      onClick={(e) => handleTabClick(e, 'tabs-2')}
                      className={activeTab === 'tabs-2' ? 'active' : ''}>
                      <i className="fa fa-info-circle"></i> Vehicle Description
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      component="a"
                      href="#tabs-3"
                      onClick={(e) => handleTabClick(e, 'tabs-3')}
                      className={activeTab === 'tabs-3' ? 'active' : ''}>
                      <i className="fa fa-plus-circle"></i> Vehicle Extras
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      variant="body1"
                      component="a"
                      href="#tabs-4"
                      onClick={(e) => handleTabClick(e, 'tabs-4')}
                      className={activeTab === 'tabs-4' ? 'active' : ''}>
                      <i className="fa fa-phone"></i> Contact Details
                    </Typography>
                  </li>
                </ul>
              </Box>
              <Box className="col-lg-8">
                <Box component="section" className="tabs-content" style={{ width: '100%' }}>
                  <article
                    id="tabs-1"
                    style={{ display: activeTab === 'tabs-1' ? 'block' : 'none' }}>
                    <Typography variant="h4" style={{ marginTop: 10 }}>
                      Vehicle Specs
                    </Typography>
                    <Container>
                      <Box className="row">
                        {cardata[0].tabOne?.map((item, index) => {
                          return (
                            <Box className="col-sm-6" key={`specs${index}`}>
                              <Typography
                                variant="body1"
                                style={{ color: 'black', fontWeight: 700, marginBottom: 3 }}>
                                {item.label}
                              </Typography>
                              <Typography variant="body2">{item.value}</Typography>
                            </Box>
                          )
                        })}
                      </Box>
                    </Container>
                  </article>
                  <article
                    id="tabs-2"
                    style={{ display: activeTab === 'tabs-2' ? 'block' : 'none' }}>
                    <Typography variant="h4" style={{ marginTop: 10 }}>
                      Vehicle Description
                    </Typography>
                    <Container>
                      {cardata[0]?.tabTwo?.map((item, index) => (
                        <Typography style={{ marginBottom: 3 }} key={`dec${index}`}>
                          - {item}
                        </Typography>
                      ))}
                    </Container>
                  </article>
                  <article
                    id="tabs-3"
                    style={{ display: activeTab === 'tabs-3' ? 'block' : 'none' }}>
                    <Typography variant="h4" style={{ marginTop: 10 }}>
                      Vehicle Extras
                    </Typography>
                    <Container>
                      <Box className="row">
                        {cardata[0].tabThree?.map((item, index) => {
                          return (
                            <Box className="col-sm-6" key={`extra${index}`}>
                              <Typography
                                variant="body1"
                                style={{ color: 'black', fontWeight: 700, marginBottom: 3 }}>
                                {item.label}
                              </Typography>
                              <Typography variant="body2">{item.value}</Typography>
                            </Box>
                          )
                        })}
                      </Box>
                    </Container>
                  </article>
                  <article
                    id="tabs-4"
                    style={{ display: activeTab === 'tabs-4' ? 'block' : 'none' }}>
                    <Typography variant="h4" style={{ marginTop: 10 }}>
                      Contact Details
                    </Typography>
                    <Container>
                      <Box className="row">
                        {cardata[0].tabFour?.map((item, index) => {
                          return (
                            <Box className="col-sm-6" key={`contact${index}`}>
                              <Typography
                                variant="body1"
                                style={{ color: 'black', fontWeight: 700, marginBottom: 3 }}>
                                {item.label}
                              </Typography>
                              <Typography variant="body2">{item.value}</Typography>
                            </Box>
                          )
                        })}
                      </Box>
                    </Container>
                  </article>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
        {/** Car Details Start */}
        <Typography sx={{ textAlign: 'center', mt: 3 }}>
          <Typography
            variant="h5"
            component="span"
            sx={{ color: 'var(--navbar-bg)', mb: 2, textDecoration: 'line-through' }}>
            ₹{cardata[0].price?.originalPrice}
          </Typography>
          <Typography variant="h5" color="var(--red-color)" component="span">
            {' '}
            ₹{cardata[0].price?.discountedPrice}
          </Typography>
        </Typography>
        <Box sx={{ textAlign: 'center', mt: 3, mb: 5 }}>
          <Button
            component={Link}
            to="buy"
            variant="contained"
            sx={{
              backgroundColor: 'var(--red-color)',
              '&:hover': { backgroundColor: 'var(--btn-hover)' }
            }}>
            Book Now
          </Button>
        </Box>
      </Container>
    </>
  )
}

export default CarDetails

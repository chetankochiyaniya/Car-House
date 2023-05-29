import { useState } from 'react'
import { Box, Container, Typography, Grid, Link, Button } from '@mui/material'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const CarDetails = () => {
  const [activeTab, setActiveTab] = useState('tabs-1')

  const handleTabClick = (event, tabId) => {
    event.preventDefault()
    setActiveTab(tabId)
  }

  return (
    <>
      {/* CardDetails Header Banner Start
            <Box sx={{ backgroundImage: 'url(assets/contact.jpg)', textAlign: 'center' }}>
                <Box sx={{ backgroundColor: 'var(--over-bg-color)', pt: 20, pb: 20 }} >
                    <Container>
                        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
                            <Typography>
                                <Typography variant="h5" component="span" sx={{ color: 'white', mb: 5, textDecoration: 'line-through' }}>
                                    ₹12 999
                                </Typography>
                                <Typography variant="h4" color='var(--red-color)' component="span">  ₹11 779</Typography>
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'white', mb: 4, mt: 2 }}>
                                Lorem ipsum dolor sit amet, consectetur.
                            </Typography>
                        </Box>
                    </Container>
                </Box>
            </Box >
             CardDetails Header Banner End */}

      {/* * Image Carousel Start */}
      <Container sx={{ marginTop: 5, display: 'flex', justifyContent: 'center' }}>
        <Grid container justifyContent="center">
          <Grid item>
            <Carousel maxHe>
              <div>
                <img src="assets/car-1.jpg" alt="First slide" />
              </div>
              <div>
                <img src="assets/car-1.jpg" alt="Second slide" />
              </div>
              <div>
                <img src="assets/car-1.jpg" alt="Third slide" />
              </div>
            </Carousel>
          </Grid>
        </Grid>
      </Container>
      {/** Image Carousel End */}

      {/** Car Details Start */}
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
                <article id="tabs-1" style={{ display: activeTab === 'tabs-1' ? 'block' : 'none' }}>
                  <Typography variant="h4" style={{ marginTop: 10 }}>
                    Vehicle Specs
                  </Typography>
                  <Box className="row">
                    <Box className="col-sm-6">
                      <Typography
                        variant="body1"
                        style={{ color: 'black', fontWeight: 700, marginBottom: 3 }}>
                        Type
                      </Typography>
                      <Typography variant="body2">Used vehicle</Typography>
                    </Box>
                    <Box className="col-sm-6">
                      <Typography
                        variant="body1"
                        style={{ color: 'black', fontWeight: 700, marginBottom: 3 }}>
                        Make
                      </Typography>
                      <Typography variant="body2">Lorem ipsum dolor sit</Typography>
                    </Box>
                    <Box className="col-sm-6">
                      <Typography
                        variant="body1"
                        style={{ color: 'black', fontWeight: 700, marginBottom: 3 }}>
                        Model
                      </Typography>
                      <Typography variant="body2">Lorem ipsum dolor sit</Typography>
                    </Box>
                    <Box className="col-sm-6">
                      <Typography
                        variant="body1"
                        style={{ color: 'black', fontWeight: 700, marginBottom: 3 }}>
                        First registration
                      </Typography>
                      <Typography variant="body2">05/2010</Typography>
                    </Box>
                    <Box className="col-sm-6">
                      <Typography
                        variant="body1"
                        style={{ color: 'black', fontWeight: 700, marginBottom: 3 }}>
                        Mileage
                      </Typography>
                      <Typography variant="body2">5000 km</Typography>
                    </Box>
                    <Box className="col-sm-6">
                      <Typography
                        variant="body1"
                        style={{ color: 'black', fontWeight: 700, marginBottom: 3 }}>
                        Fuel
                      </Typography>
                      <Typography variant="body2">Diesel</Typography>
                    </Box>
                    <Box className="col-sm-6">
                      <Typography
                        variant="body1"
                        style={{ color: 'black', fontWeight: 700, marginBottom: 3 }}>
                        Engine size
                      </Typography>
                      <Typography variant="body2">1800 cc</Typography>
                    </Box>
                    <Box className="col-sm-6">
                      <Typography
                        variant="body1"
                        style={{ color: 'black', fontWeight: 700, marginBottom: 3 }}>
                        Power
                      </Typography>
                      <Typography variant="body2">85 hp</Typography>
                    </Box>
                    <Box className="col-sm-6">
                      <Typography
                        variant="body1"
                        style={{ color: 'black', fontWeight: 700, marginBottom: 3 }}>
                        Gearbox
                      </Typography>
                      <Typography variant="body2">Manual</Typography>
                    </Box>
                    <Box className="col-sm-6">
                      <Typography
                        variant="body1"
                        style={{ color: 'black', fontWeight: 700, marginBottom: 3 }}>
                        Number of seats
                      </Typography>
                      <Typography variant="body2">4</Typography>
                    </Box>
                    <Box className="col-sm-6">
                      <Typography
                        variant="body1"
                        style={{ color: 'black', fontWeight: 700, marginBottom: 3 }}>
                        Doors
                      </Typography>
                      <Typography variant="body2" style={{ marginBottom: 0 }}>
                        2/3
                      </Typography>
                    </Box>
                    <Box className="col-sm-6">
                      <Typography
                        variant="body1"
                        style={{ color: 'black', fontWeight: 700, marginBottom: 3 }}>
                        Color
                      </Typography>
                      <Typography variant="body2" style={{ marginBottom: 0 }}>
                        Black
                      </Typography>
                    </Box>
                  </Box>
                </article>
                <article id="tabs-2" style={{ display: activeTab === 'tabs-2' ? 'block' : 'none' }}>
                  <Typography variant="h4" style={{ marginTop: 10 }}>
                    Vehicle Description
                  </Typography>
                  <Typography style={{ marginBottom: 3 }}>- Colour coded bumpers </Typography>
                  <Typography style={{ marginBottom: 3 }}>- Tinted glass</Typography>
                  <Typography style={{ marginBottom: 3 }}>- Immobiliser</Typography>
                  <Typography style={{ marginBottom: 3 }}>- Central locking - remote</Typography>
                  <Typography style={{ marginBottom: 3 }}>- Passenger airbag</Typography>
                  <Typography style={{ marginBottom: 3 }}>- Electric windows</Typography>
                  <Typography style={{ marginBottom: 3 }}>- Rear head rests</Typography>
                  <Typography style={{ marginBottom: 3 }}>- Radio</Typography>
                  <Typography style={{ marginBottom: 3 }}>- CD player</Typography>
                  <Typography style={{ marginBottom: 3 }}>- Ideal first car</Typography>
                  <Typography style={{ marginBottom: 3 }}>- Warranty</Typography>
                  <Typography style={{ marginBottom: 6 }}>- High level brake light</Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Typography>
                </article>
                <article id="tabs-3" style={{ display: activeTab === 'tabs-3' ? 'block' : 'none' }}>
                  <Typography variant="h4" style={{ marginTop: 10 }}>
                    Vehicle Extras
                  </Typography>
                  <Box className="row">
                    <Box className="col-sm-6">
                      <Typography variant="body2">ABS</Typography>
                    </Box>
                    <Box className="col-sm-6">
                      <Typography variant="body2">Leather seats</Typography>
                    </Box>
                    <Box className="col-sm-6">
                      <Typography variant="body2">Power Assisted Steering</Typography>
                    </Box>
                    <Box className="col-sm-6">
                      <Typography variant="body2">Electric heated seats</Typography>
                    </Box>
                    <Box className="col-sm-6">
                      <Typography variant="body2">New HU and AU</Typography>
                    </Box>
                    <Box className="col-sm-6">
                      <Typography variant="body2">Xenon headlights</Typography>
                    </Box>
                  </Box>
                </article>
                <article id="tabs-4" style={{ display: activeTab === 'tabs-4' ? 'block' : 'none' }}>
                  <Typography variant="h4" style={{ marginTop: 10 }}>
                    Contact Details
                  </Typography>
                  <Box className="row">
                    <Box className="col-sm-6">
                      <Typography
                        variant="body1"
                        style={{ color: 'black', fontWeight: 700, marginBottom: 3 }}>
                        Name
                      </Typography>
                      <Typography variant="body2">Chetan Kochiyaniya</Typography>
                    </Box>
                    <Box className="col-sm-6">
                      <Typography
                        variant="body1"
                        style={{ color: 'black', fontWeight: 700, marginBottom: 3 }}>
                        Phone
                      </Typography>
                      <Typography variant="body2">635-307-4971</Typography>
                    </Box>
                    <Box className="col-sm-6">
                      <Typography
                        variant="body1"
                        style={{ color: 'black', fontWeight: 700, marginBottom: 3 }}>
                        Mobile phone
                      </Typography>
                      <Typography variant="body2">456789123</Typography>
                    </Box>
                    <Box className="col-sm-6">
                      <Typography
                        variant="body1"
                        style={{ color: 'black', fontWeight: 700, marginBottom: 3 }}>
                        Email
                      </Typography>
                      <Typography variant="body2">
                        <a href="mailto:john@carsales.com">chetan@carsales.com</a>
                      </Typography>
                    </Box>
                  </Box>
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
          ₹12 999
        </Typography>
        <Typography variant="h5" color="var(--red-color)" component="span">
          {' '}
          ₹11 779
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
    </>
  )
}

export default CarDetails

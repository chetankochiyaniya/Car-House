import React from 'react'
import {
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Container,
  Card,
  CardContent
} from '@mui/material'

function Contact() {
  return (
    <>
      <Box sx={{ textAlign: 'center', mb: 6, mt: 10 }}>
        <Typography variant="h4" component="h2">
          CONTACT{' '}
          <Typography variant="h4" className="em-color" component="span">
            INFO
          </Typography>
        </Typography>
        <img src="/assets/line-dec.png" alt="" />
        <Typography variant="body1">
          Sed viverra ipsum dolor, ultricies fermentum massa consequat eu.
        </Typography>
      </Box>
      <Grid
        container
        spacing={4}
        sx={{ justifyContent: 'center', textAlign: 'center', marginTop: 2 }}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
          <div
            className="icon"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box
              sx={{
                backgroundColor: 'var(--red-color)',
                paddingTop: 1,
                paddingBottom: 1,
                paddingLeft: 2,
                paddingRight: 2,
                borderRadius: 1
              }}>
              <i className="fa fa-phone"></i>
            </Box>
          </div>
          <Typography variant="h5" color="primary">
            +91 635 307 4971
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
          <div
            className="icon"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box
              sx={{
                backgroundColor: 'var(--red-color)',
                paddingTop: 1,
                paddingBottom: 1,
                paddingLeft: 2,
                paddingRight: 2,
                borderRadius: 1
              }}>
              <i className="fa fa-envelope"></i>
            </Box>
          </div>
          <Typography variant="h5" color="primary">
            contact@carhouse.com
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4} xl={3}>
          <div
            className="icon"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box
              sx={{
                backgroundColor: 'var(--red-color)',
                paddingTop: 1,
                paddingBottom: 1,
                paddingLeft: 2,
                paddingRight: 2,
                borderRadius: 1
              }}>
              <i className="fa fa-map-marker"></i>
            </Box>
          </div>
          <Typography variant="h5" color="primary">
            Simform Solutions, Ahmedabads
          </Typography>
        </Grid>
      </Grid>

      <Grid container mt={6.5} mb={10}>
        <Container maxWidth="xl">
          <Grid container spacing={2} sx={{ padding: 0 }}>
            <Grid item xs={12} lg={6} xl={6} sx={{ padding: 0 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.88228934586!2d72.49679717619708!3d23.028093816120396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f4a59dacf7%3A0xff3e2c6ec71f55bd!2sSimform%20Solutions!5e0!3m2!1sen!2sus!4v1685015286549!5m2!1sen!2sus"
                width="100%"
                height="400px"
                style={{ border: 0, padding: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="address"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Grid>
            <Grid item xs={12} lg={6} xl={6}>
              <Grid
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '400px',
                  //   backgroundImage: 'url(assets/contact-1.jpg)',
                  backgroundColor: 'var(--over-bg-color)',
                  backgroundSize: 'cover',
                  borderRadius: 0.5
                }}>
                <Card
                  variant="outlined"
                  sx={{
                    backgroundColor: 'var(--white-color)',
                    marginTop: 5,
                    marginLeft: 5,
                    marginRight: 5,
                    marginBottom: 5,
                    paddingTop: 2
                  }}>
                  <CardContent>
                    <form id="contact" action="" method="post">
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            name="name"
                            type="text"
                            id="name"
                            label="Your Name*"
                            fullWidth
                            required
                            size="small"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            name="email"
                            type="email"
                            id="email"
                            label="Your Email*"
                            fullWidth
                            required
                            size="small"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            name="subject"
                            type="text"
                            id="subject"
                            label="Subject"
                            size="small"
                            fullWidth
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            name="message"
                            id="message"
                            label="Message"
                            multiline
                            rows={4} // Adjust the number of rows as needed
                            fullWidth
                            size="small"
                            required
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Button
                            type="submit"
                            id="form-submit"
                            variant="contained"
                            color="primary">
                            Send Message
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  )
}

export default Contact

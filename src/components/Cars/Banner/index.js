import { Box, Container, Typography } from '@mui/material'

const Banner = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(assets/contact.jpg)',
        textAlign: 'center'
      }}>
      <Box sx={{ backgroundColor: 'var(--over-bg-color)', pt: 20, pb: 20 }}>
        <Container>
          <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            <Typography variant="h4" sx={{ color: 'white', mb: 5 }}>
              OUR{' '}
              <Typography variant="h4" color="var(--red-color)" component="span">
                CARS
              </Typography>
            </Typography>
            <Typography variant="body1" sx={{ color: 'white', mb: 4, mt: 2 }}>
              Ut consectetur, metus sit amet aliquet placerat, enim est ultricies ligula
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Banner

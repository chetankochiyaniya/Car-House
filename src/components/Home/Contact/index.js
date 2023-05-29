import { Box, Container, Typography, Link, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate()
  return (
    <Box
      sx={{
        backgroundImage: 'url(assets/contact.jpg)',
        textAlign: 'center',
        mt: 10
      }}>
      <Box sx={{ backgroundColor: 'var(--over-bg-color)', pt: 10, pb: 15 }}>
        <Container>
          <Box sx={{ maxWidth: 800, mx: 'auto' }}>
            <Typography variant="h4" sx={{ color: 'white', mb: 5 }}>
              SEND US A{' '}
              <Typography variant="h4" color="var(--red-color)" component="span">
                MESSAGE
              </Typography>
            </Typography>
            <Typography variant="body1" sx={{ color: 'white', mb: 4, mt: 2 }}>
              Ut consectetur, metus sit amet aliquet placerat, enim est ultricies ligula, sit amet
              dapibus odio augue eget libero. Morbi tempus mauris a nisi luctus imperdiet.
            </Typography>
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                sx={{
                  backgroundColor: 'var(--red-color)',
                  '&:hover': { backgroundColor: 'var(--btn-hover)' }
                }}
                onClick={() => navigate('/contact')}>
                Contact
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Contact

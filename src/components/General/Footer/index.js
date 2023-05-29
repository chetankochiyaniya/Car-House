import { Container, Typography, Box } from '@mui/material'

const Footer = () => {
  return (
    <footer>
      <Box sx={{ backgroundColor: 'var(--navbar-bg)', padding: 1, marginTop: 2 }}>
        <Container>
          <Typography variant="body1" align="center" mt={2} mb={2} color="var(--white-color)">
            © 2020 Car House - Developed by:{' '}
            <Typography variant="body2" component="span" color="primary">
              Chetan Kochiyaniya
            </Typography>
          </Typography>
        </Container>
      </Box>
    </footer>
  )
}

export default Footer

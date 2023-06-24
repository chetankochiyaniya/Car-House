import { Box, Container, Typography } from '@mui/material'

const AboutUs = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundImage: "url('/assets/about.jpg')",
        textAlign: 'center'
      }}>
      <Box sx={{ backgroundColor: 'var(--over-bg-color)', pt: 10, pb: 15 }}>
        <Container>
          <Typography variant="h4" sx={{ color: 'white' }}>
            READ{' '}
            <Typography variant="h4" component="span" className="em-color">
              ABOUT US{' '}
            </Typography>
          </Typography>
          <img src="/assets/line-dec.png" alt="" />
          <Typography variant="body1" sx={{ color: 'white', mt: 10 }}>
            Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor,
            ultricies fermentum massa consequat eu.
          </Typography>
          <Typography variant="body1" sx={{ color: 'white', mt: 5 }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore deleniti voluptas enim!
            Provident consectetur id earum ducimus facilis, aspernatur hic, alias, harum rerum velit
            voluptas, voluptate enim! Eos, sunt, quidem.
          </Typography>
          <Typography variant="body1" sx={{ color: 'white', mt: 5 }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto nulla quo cum officia
            laboriosam. Amet tempore, aliquid quia eius commodi, doloremque omnis delectus
            laudantium dolor reiciendis non nulla! Doloremque maxime quo eum in culpa mollitia
            similique eius doloribus voluptatem facilis! Voluptatibus, eligendi, illum. Distinctio,
            non!
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}

export default AboutUs

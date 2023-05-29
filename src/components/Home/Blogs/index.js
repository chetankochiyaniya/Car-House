import { useState } from 'react'
import { Box, Container, Typography, Link, Button } from '@mui/material'
import './index.css'

const Blogs = () => {
  const [activeTab, setActiveTab] = useState('tabs-1')

  const handleTabClick = (event, tabId) => {
    event.preventDefault()
    setActiveTab(tabId)
  }

  return (
    <Box component="section" className="section" id="our-classNamees">
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6, mt: 10 }}>
          <Typography variant="h4" component="h2">
            READ OUR{' '}
            <Typography variant="h4" className="em-color" component="span">
              BLOG
            </Typography>
          </Typography>
          <img src="/assets/line-dec.png" alt="" />
          <Typography variant="body1">
            Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor,
            ultricies fermentum massa consequat eu.
          </Typography>
        </Box>
        <Box className="row" id="tabs">
          <Box className="col-lg-4">
            <ul>
              <li>
                <Link
                  href="#tabs-1"
                  onClick={(e) => handleTabClick(e, 'tabs-1')}
                  className={activeTab === 'tabs-1' ? 'active' : ''}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                </Link>
              </li>
              <li>
                <Link
                  href="#tabs-2"
                  onClick={(e) => handleTabClick(e, 'tabs-2')}
                  className={activeTab === 'tabs-2' ? 'active' : ''}>
                  Aspernatur excepturi magni, placeat rerum nobis magnam libero! Soluta.
                </Link>
              </li>
              <li>
                <Link
                  href="#tabs-3"
                  onClick={(e) => handleTabClick(e, 'tabs-3')}
                  className={activeTab === 'tabs-3' ? 'active' : ''}>
                  Sunt hic recusandae vitae explicabo quidem laudantium corrupti non adipisci nihil.
                </Link>
              </li>
            </ul>
            <Box sx={{ textAlign: 'center', mt: 3 }}>
              <Button
                component={Link}
                to="/blogs"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: 'var(--red-color)',
                  '&:hover': { backgroundColor: 'var(--btn-hover)' },
                  paddingTop: 1,
                  paddingBottom: 1
                }}>
                Read More
              </Button>
            </Box>
          </Box>
          <Box className="col-lg-8">
            <Box component="section" className="tabs-content">
              <article
                id="tabs-1"
                style={{ display: activeTab === 'tabs-1' ? 'block' : 'none', marginTop: 5 }}>
                <img src="/assets/blog-1.jpg" alt="" />
                <Typography variant="h4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing.
                </Typography>
                <Typography variant="body2" component="p">
                  <i className="fa fa-user"></i> Chetan K | <i className="fa fa-calendar"></i>{' '}
                  25.05.2023 10:10 | <i className="fa fa-comments"></i> 15 comments
                </Typography>
                <Typography variant="body1">
                  Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui
                  eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut
                  sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat
                  imperdiet, molestie nunc ut, accumsan diam.
                </Typography>
                <Box sx={{ mt: 4 }}>
                  <Button
                    component={Link}
                    to="/blog-details"
                    variant="contained"
                    sx={{
                      backgroundColor: 'var(--red-color)',
                      '&:hover': { backgroundColor: 'var(--btn-hover)' }
                    }}>
                    Continue Reading
                  </Button>
                </Box>
              </article>
              <article
                id="tabs-2"
                style={{ display: activeTab === 'tabs-2' ? 'block' : 'none', marginTop: 5 }}>
                <img src="/assets/blog-2.jpg" alt="" />
                <Typography variant="h4">
                  Aspernatur excepturi magni, placeat rerum nobis magnam libero! Soluta.
                </Typography>
                <Typography variant="body2" component="p">
                  <i className="fa fa-user"></i> Chetan K | <i className="fa fa-calendar"></i>{' '}
                  25.05.2023 10:10 | <i className="fa fa-comments"></i> 15 comments
                </Typography>
                <Typography variant="body1">
                  Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac pulvinar quam
                  tortor a velit. Praesent ultrices erat ante, in ultricies augue ultricies
                  faucibus. Nam tellus nibh, ullamcorper at mattis non, rhoncus sed massa. Cras quis
                  pulvinar eros. Orci varius natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.
                </Typography>
                <Box sx={{ mt: 4 }}>
                  <Button
                    component={Link}
                    to="/blog-details"
                    variant="contained"
                    sx={{
                      backgroundColor: 'var(--red-color)',
                      '&:hover': { backgroundColor: 'var(--btn-hover)' }
                    }}>
                    Continue Reading
                  </Button>
                </Box>
              </article>
              <article
                id="tabs-3"
                style={{ display: activeTab === 'tabs-3' ? 'block' : 'none', marginTop: 5 }}>
                <img src="/assets/blog-3.jpg" alt="" />
                <Typography variant="h4">
                  Sunt hic recusandae vitae explicabo quidem laudantium corrupti non adipisci nihil.
                </Typography>
                <Typography variant="body2" component="p">
                  <i className="fa fa-user"></i> Chetan K | <i className="fa fa-calendar"></i>{' '}
                  25.05.2023 10:10 | <i className="fa fa-comments"></i> 15 comments
                </Typography>
                <Typography variant="body1">
                  Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id auctor neque
                  posuere sit amet. Aliquam pharetra, augue vel cursus porta, nisi tortor vulputate
                  sapien, id scelerisque felis magna id felis. Proin neque metus, pellentesque
                  pharetra semper vel, accumsan a neque.
                </Typography>
                <Box sx={{ mt: 4 }}>
                  <Button
                    component={Link}
                    to="/blog-details"
                    variant="contained"
                    sx={{
                      backgroundColor: 'var(--red-color)',
                      '&:hover': { backgroundColor: 'var(--btn-hover)' }
                    }}>
                    Continue Reading
                  </Button>
                </Box>
              </article>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Blogs

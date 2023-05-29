import { Typography, Box, Container } from '@mui/material'
import React, { useState } from 'react'

function About() {
  const [activeTab, setActiveTab] = useState('tabs-1')
  const handleTabClick = (event, tabId) => {
    event.preventDefault()
    setActiveTab(tabId)
  }
  return (
    <>
      <Box sx={{ textAlign: 'center', mb: 6, mt: 10 }}>
        <Typography variant="h4" component="h2">
          ABOUT
          <Typography variant="h4" className="em-color" component="span">
            US
          </Typography>
        </Typography>
        <img src="/assets/line-dec.png" alt="" />
        <Typography variant="body1">
          ipsum dolor, ultricies fermentum massa consequat eu.
        </Typography>
      </Box>

      {/** About us */}
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
                    <i className="fa fa-soccer-ball-o"></i> Our Goals
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    component="a"
                    href="#tabs-2"
                    onClick={(e) => handleTabClick(e, 'tabs-2')}
                    className={activeTab === 'tabs-2' ? 'active' : ''}>
                    <i className="fa fa-briefcase"></i> Our Work
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="body1"
                    component="a"
                    href="#tabs-3"
                    onClick={(e) => handleTabClick(e, 'tabs-3')}
                    className={activeTab === 'tabs-3' ? 'active' : ''}>
                    <i className="fa fa-heart"></i> Our Passion
                  </Typography>
                </li>
              </ul>
            </Box>
            <Box className="col-lg-8">
              <Box component="section" className="tabs-content">
                <article
                  id="tabs-1"
                  style={{ display: activeTab === 'tabs-1' ? 'block' : 'none', marginTop: 5 }}>
                  <img src="/assets/about-1.jpg" alt="" />
                  <Typography variant="h4">Our Goals</Typography>
                  <Typography variant="body2" component="p">
                    Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id auctor neque
                    posuere sit amet. Aliquam pharetra, augue vel cursus porta, nisi tortor
                    vulputate sapien, id scelerisque felis magna id felis. Proin neque metus,
                    pellentesque pharetra semper vel, accumsan a neque.
                  </Typography>
                  <Typography variant="body2" component="p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro aut beatae
                    commodi repudiandae distinctio, magnam blanditiis reiciendis vitae velit
                    voluptatum natus, fugit quis eos dolores!
                  </Typography>
                  <Typography variant="body2" component="p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic adipisci
                    reiciendis quaerat qui earum aut, atque esse quisquam quis exercitationem
                    sapiente, dolorum consequatur consequuntur voluptatibus ipsam, fuga magnam
                    beatae optio nam. Recusandae ut aliquid, eligendi.
                  </Typography>
                </article>
                <article
                  id="tabs-2"
                  style={{ display: activeTab === 'tabs-2' ? 'block' : 'none', marginTop: 5 }}>
                  <img src="/assets/about-2.jpg" alt="" />
                  <Typography variant="h4">Our Work</Typography>
                  <Typography variant="body2" component="p">
                    Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac pulvinar quam
                    tortor a velit. Praesent ultrices erat ante, in ultricies augue ultricies
                    faucibus. Nam tellus nibh, ullamcorper at mattis non, rhoncus sed massa. Cras
                    quis pulvinar eros. Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus.
                  </Typography>
                  <Typography variant="body2" component="p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ut
                    accusantium cum! Ad quisquam, aut praesentium magni pariatur ipsa! Soluta
                    deserunt accusantium repellendus ratione quam hic facere, cupiditate iste
                    obcaecati a, officiis ipsum aspernatur in?
                  </Typography>
                  <Typography variant="body2" component="p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla a necessitatibus
                    eos vitae quibusdam quo sunt officiis rerum voluptatibus non natus eius placeat
                    officia vel quaerat, reprehenderit obcaecati, eaque? Repudiandae ad facere culpa
                    accusamus aliquam ab assumenda reiciendis corrupti cum nemo, cumque molestiae
                    corporis deserunt!
                  </Typography>
                </article>
                <article
                  id="tabs-3"
                  style={{ display: activeTab === 'tabs-3' ? 'block' : 'none', marginTop: 5 }}>
                  <img src="/assets/about-3.jpg" alt="" />
                  <Typography variant="h4">Our Passion</Typography>
                  <Typography variant="body2" component="p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel aspernatur natus
                    dignissimos eos quod, odio.
                  </Typography>
                  <Typography variant="body2" component="p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cupiditate ullam
                    exercitationem molestiae illum? Nam magni, saepe sint maiores vitae!
                  </Typography>
                  <Typography variant="body2" component="p">
                    Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui
                    eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut
                    sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat
                    imperdiet, molestie nunc ut, accumsan diam.
                  </Typography>
                  <Typography variant="body2" component="p">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi suscipit commodi
                    impedit unde accusantium nam incidunt tenetur, libero maiores enim! Nisi ex
                    odit, totam nihil doloribus. Nemo ut, eos consequatur libero aut quas dolorum
                    ipsa, quidem, totam dicta id possimus dolores distinctio laboriosam doloribus
                    voluptates tenetur consectetur inventore aliquid dolorem?
                  </Typography>
                </article>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default About

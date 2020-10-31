import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'

import content from '../content'
import { Navigation, Nav } from '../components/Navigation'
import {
  Section,
  SectionBox,
  SectionHeader,
  SectionSubHeader,
} from '../components/Section'
import Box from '../components/Box'

const BackgroundBox = styled(SectionBox)`
  background-image: ${({ asset }) =>
    'linear-gradient(to bottom, transparent, var(--primary-bg-half-transparent-color), var(--primary-bg-color)), url(assets/' +
    asset +
    '_small_portrait.jpg)'};

  @media (min-width: 52em) and (orientation: portrait) {
    background-image: ${({ asset }) =>
      'linear-gradient(to bottom, transparent, var(--primary-bg-half-transparent-color), var(--primary-bg-color)), url(assets/' +
      asset +
      '_small_portrait.jpg)'};
  }

  @media (min-width: 52em) and (orientation: landscape) {
    background-image: ${({ asset }) =>
      'linear-gradient(to bottom, transparent, var(--primary-bg-half-transparent-color), var(--primary-bg-color)), url(assets/' +
      asset +
      '_medium.jpg)'};
  }

  @media (min-width: 64em) and (orientation: landscape) {
    background-image: ${({ asset }) =>
      'linear-gradient(to bottom, transparent, var(--primary-bg-half-transparent-color), var(--primary-bg-color)), url(assets/' +
      asset +
      '_large.jpg)'};
  }

  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  ${Nav} {
    > a {
      margin-bottom: 5px;

      @media (min-width: 52em) and (orientation: landscape) {
        margin-bottom: 15px;
      }
    }
  }
`

BackgroundBox.propTypes = {
  asset: string,
}

const HomePage = () => {
  // const onThemeChange = () => {
  //   const elem = document.documentElement
  //   elem.setAttribute(
  //     'data-theme',
  //     elem.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
  //   )
  // }

  return (
    <>
      <BackgroundBox asset="profile" height="100vh">
        <SectionHeader maxWidth="90%">
          {content.me.name}
          <br />
          {content.me.title}
        </SectionHeader>
        <Navigation />
      </BackgroundBox>
      <Section title="who am i" text={content.me.long} />
      <Section title="what have i done">
        {content.projects.map(project => (
          <BackgroundBox
            key={project.title}
            asset={`projects/${project.asset}`}
            height="80vh"
            marginTop={['10px', '20px', '30px']}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
              width="100%"
            >
              <Box width={['90%', '80%', '80%']}>
                <SectionSubHeader textAlign="center">
                  {project.title}
                </SectionSubHeader>
              </Box>
            </Box>
          </BackgroundBox>
        ))}
      </Section>
    </>
  )
}

export default HomePage

import React from 'react'
import SocialLinks from '../../constants/socialLinks'
import { StaticImage } from 'gatsby-plugin-image'
import Title from './Title'
import styled from 'styled-components'

const About = () => {
  return (
    <Wrapper>
      <Title title='About me' />
      <StaticImage
        src='../../assets/banner-about.jpg'
        layout='fixed'
        width={100}
        height={100}
        alt='author'
        className='img'
      />
      <p>
        I'm hella tousled thundercat direct trade artisan. Microdosing truffaut
        palo santo umami chicharrones. Listicle skateboard cliche sriracha
        activated charcoal retro. Four loko mustache try-hard quinoa shabby chic
        kickstarter, 3 wolf moon DIY activated charcoal cred succulents
        slow-carb tofu.
      </p>
      <SocialLinks styleClass='banner-icons' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  p {
    color: var(--clr-grey-5);
  }
  .img {
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
`
export default About

import React from 'react'
import Hero from '../components/Hero/Hero'
import { Container } from '../global-styles'
import Services from '../components/Services/Services'
// Hero features content carousel
const Home = () => {
  return (
    <Container>
      <Hero />
      <Services/>
    </Container>
  )
}

export default Home

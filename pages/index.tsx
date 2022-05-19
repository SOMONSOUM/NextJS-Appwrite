import {Container } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Signup from '../components/Signup'

const Home: NextPage = () => {
  return (
    <Container>
      <Signup/>
    </Container>
  )
}

export default Home

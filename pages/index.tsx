import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import CallToActionWithAnnotation from './components/layout'

const Home: NextPage = () => {
  return (
    <Box bg="#F9CD48" color="#black" h="calc(100vh)" maxH="-webkit-fit-content">
      <CallToActionWithAnnotation />
    </Box>
  )
}

export default Home

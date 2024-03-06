import { Box, Heading } from '@chakra-ui/react'
import AboutMe from './AboutMe'

const Main: React.FC = () => {
  return (
    <Box as='main' bg='#121921'>
      <Box maxW='1080px' w='100%' margin='0 auto' p='60px 40px 0'>
        <AboutMe />
      </Box>
    </Box>
  )
}

export default Main

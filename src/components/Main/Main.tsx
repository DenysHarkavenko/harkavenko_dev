import { Box } from '@chakra-ui/react'
import AboutMe from './AboutMe'
import DevelopmentExperience from './DevelopmentExperience'

const Main: React.FC = () => {
  return (
    <Box as='main' bg='#121921'>
      <Box maxW='1080px' w='100%' margin='0 auto'>
        <AboutMe />
        <DevelopmentExperience />
      </Box>
    </Box>
  )
}

export default Main

import { Box } from '@chakra-ui/react'
import AboutMe from './AboutMe'
import DevelopmentExperience from './DevelopmentExperience'
import Skills from './Skills'
import Technologies from './Technologies'

const Main: React.FC = () => {
  return (
    <Box as='main' bg='#121921'>
      <Box maxW='1080px' w='100%' margin='0 auto'>
        <AboutMe />
        <DevelopmentExperience />
        <Skills />
        <Technologies />
      </Box>
    </Box>
  )
}

export default Main

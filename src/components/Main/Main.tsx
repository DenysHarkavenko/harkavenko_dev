import { Box } from '@chakra-ui/react'
import AboutMe from './AboutMe'
import DevelopmentExperience from './DevelopmentExperience'
import Skills from './Skills'
import Projects from './Projects'

const Main: React.FC = () => {
  return (
    <Box as='main' bg='#121921'>
      <Box maxW='980px' w='100%' margin='0 auto'>
        <AboutMe />
        <DevelopmentExperience />
        <Skills />
        <Projects />
      </Box>
    </Box>
  )
}

export default Main

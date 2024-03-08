import { Box } from '@chakra-ui/react'
import AboutMe from './Sections/AboutMe'
import DevelopmentExperience from './Sections/DevelopmentExperience'
import Skills from './Sections/Skills'
import Projects from './Sections/Projects'

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

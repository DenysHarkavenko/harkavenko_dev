import { Box } from '@chakra-ui/react'
import AboutMe from './Sections/AboutMe'
import DevelopmentExperience from './Sections/DevelopmentExperience'
import Skills from './Sections/Skills'
// import Projects from './Sections/Projects'
import LifeStory from './Sections/LifeStory'
import Education from './Sections/Education'

const Main: React.FC = () => {
	return (
		<Box as='main' bg='#121921'>
			<Box maxW='980px' w='100%' margin='0 auto'>
				<AboutMe />
				<DevelopmentExperience />
				<Education />
				<Skills />
				{/* <Projects /> */}
				<LifeStory />
			</Box>
		</Box>
	)
}

export default Main

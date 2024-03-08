import { Box, Heading, Flex } from '@chakra-ui/react'
import { projectItems } from '../../../data/projectsItems'
import ProjectItem from '../UI/ProjectItem'

const Projects: React.FC = () => {
  return (
    <Box as='section' p='60px 40px' id='Projects'>
      <Heading textAlign={['center', null, null, 'unset', 'unset']}>
        My Projects
      </Heading>
      {projectItems.map((project, index) => (
        <ProjectItem
          key={index}
          title={project.title}
          description={project.description}
          stack={project.stack}
          year={project.year}
        />
      ))}
      <Flex justify='space-between' flexWrap='wrap'></Flex>
    </Box>
  )
}

export default Projects

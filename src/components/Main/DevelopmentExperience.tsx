import { Box, Heading } from '@chakra-ui/react'
import Example from './ExperienceStepper'

const DevelopmentExperience: React.FC = () => {
  return (
    <Box textAlign={['center', null, null, 'unset', 'unset']} p='60px 40px'>
      <Heading>Development Experience</Heading>
      <Example />
    </Box>
  )
}

export default DevelopmentExperience

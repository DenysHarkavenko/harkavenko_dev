import { Box, Heading } from '@chakra-ui/react'
import ExperienceStepper from '../UI/ExperienceStepper'

const DevelopmentExperience: React.FC = () => {
  return (
    <Box
      textAlign={['center', null, null, 'unset', 'unset']}
      p='60px 40px'
      id='Experience'
    >
      <Heading>Development Experience</Heading>
      <ExperienceStepper />
    </Box>
  )
}

export default DevelopmentExperience

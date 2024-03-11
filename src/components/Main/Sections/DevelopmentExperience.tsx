import { Box, Heading } from '@chakra-ui/react'
import ExperienceStepper from '../UI/ExperienceStepper'

const DevelopmentExperience: React.FC = () => {
  return (
    <Box p='60px 40px' id='Experience'>
      <Heading textAlign={['center', null, null, 'unset', 'unset']}>
        Development Experience
      </Heading>
      <ExperienceStepper />
    </Box>
  )
}

export default DevelopmentExperience

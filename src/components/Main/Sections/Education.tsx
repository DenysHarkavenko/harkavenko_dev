import { Box, Heading } from '@chakra-ui/react'
import { education } from '../../../data/education'
import EducationItem from '../Modules/EducationItem'

const Education: React.FC = () => {
  return (
    <Box p='60px 40px' textAlign={['center', null, 'unset', null, null]} id='Education'>
      <Heading>Education</Heading>
      {education.map((item, index) => (
        <EducationItem key={index} {...item} />
      ))}
    </Box>
  )
}

export default Education

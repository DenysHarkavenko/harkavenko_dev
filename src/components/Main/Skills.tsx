import { Box, Heading } from '@chakra-ui/react'
import SkillProgressbar from './SkillProgressBar'
import { skillsData } from '../../data/skills'

const Skills: React.FC = () => {
  return (
    <Box p='60px 40px'>
      <Heading textAlign={['center', null, null, 'unset', 'unset']}>
        My Skill Sets
      </Heading>
      {skillsData.map((skillItem, index) => (
        <SkillProgressbar
          key={index}
          vl={skillItem.level}
          skill={skillItem.skill}
        />
      ))}
    </Box>
  )
}

export default Skills

import { Box, Heading } from '@chakra-ui/react'
import SkillProgressbar from './SkillProgressBar'

const skillsData = [
  { skill: 'HTML/CSS', level: 100 },
  { skill: 'React', level: 80 },
  { skill: 'TypeScript / JavaScript', level: 75 },
  { skill: 'PostgreSQL', level: 73 },
  { skill: 'Express', level: 69 },
  { skill: 'Ruby', level: 64 },
  { skill: 'Ruby on Rails', level: 58 },
]

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

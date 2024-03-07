import { Box, Heading } from '@chakra-ui/react'
import SkillProgressbar from './SkillProgressBar'

const skillsData = [
  { skill: 'React', level: 80 },
  { skill: 'TypeScript / JavaScript', level: 75 },
  { skill: 'PostgreSQL', level: 73 },
  { skill: 'Express', level: 60 },
]

const Skills: React.FC = () => {
  return (
    <Box textAlign={['center', null, null, 'unset', 'unset']} p='60px 40px'>
      <Heading>My Skill Sets</Heading>
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

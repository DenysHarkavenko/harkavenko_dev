import { Box, Heading, Flex } from '@chakra-ui/react'
import SkillProgressbar from './SkillProgressBar'
import { languages, skillsData } from '../../data/skills'
import { techologies } from '../../data/skills'
import CustomBadge from '../UI/CustomBadge'

const Skills: React.FC = () => {
  return (
    <Box p='60px 40px'>
      <Heading textAlign={['center', null, null, 'unset', 'unset']}>
        My Skill Sets
      </Heading>
      <Flex flexWrap='wrap'>
        {skillsData.map((skillItem, index) => (
          <Box
            key={index}
            width={['100%', '50%']}
            px={2}
            mb={4}
            p='0'
            pr={['0', '12px', '12px', '12px', '12px']}
          >
            <SkillProgressbar vl={skillItem.level} skill={skillItem.skill} />
          </Box>
        ))}
      </Flex>
      {techologies.map((technology) => (
        <CustomBadge>{technology}</CustomBadge>
      ))}
      <br />
      {languages.map((technology) => (
        <CustomBadge bg='blue'>{technology}</CustomBadge>
      ))}
    </Box>
  )
}

export default Skills

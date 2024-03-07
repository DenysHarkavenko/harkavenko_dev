import { Progress, Text, Box } from '@chakra-ui/react'

type SkillProgressBarProps = {
  vl: number
  skill: React.ReactNode
}

const SkillProgressbar: React.FC<SkillProgressBarProps> = ({ vl, skill }) => {
  return (
    <Box mt='20px'>
      <Text>{skill}</Text>
      <Progress
        value={vl}
        borderRadius='6px'
        size='md'
        bg='#334D66'
        m='12px 0'
      />
      <Text color='#94ADC7'>{vl}%</Text>
    </Box>
  )
}

export default SkillProgressbar

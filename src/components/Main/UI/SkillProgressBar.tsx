import { Progress, Text, Box } from '@chakra-ui/react'

type SkillProgressBarProps = {
  vl: number
  skill: React.ReactNode
}

const SkillProgressbar: React.FC<SkillProgressBarProps> = ({ vl, skill }) => {
  return (
    <Box mt={['20px']} p='0'>
      <Text>
        {skill} - <span style={{ color: '#94ADC7' }}>{vl}%</span>
      </Text>
      <Progress
        value={vl}
        borderRadius='6px'
        size='md'
        bg='#334D66'
        m='12px 0'
      />
    </Box>
  )
}

export default SkillProgressbar

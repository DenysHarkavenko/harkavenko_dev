import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from '@chakra-ui/react'

const steps = [
  {
    title: 'Front-End developer',
    company: 'Freelance',
    time: '2022-2023',
  },
  {
    title: 'Full-Stack developer',
    company: 'StudInfo',
    time: '2023-Present',
  },
]

const ExperienceStepper: React.FC = () => {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  })

  return (
    <Stepper
      index={activeStep}
      orientation='vertical'
      height='150px'
      gap='0'
      colorScheme='gray'
      size='sm'
      mt='20px'
    >
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator bg='#fff'>
            <StepStatus complete={<StepIcon />} />
          </StepIndicator>

          <Box flexShrink='0'>
            <StepTitle color='#fff' fontWeight='bold' fontSize='16px'>
              {step.title}
            </StepTitle>
            <StepDescription fontSize='14px'>{step.company}</StepDescription>
            <StepDescription color='#94ADC7'>{step.time}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  )
}

export default ExperienceStepper

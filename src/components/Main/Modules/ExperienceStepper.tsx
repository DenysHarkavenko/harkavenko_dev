import {
	Box,
	Step,
	Text,
	StepDescription,
	StepIcon,
	StepIndicator,
	StepSeparator,
	StepStatus,
	StepTitle,
	Stepper,
	useSteps,
} from '@chakra-ui/react'
import { steps } from '../../../data/experience'

const ExperienceStepper: React.FC = () => {
	const { activeStep } = useSteps({
		index: 1,
		count: steps.length,
	})

	return (
		<Stepper
			index={activeStep}
			orientation='vertical'
			height='390px'
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
						<StepTitle>
							<Text color='#fff' fontWeight='bold' fontSize='20px'>
								{step.title}
							</Text>
						</StepTitle>
						<StepDescription>
							<Text fontSize='16px' color='#fff' fontWeight='medium'>
								{step.company}
							</Text>
						</StepDescription>
						<StepDescription>
							<Text fontSize='16px' as='div'>
								{step.description}
							</Text>
						</StepDescription>
						<StepDescription>
							<Text color='#94ADC7' fontSize='14px'>
								{step.time}
							</Text>
						</StepDescription>
					</Box>
					<StepSeparator />
				</Step>
			))}
		</Stepper>
	)
}

export default ExperienceStepper

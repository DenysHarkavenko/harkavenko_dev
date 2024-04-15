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
	Link,
} from '@chakra-ui/react'
import { steps } from '../../../data/experience'

const ExperienceStepper: React.FC = () => {
	const { activeStep } = useSteps({
		index: 2,
		count: steps.length,
	})

	return (
		<Stepper
			index={activeStep}
			orientation='vertical'
			// height='600px'
			gap='0px'
			colorScheme='gray'
			size='sm'
			mt='20px'
		>
			{steps.map((step, index) => (
				<Step key={index}>
					<StepIndicator bg='#fff'>
						<StepStatus complete={<StepIcon />} />
					</StepIndicator>
					<Box flexShrink='0' mb='10px'>
						<StepTitle>
							<Text color='#fff' fontWeight='bold' fontSize='20px'>
								{step.title}
							</Text>
						</StepTitle>
						<StepDescription>
							<Text fontSize='16px' color='#fff' fontWeight='medium'>
								<Link href={step.link}>{step.company}</Link>
							</Text>
						</StepDescription>
						<StepDescription>
							<Text
								fontSize='16px'
								as='div'
								color='#94ADC7'
								fontWeight='bold'
								mt='5px'
							>
								{step.description}
							</Text>
						</StepDescription>
						<StepDescription>
							<Text color='#94ADC7' fontSize='14px' mt='5px'>
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

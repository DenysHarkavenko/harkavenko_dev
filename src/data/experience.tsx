import { UnorderedList, ListItem } from '@chakra-ui/react'

export const steps: Step[] = [
	{
		title: 'WordPress developer',
		company: 'MEGA-OLIMP-COMPANY',
    whatIDo: 'I did my university internship at MEGA-OLIMP-COMPANY, where my team and I developed a website to introduce the units of the Armed Forces of Ukraine.',
		description: (
			<UnorderedList styleType='none'>
				<ListItem>- HTML + CSS</ListItem>
				<ListItem>- JavaScript</ListItem>
				<ListItem>- PHP</ListItem>
				<ListItem>- WordPress</ListItem>
			</UnorderedList>
		),
		startDate: new Date('2024-01'),
		endDate: new Date('2024-02'),
	},
	{
		title: 'Full-Stack developer',
		company: 'StudInfo',
    whatIDo: 'A startup where I play the role of FullStack developer. During my work, I worked with the following: creating user-friendly user interfaces using modern technologies, parsing information, working with databases, creating user authorization logic, working with REST APIs, and a bunch of other things! The job gave me a lot of experience in using many modern technologies and introduced me to teamwork and CRM.',
		description: (
			<UnorderedList styleType='none'>
				<ListItem>- Ruby / Ruby on Rails</ListItem>
				<ListItem>- RSpec / FactoryBot / Devise</ListItem>
				<ListItem>- TypeScript</ListItem>
				<ListItem>- React + RTK</ListItem>
				<ListItem>- ChakraUI</ListItem>
			</UnorderedList>
		),
		startDate: new Date('2023-12'),
		endDate: new Date(),
	},
]

// total time calculator
steps.forEach((step) => {
	const currentDate = step.endDate
	const startDate = step.startDate
	const diffTime = Math.abs(currentDate.getTime() - startDate.getTime())
	const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30))

	if (currentDate.getTime() === new Date().getTime()) {
		step.time = `${startDate.toLocaleString('en-US', {
			month: 'long',
			year: 'numeric',
		})} - Present (${diffMonths} months)`
	} else {
		step.time = `${startDate.toLocaleString('en-US', {
			month: 'long',
			year: 'numeric',
		})} - ${currentDate.toLocaleString('en-US', {
			month: 'long',
			year: 'numeric',
		})} (${diffMonths} months)`
	}
})

export default steps

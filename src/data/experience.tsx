import { UnorderedList, ListItem } from '@chakra-ui/react'

export const steps: Step[] = [
  {
    title: 'Full-Stack developer',
    company: 'StudInfo',
    description: (
      <UnorderedList styleType='none'>
        <ListItem>- Ruby / Ruby on Rails</ListItem>
        <ListItem>- RSpec / FactoryBot</ListItem>
        <ListItem>- TypeScript</ListItem>
        <ListItem>- React + RTK</ListItem>
        <ListItem>- ChakraUI</ListItem>
      </UnorderedList>
    ),
    startDate: new Date('2023-12'),
    endDate: new Date(),
  },
  {
    title: 'WordPress developer',
    company: 'MEGA-OLIMP-COMPANY',
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

import { Box, Flex, Heading } from '@chakra-ui/react'
import { education } from '../../../data/education'
import EducationItem from '../Modules/EducationItem'

const Education: React.FC = () => {
	return (
		<Box
			p='60px 40px'
			textAlign={['center', null, 'unset', null, null]}
			id='Education'
		>
			<Heading mb='15px'>Education</Heading>
			<Flex
				flexWrap='wrap'
				gap='10px'
				justify={['center', null, 'space-between', null, null]}
			>
				{education.map((item, index) => (
					<EducationItem key={index} {...item} />
				))}
			</Flex>
		</Box>
	)
}

export default Education

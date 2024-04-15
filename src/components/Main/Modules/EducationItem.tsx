import { Link, Flex, Heading, Box, Image, Text } from '@chakra-ui/react'

const EducationItem: React.FC<Education> = ({
	title,
	description,
	img,
	time,
	link,
}) => {
	return (
		<Box maxW='445px' w='100%'>
			<Link
				w='100%'
				_hover={{
					textDecoration: 'none',
				}}
				href={link}
				target='_blank'
			>
				<Flex
					bg='#1A2633'
					w='100%'
					minH='133px'
					direction={['column', 'row', 'row', 'row', 'row']}
					borderRadius='12px'
					p='15px 10px'
					align='center'
					justify={['space-between', null, 'unset', null, null]}
					_hover={{
						transform: 'scale(102%)',
					}}
					transition='0.2s all linear'
				>
					<Image src={img} w='100px' />
					<Box ml='15px'>
						<Heading fontSize='20px' mt={['15px', 'unset', null, null, null]}>
							{title}
						</Heading>
						<Text fontSize='16px' m='5px 0'>
							{description}
						</Text>
						<Text fontSize='14px' color='#94ADC7'>
							{time}
						</Text>
					</Box>
				</Flex>
			</Link>
		</Box>
	)
}

export default EducationItem

import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
import me from '../../img/me.jpeg'
import ContactsModal from './Modules/ContactsModal'

const Header: React.FC = () => {
	return (
		<Box bg='#121921' as='header'>
			<Flex
				maxW='980px'
				p='60px 40px'
				w='100%'
				m='0 auto'
				justify='space-between'
				align='center'
				direction={['column', 'column', null, 'row', 'row']}
			>
				<Image src={me} borderRadius='50px' />
				<Box textAlign={['center', null, null, 'unset', 'unset']}>
					<Heading
						fontSize={['38px', '40px', '45px', '48px']}
						mt={['20px', null, null, 'unset', 'unset']}
					>
						Denys Harkavenko
					</Heading>
					<Text mt='10px' fontSize={['20px']}>
						Full Stack Web Developer
					</Text>
					<Flex
						mt='32px'
						align='center'
						justify={['center', null, null, 'unset', 'unset']}
					>
						<Link
							href='../src/data/DenysHarkavenko_CV.pdf'
							download
							textAlign='center'
							p='8px 0'
							w='131px'
							bg='#1466B8'
							color='#fff'
							borderRadius='12px'
							_hover={{ transform: 'scale(105%)' }}
							fontWeight='bold'
							transition='0.2s all linear'
						>
							Resume
						</Link>

						<ContactsModal />
					</Flex>
				</Box>
			</Flex>
		</Box>
	)
}

export default Header

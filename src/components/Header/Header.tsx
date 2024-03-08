import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
import bg_1 from '../../img/145119078.jpeg'

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
        <Image src={bg_1} borderRadius='50px' />
        <Box textAlign={['center', null, null, 'unset', 'unset']}>
          <Heading
            fontSize={['38px', '40px', '45px', '48px']}
            mt={['15px', null, null, 'unset', 'unset']}
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
              _hover={{ transform: 'scale(108%)' }}
            >
              Resume
            </Link>
            <Link
              href='mailto:harkavenkodev@gmail.com'
              w='131px'
              borderRadius='12px'
              p='8px 0'
              textAlign='center'
              bg='#243647'
              color='#fff'
              ml='12px'
              _hover={{ transform: 'scale(108%)' }}
            >
              Contact Me
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default Header

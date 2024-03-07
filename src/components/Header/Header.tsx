import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import bg_1 from '../../img/bg_1.png'

const Header: React.FC = () => {
  return (
    <Box bg='#121921'>
      <Flex
        maxW='1080px'
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
          <Box mt='32px'>
            <Button
              w='132.42px'
              bg='#1466B8'
              color='#fff'
              _hover={{ transform: 'scale(108%)' }}
            >
              Resume
            </Button>
            <Button
              w='132.42px'
              bg='#243647'
              color='#fff'
              ml='12px'
              _hover={{ transform: 'scale(108%)' }}
            >
              Contact Me
            </Button>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default Header

import { Box, Heading, Image, Text, Flex, Link } from '@chakra-ui/react'
import duikt from '../../../img/duikt.png'

const Education: React.FC = () => {
  return (
    <Box p='60px 40px' textAlign={['center', null, 'unset', null, null]}>
      <Heading mb='20px'>Education</Heading>
      <Link
        _hover={{
          textDecoration: 'none',
        }}
        href='https://duikt.edu.ua/'
        target='_blank'
      >
        <Flex
          bg='#1A2633'
          maxW='450px'
          direction={['column', 'row', 'row', 'row', 'row']}
          borderRadius='12px'
          p='15px 10px'
          align='center'
          justify='space-between'
          m={['0 auto', null, 'unset', null, null]}
          _hover={{
            transform: 'scale(103%)',
          }}
          transition='0.2s all linear'
        >
          <Image src={duikt} h='100px' w='100px' />
          <Box ml='15px'>
            <Heading fontSize='20px'>Software Engineer</Heading>
            <Text fontSize='16px' m='5px 0'>
              State University of information and communication technologies
            </Text>
            <Text fontSize='14px' color='#94ADC7'>
              September 2022 - Present
            </Text>
          </Box>
        </Flex>
      </Link>
    </Box>
  )
}

export default Education

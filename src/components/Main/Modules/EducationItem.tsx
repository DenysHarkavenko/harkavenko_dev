import { Link, Flex, Heading, Box, Image, Text } from '@chakra-ui/react'

const EducationItem: React.FC<Education> = ({
  title,
  description,
  img,
  time,
  link,
}) => {
  return (
    <Box maxW='450px'>
      <Link
        _hover={{
          textDecoration: 'none',
        }}
        href={link}
        target='_blank'
      >
        <Flex
          mt='15px'
          bg='#1A2633'
          maxW='450px'
          minH='133px'
          direction={['column', 'row', 'row', 'row', 'row']}
          borderRadius='12px'
          p='15px 10px'
          align='center'
          justify={['space-between', null, 'unset', null, null]}
          m={['15px auto', null, '15px 0', null, null]}
          _hover={{
            transform: 'scale(103%)',
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

import { Link, Flex, Heading, Box, Image, Text } from "@chakra-ui/react"

const EducationItem: React.FC<Education> = ({title, description, img, time, link }) => {
  return (
    <Link
      _hover={{
        textDecoration: 'none',
      }}
      href={link}
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
        <Image src={img} h='100px' w='100px' />
        <Box ml='15px'>
          <Heading fontSize='20px'>{title}</Heading>
          <Text fontSize='16px' m='5px 0'>
            {description}
          </Text>
          <Text fontSize='14px' color='#94ADC7'>
            {time}
          </Text>
        </Box>
      </Flex>
    </Link>
  )
}

export default EducationItem

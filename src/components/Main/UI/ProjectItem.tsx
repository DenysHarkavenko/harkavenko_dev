import { Flex, Heading, Hide, Box, Text, Image, Link } from '@chakra-ui/react'
import asd from '../../../img/pr_1.png'

type ProjectItemProps = {
  title: string
  description: string
  year: string
  stack: string
  link: string
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  year,
  stack,
  link,
}) => {
  return (
    <Flex
      bg='#1A2633'
      p='16px'
      borderRadius='12px'
      mt='20px'
      direction={['column-reverse', null, null, 'row', null]}
      justify='space-between'
      align='center'
    >
      <Box>
        <Heading
          fontSize='20px'
          mt={['15px']}
          textAlign={['center', null, null, 'unset', 'unset']}
        >
          {title}
        </Heading>
        <Text color='#94ADC7' mt='5px' mb='20px'>
          {description}
          <br />
          <br />
          <span style={{ fontWeight: 'Bold' }}>{stack}</span>
        </Text>
        <Link
          borderRadius='12px'
          p='8px 20px'
          textAlign='center'
          bg='#243647'
          color='#fff'
          fontWeight='bold'
          href={link}
          _hover={{
            transform: 'scale(108%)',
            background: '#1466B8',
          }}
        >
          Go to project
        </Link>
      </Box>
      <Hide breakpoint='(max-width: 990px)'>
        <Image src={asd} maxW='300px' maxH='200px' borderRadius='12px' />
      </Hide>
    </Flex>
  )
}

export default ProjectItem

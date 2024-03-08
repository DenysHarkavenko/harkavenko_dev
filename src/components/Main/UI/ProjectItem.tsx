import { Flex, Heading, Button, Hide, Box, Text, Image } from '@chakra-ui/react'
import asd from '../../../img/pr_1.png'

type ProjectItemProps = {
  title: string
  description: string
  year: string
  stack: string
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  year,
  stack,
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
        <Text color='#94ADC7' mt='5px'>
          {description}
          <br />
          <br />
          <span style={{ fontWeight: 'Bold' }}>{stack}</span>
        </Text>
        <Button
          borderRadius='12px'
          h='32px'
          bg='#243647'
          color='#fff'
          mt='16px'
        >
          View Project
        </Button>
      </Box>
      <Hide breakpoint='(max-width: 990px)'>
        <Image src={asd} maxW='300px' maxH='200px' borderRadius='12px' />
      </Hide>
    </Flex>
  )
}

export default ProjectItem

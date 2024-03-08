import { Box, Heading, Text, Flex, Button, Image } from '@chakra-ui/react'
import asd from '../../img/pr_1.png'

const Projects: React.FC = () => {
  return (
    <Box as='section' p='60px 40px'>
      <Heading textAlign={['center', null, null, 'unset', 'unset']}>
        My Projects
      </Heading>

      <Flex justify='space-between' flexWrap='wrap'>
        <Flex
          bg='#1A2633'
          p='16px'
          borderRadius='12px'
          mt='20px'
          direction={['column-reverse', null, null, 'row', null]}
          justify='space-between'
          textAlign='center'
          //   maxW='400px'
          minH='350px'
        >
          <Box>
            <Heading fontSize='20px' mt={['15px']}>
              Multi-Password Tool
            </Heading>
            <Text color='#94ADC7' mt='5px'>
              Multi-Password Tool comes equipped with all the essential features
              for efficiently managing your accounts and passwords. Whether it's
              social media, email, banking systems, or other online services –
              you can store all your passwords in one secure location.
              <br />
              <br />
              <span style={{ fontWeight: 'Bold' }}>
                Stack: React, Electron, Vite, TypeScript, IndexedDB, ChakraUI.
              </span>
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
          {/* <Image src={asd} maxW='200px' maxH='150px' borderRadius='12px' /> */}
        </Flex>
        <Flex
          bg='#1A2633'
          p='16px'
          borderRadius='12px'
          mt='20px'
          direction={['column-reverse', null, null, 'row', null]}
          justify='space-between'
          textAlign='center'
          //   maxW='400px'
          minH='350px'
          ml='15px'
        >
          <Box>
            <Heading fontSize='20px' mt={['15px']}>
              Multi-Password Tool
            </Heading>
            <Text color='#94ADC7' mt='5px'>
              Multi-Password Tool comes equipped with all the essential features
              for efficiently managing your accounts and passwords. Whether it's
              social media, email, banking systems, or other online services –
              you can store all your passwords in one secure location.
              <br />
              <br />
              <span style={{ fontWeight: 'Bold' }}>
                Stack: React, Electron, Vite, TypeScript, IndexedDB, ChakraUI.
              </span>
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
          {/* <Image src={asd} maxW='200px' maxH='150px' borderRadius='12px' /> */}
        </Flex>
      </Flex>
    </Box>
  )
}

export default Projects

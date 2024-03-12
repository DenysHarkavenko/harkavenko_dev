import { Flex, Heading } from '@chakra-ui/react'
import { LogoIcon } from '../../svg/LogoIcon'

const Footer: React.FC = () => {
  return (
    <Flex
      bg='#121921'
      as='footer'
      borderTop='1px solid #fff'
      minW='100%'
      align='center'
      p='20px 30px'
      justify='center'
    >
      <Flex align='center'>
        <LogoIcon />
        <Heading ml='16px' fontSize='20px'>
          harkavenko_dev
        </Heading>
      </Flex>
    </Flex>
  )
}

export default Footer

import * as React from 'react'
import { Heading, Flex, Hide, Show } from '@chakra-ui/react'
import { LogoIcon } from '../../svg/LogoIcon.tsx'
import { NavigationLinks } from './NavigationLinks.tsx'
import BurgerMenu from './BurgerMenu.tsx'

export const Navigation: React.FC = () => {
  return (
    <Flex
      as='nav'
      minW='100%'
      bg='#121921'
      h='65px'
      w='100%'
      position='sticky'
      top='0'
      zIndex='5'
    >
      <Flex
        w='100%'
        justify='space-between'
        p='0 30px'
        borderBottom='1px solid #eee'
      >
        <Flex align='center'>
          <LogoIcon />
          <Heading ml='16px' fontSize='20px'>
            harkavenko_dev
          </Heading>
        </Flex>

        <Hide breakpoint='(max-width: 990px)'>
          <NavigationLinks />
        </Hide>
        <Show breakpoint='(max-width: 990px)'>
          <BurgerMenu />
        </Show>
      </Flex>
    </Flex>
  )
}

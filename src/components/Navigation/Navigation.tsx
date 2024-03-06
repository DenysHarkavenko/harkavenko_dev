import * as React from 'react'
import { Heading, Flex, Hide, Show } from '@chakra-ui/react'
import { LogoIcon } from '../../svg/LogoIcon.tsx'
import { HeaderLinks } from './NavigationLinks.tsx'
import BurgerMenu from './BurgerMenu.tsx'

export const Header: React.FC = () => {
  return (
    <Flex as='nav' minW='100%' bg='#121921' h='65px' w='100%'>
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

        <Hide breakpoint='(max-width: 820px)'>
          <HeaderLinks />
        </Hide>
        <Show breakpoint='(max-width: 820px)'>
          <BurgerMenu />
        </Show>
      </Flex>
    </Flex>
  )
}

// 820px

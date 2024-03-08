import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import { LogoIcon } from '../../svg/LogoIcon'
import { HamburgerIcon } from '@chakra-ui/icons'
import { NavigationLinks } from './NavigationLinks'

const BurgerMenu: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Icon
        ref={btnRef}
        onClick={onOpen}
        alignSelf='center'
        as={HamburgerIcon}
        boxSize={25}
        color='#fff'
        cursor='pointer'
        mr={2}
      />
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg='#121921'>
          <DrawerCloseButton color='#fff' />
          <DrawerHeader color='#fff'>
            <LogoIcon />
          </DrawerHeader>
          <DrawerBody>
            <NavigationLinks />
          </DrawerBody>
          {/* <DrawerFooter>Some footer text</DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default BurgerMenu

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  Link,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import { LogoIcon } from '../../svg/LogoIcon'
import { HamburgerIcon } from '@chakra-ui/icons'

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
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        initialFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg='#121921'>
          <DrawerCloseButton color='#fff' />
          <DrawerHeader color='#fff'>
            <LogoIcon />
          </DrawerHeader>

          <DrawerBody>
            <Flex direction='column'>
              <Link
                href='#'
                _hover={{ textDecoration: 'none', color: '#1466B8' }}
                mt='15px'
              >
                About Me
              </Link>
              <Link
                href='#'
                mt='15px'
                _hover={{
                  textDecoration: 'none',
                  color: '#1466B8',
                }}
              >
                Development Experience
              </Link>
              <Link
                href='#'
                _hover={{ textDecoration: 'none', color: '#1466B8' }}
                mt='15px'
              >
                My Skill Sets
              </Link>
              <Link
                href='#'
                _hover={{ textDecoration: 'none', color: '#1466B8' }}
                mt='15px'
              >
                My Projects
              </Link>
            </Flex>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default BurgerMenu

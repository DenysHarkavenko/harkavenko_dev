import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Link,
  Flex,
} from '@chakra-ui/react'

const ContactsModal: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
        onClick={onOpen}
        w='131px'
        borderRadius='12px'
        p='8px 0'
        textAlign='center'
        bg='#243647'
        color='#fff'
        ml='12px'
        _hover={{ transform: 'scale(108%)' }}
      >
        Contact Me
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg='#121921' borderRadius='12px' m='60px 10px'>
          <ModalHeader color='#fff'>Contact me</ModalHeader>
          <ModalCloseButton color='#fff' />
          <ModalBody color='#fff'>
            <Flex direction='column'>
              <Link fontWeight='bold'>Telegram</Link>
              <Link fontWeight='bold' mt='5px'>
                GitHub
              </Link>
              <Link fontWeight='bold' mt='5px'>
                LinkedIn
              </Link>
              <Link fontWeight='bold' mt='5px'>
                Post
              </Link>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ContactsModal

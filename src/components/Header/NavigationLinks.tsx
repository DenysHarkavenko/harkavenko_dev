import * as React from 'react'
import { Flex, Link } from '@chakra-ui/react'

export const HeaderLinks: React.FC = () => {
  return (
    <Flex align={'center'}>
      <Link _hover={{ textDecoration: 'none', color: '#1466B8' }}>
        About Me
      </Link>
      <Link
        ml={'36px'}
        _hover={{
          textDecoration: 'none',
          color: '#1466B8',
        }}
      >
        Development Experience
      </Link>
      <Link ml={'36px'} _hover={{ textDecoration: 'none', color: '#1466B8' }}>
        My Skill Sets
      </Link>
      <Link ml={'36px'} _hover={{ textDecoration: 'none', color: '#1466B8' }}>
        My Projects
      </Link>
    </Flex>
  )
}

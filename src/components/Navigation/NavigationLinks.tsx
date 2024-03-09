import * as React from 'react'
import { Flex, Link } from '@chakra-ui/react'

export const NavigationLinks: React.FC = () => {
  return (
    <Flex align={'center'}>
      <Link _hover={{ textDecoration: 'none', color: '#1466B8' }} href='#About'>
        About Me
      </Link>
      <Link
        href='#Experience'
        ml={[null, null, '20px', '25px', '36px']}
        _hover={{
          textDecoration: 'none',
          color: '#1466B8',
        }}
      >
        Development Experience
      </Link>
      <Link
        ml={[null, null, '20px', '25px', '36px']}
        _hover={{ textDecoration: 'none', color: '#1466B8' }}
        href='#Skills'
      >
        My Skill Sets
      </Link>
      <Link
        ml={[null, null, '20px', '25px', '36px']}
        _hover={{ textDecoration: 'none', color: '#1466B8' }}
        href='#Projects'
      >
        My Projects
      </Link>
      <Link
        ml={[null, null, '20px', '25px', '36px']}
        _hover={{ textDecoration: 'none', color: '#1466B8' }}
        href='#LifeStory'
      >
        Life Story
      </Link>
    </Flex>
  )
}

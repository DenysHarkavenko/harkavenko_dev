import * as React from 'react'
import { Flex, Link } from '@chakra-ui/react'

export const NavigationLinks: React.FC = () => {
  return (
    <Flex direction='column'>
      <Link
        _hover={{ textDecoration: 'none', color: '#1466B8' }}
        href='#About'
        mt='15px'
      >
        About Me
      </Link>
      <Link
        href='#Experience'
        _hover={{
          textDecoration: 'none',
          color: '#1466B8',
        }}
        mt='15px'
      >
        Development Experience
      </Link>
      <Link
        _hover={{ textDecoration: 'none', color: '#1466B8' }}
        href='#SkillSets'
        mt='15px'
      >
        My Skill Sets
      </Link>
      <Link
        _hover={{ textDecoration: 'none', color: '#1466B8' }}
        href='#Projects'
        mt='15px'
      >
        My Projects
      </Link>
    </Flex>
  )
}

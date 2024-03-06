import * as React from 'react';
import {Flex, Link} from "@chakra-ui/react";

export const HeaderLinks: React.FC = () => {
  return (
    <Flex align={'center'}>
      <Link>AboutMe</Link>
      <Link ml={'36px'}>Development Experience</Link>
      <Link ml={'36px'}>My Skill Sets</Link>
      <Link ml={'36px'}>My Projects</Link>
    </Flex>
  );
};
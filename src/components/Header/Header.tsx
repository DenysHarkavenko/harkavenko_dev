import * as React from 'react';
import {Heading, Flex} from "@chakra-ui/react";
import {Icon} from "../../svg/Icon.tsx";
import {HeaderLinks} from "./HeaderLinks.tsx";

export const Header: React.FC = () => {
  return (
    <Flex as={'header'} minW={'100%'} bg={'#121921'} h={'65px'} w={'100%'}>
      <Flex w={'100%'}  justify={'space-between'} p={'0 30px'} borderBottom={'1px solid #eee'}>
        <Flex align={'center'}>
          <Icon/>
          <Heading fontFamily={'Space Grotesk'} ml={'16px'} fontSize={'20px'}>harkavenko_dev</Heading>
        </Flex>
        <HeaderLinks/>
      </Flex>
    </Flex>
  );
};
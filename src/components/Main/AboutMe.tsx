import { Box, Heading, Text } from '@chakra-ui/react'

const AboutMe: React.FC = () => {
  return (
    <Box textAlign={['center', null, null, 'unset', 'unset']} p='60px 40px'>
      <Heading>About me</Heading>
      <Text mt='20px'>
        Hi, I'm a Full-Stack developer. The main type of development is
        Front-End, but I also work well with the Back-End. I am very active and
        positive, so I will always find my place in the team. I am constantly
        striving to develop and really appreciate the experience of
        communicating with experienced people. I like to work in a team, but at
        the same time I have a clear discipline and dedication.
        <br />
        <br />
        I have worked with many different technologies throughout my career:
        Html, Css, Bootstrap, Tailwind, JavaScript, TypeScript, React,
        Redux/RTK, Vue, Node, Express, Next.js, Next.js, Ruby, Ruby on Rails,
        npm/yarn, WebPack, Docker, AWS, PhPMyAdmin, MySQL, PostgreSQL, Figma,
        Axure, PS, Miro and worked with OOP, DRY, SOLID, BEM, TDD methodologies.
        I know, but do not use: C++, C#, Python.
        <br />
        <br />
        I've been programming since 2020, so I have quite a big background, but
        I have only a year of commercial experience. Currently, I am a
        Full-Stack developer at STUDINFO, a Ukrainian startup with a React /
        Ruby on Rails / PostgreSQL stack. In the future, I plan to hold the
        position of Front-End developer to better understand a specific
        direction! I plan to continue working with React (React Native) and
        start learning Angular and more responsive technologies a little bit.
      </Text>
    </Box>
  )
}

export default AboutMe

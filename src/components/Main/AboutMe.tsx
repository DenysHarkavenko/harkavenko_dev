import { Box, Heading, Text } from '@chakra-ui/react'

const AboutMe: React.FC = () => {
  return (
    <Box textAlign={['center', null, null, 'unset', 'unset']} p='60px 40px'>
      <Heading>About me</Heading>
      <Text mt='20px'>
        Hi, I'm a Full-Stack developer. The main focus of my development is
        Front-End, but I also work well with the Back-End. I am very active and
        positive, so I will always find my place in the team. I am constantly
        striving to develop and really appreciate the experience of
        communicating with experienced people. I like to work in a team, but at
        the same time, I have clear discipline and dedication.
        <br />
        <br />
        I have worked with many different technologies throughout my career:
        HTML, CSS, Bootstrap, Tailwind, JavaScript, TypeScript, React,
        Redux/RTK, Vue, Node.js, Express, Next.js, Ruby, Ruby on Rails,
        npm/yarn, WebPack, Docker, AWS, PHPMyAdmin, MySQL, PostgreSQL, Figma,
        Axure, Photoshop, Miro, and have experience with OOP, DRY, SOLID, and
        BEM methodologies. I know, but do not actively use, C++, C#, and Python.
        <br />
        <br />
        I've been programming since 2020, so I have quite a significant
        background, but I only have a year of commercial experience. Currently,
        I am a Full-Stack developer at STUDINFO, a Ukrainian startup with a
        React/Ruby on Rails/PostgreSQL stack. In the future, I plan to
        transition to the role of Front-End developer to better specialize in a
        specific direction. I intend to continue working with React (including
        React Native) and start learning Angular and other responsive
        technologies gradually.
      </Text>
    </Box>
  )
}

export default AboutMe

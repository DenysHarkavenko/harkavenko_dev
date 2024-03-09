import React, { useState } from 'react'
import { Heading, Box, Text, Button } from '@chakra-ui/react'

const LifeStory: React.FC = () => {
  const [expanded, setExpanded] = useState(false)
  const [buttonText, setButtonText] = useState('More')

  const toggleExpanded = () => {
    setExpanded(!expanded)
    setButtonText(expanded ? 'More' : 'Less')
  }

  return (
    <Box
      textAlign={['center', null, null, 'unset', 'unset']}
      p='60px 40px'
      id='About'
    >
      <Heading>My Life Story</Heading>
      <Text mt='20px' maxH={expanded ? 'none' : '500px'} overflow='hidden'>
        If you have read this far, I think you would be interested to know more
        about me! Now I will tell you much more about myself! I warn you - there
        will be a lot of text 😁
        <br />
        <br />
        So, who am I? My name is Denys Harkavenko. I was
        born on September 16, 2005, in Svatove, Luhansk region. Currently, my
        city is occupied by Russia as a result of the Russian-Ukrainian war, so
        in the summer of 2023 I temporarily moved to the Czech Republic, Česká
        Lypa.
        <br />
        <br />
        From 2011 to 2022, I studied at Svatove Lyceum No. 8 and graduated with
        quite good grades. My favorite subjects have always been math, physics,
        computer science, and labor training. In addition to programming, I also
        like to work and create something with my own hands, so I even won
        several regional competitions in labor training. Throughout my
        schooling, I played football, but it was nothing more than a hobby.
        Although, to be honest, football will always remain in my heart 🥺
        <br />
        <br />
        That's about the time when I started school and began the period of my
        formation as a programmer. In the 8th grade, I first went to the
        programming Olympiad, which was not very successful. I chose Pascal as
        my language, which was terrible. I took the 3rd place, but I felt that I
        really liked the process of programming, so very soon I got acquainted
        with Lazarus, where I continued to program for some time.
        <br />
        <br />
        In the 10th grade, I first heard the term "front-end developer" and
        decided to learn more. As a result, I started writing my first websites
        in pure HTML, even without using CSS. To be honest, it was something too
        cool for me. By the end of the school year, I was already fluent in HTML
        + CSS, so I could freely build certain landing pages. The 11th grade was
        a decisive year for me in terms of my profession, because I clearly
        understood that I wanted to become a developer, but it was also a
        turning point for me as a person, because the war started in my country.
        When I entered the university, I was still in my occupied city, so I
        took exams remotely, with rockets whistling and +/- 5-6 mb/s internet,
        which was terrible.
        <br />
        <br />
        Summer 2022, July. One of the most terrible periods of my life. My
        girlfriend at the time was moving to Germany with her family (after
        which we would never meet again), and I had a difficult choice to make
        about what to do next. It was very difficult and painful, but I hope you
        will never experience this! I decided that I was going to my Ukraine, or
        rather Kyiv, where my new life, though destroyed, would continue.
        <br />
        <br />
        September 2022, Kyiv. I am alone. No one with me. My family stayed at
        home, my girlfriend is in Germany, my sister is in Poland, my friends
        are all over Europe, and I am starting my independent journey. You
        cannot imagine the pain and sadness I felt. That's when I entered the
        State University of Information and Communication Technologies, majoring
        in Software Engineering. From there, my immersion in development began.
        <br />
        <br />
        My first language, in which I wrote for a year, was C++. It's a very
        good and interesting language! I adore C++, to be honest. The main area
        of my development was microcontroller programming and embedded
        development. After a year of programming in C++, I realized that I
        wanted more dynamism in the code, and that's when I started programming
        in JavaScript/TypeScript. It was from that period that such a wonderful
        person as me was formed.
        <br />
        <br />
        Thank you very much for reading! I hope you liked it 😊 All the best, my
        unknown friend! ❤️
      </Text>
      <Button
        onClick={toggleExpanded}
        mt='20px'
        borderRadius='12px'
        p='8px 20px'
        textAlign='center'
        bg='#243647'
        color='#fff'
        fontWeight='bold'
        _hover={{
          transform: 'scale(108%)',
          background: '#1466B8',
        }}
      >
        {buttonText}
      </Button>
    </Box>
  )
}

export default LifeStory

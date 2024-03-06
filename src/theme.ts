import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    textColor: '#fff',
  },
  fonts: {
    body: 'Space Grotesk',
    heading: 'Space Grotesk',
  },
  components: {
    Text: {
      baseStyle: {
        color: 'textColor',
        fontFamily: 'body',
      },
    },
    Heading: {
      baseStyle: {
        color: 'textColor',
        fontSize: 'heading',
        fontFamily: 'heading',
      },
    },
    Link: {
      baseStyle: {
        color: 'textColor',
        fontFamily: 'body',
      },
    },
    Button: {
      baseStyle: {
        fontFamily: 'body', 
      },
    },
  },
});

export default theme;

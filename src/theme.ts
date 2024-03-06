import { extendTheme } from '@chakra-ui/react'

const theme: Record<string, any> = extendTheme({
  fontSizes: {
    heading: '22px',
    text: '15px'
  },
  colors: {
    textColor: '#fff',
  },
  components: {
    Text: {
      baseStyle: {
        color: 'textColor',
      },
    },
    Heading: {
      baseStyle: {
        color: 'textColor',
        fontSize: 'heading',
      },
    },
    Link: {
      baseStyle: {
        color: 'textColor',
      },
    },
  },
})

export default theme
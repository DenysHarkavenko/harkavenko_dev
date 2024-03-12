import { ChakraProvider } from '@chakra-ui/react'
import { Navigation } from './components/Navigation/Navigation.tsx'
import theme from './theme.ts'
import Header from './components/Header/Header.tsx'
import Main from './components/Main/Main.tsx'
import Footer from './components/Footer/Footer.tsx'

function App(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Navigation />
      <Header />
      <Main />
      <Footer />
    </ChakraProvider>
  )
}

export default App

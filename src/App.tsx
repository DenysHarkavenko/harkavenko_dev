import { ChakraProvider } from '@chakra-ui/react'
import { Navigation } from './components/Navigation/Navigation.tsx'
import theme from './theme.ts'
import Header from './components/Header/Header.tsx'
import Main from './components/Main/Main.tsx'

function App(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Navigation />
      <Header />
      <Main />
    </ChakraProvider>
  )
}

export default App

import { ChakraProvider } from '@chakra-ui/react'
import { Navigation } from './components/Navigation/Navigation.tsx'
import theme from './theme.ts'
import Header from './components/Header/Header.tsx'

function App(): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Navigation />
      <Header />
    </ChakraProvider>
  )
}

export default App

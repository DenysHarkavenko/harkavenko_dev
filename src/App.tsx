import {ChakraProvider} from "@chakra-ui/react";
import {Header} from "./components/Header/Navigation.tsx";
import theme from "./theme.ts";

function App():JSX.Element {

  return (
      <ChakraProvider theme={theme}>
          <Header/>
      </ChakraProvider>
  )
}

export default App

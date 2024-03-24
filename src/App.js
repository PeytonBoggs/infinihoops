import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Title from './Title.js'

function App() {
  return (
    <ChakraProvider>
      <Title />
    </ChakraProvider>
  );
}

export default App;

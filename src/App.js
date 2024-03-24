import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Title from './Title.js'
import PointCounter from './PointCounter.js';

function App() {
  let points = 0;

  return (
    <ChakraProvider>
      <Title />
      <PointCounter points={points} />
    </ChakraProvider>
  );
}

export default App;

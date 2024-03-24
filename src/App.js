import { Flex, space } from '@chakra-ui/react';
import './App.css';
import Title from './Title.js'
import PointCounter from './PointCounter.js';
import PointButtons from './PointButtons.js';
import { useState } from 'react';

let points = 12;

function App() {
  const[points, setPoints] = useState(0);


  return (
  <Flex className='App-header'>
    <Title />
    <PointCounter points={points} />
    <PointButtons points={points} setPoints={setPoints} />
  </Flex>
  );
}

export default App;

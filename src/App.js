import { Flex, space } from '@chakra-ui/react';
import './App.css';
import Title from './Title.js'
import PointCounter from './PointCounter.js';
import PointButtons from './PointButtons.js';
import { useState } from 'react';
import Practice from './Practice.js';

let points = 12;

function App() {
  const[points, setPoints] = useState(0);
  const[onePercentage, setOnePercentage] = useState(75)
  const[twoPercentage, setTwoPercentage] = useState(50)
  const[threePercentage, setThreePercentage] = useState(30)


  return (
  <Flex className='App-header' alignItems={'stretch'} padding="1rem">
    <Title />
    <PointCounter points={points} />
    <Flex flex="10" alignItems="center" justifyContent="center">
      <PointButtons points={points} setPoints={setPoints} onePercentage={onePercentage} twoPercentage={twoPercentage} threePercentage={threePercentage}/>
      <Practice onePercentage={onePercentage} twoPercentage={twoPercentage} threePercentage={threePercentage} setOnePercentage={setOnePercentage} setTwoPercentage={setTwoPercentage} setThreePercentage={setThreePercentage}/>
    </Flex>
  </Flex>
  );
}

export default App;

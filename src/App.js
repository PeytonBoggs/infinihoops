import { Flex, space } from '@chakra-ui/react';
import './App.css';
import Title from './Title.js'
import PointCounter from './PointCounter.js';
import Shoot from './Shoot.js';
import { useEffect, useState } from 'react';
import Practice from './Practice.js';
import Upgrade from './Upgrade.js';
import Hire from './Hire.js';

function App() {
  const[points, setPoints] = useState(0)
  const[lifetimePoints, setLifetimePoints] = useState(0)
  const[pointsPerSec, setPointsPerSec] = useState(0)

  const[onePercentage, setOnePercentage] = useState(75)
  const[twoPercentage, setTwoPercentage] = useState(50)
  const[threePercentage, setThreePercentage] = useState(30)

  const[showTwo, setShowTwo] = useState(false)
  const[showThree, setShowThree] = useState(false)
  const[showPractice, setShowPractice] = useState(false)
  const[showHire, setShowHire] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setPoints(points + (pointsPerSec/100))
    }, 10)

    return () => clearInterval(interval)
  })


  return (
  <Flex className='App-header' alignItems={'stretch'} padding="1rem">
    <Title />
    <PointCounter points={points} />
    <Flex flex="10" alignItems="center" justifyContent="center" flexWrap="wrap">
      <Shoot points={points} setPoints={setPoints} lifetimePoints={lifetimePoints} setLifetimePoints={setLifetimePoints} showTwo={showTwo} showThree={showThree} onePercentage={onePercentage} twoPercentage={twoPercentage} threePercentage={threePercentage}/>
      {(lifetimePoints >= 25 &&
        <Upgrade points={points} setPoints={setPoints} lifetimePoints={lifetimePoints} setShowTwo={setShowTwo} setShowThree={setShowThree} setShowPractice={setShowPractice} setShowHire={setShowHire}/>
      )}
      {showPractice && (
        <Practice points={points} setPoints={setPoints} onePercentage={onePercentage} twoPercentage={twoPercentage} threePercentage={threePercentage} setOnePercentage={setOnePercentage} setTwoPercentage={setTwoPercentage} setThreePercentage={setThreePercentage}/>
      )}
      {showHire &&(
        <Hire points={points} setPoints={setPoints} pointsPerSec={pointsPerSec} setPointsPerSec={setPointsPerSec}/>
      )}
    </Flex>
  </Flex>
  );
}

export default App;

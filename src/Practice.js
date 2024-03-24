import { Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Practice({ points, setPoints, onePercentage, twoPercentage, threePercentage, setOnePercentage, setTwoPercentage, setThreePercentage }) {
    const[oneCost, setOneCost] = useState(5);
    const[twoCost, setTwoCost] = useState(10);
    const[threeCost, setThreeCost] = useState(15);
    
    function practice(shot) {
        switch(shot) {
            case 1:
                if (points < oneCost || onePercentage >= 100) {
                    break
                }
                setPoints(points - oneCost)
                setOneCost(oneCost + 1)
                setOnePercentage(onePercentage + 1)
                break
            case 2:
                if (points < twoCost || twoPercentage >= 100) {
                    break
                }
                setPoints(points - twoCost)
                setTwoCost(twoCost + 2)
                setTwoPercentage(twoPercentage + 1)
                break
            case 3:
                if (points < threeCost || threePercentage >= 100) {
                    break
                }
                setPoints(points - threeCost)
                setThreeCost(threeCost + 3)
                setThreePercentage(threePercentage + 1)
                break
        }
    }
    
    return (
        <Flex flexDirection="column" alignItems="center" className="mainBox">
            <Text className="buttonText" fontSize="2rem" margin="0.5rem">Shop</Text>
            <Button onClick={() => practice(1)} className="button">
                Practice FT
            </Button>
            <Text className="buttonText">Cost: {oneCost} pts</Text>
            <Button onClick={() => practice(2)} className="button">
                Practice 2-pt
            </Button>
            <Text className="buttonText">Cost: {twoCost} pts</Text>
            <Button onClick={() => practice(3)} className="button">
                Practice 3-pt
            </Button>
            <Text className="buttonText">Cost: {threeCost} pts</Text>
        </Flex>
    );
}
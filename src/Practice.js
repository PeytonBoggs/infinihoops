import { Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Practice({ points, setPoints, onePercentage, twoPercentage, threePercentage, setOnePercentage, setTwoPercentage, setThreePercentage }) {
    const[oneCost, setOneCost] = useState(5);
    const[twoCost, setTwoCost] = useState(10);
    const[threeCost, setThreeCost] = useState(15);
    
    function practice(shot) {
        switch(shot) {
            case 1:
                setPoints(points - oneCost)
                setOneCost(oneCost + 1)
                setOnePercentage(onePercentage + 5)
                break
            case 2:
                setPoints(points - twoCost)
                setTwoCost(twoCost + 2)
                setTwoPercentage(twoPercentage + 5)
                break
            case 3:
                setPoints(points - threeCost)
                setThreeCost(threeCost + 3)
                setThreePercentage(threePercentage + 5)
                break
        }
    }

    function getDisabled(shot) {
        switch(shot) {
            case 1:
                if (points < oneCost || onePercentage >= 100) {
                    return true;
                }
                return false;
            case 2:
                if (points < twoCost || twoPercentage >= 100) {
                    return true;
                }
                return false;
            case 3:
                if (points < threeCost || threePercentage >= 100) {
                    return true;
                }
            return false;
        }
    }
    
    return (
        <Flex flexDirection="column" alignItems="center" className="mainBox">
            <Text className="buttonText" fontSize="2rem" margin="0.5rem">Practice</Text>
            <Button onClick={() => practice(1)} className="button" isDisabled={getDisabled(1)}>
                Free Throw (+5%)
            </Button>
            <Text className="buttonText">Cost: {oneCost} pts</Text>
            <Button onClick={() => practice(2)} className="button" isDisabled={getDisabled(2)}>
                2-point (+5%)
            </Button>
            <Text className="buttonText">Cost: {twoCost} pts</Text>
            <Button onClick={() => practice(3)} className="button" isDisabled={getDisabled(3)}>
                3-point (+5%)
            </Button>
            <Text className="buttonText">Cost: {threeCost} pts</Text>
        </Flex>
    );
}
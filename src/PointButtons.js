import { Button, Flex, Text } from "@chakra-ui/react";

export default function PointButtons({ points, setPoints, onePercentage, twoPercentage, threePercentage }) {    
    function shoot(points, percentage) {
        if (Math.random() * 100 < percentage) {
            return points
        }
        return 0
    }
    
    function addPoints(toAdd) {
        setPoints(points + toAdd);
    }
    
    return (
        <Flex flexDirection="column" alignItems="center" className="mainBox">
            <Text className="buttonText" fontSize="2rem" margin="0.5rem">Shoot</Text>
            <Button onClick={() => addPoints(shoot(1, onePercentage))} className="button">
                Free Throw
            </Button>
            <Text className="buttonText" >Percentage: {onePercentage}%</Text>
            <Button onClick={() => addPoints(shoot(2, twoPercentage))} className="button">
                2-Point Shot
            </Button>
            <Text className="buttonText">Percentage: {twoPercentage}%</Text>
            <Button onClick={() => addPoints(shoot(3, threePercentage))} className="button">
                3-Point Shot
            </Button>
            <Text className="buttonText">Percentage: {threePercentage}%</Text>
        </Flex>
    );
}
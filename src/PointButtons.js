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
        <Flex flex="10" flexDirection="column">
            <Button onClick={() => addPoints(shoot(1, onePercentage))} margin="1rem">
                Free Throw
            </Button>
            <Text fontSize="60%"  textAlign="center" marginTop="-1rem">Percentage: {onePercentage}%</Text>
            <Button onClick={() => addPoints(shoot(2, twoPercentage))} margin="1rem">
                2-Point Shot
            </Button>
            <Text fontSize="60%"  textAlign="center" marginTop="-1rem">Percentage: {twoPercentage}%</Text>
            <Button onClick={() => addPoints(shoot(3, threePercentage))} margin="1rem">
                3-Point Shot
            </Button>
            <Text fontSize="60%"  textAlign="center" marginTop="-1rem">Percentage: {threePercentage}%</Text>
        </Flex>
    );
}
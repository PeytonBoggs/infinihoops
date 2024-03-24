import { Button, Flex } from "@chakra-ui/react";

export default function PointButtons({ points, setPoints }) {    
    function shoot(points, percentage) {
        if (Math.random() < percentage) {
            return points
        }
        return 0
    }
    
    function addPoints(toAdd) {
        setPoints(points += toAdd);
    }
    
    return (
        <Flex flex="10" flexDirection="column">
            <Button onClick={() => addPoints(shoot(1, 0.75))} margin="1rem">
                Free Throw
            </Button>
            <Button onClick={() => addPoints(shoot(2, 0.5))} margin="1rem">
                2-Point Shot
            </Button>
            <Button onClick={() => addPoints(shoot(3, 0.3))} margin="1rem">
                3-Point Shot
            </Button>
        </Flex>
    );
}
import { Button, Flex } from "@chakra-ui/react";

export default function PointButtons({ points, setPoints }) {    
    function addPoints() {
        setPoints(points++);
    }
    
    return (
        <Flex flex="10" justifyContent={"center"}>
            <Button onClick={() => addPoints()}>
                Add Points
            </Button>
        </Flex>
    );
}
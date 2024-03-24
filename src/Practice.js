import { Button, Flex } from "@chakra-ui/react";

export default function Practice({ onePercentage, twoPercentage, threePercentage, setOnePercentage, setTwoPercentage, setThreePercentage }) {
    function practice(shot) {
        switch(shot) {
            case onePercentage:
                setOnePercentage(shot + 1)
                break;
            case twoPercentage:
                setTwoPercentage(shot + 1)
                break;
            default:
                setThreePercentage(shot + 1)
                break;
        }
    }
    
    return (
        <Flex flex="2" flexDirection="column">
            <Button onClick={() => practice(onePercentage)} margin="1rem">
                Practice FT
            </Button>
            <Button onClick={() => practice(twoPercentage)} margin="1rem">
                Practice 2-pt
            </Button>
            <Button onClick={() => practice(threePercentage)} margin="1rem">
                Practice 3-pt
            </Button>
        </Flex>
    );
}
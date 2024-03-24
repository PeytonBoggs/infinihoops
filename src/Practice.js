import { Button, Flex, Text } from "@chakra-ui/react";

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
        <Flex flexDirection="column" alignItems="center" className="mainBox">
            <Text className="buttonText" fontSize="2rem" margin="0.5rem">Shop</Text>
            <Button onClick={() => practice(onePercentage)} className="button">
                Practice FT
            </Button>
            <Text className="buttonText">Cost: 0</Text>
            <Button onClick={() => practice(twoPercentage)} className="button">
                Practice 2-pt
            </Button>
            <Text className="buttonText">Cost: 0</Text>
            <Button onClick={() => practice(threePercentage)} className="button">
                Practice 3-pt
            </Button>
            <Text className="buttonText">Cost: 0</Text>
        </Flex>
    );
}
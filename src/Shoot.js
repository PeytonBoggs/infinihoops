import { Button, Flex, Text, useToast } from "@chakra-ui/react";

export default function Shoot({ points, setPoints, lifetimePoints, setLifetimePoints, showTwo, showThree, onePercentage, twoPercentage, threePercentage }) {    
    const toast = useToast()
    
    function shoot(points, percentage) {
        if (Math.random() * 100 < percentage) {
            toast({
                title: "Good! +" + points,
                status: "success",
                duration: 500,
                position: "top"
            })
            return points
        }
        toast({
            title: "Miss",
            status: "error",
            duration: 500,
            position: "top"
        })
        return 0
    }
    
    function addPoints(toAdd) {
        setPoints(points + toAdd)
        setLifetimePoints(lifetimePoints + toAdd)
    }
    
    return (
        <Flex flexDirection="column" alignItems="center" className="mainBox">
            <Text className="buttonText" fontSize="2rem" margin="0.5rem">Shoot</Text>
            <Button onClick={() => addPoints(shoot(1, onePercentage))} className="button">
                Free Throw
            </Button>
            <Text className="buttonText" >Percentage: {onePercentage}%</Text>
            
            {showTwo && (
                <div>
                    <Button onClick={() => addPoints(shoot(2, twoPercentage))} className="button">
                    2-Point Shot
                    </Button>
                    <Text className="buttonText">Percentage: {twoPercentage}%</Text>
                </div>
            )}

            {showThree && (
                <div>
                    <Button onClick={() => addPoints(shoot(3, threePercentage))} className="button">
                    3-Point Shot
                    </Button>
                    <Text className="buttonText">Percentage: {threePercentage}%</Text>
                </div>
            )}
        </Flex>
    );
}
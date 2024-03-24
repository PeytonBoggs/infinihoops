import { Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Upgrade({ points, setPoints, lifetimePoints, setShowPractice, setShowTwo, setShowThree }) {
    const [upPracticeShown, setUpPracticeShown] = useState(true)
    const [upTwoShown, setUpTwoShown] = useState(true)
    const [upThreeShown, setUpThreeShown] = useState(true)
    
    function upgrade(unlock) {
        switch(unlock) {
            case "practice":
                setPoints(points - 15)
                setShowPractice(true)
                setUpPracticeShown(false)
                break
            case "two":
                setPoints(points - 30)
                setShowTwo(true)
                setUpTwoShown(false)
                break
            case "three":
                setPoints(points - 50)
                setShowThree(true)
                setUpThreeShown(false)
                break
        }
    }
    
    function getDisabled(shot) {
        switch(shot) {
            case 1:
                if (points < 15) {
                    return true
                }
                return false
            case 2:
                if (points < 30) {
                    return true
                }
                return false
            case 3:
                if (points < 50) {
                    return true
                }
                return false
        }
    }

    return (
        <div>
            {(lifetimePoints >= 15) && (
                <Flex flexDirection="column" alignItems="center" className="mainBox">
                    <Text className="buttonText" fontSize="2rem" margin="0.5rem">Upgrade</Text>
                    {upPracticeShown && (
                        <div>
                            <Button className="button" onClick={() => upgrade("practice")} isDisabled={getDisabled(1)}>
                            Practice Facility
                            </Button>
                            <Text className="buttonText">Cost: 15 pts</Text>
                        </div>
                    )}
                    {upTwoShown && (
                        <div>
                            <Button className="button" onClick={() => upgrade("two")} isDisabled={getDisabled(2)}>
                            Unlock 2-pt
                            </Button>
                            <Text className="buttonText">Cost: 30 pts</Text>
                        </div>
                    )}
                    {upThreeShown && (
                        <div>
                            <Button className="button" onClick={() => upgrade("three")} isDisabled={getDisabled(3)}>
                            Unlock 3-pt
                            </Button>
                            <Text className="buttonText">Cost: 50 pts</Text>
                        </div>
                    )}
                </Flex>
            )}
        </div>
    )
} 
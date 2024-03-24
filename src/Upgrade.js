import { Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Upgrade({ points, setPoints, lifetimePoints, setShowTwo, setShowThree, setShowPractice, setShowHire }) {
    const [upTwoShown, setUpTwoShown] = useState(true)
    const [upThreeShown, setUpThreeShown] = useState(true)
    const [upPracticeShown, setUpPracticeShown] = useState(true)
    const [upHireShown, setUpHireShown] = useState(true)
    
    function upgrade(unlock) {
        switch(unlock) {
            case "two":
                setPoints(points - 25)
                setShowTwo(true)
                setUpTwoShown(false)
                break
            case "three":
                setPoints(points - 50)
                setShowThree(true)
                setUpThreeShown(false)
                break
            case "practice":
                setPoints(points - 100)
                setShowPractice(true)
                setUpPracticeShown(false)
                break
            case "hire":
                setPoints(points - 500)
                setShowHire(true)
                setUpHireShown(false)
                break
        }
    }
    
    function getDisabled(unlock) {
        switch(unlock) {
            case "two":
                if (points < 25) {
                    return true
                }
                return false
            case "three":
                if (points < 50) {
                    return true
                }
                return false
            case "practice":
                if (points < 100) {
                    return true
                }
                return false
            case "hire":
                    if (points < 500) {
                        return true
                    }
                    return false
        }
    }

    return (
        <div>
            <Flex flexDirection="column" alignItems="center" className="mainBox">
                <Text className="buttonText" fontSize="2rem" margin="0.5rem">Upgrade</Text>
                {upTwoShown && (
                    <div>
                        <Button className="button" onClick={() => upgrade("two")} isDisabled={getDisabled("two")}>
                        Unlock 2-pt
                        </Button>
                        <Text className="buttonText">Cost: 25 pts</Text>
                    </div>
                )}
                {upThreeShown && (lifetimePoints >= 50) && (
                    <div>
                        <Button className="button" onClick={() => upgrade("three")} isDisabled={getDisabled("three")}>
                        Unlock 3-pt
                        </Button>
                        <Text className="buttonText">Cost: 50 pts</Text>
                    </div>
                )}
                {upPracticeShown && (lifetimePoints >= 100) && (
                    <div>
                        <Button className="button" onClick={() => upgrade("practice")} isDisabled={getDisabled("practice")}>
                        Practice Facility
                        </Button>
                        <Text className="buttonText">Cost: 100 pts</Text>
                    </div>
                )}
                {upHireShown && (lifetimePoints >= 500) && (
                    <div>
                        <Button className="button" onClick={() => upgrade("hire")} isDisabled={getDisabled("hire")}>
                        Become an Agent
                        </Button>
                        <Text className="buttonText">Cost: 500 pts</Text>
                    </div>
                )}
            </Flex>
        </div>
    )
} 
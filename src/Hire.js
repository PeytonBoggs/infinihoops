import { Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Hire({ points, setPoints, pointsPerSec, setPointsPerSec }) {
    const[hsCost, setHsCost] = useState(50)
    const[collegeCost, setCollegeCost] = useState(200)
    const[nbaCost, setNbaCost] = useState(500)

    function hire(player) {
        switch(player) {
            case("hs"):
                setPoints(points - hsCost)
                setHsCost(Math.trunc(hsCost * 1.5))
                setPointsPerSec(pointsPerSec + 1)
                break
            case("college"):
                setPoints(points - collegeCost)
                setCollegeCost(Math.trunc(collegeCost * 1.5))
                setPointsPerSec(pointsPerSec + 15)
                break
            case("nba"):
                setPoints(points - nbaCost)
                setNbaCost(Math.trunc(nbaCost * 1.5))
                setPointsPerSec(pointsPerSec + 50)
                break
        }
    }

    function getDisabled(player) {
        switch(player) {
            case "hs":
                if (points < hsCost) {
                    return true;
                }
                return false;
            case "college":
                if (points < collegeCost) {
                    return true;
                }
                return false;
            case "nba":
                if (points < nbaCost) {
                    return true;
                }
            return false;
        }
    }

    return (
        <Flex flexDirection="column" alignItems="center" className="mainBox">
            <Text className="buttonText" fontSize="2rem" margin="0.5rem">Hire</Text>
            <Button onClick={() => hire("hs")} className="button" isDisabled={getDisabled("hs")}>
                H.S. Captain (+1 pt/sec)
            </Button>
            <Text className="buttonText">Cost: {hsCost} pts</Text>
            <Button onClick={() => hire("college")} className="button" isDisabled={getDisabled("college")}>
                College Star (+15 pts/sec)
            </Button>
            <Text className="buttonText">Cost: {collegeCost} pts</Text>
            <Button onClick={() => hire("nba")} className="button" isDisabled={getDisabled("nba")}>
                NBA MVP (+50 pts/sec)
            </Button>
            <Text className="buttonText">Cost: {nbaCost} pts</Text>
        </Flex>
    )
}
import { Box, Flex, Text } from "@chakra-ui/react";

export default function PointCounter({ points }) {    
    return (
        <Flex flex="1" alignItems="center" justifyContent="center" marginY="1rem">
                <Text className="pointBox" textOverflow="revert">
                    Points: {Math.trunc(points)}
                </Text>
        </Flex>
    );
}
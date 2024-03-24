import { Flex, Text } from "@chakra-ui/react";

export default function PointCounter({ points }) {    
    return (
        <Flex flex="1" justifyContent={"center"}>
            <Text paddingRight="0.2rem">Points:</Text>
            {points}
        </Flex>
    );
}
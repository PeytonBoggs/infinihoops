import { Button, Flex, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";

export default function Info() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return (
        <Flex flex="1" alignItems="center" justifyContent="right">
            <Button onClick={onOpen} width="10rem">Info</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay alignItems="center">
                <ModalContent margin="1rem">
                    <ModalHeader>Welcome to infinihoops!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex flexDirection="column">
                            <Text>The objective of the game is to score as many points as you can. Trade in your points for upgrades to score even more points! This is a HooHacks Hackathon project by Peyton Boggs, developed in around 12 straight hours. Have fun and thanks for playing!</Text>
                            <Text marginTop="1rem">Github Repository:</Text><Link color="blue.500" href="https://github.com/PeytonBoggs/infinihoops">https://github.com/PeytonBoggs/infinihoops</Link>
                            <Text marginTop="1rem">LinkedIn:</Text><Link color="blue.500" href="https://www.linkedin.com/in/peyton-boggs/">https://www.linkedin.com/in/peyton-boggs/</Link>
                        </Flex>
                    </ModalBody>
                </ModalContent>
                </ModalOverlay>
            </Modal>
        </Flex>
    )
}
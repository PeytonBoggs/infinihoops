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
                            <Text>This is a HooHacks Hackathon project by Peyton Boggs,</Text>
                            <Text>developed in under 24 hours and with very little sleep.</Text>
                            <Text>Thanks for playing!</Text>
                            <Text marginTop="1rem">Github Repo:</Text><Link color="blue.500" href="https://github.com/PeytonBoggs/infinihoops">https://github.com/PeytonBoggs/infinihoops</Link>
                            <Text marginTop="1rem">LinkedIn:</Text><Link color="blue.500" href="https://www.linkedin.com/in/peyton-boggs/">https://www.linkedin.com/in/peyton-boggs/</Link>
                        </Flex>
                    </ModalBody>
                </ModalContent>
                </ModalOverlay>
            </Modal>
        </Flex>
    )
}
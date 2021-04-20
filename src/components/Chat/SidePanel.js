import {Button, Flex, Text,Stack} from "@chakra-ui/react";
import DarkModeToggle from "../Nav/DarkModeToogle";

const SidePanel = () => {
    return (
        <Flex direction="column" align='center'>
            <Stack>
                <DarkModeToggle/>
            </Stack>
            <Stack spacing={4}>
                <Text>
                    Bulles
                </Text>
            </Stack>
            <Stack spacing={4}>
                <Button>
                    Text button
                </Button>
            </Stack>
        </Flex>
    );
};

export default SidePanel;

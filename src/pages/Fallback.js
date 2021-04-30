import {Center, Spinner} from "@chakra-ui/react";

const Fallback = () => {
    return (
        <Center w={'100vw'} h={'100vh'}>
            <Spinner/>
        </Center>
    );
};

export default Fallback;

import {useRef} from "react";
import {Link as _Link} from 'react-router-dom';
import {
    Container,
    Flex,
    Image,
    Button,
    Text,
    Center,
    Box,
    Divider,
    useColorModeValue,
    useColorMode,
    Link
} from "@chakra-ui/react";

import DarkModeToggle from "../components/Nav/DarkModeToogle";

import ScrollDown from "../assets/icons/ScrollDown";
import screens from '../assets/img/responsiveScreens.png';
import darkMobile from '../assets/img/mobileDarkMockup.png';
import lightMobile from '../assets/img/mobileLightMockup.png';
import logoAlt from '../assets/img/bullesLogo.svg'


const HomePage = () => {
    const {colorMode} = useColorMode();
    const screensSection = useRef();
    const handleClick = () => {
        screensSection.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        })
    }
    return (
        <>
                <Flex align={'center'} justify={'space-between'} w={'100%'} p={'1%'}>
                    <DarkModeToggle/>
                    <Flex my={'5px'}>
                        <Button as={_Link} to="/signup" variant={'ghost'} bg={useColorModeValue('purple.50', 'none')}
                                _hover={{bg: useColorModeValue('purple.100', 'none')}}
                                colorScheme={'purple'}
                                mr={'20px'}>Signup</Button>
                        <Button as={_Link} to="/login" variant={'ghost'} bg={useColorModeValue('pink.50', 'none')}
                                colorScheme={'pink'}
                                _hover={{bg: useColorModeValue('pink.100', 'none')}}>Login</Button>
                    </Flex>
                </Flex>


            <Container maxW="container.lg">
                <Flex h={'88vh'}  border={'2px'} rounded={'lg'} my={'20px'} direction={'column'} justify={'center'} align={'center'}>
                    <Image src={logoAlt} alt={'res'}/>
                    <Box onClick={handleClick}>
                        <ScrollDown screensSection={screensSection}/>
                    </Box>

                </Flex>

                <Divider/>
                <Box >
                    <Text w={'100%'} color={'gray.500'} my='50px' fontSize={['2xl', '3xl', '4xl']}>Fit all
                        screens.</Text>
                    <Image src={screens} alt={'res'}/>
                </Box>

                <Divider my={'40px'} ref={screensSection}/>
                <Box w={'100%'} h={'100vh'} >
                    <Text fontSize={['3xl', '4xl', '5xl']} w='100%' my='3%' textAlign={'center'} color={'yellow.500'}>Dark
                        Mode ? Yes, try it here !</Text>
                    <Center w={'100%'} my={'3%'}><DarkModeToggle/></Center>

                    <Center w={'100%'}>
                        <Image src={darkMobile} alt={'res'} boxSize={['80%', '60%', '30%']} zIndex={'1'}
                               display={colorMode === 'light' && 'none'}/>
                        <Image src={lightMobile} alt={'res'} boxSize={['80%', '60%', '30%']} zIndex={'1'}
                               display={colorMode === 'dark' && 'none'}/>
                    </Center>
                    <Center mt={'40px'}>
                        <Text>Created by&nbsp;️</Text>
                        <Link href='https://github.com/afatihyavasi' color={'purple.400'}
                              target='_blank'>afatihyavasi</Link>
                    </Center>
                </Box>


            </Container>


        </>
    );
};

export default HomePage;

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Link,
    Stack,
    Button,
    Heading,
    Text,
    Container,
    useColorModeValue
} from '@chakra-ui/react';
import Nav from '../Nav';
import {useState} from 'react';
import {Link as _Link} from 'react-router-dom';

const Login = () => {
    const [isFocus, setIsFocus] = useState(false);
    return (
        <>
            <Container px={10}>
                <Nav/>
            </Container>

            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                flexDirection="column"
                bg={useColorModeValue('gray.50', 'gray.800')}>

                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'3xl'} color={'pink.400'}>Sign in to your account</Heading>
                        <Text fontSize={'lg'} color={useColorModeValue('gray.600', 'gray.200')}>
                            to join your bulles {isFocus ? '😎' : '🤩'}
                        </Text>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input type="email"/>
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input type="password" onFocus={() => setIsFocus(!isFocus)}
                                       onBlur={() => setIsFocus(!isFocus)}/>
                            </FormControl>
                            <Stack spacing={10}>
                                <Stack>
                                    <Text display={'flex'} justifyContent="space-around" alignItems="center"
                                          color={useColorModeValue('gray.600', 'gray.200')} fontSize='sm'>Don't
                                        have an account?{" "}
                                        <_Link to="/signup">
                                            <Button size='xs' color={'teal.800'} bg={'teal.100'} mt='1'  _hover={{
                                                bg: 'teal.200',
                                            }}>
                                                Sign up
                                            </Button>
                                        </_Link>
                                    </Text>
                                </Stack>

                                <Button
                                    bg={'purple.100'}
                                    color={'purple.600'}
                                    _hover={{
                                        bg: 'purple.200',
                                    }}>
                                    Sign in
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>
    )
        ;
};

export default Login;

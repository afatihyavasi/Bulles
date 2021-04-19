import {
    Flex, Box, FormControl, FormLabel,
    Input, Stack, Button, Heading, Container,
    useColorModeValue, Tooltip, InputGroup, InputRightElement, FormErrorMessage
} from '@chakra-ui/react';
import {useState} from 'react';
import {useForm} from "react-hook-form";
import Nav from '../../components/Nav';

const SignUp = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const {register, formState: {errors}, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);

    }
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
                        <Heading fontSize={'3xl'} color={'pink.400'}>Create your Bulles account 🙌</Heading>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <FormControl id="username" isInvalid={errors.username}>
                                    <FormLabel>Username</FormLabel>
                                    <Input type="text"
                                           placeholder={errors.username ? "Username is required" : "Username"}
                                           name="username"
                                           {...register('username', {required: 'true'})}
                                    />
                                </FormControl>
                                <FormControl id="email" isInvalid={errors.email}>
                                    <FormLabel>Email address</FormLabel>
                                    <Input type="email"
                                           placeholder={errors.email ? "Email address is required" : "human@world.com"}
                                           name="email"
                                           {...register('email', {required: 'true'})}
                                    />
                                </FormControl>
                                <FormControl id="password" isInvalid={errors.password}>
                                    <FormLabel>Password</FormLabel>
                                    <InputGroup>
                                        <Input type={show ? "text" : "password"}
                                               placeholder="Enter password" name="password"
                                               {...register('password', {required: 'true', minLength: 6})}
                                        />
                                        <InputRightElement width="4.5rem">
                                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                                                {show ? "Hide" : "Show"}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                    <FormErrorMessage>
                                        {errors.password && "Password length must be at least 6 characters long"}
                                    </FormErrorMessage>

                                </FormControl>
                                <Stack spacing={10}>
                                    <Tooltip label="Join party 🎉">
                                        <Button
                                            bg={'purple.100'}
                                            color={'purple.600'}
                                            my={'3'}
                                            type='submit'
                                            _hover={{
                                                bg: 'purple.200',
                                            }}>
                                            Sign Up
                                        </Button>
                                    </Tooltip>
                                </Stack>
                            </form>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>
    )
}
// }; onChange={(event, {name, value}) => {
//     setValue(name, value);
// }}/>

export default SignUp;

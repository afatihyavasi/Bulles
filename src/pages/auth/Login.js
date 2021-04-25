import {
    Flex, Box, FormControl, FormLabel, Input, Link, InputRightElement,
    Stack, Button, Heading, Text, Container, InputGroup,
    useToast, useDisclosure, useColorModeValue,
    Modal, ModalOverlay, ModalHeader, ModalBody, ModalCloseButton, ModalContent
} from '@chakra-ui/react';
import NavForAuth from '../../components/Nav/NavForAuth';
import {useState} from 'react';
import {Link as _Link} from 'react-router-dom';
import {useForm} from "react-hook-form";
import {useFirebase} from "react-redux-firebase";


const Login = () => {
    const [isFocus, setIsFocus] = useState(false);
    const [show, setShow] = useState(false);
    const [fbErrors, setFbErrors] = useState('');
    const [submit, setSubmit] = useState(false);
    const [resetEmail, setResetEmail] = useState('');

    const firebase = useFirebase();
    const {register, formState: {errors}, handleSubmit} = useForm();

    const {isOpen, onOpen, onClose} = useDisclosure();
    const toast = useToast();

    const onSubmit = ({email, password}) => {
        setSubmit(true);
        setFbErrors('');
        firebase.login({email, password})
            .catch((err) => {
                setFbErrors(err.message);
            })
            .finally((() => setSubmit(false)));

    };

    const onResetFormSubmit = (event) => {
        event.preventDefault();
        onClose(true);
        firebase.resetPassword(resetEmail)
            .then(() => {
                toast({
                    description: `Reset password mail sent to ${resetEmail} successfully.`,
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                })
            })
            .catch(() => {
                toast({
                    title: `Sorry. Something get wrong.`,
                    status: "error",
                    duration: 2000,
                    isClosable: true,
                })
            })
            .finally(setResetEmail(''));

    }

    const handleClick = () => setShow(!show);
    return (
        <>
            <Container px={10}>
                <NavForAuth/>
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Stack spacing={4}>

                                <FormControl id="email" isInvalid={errors.email}>
                                    <FormLabel>Email address</FormLabel>
                                    <Input type="email"
                                           placeholder={errors.email ? "Email address is required" : "human@world.com"}
                                           {...register('email', {required: 'true'})}/>
                                </FormControl>
                                <FormControl id="password" isInvalid={errors.password}>
                                    <Flex justify={'space-between'}>
                                        <FormLabel>
                                            Password
                                        </FormLabel>
                                        {/*Forgot password modal*/}

                                        <Text cursor='pointer' color={useColorModeValue('pink.400', 'pink.200')}
                                              mt='5px' fontSize={'xs'} fontWeight={'medium'}
                                              bg={'none'}
                                              _hover={{
                                                  color: useColorModeValue('pink.200', 'pink.400'),
                                              }}
                                              onClick={onOpen}>Forgot your password ?</Text>

                                        <Modal isOpen={isOpen} onClose={onClose}>
                                            <ModalOverlay/>
                                            <ModalContent>
                                                <ModalHeader>Reset your password</ModalHeader>
                                                <ModalCloseButton/>
                                                <form onSubmit={onResetFormSubmit}>
                                                    <ModalBody>

                                                        <FormControl>
                                                            <FormLabel>Email</FormLabel>
                                                            <Input type="email"
                                                                   placeholder={'E-mail'}
                                                                   value={resetEmail}
                                                                   onChange={e => setResetEmail(e.target.value)}/>
                                                        </FormControl>
                                                    </ModalBody>


                                                    <Flex justify={'center'} my={'20px'}>
                                                        <Button colorScheme="yellow" mr={3} type='submit'>
                                                            Submit
                                                        </Button>
                                                    </Flex>

                                                </form>
                                            </ModalContent>
                                        </Modal>
                                        {/*Forgot password modal end*/}
                                    </Flex>

                                    <InputGroup>
                                        <Input type={show ? 'text' : 'password'} placeholder="Password"
                                               onFocus={() => setIsFocus(!isFocus)}
                                               onBlur={() => setIsFocus(!isFocus)}
                                               {...register('password', {required: 'true', minLength: 6})}
                                        />
                                        <InputRightElement width="4.5rem">
                                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                                                {show ? "Hide" : "Show"}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>


                                <Stack>
                                    <Button
                                        bg={'purple.100'}
                                        mt={4}
                                        isLoading={submit}
                                        color={'purple.600'}
                                        type='submit'
                                        _hover={{
                                            bg: 'purple.200',
                                        }}>
                                        Sign in
                                    </Button>
                                    <Stack>
                                        <Text display={'flex'} justifyContent="space-around" alignItems="center"
                                              color={useColorModeValue('gray.600', 'gray.200')} fontSize='sm'>Don't
                                            have an account?{" "}

                                            <Link as={_Link} to="/signup" color={'teal.400'} p='1.5' rounded={'sm'}
                                                  _hover={
                                                      {
                                                          bg: 'teal.100',
                                                          color: 'teal.600'
                                                      }
                                                  }>
                                                Sign up
                                            </Link>

                                        </Text>
                                    </Stack>
                                    <Stack>
                                        {fbErrors &&
                                        <Text fontSize="sm" p={2} bg={'red.100'} color={'red.500'} rounded='md'
                                              align={'center'}>
                                            {`${fbErrors}`}
                                        </Text>}
                                    </Stack>
                                </Stack>
                            </Stack>
                        </form>
                    </Box>
                </Stack>
            </Flex>
        </>
    )

};

export default Login;

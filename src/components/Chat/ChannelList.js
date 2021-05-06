import {Flex, Center, Spinner, Text, Button, MenuItem, useColorModeValue} from "@chakra-ui/react";
import {useSelector, useDispatch} from "react-redux";
import {useFirebaseConnect, isEmpty, isLoaded} from "react-redux-firebase";
import {setCurrentChannel} from "../../store/actions/channel";
import {useState, useEffect} from "react";

const ChannelList = ({mobile}) => {
    useFirebaseConnect([{path: "channels"}]);
    const dispatch = useDispatch();
    const channels = useSelector(state => state.firebase.ordered.channels);
    const currentChannel = useSelector(state => state.channelReducer.currentChannel);
    const [mounted, setMounted] = useState(false);
    const borderColor = useColorModeValue('gray.200', 'gray.500');
    useEffect(() => {
        if (!mounted && !isEmpty(channels)) {
            const {key, value} = channels[0];
            setActiveChannel({key, ...value});
            setMounted(true)
        }
    }, [])

    const setActiveChannel = (channel) => {
        dispatch(setCurrentChannel(channel));
    }

    if (!isLoaded(channels)) return (<Center w={'100%'} my={'50px'}><Spinner/></Center>)
    if (isEmpty(channels)) return <Text my={'50px'}>There is nothing here 😢</Text>


    return (
        <Flex direction="column" align='center' w={'100%'}>
            {
                channels.map(({key, value}) => {
                    return (
                        mobile
                            ? <MenuItem key={key} w={'80%'} py={'5px'}>
                                <Button name={value?.channelName} w={'100%'}
                                        isActive={currentChannel?.key === key}
                                        _focus={{border: 'none'}}
                                        isTruncated
                                        my={'5px'}
                                        size={'xs'}
                                        onClick={() => setActiveChannel({key, ...value})}>
                                    {value.channelName}
                                </Button>
                            </MenuItem>

                            : <Button key={key} w={'100%'} h={'40px'} name={value?.channelName}
                                      isActive={currentChannel?.key === key}
                                      _focus={{border: 'none'}}
                                      isTruncated
                                      border={'1px'} borderColor={borderColor}
                                      rounded={'none'}
                                      size={'xs'}
                                      onClick={() => setActiveChannel({key, ...value})}>
                                {value.channelName}
                            </Button>
                    )
                })
            }
        </Flex>
    );
};

export default ChannelList;

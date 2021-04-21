import {Flex, Center, Spinner, Text, Button, Container} from "@chakra-ui/react";
import {useSelector, useDispatch} from "react-redux";
import {useFirebaseConnect, isEmpty, isLoaded} from "react-redux-firebase";
import {setCurrentChannel} from "../../store/actions/channel";

const ChannelList = () => {
    useFirebaseConnect([{path: "channels"}]);
    const dispatch = useDispatch();
    const channels = useSelector(state => state.firebase.ordered.channels);
    const currentChannel = useSelector(state => state.channelReducer.currentChannel)

    const setActiveChannel = (channel) => {
        dispatch(setCurrentChannel(channel));
    }

    if (!isLoaded(channels)) return (<Center w={'100%'}><Spinner/></Center>)
    if (isEmpty(channels)) return <Text>There is nothing here 😢</Text>

    return (
        <Flex direction="column" align='center' mt={'250px'}>
            {
                channels.map(({key, value}) => {
                    return (
                        <Container w={'100%'} my={'10px'}>
                            <Button w={'100%'} name={value?.channelName}
                                isActive={currentChannel?.key === key}
                                    _focus={{border:'none'}}
                                    onClick={() => setActiveChannel({key, ...value})}
                            >
                                {value.channelName}
                            </Button>
                        </Container>
                    )
                })
            }
        </Flex>
    );
};

export default ChannelList;

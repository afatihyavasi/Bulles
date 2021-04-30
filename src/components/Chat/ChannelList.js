import {Flex, Center, Spinner, Text, Button, Container} from "@chakra-ui/react";
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

    if (!isLoaded(channels)) return (<Center w={'100%'}><Spinner/></Center>)
    if (isEmpty(channels)) return <Text>There is nothing here 😢</Text>

    return (
        <Flex direction="column" align='center'>
            {
                channels.map(({key, value}) => {
                    return (
                            <Button key={key}  w={'80%'} size={mobile && 'sm'} name={value?.channelName}
                                    isActive={currentChannel?.key === key}
                                    _focus={{border: 'none'}}
                                    my={'10px'}
                                    onClick={() => setActiveChannel({key, ...value})}
                            >
                                {value.channelName}
                            </Button>

                    )
                })
            }
        </Flex>
    );
};

export default ChannelList;

import {
    IconButton, PopoverHeader, Popover, PopoverArrow, PopoverFooter,
    PopoverContent, PopoverCloseButton, PopoverBody, ButtonGroup,
    Button, Text, useDisclosure, PopoverTrigger, Tooltip
} from "@chakra-ui/react";
import {DeleteIcon} from "@chakra-ui/icons";
import {useFirebase} from "react-redux-firebase";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentChannel} from "../../store/actions/channel";


const DeleteCurrentChannel = () => {

    const {onOpen, onClose, isOpen} = useDisclosure();
    const dispatch = useDispatch();
    const firebase = useFirebase();
    const channels = useSelector(state => state.firebase.ordered.channels);
    const currentChannel = useSelector(state => state.channelReducer.currentChannel);


    const handleClick = () => {
        onClose(true);
        firebase.remove(`channels/${currentChannel.key}`)
            .finally(dispatch(setCurrentChannel(null)));
    }


    return (
        <>
            <Popover
                returnFocusOnClose={false}
                isOpen={isOpen}
                onClose={onClose}
                placement="right"
                closeOnBlur={false}
            >
                <PopoverTrigger>
                    <Tooltip label={'Delete channel'}>
                        <IconButton aria-label={'Delete channel'}
                                    size={'xs'}
                                    icon={<DeleteIcon/>}
                                    onClick={onOpen}
                        />
                    </Tooltip>

                </PopoverTrigger>
                <PopoverContent>
                    <PopoverHeader fontWeight="semibold">Confirmation</PopoverHeader>
                    <PopoverArrow/>
                    <PopoverCloseButton/>
                    <PopoverBody display={'flex'}>
                        Are you sure delete
                        <Text fontWeight="semibold" mx={'3px'}>
                            {currentChannel.channelName}
                        </Text>
                        channel?
                    </PopoverBody>
                    <PopoverFooter d="flex" justifyContent="flex-end">
                        <ButtonGroup size="sm">
                            <Button variant="outline" onClick={onClose}>Cancel</Button>
                            <Button colorScheme="red" onClick={handleClick}>Yes</Button>
                        </ButtonGroup>
                    </PopoverFooter>
                </PopoverContent>
            </Popover>
        </>
    );
};

export default DeleteCurrentChannel;


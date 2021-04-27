import {
    IconButton, PopoverHeader, Popover, PopoverArrow, PopoverFooter,
    PopoverContent, PopoverCloseButton, PopoverBody, ButtonGroup,
    Button, Text, useDisclosure, PopoverTrigger, useToast
} from "@chakra-ui/react";
import {DeleteIcon} from "@chakra-ui/icons";
import {useFirebase} from "react-redux-firebase";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentChannel} from "../../store/actions/channel";


const DeleteCurrentChannel = () => {

    const {onOpen, onClose, isOpen} = useDisclosure();
    const toast = useToast()
    const dispatch = useDispatch();
    const firebase = useFirebase();
    const currentChannel = useSelector(state => state.channelReducer.currentChannel);
    const profile = useSelector(state => state.firebase.profile)

    const handleClick = () => {
        onClose(true);
        if (currentChannel.createdBy.name === profile.name){
            firebase.remove(`channels/${currentChannel.key}`)
                .finally(dispatch(setCurrentChannel(null)));
        }else{
            toast({
                title: "Oopss !",
                description: "You must be creator this channel",
                status: "warning",
                duration: 1000,
                position: 'top',
                isClosable: true,
            })
        }

    }


    return (
        <>
            <Popover
                returnFocusOnClose={false}
                isOpen={isOpen}
                onClose={onClose}
                placement="bottom"
                closeOnBlur={false}
            >

                <PopoverTrigger>
                    <IconButton aria-label={'Delete channel'}
                                size={'xs'}
                                icon={<DeleteIcon/>}
                                onClick={onOpen}
                    />
                </PopoverTrigger>

                <PopoverContent>
                    <PopoverHeader fontWeight="semibold">Confirmation</PopoverHeader>
                    <PopoverArrow/>
                    <PopoverCloseButton/>
                    <PopoverBody display={'flex'}>
                        Are you sure delete
                        <Text fontWeight="semibold">
                            {`\u00A0${currentChannel.channelName}\u00A0`}
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


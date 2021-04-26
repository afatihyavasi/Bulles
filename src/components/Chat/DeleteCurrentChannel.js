import {
    IconButton, PopoverHeader, Popover, PopoverArrow, PopoverFooter,
    PopoverContent, PopoverCloseButton, PopoverBody, ButtonGroup,
    Button, Text, useDisclosure, PopoverTrigger, Tooltip
} from "@chakra-ui/react";
import {DeleteIcon} from "@chakra-ui/icons";


const DeleteCurrentChannel = ({currentChannel}) => {

    const {onOpen, onClose, isOpen} = useDisclosure()

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
                    <PopoverArrow />
                    <PopoverCloseButton />
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
                            <Button colorScheme="red">Yes</Button>
                        </ButtonGroup>
                    </PopoverFooter>
                </PopoverContent>
            </Popover>
        </>
    );
};

export default DeleteCurrentChannel;


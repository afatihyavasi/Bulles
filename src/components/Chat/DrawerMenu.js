import {useDisclosure,Button,Drawer,DrawerOverlay,DrawerContent
,DrawerCloseButton,DrawerBody} from "@chakra-ui/react";
import {useRef} from "react";
import SidePanel from "./SidePanel";

const DraverMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    return (
        <>
            <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
                Open
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerBody>
                            <SidePanel/>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    );
};

export default DraverMenu;

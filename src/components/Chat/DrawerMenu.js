import {
    useDisclosure, Drawer, DrawerOverlay, DrawerContent
    , DrawerCloseButton, DrawerBody, DrawerFooter, Image, Tooltip
} from "@chakra-ui/react";
import {useRef} from "react";
import SidePanel from "./SidePanel";
import logo from '../../assets/img/bullesLogoAlt.svg'
import DarkModeToggle from "../Nav/DarkModeToogle";

const DraverMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    return (
        <>

            <Tooltip label={'Open a menu'}>
                <Image ref={btnRef} onClick={onOpen} src={logo} cursor={'pointer'} boxSize="60px"/>
            </Tooltip>

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
                        <DrawerFooter mx={'auto'}>
                            <DarkModeToggle/>
                        </DrawerFooter>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    );
};

export default DraverMenu;

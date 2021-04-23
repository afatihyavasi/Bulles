import {Flex, IconButton, Input} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";
import {useState} from "react";
import {useFirebase} from "react-redux-firebase";
import {useSelector} from "react-redux";

const NewMessageInput = ({currentChannel}) => {
    const [content, setContent] = useState('');
    const firebase = useFirebase();
    const profile = useSelector(state => state.firebase.profile);
    const currentUserUID = useSelector(state => state.firebase.auth.uid)

    const handleSubmit = (event) => {
        event.preventDefault();
        if (content !== "") {
            const message = {
                content,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: {
                    id: currentUserUID,
                    name:profile.name,
                    avatar: profile.avatar
                }
            };
            firebase.push(`messages/${currentChannel.key}`, message)
                .then(() => {
                setContent("");
            });
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Flex h={'8%'} w={'100%'} ml={'-10px'}>
                    <IconButton icon={<AddIcon/>} aria-label={'add image'} mx={'20px'}/>
                    <Input onChange={(e) => setContent(e.target.value)} value={content}
                           placeholder={`Message #${currentChannel.channelName} `}/>
                </Flex>
            </form>
        </div>
    );
};

export default NewMessageInput;

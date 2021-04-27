import {Flex, IconButton, Input} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";
import {useState, useRef} from "react";
import {useFirebase} from "react-redux-firebase";
import {useSelector} from "react-redux";
import {v4 as uuid} from 'uuid';

const NewMessageInput = ({currentChannel}) => {

    const [content, setContent] = useState('');
    const fileInputRef = useRef(null);
    const firebase = useFirebase();
    const profile = useSelector(state => state.firebase.profile);
    const currentUserUID = useSelector(state => state.firebase.auth.uid)

    const uploadMedia = (event) => {
        const file = event.target.files[0];
        if (file) {
            const storageRef = firebase.storage().ref();
            const fileRef = storageRef.child(`chat/public/${uuid()}.jpg`);
            return fileRef.put(file)
                .then(snapshot => fileRef.getDownloadURL()
                    .then(url => {
                        sendMediaMessage(url);
                    }))
                .catch(err => alert('Upload failed', err))
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (content !== "") {
            const message = {
                content,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: {
                    id: currentUserUID,
                    name: profile.name,
                    avatar: profile.avatar,
                    color: profile.color
                }
            };
            firebase.push(`messages/${currentChannel.key}`, message)
                .then(() => {
                    setContent("");
                });
        }
    }

    const sendMediaMessage = (url) => {
        const message = {
            image: url,
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            user: {
                id: currentUserUID,
                name: profile.name,
                avatar: profile.avatar,
                color: profile.color
            }
        };
        firebase.push(`messages/${currentChannel.key}`, message)
            .catch(err => alert('Upload failed', err))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Flex h='8%' w={'100%'} ml={'-10px'} >
                    <IconButton icon={<AddIcon/>}  onClick={() => fileInputRef.current.click()} aria-label={'add image'}
                                mx={'20px'}/>
                    <input type='file' style={{display: 'none'}} ref={fileInputRef} onChange={uploadMedia}/>
                    <Input onChange={(e) => setContent(e.target.value)} value={content}
                           placeholder={`Message #${currentChannel.channelName} `}/>
                </Flex>
            </form>
        </>
    );
};

export default NewMessageInput;

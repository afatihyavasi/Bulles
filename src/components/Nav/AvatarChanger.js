import {useFirebase} from "react-redux-firebase";
import {useRef} from "react";
import {Text} from "@chakra-ui/react";
import {useSelector} from "react-redux";

const AvatarChanger = () => {
    const fileInputRef = useRef();
    const firebase = useFirebase();
    const profile = useSelector(state => state.firebase.profile);
    const uploadMedia = (event) => {
        const file = event.target.files[0];
        if (file) {
            const storageRef = firebase.storage().ref();
            const fileRef = storageRef.child(`users/public/avatars/${profile.name}Avatar.jpg`);
            return fileRef.put(file)
                .then(snapshot => fileRef.getDownloadURL()
                    .then(url => {
                        updateUserAvatar(url);
                    }))
                .catch(err => alert('Upload failed', err))
        }
    }

    const updateUserAvatar = (url) => {
        firebase.updateProfile({avatar: url})
    }

    return (
        <>
            <Text onClick={() => fileInputRef.current.click()}>
                Change Avatar
            </Text>
            <input type={'file'} ref={fileInputRef} onChange={uploadMedia} style={{display: 'none'}}/>
        </>
    );
};

export default AvatarChanger;

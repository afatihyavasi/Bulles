import {combineReducers} from "redux";
import {firebaseReducer as firebase} from 'react-redux-firebase';
import channelReducer from "./reducers/channelReducer";

const rootReducer = combineReducers({
    firebase,
    channelReducer
})

export default rootReducer;


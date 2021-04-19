import {combineReducers} from "redux";
import {firebaseReducer as firebase} from 'react-redux-firebase';

const rootReducer = combineReducers({
    firebase,
})

export default rootReducer;


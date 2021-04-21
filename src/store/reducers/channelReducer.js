import * as types from '../actions/types';

const initialState = {
    currentChannel: null,
}


export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_CURRENT_CHANNEL:
            return {
                ...state,
                currentChannel: action.payload
            }
        default:
            return {
                ...state
            }
    }
}
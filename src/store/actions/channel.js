import {SET_CURRENT_CHANNEL} from "./types";


export const setCurrentChannel = channel => {
    return {
        type: SET_CURRENT_CHANNEL,
        payload: channel
    }
}
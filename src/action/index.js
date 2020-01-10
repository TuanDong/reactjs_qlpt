import * as Type from './../constants/ActionType';
import {getPrice} from './../api/list_room';

export const showRoomAll = () => {
    return {
        type: Type.SHOW_ROOM_ALL
    }
}

export const fetchSuccess = (data) => {
    return {
        type: Type.FETCH_SUCCESS,
        payload: data
    }
}

export const fecthError = (error) => {
    return {
        type: Type.FETCH_ERROR,
        payload: error
    }
}

export const fecthPrice = (data) => {
    return {
        type : Type.GET_PRICE,
        payload : data
    }
}
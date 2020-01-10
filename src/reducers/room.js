import * as Type from './../constants/ActionType';

const initialState = {listRoom:[],Price: {ID:1, PRICE_ELECTRIC :0, PRICE_WATER :0}};
const room = (state = initialState, action) => {
    switch (action.type) {
        case Type.SHOW_ROOM_ALL:
            return {...state,listRoom:[]};
        case Type.FETCH_SUCCESS:
            return {...state,listRoom:action.payload};
        case Type.FETCH_ERROR:
            return {...state,listRoom:action.payload};
        case Type.GET_PRICE:
            return {...state,Price:action.payload}
        default:
            return state;
    }
}
export default room;
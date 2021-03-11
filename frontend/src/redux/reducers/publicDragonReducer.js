import { PUBLIC_DRAGON_FETCH_BEGIN, PUBLIC_DRAGON_FETCH_FAILURE, PUBLIC_DRAGON_FETCH_SUCCESS } from '../types/publicDragonsTypes';

const initialState = {
    dragons: []
}

const publicDragonReducer = (state = initialState, action) => {
    switch (action.type) {
        case PUBLIC_DRAGON_FETCH_BEGIN:
            return { ...state }
        case PUBLIC_DRAGON_FETCH_FAILURE:
            return { ...state, message: action.payload }
        case PUBLIC_DRAGON_FETCH_SUCCESS:
            return { ...state, dragons: action.payload }
        default:
            return state;
    }
}

export default publicDragonReducer;
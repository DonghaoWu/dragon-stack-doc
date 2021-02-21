import { GENERATION_FETCH_BEGIN, GENERATION_FETCH_SUCCESS, GENERATION_FETCH_FAILURE } from '../types/generationTypes';

const initialState = {
    generationId: '',
    expiration: '',
    message: '',
    fetchSuccess: false
}

const generationReducer = (state = initialState, action) => {
    switch (action.type) {
        case GENERATION_FETCH_BEGIN:
            return { ...state, fetchSuccess: false };
        case GENERATION_FETCH_SUCCESS:
            return { ...state, fetchSuccess: true, generationId: action.payload.generationId, expiration: action.payload.expiration };
        case GENERATION_FETCH_FAILURE:
            return { ...state, fetchSuccess: false, message: action.payload };
        default:
            return state;
    }
}

export default generationReducer;
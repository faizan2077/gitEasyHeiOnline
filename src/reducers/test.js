import{
    SAVE_DATA
} from '../actions/types';

const initialState = {
    questions: [],
    questions: null,
    loading: true,
    error: {}
}

export default function( state = initialState, action ) {
    const { type, payload } = action;

    switch(type){
        case SAVE_DATA:
            return {
                ...state,
                questions: payload,
                loading: false
            };
        default: {
            return state;
        };
    };
};
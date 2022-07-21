import { SAVE_DATA } from '../actions/types';
const initialState = {
    exams: {},
    test: {},
    loading: true,
    error: {}
}
export default function( state = initialState, action ) {
    const { type, payload } = action;
    switch(type){
        case SAVE_DATA:
            return {
                ...state,
                test: payload
            };
        default: {
            return state;
        };
    };
};
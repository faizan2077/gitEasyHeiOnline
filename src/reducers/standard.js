import{
    GET_STANDARD,
  CREATE_STANDARD, 
    STANDARD_ERROR,

} from '../actions/types';

const initialState = {
    standards: [],
    
    loading: true,
    error: {}
}

export default function( state = initialState, action ) {
    const { type, payload } = action;

    switch(type){
        case GET_STANDARD:{
            return {
                ...state,
                standard: payload,
                loading: false
            }
        }
            case CREATE_STANDARD:{
                return {
                    ...state,
                    standard: [payload,...state.standard],
                    loading: false
                }
            }
        case STANDARD_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default: {
            return state;
        };
    };
};

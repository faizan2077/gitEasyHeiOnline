import{
    GET_SUBJECTS,
  CREATE_SUBJECTS, 
    SUBJECT_ERROR,

} from '../actions/types';

const initialState = {
    subjects: [],
    
    loading: true,
    error: {}
}

export default function( state = initialState, action ) {
    const { type, payload } = action;

    switch(type){
        case GET_SUBJECTS:
            return {
                ...state,
                subject: payload,
                loading: false
            };
            case CREATE_SUBJECTS:{
                return {
                    ...state,
                    subject: [payload,...state.subject],
                    loading: false
                }
            }
        case SUBJECT_ERROR:
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
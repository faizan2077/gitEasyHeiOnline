import{
    GET_EXAMS,
  CREATE_EXAMS, 
    EXAM_ERROR,

} from '../actions/types';

const initialState = {
    exams: [],
    loading: true,
    error: {}
}

export default function( state = initialState, action ) {
    const { type, payload } = action;

    switch(type){
        case GET_EXAMS:
            return {
                ...state,
                exams: payload,
                loading: false
            };
            case CREATE_EXAMS:{
                return {
                    ...state,
                    exams: [payload,...state.exams],
                    loading: false
                }
            }
        case EXAM_ERROR:
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
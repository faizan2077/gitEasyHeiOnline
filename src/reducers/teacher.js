import{
    GET_QUESTIONS,
  CREATE_QUESTIONS, 
    QUESTIONS_ERROR,
    DELETE_QUESTIONS,
    GET_QUESTIONS_BY_ID

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
        case GET_QUESTIONS:
            return {
                ...state,
                questions: payload,
                loading: false
            };
        case GET_QUESTIONS_BY_ID:
            return {
                ...state,
                questions: payload,
                loading: false
            };
            case CREATE_QUESTIONS:{
                return {
                    ...state,
                    questions: [payload,...state.questions],
                    loading: false
                }
            }
            case DELETE_QUESTIONS:{
                return {
                    ...state,
                    questions: state.questions.filter(el=>el._id !== payload),
                    loading: false
                }
            }
            
        case QUESTIONS_ERROR:
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
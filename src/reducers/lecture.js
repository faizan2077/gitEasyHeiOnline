import{
    GET_LECTURE,
  CREATE_LECTURE, 
    LECTURE_ERROR,
GET_LECTURE_BY_ID,
DELETE_LECTURE
} from '../actions/types';

const initialState = {
    lecture: [],
    loading: true,
    error: {}
}

export default function( state = initialState, action ) {
    const { type, payload } = action;

    switch(type){
        case GET_LECTURE:
            return {
                ...state,
                lecture: payload,
                loading: false
            };
        case GET_LECTURE_BY_ID:
            return {
                ...state,
                lecture: payload,
                loading: false
            };
            case CREATE_LECTURE:{
                return {
                    ...state,
                    lecture: [payload,...state.lecture],
                    loading: false
                }
            }
            
            case DELETE_LECTURE:{
                return {
                    ...state,
                    lecture: state.lecture.filter(el=>el._id !== payload),
                    loading: false
                }
            }
        case LECTURE_ERROR:
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
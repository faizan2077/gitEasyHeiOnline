import{
    ACCESS_TOKEN,
   YOUTUBE,
   BEARER_TOKEN,
   SAVE_YT_DATA,
   SAVE_YT_ID
} from '../actions/types';

const initialState = {
    youtubeId:{},
    youtubedata: {},
    youtube: [],
    token:{},
    loading: true,
    error: {}
}

export default function( state = initialState, action ) {
    const { type, payload } = action;

    switch(type){
       
            case YOUTUBE:{
                return {
                    ...state,
                    youtube: payload,
                    loading: false
                }
            }
       
            case ACCESS_TOKEN:{
                return {
                    ...state,
                    youtube: payload,
                    loading: false
                }
            }
            case SAVE_YT_DATA:{
                return {
                    ...state,
                    youtubedata: payload,
                    loading: false
                }
            }
            case SAVE_YT_ID:{
                return {
                    ...state,
                    youtubeId: payload,
                    loading: false
                }
            }
            case BEARER_TOKEN:{
                return {
                    ...state,
                    token: payload,
                    loading: false
                }
            }
       
        default: {
            return state;
        };
    };
};
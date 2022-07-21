import axios from 'axios';
import { setAlert } from './alert';
import{
    SAVE_DATA,
    TEST_ERROR
} from './types';
export const saveTestData = (data) => async dispatch => {

    try {

        //   const config1 = {
        //     headers: {
        //         'Content-Type': 'application/json',
        //     Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIwYjFjNGZiODNmZTFmMTQyOTdlNDIiLCJpYXQiOjE2NDY4MDQ3ODMsImV4cCI6MTY0Njg5MTE4M30.9Ry2PMK7Y4pvRUMCni36xOtL9vV8DmaF_2ky_1acjmE"
        //     }
        // }
        
        //   const res = await axios.post('https://api.pariksha247.com/api/question/', question, config1);

            dispatch({
                type: SAVE_DATA,
                payload: data
            });

            dispatch(setAlert('Test Data Saved', 'success'));
            } catch (err) {
            dispatch({
                type: TEST_ERROR,
                payload: {msg: err.response.message, status: err.response.status }
            });
    }
}
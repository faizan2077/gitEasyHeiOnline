import axios from 'axios';
import { setAlert } from './alert';
import{
    GET_QUESTIONS,
    QUESTIONS_ERROR,
    CREATE_QUESTIONS,
    DELETE_QUESTIONS,
    GET_QUESTIONS_BY_ID
} from './types';

const Api = process.env.REACT_APP_API;
// GET COMPLAINTS FOR USER
export const getQuestions = () => async dispatch => {
    try {
        const config1 = {
            headers: {
                'Content-Type': 'application/json',
                Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIwYjFjNGZiODNmZTFmMTQyOTdlNDIiLCJpYXQiOjE2NDY4MDQ3ODMsImV4cCI6MTY0Njg5MTE4M30.9Ry2PMK7Y4pvRUMCni36xOtL9vV8DmaF_2ky_1acjmE'
            }
            
        }
        const res = await axios.get(`https://api.pariksha247.com/api/wordparser/`,config1);

        dispatch({
            type: GET_QUESTIONS,
            payload: res.data
        });
    } catch (err) {
        // console.log(err)
        dispatch({
            type: QUESTIONS_ERROR,
            payload: {msg: err.message, status: err.response.status }
        });
    }
}
export const getQuestionsByType = (type) => async dispatch => {
    try {
        const config1 = {
            headers: {
                'Content-Type': 'application/json',
                Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIwYjFjNGZiODNmZTFmMTQyOTdlNDIiLCJpYXQiOjE2NDY4MDQ3ODMsImV4cCI6MTY0Njg5MTE4M30.9Ry2PMK7Y4pvRUMCni36xOtL9vV8DmaF_2ky_1acjmE'
            }
            
        }
        const res = await axios.get(`https://api.pariksha247.com/api/question/SINGLE-CORRECT`,config1);

        dispatch({
            type: GET_QUESTIONS_BY_ID,
            payload: res.data
        });
    } catch (err) {
        // console.log(err)
        dispatch({
            type: QUESTIONS_ERROR,
            payload: {msg: err.message, status: err.response.status }
        });
    }
}


export const createquestion = (question) => async dispatch => {

    try {

          const config1 = {
            headers: {
                'Content-Type': 'application/json',
            Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIwYjFjNGZiODNmZTFmMTQyOTdlNDIiLCJpYXQiOjE2NDY4MDQ3ODMsImV4cCI6MTY0Njg5MTE4M30.9Ry2PMK7Y4pvRUMCni36xOtL9vV8DmaF_2ky_1acjmE"
            }
        }
        
          const res = await axios.post('https://api.pariksha247.com/api/question/', question, config1);

            dispatch({
                type: CREATE_QUESTIONS,
                payload: res.data
            });

            dispatch(setAlert('Question Created', 'success'));
            } catch (err) {
            dispatch({
                type: QUESTIONS_ERROR,
                payload: {msg: err.response.message, status: err.response.status }
            });
    }
}

export const deletequestionsuccessfullly = (id)=>async dispatch =>{
try {
    
    
} catch (err) {
    
}
}

export const deletequestion = (questionId) => async dispatch => {

    try {

          const config1 = {
            headers: {
                'Content-Type': 'application/json',
            Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIwYjFjNGZiODNmZTFmMTQyOTdlNDIiLCJpYXQiOjE2NDY4MDQ3ODMsImV4cCI6MTY0Njg5MTE4M30.9Ry2PMK7Y4pvRUMCni36xOtL9vV8DmaF_2ky_1acjmE"
            }
        }
        
          const res = await axios.delete(`https://api.pariksha247.com/api/question/delete/${questionId}`, config1);

            dispatch({
                type: DELETE_QUESTIONS,
                payload: questionId
            })

            dispatch(setAlert('Question Deleted', 'success'));
            } catch (err) {
            dispatch({
                type: QUESTIONS_ERROR,
                payload: err
            });
    }
}
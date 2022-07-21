import axios from 'axios';
import fetch from 'isomorphic-fetch';
import { setAlert } from './alert';
import{
    GET_SUBJECTS,
    SUBJECT_ERROR,
    CREATE_SUBJECTS
} from './types';


// GET COMPLAINTS FOR USER
export const getSubjects = () => async dispatch => {
    try {
        const config1 = {
            headers: {
                'Content-Type': 'application/json',
                Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIwYjFjNGZiODNmZTFmMTQyOTdlNDIiLCJpYXQiOjE2NDY1NDM5NTAsImV4cCI6MTY0NjYzMDM1MH0.GHrkmA70efy4FU2i93XyfQMPt8AZmrgELu5uf30maOk'
            }
            
        }
        const res = await axios.get(`https://api.pariksha247.com/api/subject/active`,config1);

        dispatch({
            type: GET_SUBJECTS,
            payload: res.data
        });
    } catch (err) {
        // console.log(err)
        dispatch({
            type: SUBJECT_ERROR,
            payload: {msg: err.message, status: err.response.status }
        });
    }
}

export const getChapters = (Data)  => {
    return fetch(`https://api.pariksha247.com/api/chapter/active`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type" : 'application/json'

        },   
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}

export const getTopics = (Data)  => {
    return fetch(`https://api.pariksha247.com/api/topic/`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type" : 'application/json'
            
        },   
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}

export const getSubtopic = (Data)  => {
    return fetch(`https://api.pariksha247.com/api/subtopic`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type" : 'application/json'
            
        },   
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}





export const createsubject = (subject,token) => async dispatch => {

    try {

          const config1 = {
            headers: {
                'Content-Type': 'application/json',
            Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIwYjFjNGZiODNmZTFmMTQyOTdlNDIiLCJpYXQiOjE2NDY0NzM4MDEsImV4cCI6MTY0NjU2MDIwMX0.a_zW6Rmb8FTOqHoJO_9W-3Y728PA3fwEx5imwMoGEBo"
            }
        }
        
          const res = await axios.post('https://api.pariksha247.com/api/subject/', subject, config1);

            dispatch({
                type: CREATE_SUBJECTS,
                payload: res.data
            });

            dispatch(setAlert('Subject Created', 'success'));
            } catch (err) {
            dispatch({
                type: SUBJECT_ERROR,
                payload: {msg: err.response.message, status: err.response.status }
            });
    }
}
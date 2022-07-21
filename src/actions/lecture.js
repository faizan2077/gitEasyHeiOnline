import axios from 'axios';
import { setAlert } from './alert';
import { Link, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import{
    GET_LECTURE,
    LECTURE_ERROR,
    CREATE_LECTURE,
    DELETE_LECTURE,
    GET_LECTURE_BY_ID
} from './types';


// GET Lectures FOR USER
export const getlectures = (token) => async dispatch => {
    try {
        const config1 = {
            headers: {
                'Content-Type': 'application/json',
                Authorization:`Bearer ${token}`
            }
            
        }
        const res = await axios.get(`https://api.pariksha247.com/api/lecture/`,config1);
        dispatch({
            type: GET_LECTURE,
            payload: res.data
        });
    } catch (err) {
        // console.log(err)
        dispatch({
            type: LECTURE_ERROR,
            payload: err
        });
    }
}

export const getAllLectures = async (id) => {
    try {
      const response = await fetch(`https://api.pariksha247.com/api/lecture/LIVE`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
          }
      });
      if (response) return response.json();
    } catch (error) {
      console.log(error);
    }
  };

export const getAllRecordedLectures = async (id) => {
    try {
      const response = await fetch(`https://api.pariksha247.com/api/lecture/RECORDED`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
          }
      });
      if (response) return response.json();
    } catch (error) {
      console.log(error);
    }
  };
  
export const getlecturesbyid = (type,token) => async dispatch => {
    try {
        const config1 = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
            
        }
        const res = await axios.get(`https://api.pariksha247.com/api/lecture/${type}`,config1);
        dispatch({
            type: GET_LECTURE_BY_ID,
            payload: res.data
        });
    } catch (err) {
        // console.log(err)
        dispatch({
            type: LECTURE_ERROR,
            payload: err
        });
    }
}

export const getlecturesbyidfordata = (type,token) => async dispatch => {
    try {
        const config1 = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
            
        }
        const res = await axios.get(`https://api.pariksha247.com/api/lecture/by-id/${type}`,config1);
        dispatch({
            type: GET_LECTURE_BY_ID,
            payload: res.data
        });
    } catch (err) {
        // console.log(err)
        dispatch({
            type: LECTURE_ERROR,
            payload: err
        });
    }
}



export const createlecture = (lecture,token) => async dispatch => {

    try {
          const config1 = {
            headers: {
                'Content-Type': 'application/json',
                 Authorization:`Bearer ${token}`
            }
        }
          const res = await axios.post('https://api.pariksha247.com/api/lecture/', lecture, config1);
        
            dispatch({
                type: CREATE_LECTURE,
                payload: res.data
            });
    dispatch( window.location.href = "https://teacher.easyhaionline.com/teacher/dashboard")
            dispatch(alert('Lecture Created', 'success'));
            } catch (err) {
            dispatch({
                type: LECTURE_ERROR,
                payload: err
            });
    }
}

export const deletelecture = (lectureId) => async dispatch => {

    try {

          const config1 = {
            headers: {
                'Content-Type': 'application/json',
                Authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        }
        
          const res = await axios.delete(`https://api.pariksha247.com/api/lecture/delete/${lectureId}`, config1);

            dispatch({
                type: DELETE_LECTURE,
                payload: lectureId
            })

            dispatch(setAlert('Lecture Deleted', 'success'));
            } catch (err) {
            dispatch({
                type: LECTURE_ERROR,
                payload: err
            });
    }
}

export const listSearch = params => {
    console.log('search params', params);
    let query = queryString.stringify(params);
    console.log('query params', query);
    return fetch(`https://api.pariksha247.com/api/lecture/livelecture/${params}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
           
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
export const recordedlistSearch = params => {
    console.log('search params', params);
    let query = queryString.stringify(params);
    console.log('query params', query);
    return fetch(`https://api.pariksha247.com/api/lecture/lecture/${params}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
           
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


import axios from 'axios';
import { setAlert } from './alert';
import{
    GET_EXAMS,
    EXAM_ERROR,
    CREATE_EXAMS
} from './types';


// GET COMPLAINTS FOR USER
export const getExams = () => async dispatch => {
    try {
        const config1 = {
            headers: {
                'Content-Type': 'application/json',
                Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIwYjFjNGZiODNmZTFmMTQyOTdlNDIiLCJpYXQiOjE2NDY1NDM5NTAsImV4cCI6MTY0NjYzMDM1MH0.GHrkmA70efy4FU2i93XyfQMPt8AZmrgELu5uf30maOk'
            }
            
        }
        const res = await axios.get(`https://api.pariksha247.com/api/examtype/active`,config1);
        dispatch({
            type: GET_EXAMS,
            payload: res.data
        });
    } catch (err) {
        // console.log(err)
        dispatch({
            type: EXAM_ERROR,
            payload: err.response
        });
    }
}


export const createExam = (exam,token) => async dispatch => {

    try {

          const config1 = {
            headers: {
                'Content-Type': 'application/json',
            Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIwYjFjNGZiODNmZTFmMTQyOTdlNDIiLCJpYXQiOjE2NDY1NDM5NTAsImV4cCI6MTY0NjYzMDM1MH0.GHrkmA70efy4FU2i93XyfQMPt8AZmrgELu5uf30maOk"
            }
        }
        
          const res = await axios.post('https://api.pariksha247.com/api/examtype/', exam, config1);

            dispatch({
                type: CREATE_EXAMS,
                payload: res.data
            });

            dispatch(setAlert('Exam Created', 'success'));
            } catch (err) {
            dispatch({
                type: EXAM_ERROR,
                payload: err
            });
    }
}
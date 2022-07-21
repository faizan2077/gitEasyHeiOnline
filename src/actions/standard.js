import axios from 'axios';
import { setAlert } from './alert';
import{
    GET_STANDARD,
    STANDARD_ERROR,
    CREATE_STANDARD
} from './types';


// GET COMPLAINTS FOR USER
export const getstandards = () => async dispatch => {
    try {
        const config1 = {
            headers: {
                'Content-Type': 'application/json'
                // Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIwYjFjNGZiODNmZTFmMTQyOTdlNDIiLCJpYXQiOjE2NDY1NDM5NTAsImV4cCI6MTY0NjYzMDM1MH0.GHrkmA70efy4FU2i93XyfQMPt8AZmrgELu5uf30maOk'
            }
            
        }
        const res = await axios.get(`https://api.pariksha247.com/api/standard/active`,config1);
        dispatch({
            type: GET_STANDARD,
            payload: res.data
        });
    } catch (err) {
        // console.log(err)
        dispatch({
            type: STANDARD_ERROR,
            payload: err
        });
    }
}


export const createStandard = (standard,token) => async dispatch => {

    try {

          const config1 = {
            headers: {
                'Content-Type': 'application/json'
            // Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIwYjFjNGZiODNmZTFmMTQyOTdlNDIiLCJpYXQiOjE2NDY1NDM5NTAsImV4cCI6MTY0NjYzMDM1MH0.GHrkmA70efy4FU2i93XyfQMPt8AZmrgELu5uf30maOk"
            }
        }
        
          const res = await axios.post('https://api.pariksha247.com/api/standard/', standard, config1);

            dispatch({
                type: CREATE_STANDARD,
                payload: res.data
            });

            dispatch(setAlert('Standard Created', 'success'));
            } catch (err) {
            dispatch({
                type: STANDARD_ERROR,
                payload: err
            });
    }
}
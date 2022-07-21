import axios from 'axios';
import { setAlert } from './alert';
import { createlecture } from './lecture';
import { Link, useNavigate } from "react-router-dom";
import{
    YOUTUBE,
    EXAM_ERROR,
    CREATE_EXAMS,
    ACCESS_TOKEN,
    BEARER_TOKEN,
    SAVE_YT_DATA,
    SAVE_YT_ID
} from './types';


export const saveYoutubedata = (data) => {
  return (dispatch) =>{
    console.log(data)
    dispatch({
      type:SAVE_YT_DATA,
      payload: data
    })
  }
}
export const saveYoutubeId = (data) => {
  return (dispatch) =>{
    console.log(data)
    dispatch({
      type:SAVE_YT_ID,
      payload: data
    })
  }
}

export const liveScheduling = (bearerToken,inputvals) => async dispatch => {

    try {
console.log(inputvals)
        const data={
            
                "snippet": {
                  "title": `${inputvals.title}`,
                  "scheduledStartTime": `${inputvals.startingdate}T${inputvals.startingtime}+05:30`,
                  "scheduledEndTime": `${inputvals.endingdate}T${inputvals.endingtime}+05:30`
                },
                "contentDetails": {
                  "enableClosedCaptions": true,
                  "enableContentEncryption": true,
                  "enableDvr": true,
                  "enableEmbed": true,
                  "recordFromStart": true,
                  "startWithSlate": true
                },
                "status": {
                  "privacyStatus": "unlisted"
                },
                "cdn": {
                  "frameRate": "60fps",
                  "ingestionType": "rtmp",
                  "resolution": "1080p"
                }
              }
        console.log(bearerToken)

          const config1 = {
            headers: {
                Accept:'application/json',
                'Content-Type': 'application/json',
            Authorization:`Bearer ${bearerToken}`
            }
        }
        
        
          const res = await axios.post('https://youtube.googleapis.com/youtube/v3/liveBroadcasts?part=snippet,contentDetails,status',data,config1 );
          // const res = await axios.post('https://youtube.googleapis.com/youtube/v3/liveBroadcasts?part=snippet,contentDetails,status', data, config1);
//https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/youtube&access_type=offline&include_granted_scopes=true&state=state_parameter_passthrough_value&redirect_uri=http://localhost:3000/&response_type=code&client_id=678147088816-bslveis8251a72cep85c7ph61flj4p8a.apps.googleusercontent.com
           
const finaldata = {
      
  "title": inputvals.title,

  "description":inputvals.description,
  "type": inputvals.type,
  "standard": inputvals.standard,
  "subject": inputvals.subject,
  "chapter": inputvals.chapter,
  "topic":inputvals.topic,
 "link":res.data.contentDetails.monitorStream.embedHtml.slice(68,79),
 "date":inputvals.startingdate,
 "examtype":inputvals.examtype,
  // "time":inputvals.time,
  "course":inputvals.course,
  "startingtime":inputvals.startingtime,
  "endingtime":inputvals.endingtime,

  "duration":inputvals.duration,
  };
console.log(finaldata)
dispatch(createlecture(finaldata));

           
            } catch (err) {
            dispatch({
                type: EXAM_ERROR,
                payload: err
            });
    }
}

export const googleaccess = () => async dispatch => {

    try {
// console.log(info)


              const config1 = {
                headers: {
                
                    'Content-Type': 'application/json',
                // Authorization:`Bearer ${token}`
                }
            }
             
        
          const res = await axios.get(`https://api.pariksha247.com/api/youtube/google`,config1 );
        
            dispatch({
                type: ACCESS_TOKEN,
                payload: res.data.url
            });

            // dispatch(liveScheduling());
            } catch (err) {
            dispatch({
                type: EXAM_ERROR,
                payload: err
            });
    }
}

export const tokenaccess = (code,inputvals) => async dispatch => {

    try {
console.log(code,inputvals)
const data = {
  "code":`${code}`
}

              const config1 = {
                headers: {
                  Accept: 'application/json',
                    'Content-Type': 'application/json',
                // Authorization:`Bearer ${token}`
                }
            }
            console.log(data)
             
            const res = await axios.post(`https://api.pariksha247.com/api/youtube/google-token`,data,config1);
            const bearerToken=res.data.access_token;
            console.log(bearerToken)
            dispatch(liveScheduling(bearerToken,inputvals));

            // dispatch(liveScheduling(bearerToken));
            } catch (err) {
            dispatch({
                type: EXAM_ERROR,
                payload: err
            });
    }
}

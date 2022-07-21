import { combineReducers } from 'redux';
import teacher from './teacher';
import alert from './alert'
import subject from  './subject'
import exams from './exams';
import standard from './standard';
import lecture from './lecture';
import savedata from './savedata';
import youtube from './youtube';
export default combineReducers({
    teacher,
    alert,
    subject,
    exams,
    standard,
    lecture,
     savedata,
     youtube
    
});

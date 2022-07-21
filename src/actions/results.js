import * as actionTypes from './types';
import axios from 'axios';

const config1 = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIwYjFjNGZiODNmZTFmMTQyOTdlNDIiLCJpYXQiOjE2NDc2MDA4MjQsImV4cCI6MTY0NzY4NzIyNH0.Wb5gkAyP5CC_aI5jQTdQCiYYNncvS9--tN6lobnb1XI"
    }
}


export const getResults = (requestObject) => async dispatch => {
    try {
        const resultObj = await axios.post('https://api.pariksha247.com/api/analytics/get-results-data', requestObject, config1)

        if (resultObj) {
            dispatch({
                type: actionTypes.SET_TEST_RESULTS,
                data: resultDTO(resultObj.data.data)
            })
        }
    }
    catch (err) {
        console.log(err)
        dispatch({
            type: actionTypes.ERROR,
            data: null
        })
    }

}


const resultDTO = (data) => {

    const responseObj = [];
    const overallObj = {
        subject: "Overall",
        score: data.obtainedMarks,
        totalScore: data.obtainedMarks,
        correct: data.correctQuestions,
        incorrect: data.totalQuestions - data.correctQuestions,
        rank: 1,
        totalStudents: 1,
        unattempted: 0,

    }
    console.log(data);
    responseObj.push(overallObj);
    Object.keys(data.subjectWiseScore).forEach(ele => {
        const obj = {
            subject: ele,
            correct: data.subjectWiseScore[ele].correctQuestions,
            incorrect: data.subjectWiseScore[ele].incorrect,
            score: data.subjectWiseScore[ele].totalScore,
            totalScore: data.obtainedMarks,
            rank: 1,
            totalStudents: 1,
            unattempted: 0
        }
        responseObj.push(obj);
    })

    return responseObj;
    // [
    //     {
    //         subject: "Overall",
    //         score: 160,
    //         totalScore: 300,
    //         rank: 16,
    //         totalStudents: 28,
    //         correct: 20,
    //         incorrect: 11,
    //         unattempted: 44,
    //     },
    //     {
    //         subject: "Maths",
    //         score: 60,
    //         totalScore: 100,
    //         rank: 14,
    //         totalStudents: 28,
    //         correct: 9,
    //         incorrect: 4,
    //         unattempted: 14,
    //     },
    //     {
    //         subject: "Physics",
    //         score: 50,
    //         totalScore: 100,
    //         rank: 19,
    //         totalStudents: 28,
    //         correct: 6,
    //         incorrect: 4,
    //         unattempted: 12,
    //     },
    //     {
    //         subject: "Chemistry",
    //         score: 50,
    //         totalScore: 100,
    //         rank: 20,
    //         totalStudents: 28,
    //         correct: 5,
    //         incorrect: 3,
    //         unattempted: 18,
    //     },
    // ];
}

// {
//     "questionsList": [
//         "624c86fcc089bdccac70e217",
//         "624c86fcc089bdccac70e219",
//         "624c86fcc089bdccac70e21a",
//         "624c86fcc089bdccac70e218"
//     ],
//         "_id": "625103ca28050103e382c253",
//             "testId": "624c8acfc089bdccac70e21b",
//                 "studentId": "123",
//                     "startTimeStamp": "2022-04-09T03:55:54.445Z",
//                         "totalQuestions": 4,
//                             "testName": "Test 1",
//                                 "startTime": 1649476554445,
//                                     "duration": 10800000,
//                                         "createdAt": "2022-04-09T03:55:54.537Z",
//                                             "updatedAt": "2022-04-09T03:56:10.525Z",
//                                                 "__v": 0,
//                                                     "correctQuestions": 4,
//                                                         "endTimeStamp": "2022-04-09T03:56:10.508Z",
//                                                             "obtainedMarks": 4,
//                                                                 "questionAttempted": 4,
//                                                                     "testType": "Test Series",
//                                                                         "subjectWiseScore": {
//         "maths": {
//             "totalQuestions": 2,
//                 "totalScore": 3,
//                     "correctQuestions": 2,
//                         "incorrect": 0
//         },
//         "physics": {
//             "totalQuestions": 1,
//                 "totalScore": 1,
//                     "correctQuestions": 1,
//                         "incorrect": 0
//         },
//         "chemistry": {
//             "totalQuestions": 1,
//                 "totalScore": 1,
//                     "correctQuestions": 1,
//                         "incorrect": 0
//         }
//     }
// }
import { SIGN_IN,LOG_IN,ERROR_LOGIN, FORGOT_PASSWORD,RESET_PASSWORD, SAVE_DATA, STORE_LOGIN,OTP_RESPONSE } from "./types";
import axios from 'axios';
import fetch from 'isomorphic-fetch';
import cookie from 'js-cookie';
export const signedup = (data) => async dispatch => {
    try {
         
        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIwYjFjNGZiODNmZTFmMTQyOTdlNDIiLCJpYXQiOjE2NDY1NDM5NTAsImV4cCI6MTY0NjYzMDM1MH0.GHrkmA70efy4FU2i93XyfQMPt8AZmrgELu5uf30maOk"
        //     }
        // }
        
          const res = await axios.post('https://api.pariksha247.com/api/admin/  ', data);

            dispatch({
                type: SIGN_IN,
                payload: res.data
            });

            console.log(res.data)
            } catch (err) {
            dispatch({
                type: ERROR_LOGIN,
                payload: err
            });
    }
}


export const uploadimage =  (data) =>  {
    console.log(data)
         return  fetch(`https://api.pariksha247.com/api/image-upload`, {
             method: "POST",
             headers: {
               Accept: "application/json",
               
             },
             body: data,
           })
           .then(response => {
             return response.json();
         })
         .catch(err => console.log(err));
 }
 

export const updateprofile = (Data,token) => {
    console.log(Data)
    return fetch(`https://api.pariksha247.com/api/admin/profile-update`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            "Content-Type" : 'application/json',
            Authorization:`Bearer ${token}`
        },  
        body: JSON.stringify(Data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const simplelogin = (Data) => {
    console.log(Data)
    return fetch(`https://api.pariksha247.com/api/admin/teacher/login`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type" : 'application/json'
        },  
        body: JSON.stringify(Data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const createteacher = (Data) => {
    // console.log(Data)
    return fetch(`https://api.pariksha247.com/api/admin/teacher`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type" : 'application/json'
        },  
        body: JSON.stringify(Data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const toggleteacher = (id) => {
    // console.log(Data)
    return fetch(`https://api.pariksha247.com/api/admin/toggle-teacher/${id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            "Content-Type" : 'application/json'
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const removeteacher = (id) => {
    // console.log(Data)
    return fetch(`https://api.pariksha247.com/api/admin/remove-teacher/${id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            "Content-Type" : 'application/json'
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const searchstudents = (Data) => {
    // console.log(Data)
    return fetch(`https://api.pariksha247.com/api/admin/get-students`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            "Content-Type" : 'application/json'
        },  
        body: JSON.stringify(Data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};



export const toggleStudent = (id) => {
    // console.log(Data)
    return fetch(`https://api.pariksha247.com/api/admin/toggle-student/${id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            "Content-Type" : 'application/json'
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const removestudent = (id) => {
    // console.log(Data)
    return fetch(`https://api.pariksha247.com/api/admin/remove-student/${id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            "Content-Type" : 'application/json'
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};



export const signout = (next) => {
    removeCookie('token');
    removeLocalStorage('user');
    next()
    return fetch(`https://api.pariksha247.com/api/admin/signout`, {
        method: 'GET'
    })
        .then(response => {
            console.log('signout success');
        })
        .catch(err => console.log(err));
    
    
};

// set cookie
export const setCookie = (key, value) => {
    if (process.browser) {
        cookie.set(key, value, {
            expires: 1
        });
    }
};

export const removeCookie = key => {
    if (process.browser) {
        cookie.remove(key, {
            expires: 1
        });
    }
};

export const getCookie = key => {
    if (process.browser) {
        return cookie.get(key);
    }
};
// localstorage
export const setLocalStorage = (key, value) => {
    if (process.browser) {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

export const removeLocalStorage = key => {
    if (process.browser) {
        localStorage.removeItem(key);
    }
};
// autheticate user by pass data to cookie and localstorage

export const authenticate = (data, next) => {
    setCookie('token', data.token);
    setLocalStorage('user', data.user);
    next();
};

export const isAuth = () => {
   
            if (localStorage.getItem('user')) {
                return JSON.parse(localStorage.getItem('user'));
            } else {
                return false;
            }
   
};

export const updateUser = (user, next) => {
    if (process.browser) {
        if (localStorage.getItem('user')) {
            let auth = JSON.parse(localStorage.getItem('user'));
            auth = user;
            localStorage.setItem('user', JSON.stringify(auth));
            next();
        }
    }
};





export const getstudents = (token) => {
    
    return fetch(`https://api.pariksha247.com/api/admin/students`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        Authorization:`Bearer ${token}`  
        },        
       
      
    }).then(response => {
            return response.json();
        }).catch(err => console.log(err));
};

export const getteachers = (token) => {
    
    return fetch(`https://api.pariksha247.com/api/admin/teachers`, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        Authorization:`Bearer ${token}`  
        },        
       
      
    }).then(response => {
            return response.json();
        }).catch(err => console.log(err));
};

export const sendotp = (data) => {
    console.log(data)
    return fetch(`http://digimate.airtel.in:15181/BULK_API/SendMessage?loginID=harshlyg_hsi&password=harshlyg@123&mobile=${data.number}&text=(EASY Latest HAI ONLINE EDUCATIONAL SERVICES) ${data.otp} is your OTP and it is valid for the next 10 minutes. Please do not share this OTP with anyone. Thank You, EASY HAI ONLINE EDUCATIONAL SERVICES&senderid=DGMATE&DLT_TM_ID=1001096933494158&DLT_CT_ID=&DLT_PE_ID=1001751517438613463&route_id=DLT_SERVICE_IMPLICT&Unicode=0&camp_name=harshlyg_u`, {
        method: 'GET',
        mode: 'cors',
        headers:{
            Accept:"text/plain"
        }
      
    }).then(response => {
            return response;
        }).catch(err => console.log(err));
};

export const signedupwithmobile = (data) => async dispatch => {
    try {
         
        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIwYjFjNGZiODNmZTFmMTQyOTdlNDIiLCJpYXQiOjE2NDY1NDM5NTAsImV4cCI6MTY0NjYzMDM1MH0.GHrkmA70efy4FU2i93XyfQMPt8AZmrgELu5uf30maOk"
        //     }
        // }
        
          const res = await axios.post('https://api.pariksha247.com/api/admin/withmobile/  ', data);

            dispatch({
                type: SIGN_IN,
                payload: res.data
            });

            console.log(res.data)
            } catch (err) {
            dispatch({
                type: ERROR_LOGIN,
                payload: err
            });
    }
}
export const savelogin = (data) => async dispatch => {
    try {
         
        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIwYjFjNGZiODNmZTFmMTQyOTdlNDIiLCJpYXQiOjE2NDY1NDM5NTAsImV4cCI6MTY0NjYzMDM1MH0.GHrkmA70efy4FU2i93XyfQMPt8AZmrgELu5uf30maOk"
        //     }
        // }
        
          

            dispatch({
                type: STORE_LOGIN,
                payload: data
            });
dispatch(await sendotp(data))
            console.log(data)
            } catch (err) {
            dispatch({
                type: ERROR_LOGIN,
                payload: err
            });
    }
}

export const forgotPassword = (data) => async dispatch => {
    try {
         
        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIwYjFjNGZiODNmZTFmMTQyOTdlNDIiLCJpYXQiOjE2NDY1NDM5NTAsImV4cCI6MTY0NjYzMDM1MH0.GHrkmA70efy4FU2i93XyfQMPt8AZmrgELu5uf30maOk"
        //     }
        // }
        
          const res = await axios.put('https://api.pariksha247.com/api/admin/forgot-password  ', data);

            dispatch({
                type: FORGOT_PASSWORD,
                payload: res.data
            });

            console.log(res.data)
            } catch (err) {
            dispatch({
                type: ERROR_LOGIN,
                payload: err
            });
    }
}


export const simpleforgetpassword = async (Data) => {
    console.log(Data)
    return await fetch(`https://api.pariksha247.com/api/admin/forgot-password `, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            "Content-Type" : 'application/json'
        },  
        body: JSON.stringify(Data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
export const simpleResetpassword = async (Data) => {
    console.log(Data)
    return await fetch(`https://api.pariksha247.com/api/admin/reset-password  `, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            "Content-Type" : 'application/json'
        },  
        body: JSON.stringify(Data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const resetPassword = (data) => async dispatch => {
    try {
         
        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIwYjFjNGZiODNmZTFmMTQyOTdlNDIiLCJpYXQiOjE2NDY1NDM5NTAsImV4cCI6MTY0NjYzMDM1MH0.GHrkmA70efy4FU2i93XyfQMPt8AZmrgELu5uf30maOk"
        //     }
        // }
        
          const res = await axios.put('https://api.pariksha247.com/api/admin/reset-password  ', data);

            dispatch({
                type: RESET_PASSWORD,
                payload: res.data
            });

            console.log(res.data)
            } catch (err) {
            dispatch({
                type: ERROR_LOGIN,
                payload: err
            });
    }
}

export const loggedIn = (data) => async dispatch => {
    try {
         
        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjIwYjFjNGZiODNmZTFmMTQyOTdlNDIiLCJpYXQiOjE2NDY1NDM5NTAsImV4cCI6MTY0NjYzMDM1MH0.GHrkmA70efy4FU2i93XyfQMPt8AZmrgELu5uf30maOk"
        //     }
        // }
        
          const res = await axios.post('https://api.pariksha247.com/api/admin/login ',data);

            dispatch({
                type: LOG_IN,
                payload: res.data
            });
console.log(res.data)
localStorage.setItem("token", res.data.token);
            } catch (err) {
            dispatch({
                type: ERROR_LOGIN,
                payload: err
            });
    }
}

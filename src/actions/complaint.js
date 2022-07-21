import axios from 'axios';
import fetch from 'isomorphic-fetch';

export const complaintData = async(id)=>{
    const res = await fetch("https://api.pariksha247.com/api/complaint/get/${id}");
    if(res)
        return res.json();
}   


export const Complaintdata2 = (id,token) => {
    // console.log(Data)
    return fetch(`https://api.pariksha247.com/api/complaint/get/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type" : 'application/json',
            Authorization:`Bearer ${token}`
        },  
        // body: JSON.stringify(Data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const Complaintsbyid = (id,token) => {
    // console.log(Data)
    return fetch(`https://api.pariksha247.com/api/complaint/getById/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type" : 'application/json',
            Authorization:`Bearer ${token}`
        },  
        // body: JSON.stringify(Data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
export const feedbacksbyid = (id,token) => {
    // console.log(Data)
    return fetch(`https://api.pariksha247.com/api/complaint/feedbacks/getById/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type" : 'application/json',
            Authorization:`Bearer ${token}`
        },  
        // body: JSON.stringify(Data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
export const updateResponse =  async(data)=>{
    try {
      const res = await fetch(
        `https://api.pariksha247.com/api/complaint/response`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await res.json();
      if (result) return result;
    } catch (error) {
      console.log(error);
      return []
    }
  }
  export const Complaintdatabyid = (id,token) => {
    // console.log(Data)
    return fetch(`https://api.pariksha247.com/api/complaint/get/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type" : 'application/json',
            Authorization:`Bearer ${token}`
        },  
        // body: JSON.stringify(Data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
  
  export const ComplaintdatabyAllteachers = (id,token) => {
    // console.log(Data)
    return fetch(`https://api.pariksha247.com/api/complaint/teacher/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type" : 'application/json',
            Authorization:`Bearer ${token}`
        },  
        // body: JSON.stringify(Data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
  
  export const ComplaintdatabyAllStudents = (id,token) => {
    // console.log(Data)
    return fetch(`https://api.pariksha247.com/api/complaint/student/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type" : 'application/json',
            Authorization:`Bearer ${token}`
        },  
        // body: JSON.stringify(Data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
  
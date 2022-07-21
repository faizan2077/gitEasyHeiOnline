import axios from 'axios';
import fetch from 'isomorphic-fetch';



export const getexamtypebyid = async (id) => {
    try {
      const response = await fetch(`https://api.pariksha247.com/api/examtype/by-id/${id}`, {
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

  export const getstandardbyid = async (id) => {
    try {
      const response = await fetch(`https://api.pariksha247.com/api/standard/by-id/${id}`, {
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
  
  export const getCoursebyid = async (id) => {
    try {
      const response = await fetch(`https://api.pariksha247.com/api/course/readcourse/${id}`, {
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
  export const getSubjectbyid = async (id) => {
    try {
      const response = await fetch(`https://api.pariksha247.com/api/subject/get-by-id/${id}`, {
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
  export const getChapterbyid = async (id) => {
    try {
      const response = await fetch(`https://api.pariksha247.com/api/chapter/by-id/${id}`, {
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


  export const gettopicbyid = async (id) => {
    try {
      const response = await fetch(`https://api.pariksha247.com/api/topic/get-by-id/${id}`, {
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

import axios from 'axios';
import fetch from 'isomorphic-fetch';
import cookie from 'js-cookie';
import { savedata } from './savedata';


export const bulkupload = (formData) => {
    // console.log(Data)
    return fetch(`https://api.pariksha247.com/api/wordParser/`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
           
        },  
        body: formData  
    })
        .then(response => {
           
            return response.json();
        })
        .catch(err => console.log(err));
};


export const updatequestion = (Data) => {

  return fetch(`https://api.pariksha247.com/api/wordParser/updateQues`, {
      method: 'PUT',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
          
      },  
      body: JSON.stringify(Data)  
  })
      .then(response => {
         
          return response.json();
      })
      .catch(err => console.log(err));
};



export const uploadPdf = async (data) => {
    try {
      const response = await fetch(`https://api.pariksha247.com/api/awsroute/aws`, {
        method: "POST",
        headers: { },
        body: (data),
      });
      return response.json();
    } catch (error) {}
  };
  
  
import { useState } from 'react';
import React from 'react';

import "./Hero.scss";

import {  simpleforgetpassword } from '../../actions/admin';
import Navbar from '../Navbar/Navbar';


const ForgotPassword = () => {

    const [values, setValues] = useState({
        email: '',
        message: '',
        error: '',
        showForm: true
    });

    const { email, message, error, showForm } = values;


    const handleChange = name => e => {
        setValues({ ...values, message: '', error: '', [name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setValues({ ...values, message: '', error: '' });
        // forgotPassword({ email })
simpleforgetpassword({email}).then((data)=>{
  console.log(data.error)
    if(data.error){
        setValues({...values,error:data.error})
        alert(data.error)
    }
    setValues({...values,message:data.message})
})
    }
//         if(answer!=null){
//     setValues({...values,message:answer})
// }else{
//     if(errormssg!=null){
//         setValues({...values,error:errormssg})
//     }


    const showError = () => (error ? <div className="alert alert-danger">{error}</div> : '');
    const showMessage = () => (message ? <div className="alert alert-success">{message}</div> : '');

    const passwordForgotForm = () => (
        <form onSubmit={handleSubmit} className="">
            <div className="">
                <input
                    type="email"
                    onChange={handleChange('email')}
                    className="hero__inputIcon"
                    value={email}
                    placeholder="Type your email"
                    required
                />
            </div>
            <div>
                <button className="btn btn-primary">Send password reset link</button>
            </div>

        </form>
    );

    const loginForm = [
        {
          name: "email",
          type:"text",
          placeholder: "Email",
          image: "sign-up-hero-username.svg",
        },
        
      ];
    

    return (
        <React.Fragment>
            {/* <div className="container  pt-100 pb-145     text-align-center">
                <h2>Forgot password</h2>
                <hr />
                {showError()}
                {showMessage()}
                {showForm && passwordForgotForm()}
            </div> */}
              <div className="hero">
      <Navbar linksHidden={true} />
      <img
        src="/assets/images/sign-up-hero-bg.svg"
        alt="Hero Background"
        className="hero__background"
      />
      <div className="hero__wrapper">
        <div className="hero__headingWrapper">
          <h2 className="hero__heading">Forgot password</h2>
          <h5 className="hero__subHeading">
            Please fill in the details below to continue.
          </h5>
        </div>

        <form onSubmit={handleSubmit} className="hero__loginForm">        
        {/* {showError()} */}
                {/* {showMessage()} */}
          {loginForm.map((item) => (
            <div>
              <img
                src={`/assets/images/${item.image}`}
                alt="Input Icon"
                className="hero__inputIcon"
              />{" "}
              <input
                className="hero__formInput"
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
                onChange={handleChange(item.name)}
                value={email}
                required

              />
            </div>
          ))}
          <div>{message}</div>
          <div>{showError()}</div>
          <button className=" button2">Send password reset link</button>
          </form>
          {/* <Link to="/dashBoard"> */}
          {/* <form onSubmit={handleSubmit} className="hero__loginForm">
            
            <img
                src={`/assets/images/sign-up-hero-username.svg`}
                alt="Input Icon"
                className="hero__inputIcon"
              />
                <input
                    type="email"
                    onChange={handleChange('email')}
                    className="hero__inputIcon"
                    value={email}
                    placeholder="Type your email"
                    required
                />
            
            
            
        </form> */}
          {/* {showForm && passwordForgotForm()} */}
            {/* <button type="submit" className="hero__submitBtn">
              Login
            </button> */}
          {/* </Link> */}
        
      </div>
    </div>
        </React.Fragment>
    );
};



export default ForgotPassword;
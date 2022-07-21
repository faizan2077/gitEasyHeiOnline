import { useState } from 'react';
import React from 'react';

import "./Hero.scss";

import { forgotPassword,resetPassword ,simpleResetpassword} from '../../actions/admin';
import { useParams } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
const ResetPassword = () => {
   const {token}= useParams();
   console.log(token)
const [repass, setrepass] = useState("");
const [err, seterr] = useState("New Password and Confirm password should be same");
    const [values, setValues] = useState({
        newPassword: '',
        confirmPassword:'',
        message: '',
        error: '',
        showForm: true
    });

    const { newPassword, message,confirmPassword, error, showForm } = values;

    const handleChange = name => e => {
        setValues({ ...values, message: '', error: '', [name]: e.target.value });
    };

    const handlerepass =  e => {
        setrepass(e.target.value)
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(newPassword,confirmPassword)
        // setValues({ ...values, message: '', error: '' });
        const resetPasswordLink=token;
     if(newPassword==confirmPassword){   simpleResetpassword({newPassword,resetPasswordLink}).then((data)=>{
            if(data.error){
                setValues({...values,error:data.error})
            }
            setValues({...values,message:data.message})
        })}else{
            alert(err)
        }

   

       
        
    };

    const loginForm = [
        {
          name: "newPassword",
          type:"text",
          placeholder: "newPassword",
          image: "sign-up-hero-username.svg",
        },
        {
          name: "confirmPassword",
          type:"text",
          placeholder: "Confirm Password",
          image: "sign-up-hero-username.svg",
        },
        
      ];
    

    const showError = () => (error ? <div className="alert alert-danger">{error}</div> : '');
    const showMessage = () => (message ? <div className="alert alert-success">{message}</div> : '');

    const passwordForgotForm = () => (
        <form onSubmit={handleSubmit} className="container">
            <div className="form-group pt-5 pb-4">
                <label>New Password</label>
                <input
                    type="password"
                    onChange={handleChange('newPassword')}
                    className="form-control"
                    value={newPassword}
                    placeholder="Type your Password"
                    required
                />
                <br>
                </br>
                <label>Confirm-Password</label>
                <input
                    type="password"
                    onChange={handlerepass}
                    className="form-control"
                    value={repass}
                    placeholder="Type your Password"
                    required
                />
            </div>
            <div>
                <button className="btn btn-primary">Confirm</button>
            </div>
        </form>
    );

    return (
        <React.Fragment>
            <div className="hero">
      <Navbar linksHidden={true} />
      <img
        src="/assets/images/sign-up-hero-bg.svg"
        alt="Hero Background"
        className="hero__background"
      />
      <div className="hero__wrapper">
        <div className="hero__headingWrapper">
          <h2 className="hero__heading">Reset password</h2>
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
                // value={item.name}
                required

              />
            </div>
          ))}
          <div className=''>{newPassword!==confirmPassword?err:""}</div>
          <div>{showError()}</div>
          <button className=" button2">Reset Password</button>
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
            {/* <div className="container   pt-100 pb-145     text-align-center">
                <h2 className='center'>Reset  password</h2>
                <hr />
                {showError()}
                {showMessage()}
                {showForm && passwordForgotForm()}
            </div> */}
        </React.Fragment>
    );
};


export default ResetPassword;
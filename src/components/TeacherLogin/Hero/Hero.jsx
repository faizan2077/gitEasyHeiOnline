import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./Hero.scss";
import { simplelogin } from "../../../actions/admin";

const Hero = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["user"]);
  const [initvals, setinitvals] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
  if(localStorage.getItem("user")){
    navigate("/teacher/dashboard")
  }
  }, []);

  const { email, password } = initvals;
  const loginForm = [
    {
      name: "Username",
      placeholder: "Email/Full name",
      image: "sign-up-hero-username.svg",
    },
    {
      name: "Password",
      placeholder: "Password",
      image: "teacher-login-password-icon.svg",
    },
  ];

  const handleChange = (name) => (e) => {
    console.log(e.target.value);
    setinitvals({
      ...initvals,
      [name]: e.target.value,
    });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(initvals);
    simplelogin({ email, password }).then((data) => {
      console.log(data);
      if (data.message) {
      return  alert(data.message);
      }
      const savedata = {
        token: data.fulltoken,
        user: data.foundAdmin,
      };

      setCookie("token", savedata.token, { path: "/user/" });
      localStorage.setItem("user", JSON.stringify(savedata.user));
      localStorage.setItem("token", JSON.stringify(savedata.token));
      navigate('/teacher/dashboard')
    });
  };

  return (
    <div className="hero">
      <img
        src="/assets/images/teacher-login-bg-bottom.svg"
        alt="Hero Background"
        className="hero__background--bottom"
        style={{ width: "900px" }}
      />
      <img
        src="/assets/images/teacher-login-bg-top.svg"
        alt="Hero Background"
        className="hero__background--top"
        style={{ width: "600px" }}
      />
      <div className="hero__header">
        <img
          src="/assets/images/brand-logo.png"
          alt="Hero Brand"
          className="hero__header__brandLogo"
        />
      </div>
      <div className="hero__body">
        <h3 className="hero__body__title">Login</h3>
        <div className="hero__body__greeting">
          <h2 className="hero__body__greeting__title">Hello,</h2>
          <h5 className="hero__body__greeting__subtitle">
            Login to your Account!
          </h5>
        </div>
        <form className="hero__body__loginForm" onSubmit={handleSubmit}>
          {loginForm.map((item, index) => (
            <div className="hero__body__loginForm__item" key={index}>
              <img
                src={`/assets/images/${item.image}`}
                alt="Input Icon"
                className="hero__body__loginForm__item__inputIcon"
              />{" "}
              <input
                className="hero__body__loginForm__item__formInput"
                type={
                  item.name.toLowerCase() === "password" ? "password" : "text"
                }
                onChange={handleChange(
                  `${
                    item.name.toLowerCase() === "password"
                      ? "password"
                      : "email"
                  }`
                )}
                name={item.name.toLowerCase()}
                placeholder={item.placeholder}
                autoFocus={index === 0}
                required
              />
            </div>
          ))}
          <div className="hero__body__loginForm__modeChange">
            <Link to={"/forgetpassword"}>Forgot Password?</Link>
          </div>
          <button className="hero__body__submitBtn">Login</button>
        </form>
        {/* <Link to="/teacher/dashboard" className="hero__body__submitBtn"> */}
        {/* Login */}
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Hero;

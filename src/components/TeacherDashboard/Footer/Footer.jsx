import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  const footerLinks = [
    { name: "Instagram", link: "https://www.instagram.com/easyhai_online/" },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/company/easy-hai-online/",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/Easyhaionline-103642968859578",
    },
    { name: "Twitter", link: "https://twitter.com/easyhaionline" },
  ];

  return (
    <div className="footer">
      <div className="footer__left">
        Copyright @ 2022&nbsp;{" "}
        <span>
          <a target="_blank" href="https://easyhaionline.com/">
          easyhaionline
          </a>
        </span>
      </div>
      <ul className="footer__right">
        {footerLinks.map((item,index) => (
          <li className="footer__right__link" key={index}>
            <a target="_blank" href={item.link}>
              <img
                src={`/assets/images/dashboard-footer-${item.name.toLowerCase()}.svg`}
                alt={item.name}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import "./Navbar.scss";

const Navbar = ({ linksHidden = false }) => {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <img className="brand_logo" src="./assets/images/brand-logo.png" alt="easyhaionline" />
      </div>
      {!linksHidden && (
        <div className="navbar__linkWrapper">
          <ul className="navbar__links">
            <li className="navbar__menuItem">About Us</li>
            <li className="navbar__menuItem">
              Courses <KeyboardArrowDownIcon />
            </li>
            <li className="navbar__menuItem">Result</li>
            <li className="navbar__menuItem">
              More <KeyboardArrowDownIcon />
            </li>
          </ul>
          <div className="navbar__actionButtons">
            <Link to="/login">
              <button>Log In</button>
            </Link>
            <button>Sign up</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

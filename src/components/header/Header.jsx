import React from "react";
import logo from "../../assets/logo.svg";
import "./HeaderStyles.css";

const Header = () => {
  return (
    <div className="app-header">
      <a className="app-header-link" href="/">
        <img className="app-header-img" alt="logo" src={logo} />
      </a>
    </div>
  );
};

export default Header;

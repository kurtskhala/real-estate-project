import React from "react";
import "./NavBedroomsStyles.css";

const NavBedrooms = () => {
  return (
    <div className="app-home-navbar-nav-dropdown">
      <h3 className="app-home-navbar-nav-dropdown-header">
        საძინებლების რაოდენობა
      </h3>
      <div className="app-home-navbar-nav-dropdown-content">
        <input type="number"/>
      </div>
      <div className="app-home-navbar-nav-dropdown-button-container">
        <button className="app-home-navbar-nav-dropdown-button">არჩევა</button>
      </div>
    </div>
  );
};

export default NavBedrooms;

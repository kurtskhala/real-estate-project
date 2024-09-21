import React, { useState } from "react";
import "./NavBarStyles.css";
import arrowdown from "../../assets/arrowdown.svg";
import NavRegion from "../navRegion/NavRegion";
import NavPrice from "../navPrice/NavPrice";
import NavArea from "../navArea/NavArea";
import NavBedrooms from "../navBedrooms/NavBedrooms";
import { Link } from "react-router-dom";
import routes from "../../constants/routes";

const NavBar = ({setToggleModal}) => {
  const [openDropdown, setOpenDropdown] = useState("none");
  const toggleDropdown = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };
  return (
    <div className="app-home-navbar">
      <nav className="app-home-navbar-nav">
        <div className="app-home-navbar-nav-item-container">
          <span
            className="app-home-navbar-nav-item"
            onClick={() => toggleDropdown("region")}
          >
            <span className="app-home-navbar-nav-item-text">რეგიონი</span>
            <img
              className="app-home-navbar-nav-item-icon"
              alt="arrow"
              src={arrowdown}
            />
          </span>
          {openDropdown === "region" && <NavRegion />}
        </div>
        <div className="app-home-navbar-nav-item-container">
          <span
            className="app-home-navbar-nav-item"
            onClick={() => toggleDropdown("price")}
          >
            <span className="app-home-navbar-nav-item-text">
              საფასო კატეგორია
            </span>
            <img
              className="app-home-navbar-nav-item-icon"
              alt="arrow"
              src={arrowdown}
            />
          </span>

          {openDropdown === "price" && <NavPrice />}
        </div>
        <div className="app-home-navbar-nav-item-container">
          <span className="app-home-navbar-nav-item">
            <span
              className="app-home-navbar-nav-item-text"
              onClick={() => toggleDropdown("area")}
            >
              ფართობი
            </span>
            <img
              className="app-home-navbar-nav-item-icon"
              alt="arrow"
              src={arrowdown}
            />
          </span>
          {openDropdown === "area" && <NavArea />}
        </div>

        <div className="app-home-navbar-nav-item-container">
          <span
            className="app-home-navbar-nav-item"
            onClick={() => toggleDropdown("bedrooms")}
          >
            <span className="app-home-navbar-nav-item-text">
              საძინებლების რაოდენობა
            </span>
            <img
              className="app-home-navbar-nav-item-icon"
              alt="arrow"
              src={arrowdown}
            />
          </span>
          {openDropdown === "bedrooms" && <NavBedrooms />}
        </div>
      </nav>

      <div className="app-home-navbar-buttons">
        <Link to={routes.addListing}>
        <button className="app-home-navbar-button app-home-navbar-button-listing">
          + ლისტინგის დამატება
        </button>
        </Link>
        <button onClick={() => setToggleModal((prev) => !prev)} className="app-home-navbar-button app-home-navbar-button-agent">
          + აგენტის დამატება
        </button>
      </div>
    </div>
  );
};

export default NavBar;

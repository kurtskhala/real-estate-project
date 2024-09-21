import React, { useState } from "react";
import "./NavPriceStyles.css";

const NavPrice = () => {
  const [selectedMinPrice, setSelectedMinPrice] = useState(null);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="app-home-navbar-nav-dropdown">
      <h3 className="app-home-navbar-nav-dropdown-header">ფასის მიხედვით</h3>
      <div className="app-home-navbar-nav-dropdown-content">
        <form onSubmit={handleSubmit}>
          <div className="date-inputs">
            <input
              type="number"
              value={selectedMinPrice}
              onChange={(e) => setSelectedMinPrice(e.target.value)}
              placeholder="დან"
            />
            <input
              type="number"
              value={selectedMaxPrice}
              onChange={(e) => setSelectedMaxPrice(e.target.value)}
              placeholder="მდე"
            />
          </div>

          <div className="price-selection">
            <div className="price-column">
              <h4>მინ. ფასი</h4>
              {["50,000", "100,000", "150,000", "200,000", "300,000"].map(
                (price, index) => (
                  <button
                    type="button"
                    key={index}
                    className={`price-btn ${
                      selectedMinPrice === price ? "selected" : ""
                    }`}
                    onClick={() => setSelectedMinPrice(price)}
                  >
                    {price} ლ
                  </button>
                )
              )}
            </div>

            <div className="price-column">
              <h4>მაქს. ფასი</h4>
              {["50,000", "100,000", "150,000", "200,000", "300,000"].map(
                (price, index) => (
                  <button
                    type="button"
                    key={index}
                    className={`price-btn ${
                      selectedMaxPrice === price ? "selected" : ""
                    }`}
                    onClick={() => setSelectedMaxPrice(price)}
                  >
                    {price} ლ
                  </button>
                )
              )}
            </div>
          </div>

          <button type="submit" className="submit-btn">
            არჩევა
          </button>
        </form>
      </div>
      <div className="app-home-navbar-nav-dropdown-button-container">
        <button className="app-home-navbar-nav-dropdown-button">არჩევა</button>
      </div>
    </div>
  );
};

export default NavPrice;

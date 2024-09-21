import React, { useState } from "react";
import "./NavAreaStyles.css";

const NavArea = () => {
  const [minArea, setMinArea] = useState("");
  const [maxArea, setMaxArea] = useState("");
  const [selectedMinValue, setSelectedMinValue] = useState(null);
  const [selectedMaxValue, setSelectedMaxValue] = useState(null);

  const areaOptions = [10000, 20000, 30000, 50000];

  const handleMinCheckboxChange = (value) => {
    setSelectedMinValue(value);
    setMinArea(value);
  };

  const handleMaxCheckboxChange = (value) => {
    setSelectedMaxValue(value);
    if (parseFloat(value) >= parseFloat(minArea)) {
      setMaxArea(value);
    }
  };

  const handleMaxAreaChange = (e) => {
    const value = e.target.value;
    if (parseFloat(value) >= parseFloat(minArea) || minArea === "") {
      setMaxArea(value);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure maxArea is greater than or equal to minArea
    if (parseFloat(maxArea) < parseFloat(minArea)) {
      alert("Max area should be greater than or equal to Min area.");
      return;
    }

    const formData = {
      minArea,
      maxArea,
    };
    console.log("Form submitted:", formData);
  };

  return (
    <div className="app-home-navbar-nav-dropdown">
      <h3 className="app-home-navbar-nav-dropdown-header">ფართობის მიხედვით</h3>
      <div className="app-home-navbar-nav-dropdown-content">
        <form
          onSubmit={handleSubmit}
        >
          <div>
            <label>
              Min Area (მ²)
              <input
                type="number"
                value={minArea}
                onChange={(e) => setMinArea(e.target.value)}
                disabled={selectedMinValue !== null}
                required
              />
            </label>
          </div>
          <div>
            <h4>Select Min Area</h4>
            {areaOptions.map((value) => (
              <label key={value} style={{ display: "block" }}>
                <input
                  type="checkbox"
                  checked={selectedMinValue === value}
                  onChange={() => handleMinCheckboxChange(value)}
                />
                {value.toLocaleString()} მ²
              </label>
            ))}
          </div>
          <div>
            <label>
              Max Area (მ²)
              <input
                type="number"
                value={maxArea}
                onChange={handleMaxAreaChange}
                disabled={selectedMaxValue !== null}
                required
              />
            </label>
          </div>
          <div>
            <h4>Select Max Area</h4>
            {areaOptions.map((value) => (
              <label key={value} style={{ display: "block" }}>
                <input
                  type="checkbox"
                  checked={selectedMaxValue === value}
                  onChange={() => handleMaxCheckboxChange(value)}
                />
                {value.toLocaleString()} მ²
              </label>
            ))}
          </div>

          <button type="submit" className="apply-btn">არჩევა</button>
        </form>
      </div>
    </div>
  );
};

export default NavArea;

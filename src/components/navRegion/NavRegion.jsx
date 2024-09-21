import React, { useState } from "react";
import "./NavRegionStyles.css";

const NavRegion = () => {
  const [selectedRegions, setSelectedRegions] = useState({
    kartli: false,
    kakheti: false,
    imereti: false,
    samegrelo: false,
    guria: false,
    racha: false,
    lechkhumi: false,
    samtskhe: false,
    adjara: false,
    svaneti: false,
    mtskheta: false,
    tbilisi: false,
  });

  const handleCheckboxChange = (e) => {
    setSelectedRegions({
      ...selectedRegions,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="app-home-navbar-nav-dropdown">
      <h3 className="app-home-navbar-nav-dropdown-header">რეგიონის მიხედვით</h3>
      <div className="app-home-navbar-nav-dropdown-content">
        <form onSubmit={handleSubmit}>
          <div className="checkbox-grid">
            {/* First Column */}
            <div className="checkbox-column">
              <label>
                <input
                  type="checkbox"
                  name="kartli"
                  checked={selectedRegions.kartli}
                  onChange={handleCheckboxChange}
                />
                ქართლი
              </label>
              <label>
                <input
                  type="checkbox"
                  name="kakheti"
                  checked={selectedRegions.kakheti}
                  onChange={handleCheckboxChange}
                />
                კახეთი
              </label>
              <label>
                <input
                  type="checkbox"
                  name="imereti"
                  checked={selectedRegions.imereti}
                  onChange={handleCheckboxChange}
                />
                იმერეთი
              </label>
              <label>
                <input
                  type="checkbox"
                  name="samegrelo"
                  checked={selectedRegions.samegrelo}
                  onChange={handleCheckboxChange}
                />
                სამეგრელო
              </label>
            </div>

            {/* Second Column */}
            <div className="checkbox-column">
              <label>
                <input
                  type="checkbox"
                  name="guria"
                  checked={selectedRegions.guria}
                  onChange={handleCheckboxChange}
                />
                გურია
              </label>
              <label>
                <input
                  type="checkbox"
                  name="racha"
                  checked={selectedRegions.racha}
                  onChange={handleCheckboxChange}
                />
                რაჭა
              </label>
              <label>
                <input
                  type="checkbox"
                  name="lechkhumi"
                  checked={selectedRegions.lechkhumi}
                  onChange={handleCheckboxChange}
                />
                ლეჩხუმი
              </label>
              <label>
                <input
                  type="checkbox"
                  name="samtskhe"
                  checked={selectedRegions.samtskhe}
                  onChange={handleCheckboxChange}
                />
                სამცხე-ჯავახეთი
              </label>
            </div>

            {/* Third Column */}
            <div className="checkbox-column">
              <label>
                <input
                  type="checkbox"
                  name="adjara"
                  checked={selectedRegions.adjara}
                  onChange={handleCheckboxChange}
                />
                აჭარა
              </label>
              <label>
                <input
                  type="checkbox"
                  name="svaneti"
                  checked={selectedRegions.svaneti}
                  onChange={handleCheckboxChange}
                />
                სვანეთი
              </label>
              <label>
                <input
                  type="checkbox"
                  name="mtskheta"
                  checked={selectedRegions.mtskheta}
                  onChange={handleCheckboxChange}
                />
                მცხეთა-მთიანეთი
              </label>
              <label>
                <input
                  type="checkbox"
                  name="tbilisi"
                  checked={selectedRegions.tbilisi}
                  onChange={handleCheckboxChange}
                />
                თბილისი
              </label>
            </div>
          </div>
          <button type="submit" className="apply-btn">
            არჩევა
          </button>
        </form>
      </div>
    </div>
  );
};

export default NavRegion;

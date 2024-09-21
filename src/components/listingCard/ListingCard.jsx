import React from "react";
import "./ListingCardStyles.css";
import location from "../../assets/location.svg";
import bed from "../../assets/bed.svg";
import areaLogo from "../../assets/area.svg";
import postalcode from "../../assets/postalcode.svg";
import { Link } from "react-router-dom";

const ListingCard = ({ property }) => {
  
  const {
    id,
    address,
    image,
    description,
    zip_code,
    price,
    area,
    bedrooms,
    is_rental,
  } = property;

  return (
    <Link to={`/listing/${id}`}>
      <div className="app-home-listing-card">
        <div className="app-home-listing-card-image">
          <img src={image} alt={description} />
          <span className="app-home-listing-card-type">
            {is_rental ? "ქირავდება" : "იყიდება"}
          </span>
        </div>
        <div className="app-home-listing-card-info">
          <h3 className="app-home-listing-card-price">{price} ₾</h3>
          <p className="app-home-listing-card-address">
            <img alt="icon" src={location} />
            <span>{address}</span>
          </p>
          <div className="app-home-listing-card-details">
            <span>
              <img alt="icon" src={bed} />
              <span>{bedrooms}</span>
            </span>
            <span>
              <img alt="icon" src={areaLogo} />
              <span>{area} მ²</span>
            </span>
            <span>
              <img alt="icon" src={postalcode} />
              <span>{zip_code}</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;

import React, { useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";
import location from "../../assets/location.svg";
import bed from "../../assets/bed.svg";
import areaLogo from "../../assets/area.svg";
import postalcode from "../../assets/postalcode.svg";
import email from "../../assets/email.svg";
import phone from "../../assets/phone.svg";
import arrowleft from "../../assets/arrowleft.svg";
import arrowright from "../../assets/arrowright.svg";
import "./ListingStyles.css";
import ListingCard from "../../components/listingCard/ListingCard";
import routes from "../../constants/routes";
import { deleteListing } from "../../api/deleteListing";

const Listing = () => {
  const data = useParams();
  const [listing] = useFetchData(`real-estates/${data.id}`);
  const [listings] = useFetchData("real-estates");

  const carouselRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (scrollOffset) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  };

  const handleDelete = () => {
    deleteListing(listing.id);
    navigate("/");
  };

  return (
    <div className="app-listing-detail-page">
      <Link className="app-listing-backbutton" to={routes.home}>
        <span>
          <img src={arrowleft} alt="arrow" />
        </span>
      </Link>
      <div className="app-listing-main-info">
        <div className="app-listing-image">
          <img src={listing.image} alt={listing.description} />
        </div>
        <div className="app-listing-info">
          <h1 className="app-listing-price">{listing.price} ₾</h1>
          <div className="app-listing-specs">
            <span>
              <img alt="icon" src={location} />
              <span>{listing.address}</span>
            </span>
            <span>
              <img alt="icon" src={bed} />
              <span>{listing.bedrooms}</span>
            </span>
            <span>
              <img alt="icon" src={areaLogo} />
              <span>{listing.area} მ²</span>
            </span>
            <span>
              <img alt="icon" src={postalcode} />
              <span>{listing.zip_code}</span>
            </span>
          </div>
          <p className="app-listing-description">{listing.description}</p>

          {listing.agent && (
            <div className="app-listing-agent-card">
              <div className="app-listing-agent-card-top">
                <div className="app-listing-agent-card-avatar">
                  <img src={listing.agent.avatar} alt={listing.agent.name} />
                </div>
                <div>
                  <h3 className="app-listing-agent-card-name">{`${listing.agent.name} ${listing.agent.surname}`}</h3>
                  <p className="app-listing-agent-card-title">აგენტი</p>
                </div>
              </div>
              <div className="app-listing-agent-card-contact-info">
                <span className="app-listing-agent-card-email">
                  <img alt="icon" src={email} />
                  <span>{listing.agent.email}</span>
                </span>
                <span className="app-listing-agent-card-phone">
                  <img alt="icon" src={phone} />
                  <span>{listing.agent.phone}</span>
                </span>
              </div>
            </div>
          )}
          <button onClick={handleDelete} className="app-listing-delete-button">
            ლისტინგის წაშლა
          </button>
        </div>
      </div>
      <div className="app-listing-similar-properties">
        <h2>ბინები მსგავს ლოკაციაზე</h2>
        <div className="property-carousel">
          <button className="carousel-button left" onClick={() => scroll(-300)}>
            <img alt="arrow" src={arrowleft} />
          </button>
          <div className="carousel-content" ref={carouselRef}>
            {listings.map((prop, index) => (
              <div key={index} className="carousel-item">
                <ListingCard property={prop} />
              </div>
            ))}
          </div>
          <button className="carousel-button right" onClick={() => scroll(300)}>
            <img alt="arrow" src={arrowright} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Listing;

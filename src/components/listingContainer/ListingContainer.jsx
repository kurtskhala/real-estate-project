import React from "react";
import { useFetchData } from "../../hooks/useFetchData";
import ListingCard from "../listingCard/ListingCard";
import "./ListingContainerStyles.css";

const ListingContainer = () => {
  const [data] = useFetchData("real-estates");

  return (
    <div className="app-home-listing-container">
      {data?.map((property, index) => (
        <ListingCard key={index} property={property} />
      ))}
    </div>
  );
};

export default ListingContainer;

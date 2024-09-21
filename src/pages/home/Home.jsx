import React, { useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import "./HomeStyles.css";
import AddAgentForm from "../../components/addAgentForm/AddAgentForm";
import ListingContainer from "../../components/listingContainer/ListingContainer";

const Home = () => {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <div className="app-home">
      <NavBar setToggleModal={setToggleModal} />
      {toggleModal && <AddAgentForm setToggleModal={setToggleModal} />}
      <ListingContainer />
    </div>
  );
};

export default Home;

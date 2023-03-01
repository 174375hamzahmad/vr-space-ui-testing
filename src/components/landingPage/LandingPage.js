import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./landingPage.css";
import Navbar from "./LP-components/navbar";
import Carousell from "./LP-components/Carousel";
import FeatureButton from "./LP-components/FeatureButton";
import CardGrid from "./LP-components/CardGrid";
import SocialMediaHandles from "./LP-components/SocialMediaHandles";
import Footer from "./LP-components/Footer";

const LandingPage = () => {
  return (
    <div className="container-fluid container-bg-color">
      <Navbar />
      <Carousell />
      <FeatureButton />
      <CardGrid />
      <SocialMediaHandles />
      <Footer />
    </div>
  );
};

export default LandingPage;

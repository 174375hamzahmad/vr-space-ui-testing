import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import SignInModal from "../../login/Modal";
const Carousell = () => {
  const [showSignInModal, setShowSignInModal] = useState(false);

  const handleShowSignInModal = () => {
    setShowSignInModal(true);
  };

  const handleHideSignInModal = () => {
    setShowSignInModal(false);
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/1200/500"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>
              <span className="text-black white-text-carousel">
                Explore Together in{" "}
              </span>
              <span className="text-black purple-text-carousel">Metaverse</span>
            </h2>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleShowSignInModal}
            >
              Sign In
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/1200/501"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>
              <span className="text-black white-text-carousel">
                Explore Together in{" "}
              </span>
              <span className="text-black purple-text-carousel">Metaverse</span>
            </h2>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleShowSignInModal}
            >
              Sign In
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/1200/502"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>
              <span className="text-black white-text-carousel">
                Explore Together in{" "}
              </span>
              <span className="text-black purple-text-carousel">Metaverse</span>
            </h2>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleShowSignInModal}
            >
              Sign In
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <SignInModal show={showSignInModal} onHide={handleHideSignInModal} />
    </>
  );
};

export default Carousell;

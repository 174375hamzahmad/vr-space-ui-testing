import React from "react";

const FeatureButton = () => {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-sm-5">
            <h2 style={{ marginTop: "10px" }}>
              <span className="text-black purple-text-carousel">Featured </span>
              <span className="text-black white-text-carousel">Spaces</span>
            </h2>
          </div>
          <div className="col-sm-4"></div>

          <div
            className="col-sm-3 btn-group"
            role="group"
            aria-label="Dual button"
          >
            <button
              type="button"
              className="btn btn-primary btn-primary-custom"
            >
              Featured Spaces
            </button>
            <button
              style={{ width: "154px" }}
              type="button"
              className="btn btn-secondary btn-secondary-custom"
            >
              All Spaces
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureButton;

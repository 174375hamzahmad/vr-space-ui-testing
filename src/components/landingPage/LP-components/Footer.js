import React from "react";

const Footer = () => {
  return (
    <>
      <footer style={{ minHeight: "250px" }}>
        <div className="row">
          <div className="col-sm-12 text-center custom-footer">
            <h3>VR-Space</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 custom-footer">
            <p>© 2023 Babylon | Systems limited</p>
          </div>
          <div className="col-sm-4"></div>
          <div className="col-sm-4 custom-footer">
            <p>
              Please see our TERMS OF USE and PRIVACY NOTICE to learn more about
              how we do legal.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

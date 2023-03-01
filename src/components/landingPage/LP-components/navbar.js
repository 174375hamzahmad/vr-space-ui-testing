import React from "react";
import signInImage from "../../../icons/sign-in.png";
const Navbar = () => {
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-custom navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            VR-Space
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  menu
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  menu
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{
                    fontWeight: "700",
                    display: "inline-block",
                    verticalAlign: "middle",
                  }}
                  className="nav-link"
                  href="#"
                >
                  Sign In
                </a>
                <img
                  style={{ display: "inline-block", verticalAlign: "middle" }}
                  src={signInImage}
                  width="15px"
                  height="15px"
                  alt="Icon description"
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

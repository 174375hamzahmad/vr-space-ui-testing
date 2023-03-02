import React, { useState } from "react";
import profilePic from "../../images/prof_pic.png";
import blakePic from "../../images/blake.jpeg";
import captainAmerica from "../../images/captAmerica.jpeg";
import "./SignUp.css";
import { BiFemale, BiMale } from "react-icons/bi";
import { BsUpload } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";

function SignUp() {
  const locationHistory = useLocation(); // get router history

  const [profilePicture, setProfilePicture] = useState("");
  const [email, setEmail] = useState(
    locationHistory.state.signUpGoogleData.email
  );
  const [selectedGender, setSelectedGender] = useState(null);

  const handleProfilePictureChange = (event) => {
    setProfilePicture(URL.createObjectURL(event.target.files[0]));
    console.log(profilePicture);
  };

  const updatePicture = (newPicture) => {
    setProfilePicture(newPicture);
  };

  const handleGenderClick = (gender) => {
    setSelectedGender(gender);
    console.log(gender);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Profile Picture:", profilePicture);
  };
  return (
    <div className="container-fluid container-bg-color">
      <div className="row">
        <div className="col-sm-12 text-center custom-h1-text">
          <h1>Welcome to VR-Space</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <form
          className="form-color "
          style={{ width: "780px", height: "477px", padding: "0px !important" }}
          onSubmit={handleSubmit}
        >
          <div className="row mb-3">
            <div className="col-sm-3">
              <label htmlFor="profile-picture-input">
                <div
                  className="rounded-circle overflow-hidden border "
                  style={{
                    width: "120px",
                    height: "120px",
                    marginTop: "20px",
                    backgroundColor: "var(--white)",
                    cursor: "pointer",
                  }}
                >
                  {profilePicture ? (
                    <img
                      src={profilePicture}
                      alt=""
                      className="w-100 h-100 object-fit-cover"
                    />
                  ) : (
                    <div className="d-flex justify-content-center align-items-center bg-light rounded-circle p-3 text-center">
                      <BsUpload size={46} className="text-primary" />
                    </div>
                  )}
                </div>
              </label>
              <input
                id="profile-picture-input"
                type="file"
                accept=".jpg,.png,.jpeg"
                onChange={handleProfilePictureChange}
                className="d-none"
              />
            </div>
            <div className="col-sm-4">
              <div className="mb-3 mt-4">
                <label style={{ color: "var(--white)" }}>
                  Pick profile image
                </label>
                <div
                  className="custom-alignment-suggestions"
                  style={{ marginTop: "10px" }}
                >
                  <div
                    className="rounded-circle overflow-hidden  "
                    style={{ width: "60px", height: "60px" }}
                  >
                    <img
                      src={blakePic}
                      alt="blk"
                      className="w-100 h-100 object-fit-cover"
                      onClick={() => updatePicture(blakePic)}
                    />
                  </div>
                  <div
                    className="rounded-circle overflow-hidden  "
                    style={{ width: "60px", height: "60px" }}
                  >
                    <img
                      src={captainAmerica}
                      alt="CA"
                      className="w-100 h-100 object-fit-cover"
                      onClick={() => updatePicture(captainAmerica)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label
                style={{ color: "var(--white)" }}
                htmlFor="name"
                className="form-label"
              >
                Email:
                <span className="required">*</span>
              </label>
              <input
                style={{ width: "360px", height: "64px", borderRadius: "8px" }}
                type="text"
                className="form-control"
                id="email"
                value={email}
                placeholder="ahmad.hamza@systemsltd.com"
                onChange={handleEmail}
              />
            </div>
            <div className="col-md-6">
              <label
                style={{ color: "var(--white)" }}
                htmlFor="displayName"
                className="form-label"
              >
                Display Name:
                <span className="required">*</span>
              </label>
              <input
                style={{ width: "360px", height: "64px", borderRadius: "8px" }}
                type="text"
                className="form-control"
                id="displayName"
                placeholder="Hamza"
              />
            </div>
          </div>
          <div className="row">
            <label style={{ color: "white" }}>
              Select your gender:<span className="required">*</span>
            </label>
            <div className="d-flex mt-2">
              <div onClick={() => handleGenderClick("male")}>
                <BiMale
                  color={selectedGender === "male" ? "#68A9C2" : "#D2D2D2"}
                  size={70}
                />
                <label style={{ color: "var(--white)" }}>Male</label>
              </div>
              <div onClick={() => handleGenderClick("female")}>
                <BiFemale
                  color={selectedGender === "female" ? "pink" : "#D2D2D2"}
                  size={70}
                />
                <label style={{ color: "var(--white)" }}>Female</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-end">
              <button
                style={{
                  backgroundColor: "var(--buttons)",
                  color: "var(--text)",
                  borderRadius: "64px",
                  borderColor: "var(--buttons)",
                  fontWeight: "bold",
                  width: "130px",
                  height: "48px",
                }}
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

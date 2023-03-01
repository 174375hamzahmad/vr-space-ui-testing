import React, { useState } from "react";
import profilePic from "../../images/prof_pic.png";
import blakePic from "../../images/blake.jpeg";
import captainAmerica from "../../images/captAmerica.jpeg";
import "./SignUp.css";
import { BiFemale, BiMale } from "react-icons/bi";

function SignUp() {
  const [profilePicture, setProfilePicture] = useState(profilePic);
  //const [name, setName] = useState("");
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
  // const handleNameChange = (event) => {
  //   setName(event.target.value);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Profile Picture:", profilePicture);
  };
  return (
    <div className="container-fluid container-bg-color">
      <div className="row">
        <div className="col-sm-12 text-center custom-h1-text">
          <h1>VR-Space</h1>
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
                  className="rounded-circle overflow-hidden "
                  style={{
                    width: "120px",
                    height: "120px",
                    marginTop: "20px",
                  }}
                >
                  <img
                    src={profilePicture}
                    alt="pp"
                    className="w-100 h-100 object-fit-cover"
                  />
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
                <label style={{ color: "white" }}>Pick profile image</label>
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
                style={{ color: "white" }}
                htmlFor="name"
                className="form-label"
              >
                Enter Name:
                <span className="required">*</span>
              </label>
              <input
                style={{ width: "360px", height: "64px", borderRadius: "8px" }}
                type="text"
                className="form-control"
                id="name"
                placeholder="ahmad.hamza@systemsltd.com"
              />
            </div>
            <div className="col-md-6">
              <label
                style={{ color: "white" }}
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
          <div className="row mb-3">
            <label style={{ color: "white" }}>
              Select your gender:<span className="required">*</span>
            </label>
            <div className="d-flex">
              <div onClick={() => handleGenderClick("male")}>
                <BiMale
                  color={selectedGender === "male" ? "#68A9C2" : "#D2D2D2"}
                  size={70}
                />
                <label style={{ color: "white" }}>Male</label>
              </div>
              <div onClick={() => handleGenderClick("female")}>
                <BiFemale
                  color={selectedGender === "female" ? "pink" : "#D2D2D2"}
                  size={70}
                />
                <label style={{ color: "white" }}>Female</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-end">
              <button
                style={{
                  backgroundColor: "#06EFB6",
                  color: "#175855",
                  borderRadius: "64px",
                  borderColor: "#06EFB6",
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

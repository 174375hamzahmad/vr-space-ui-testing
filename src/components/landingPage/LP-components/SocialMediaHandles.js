import React from "react";
import twitter from "../../../images/twitter.png";
import discord from "../../../images/discord.png";
import fb from "../../../images/fb.png";
import telegram from "../../../images/telegram.png";
import insta from "../../../images/insta.png";

const SocialMediaHandles = () => {
  return (
    <>
      <div className="container container-height-color mt-5">
        <div className="row">
          <div className="col-sm-12 text-center custom-h1-text">
            <h1>Join The Babylon Community</h1>
          </div>
        </div>
        <div className="row justify-content-center gy-3 mt-3">
          <div className="col-sm-2">
            <img src={twitter} className="img-fluid" />
          </div>
          <div className="col-sm-2">
            <img src={discord} className="img-fluid" />
          </div>
          <div className="col-sm-2">
            <img src={fb} className="img-fluid" />
          </div>
          <div className="col-sm-2">
            <img src={telegram} className="img-fluid" />
          </div>
          <div className="col-sm-2 mb-2">
            <img src={insta} className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMediaHandles;

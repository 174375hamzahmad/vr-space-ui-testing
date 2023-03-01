import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
const GoogleOauth = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    document.head.appendChild(script);

    const onGsiLoad = () => {
      if (
        window.google &&
        window.google.accounts &&
        window.google.accounts.id
      ) {
        window.google.accounts.id.initialize({
          client_id:
            "1000455773534-splesvkav6nhnsqh465a2t5j1cmib7sp.apps.googleusercontent.com",
          callback: onCredentialResponse,
        });
        window.google.accounts.id.renderButton(
          document.getElementById("buttonDiv"),
          {
            size: "large",
            type: "standard",
            width: "250",
            theme: "filled_blue",
            shape: "rectangular",
          }
        );
      } else {
        console.error("Google Identity Services not loaded.");
      }
    };

    const onCredentialResponse = (credential) => {
      // handle the credential response here
      console.log(credential);
    };

    script.onload = onGsiLoad;

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="buttonDiv"></div>;
};

export default GoogleOauth;

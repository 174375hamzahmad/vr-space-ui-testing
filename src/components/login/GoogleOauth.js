import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
const GoogleOauth = () => {
  const { handleGoogle, loading, error } = useFetch(
    "http://localhost:5152/login"
  );

  const navigate = useNavigate();
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

    const onCredentialResponse = (res) => {
      // handle the credential response here
      const data = jwt_decode(res.credential);
      if (res.credential) {
        navigate("/signUp", {
          state: {
            signUpGoogleData: data,
          },
        });
      }
    };

    script.onload = onGsiLoad;

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="buttonDiv"></div>;
};

export default GoogleOauth;

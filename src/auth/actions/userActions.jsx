import axios from "axios";
import { useNavigate } from "react-router-dom";
import { sessionService } from "redux-react-session";

export const loginUser = (credentials, history, errors) => {
  axios
    .post("https://kiekky.com/endpoints/public/api/v2/login", credentials, {
      headers: {
        "Content-Type" : "application/json",
      },
    })
    .then((response) => {
      const { data } = response;

      if (data.status === "Failed") {
        const { message } = data;

        if (message.include("credentials")) {
          errors("email", message);
          errors("password", message);
        } else if (message.include("password")) {
          errors("password", message);
        }
      } else if (data.status === "success") {
        const userData = data.data[''];

        sessionService
          .saveSession(userData.id)
          .then(() => {
            sessionService
              .saveUser(userData)
              .then(() => {
                useNavigate("/home");
              })
              .catch((err) => console.error(err));
          })
          .catch((err) => console.error(err));
      }
    })
    .catch((err) => console.error(err));
    
};

export const registerUser = (credentials, history, errors) => {

};

export const logoutUser = (credentials, history, errors) => {
  return("")
  
};

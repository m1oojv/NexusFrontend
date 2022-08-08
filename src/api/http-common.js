import axios from "axios";
import Cookies from "js-cookie";
import UserPool from "../UserPool";

function getToken() {
  const lastAuthUser = Cookies.get(
    `CognitoIdentityServiceProvider.${UserPool.clientId}.LastAuthUser`
  );
  const idToken = Cookies.get(
    `CognitoIdentityServiceProvider.${UserPool.clientId}.${lastAuthUser}.idToken`
  );
  return idToken;
}

export default axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  //baseURL: "https://e1bwxvftp0.execute-api.ap-southeast-1.amazonaws.com/", production endpoint
  headers: {
    "Content-type": "application/json",
  },
  transformRequest: [
    function (data, headers) {
      // You may modify the headers object here
      headers["Authorization"] = `Bearer ${getToken()}`;

      // Do not change data
      return data;
    },
    //to include the body data into the request
    ...axios.defaults.transformRequest,
  ],
});

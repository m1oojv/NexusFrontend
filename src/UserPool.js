import { CognitoUserPool, CookieStorage } from "amazon-cognito-identity-js";

//information from aws cognito user pool
const poolData = {
  UserPoolId: process.env.REACT_APP_USER_POOL_ID,
  ClientId: process.env.REACT_APP_CLIENT_ID,
  Storage: new CookieStorage({
    domain: process.env.REACT_APP_STORAGE_DOMAIN,
  }),
};

export default new CognitoUserPool(poolData);

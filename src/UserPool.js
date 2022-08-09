import { CognitoUserPool, CookieStorage } from "amazon-cognito-identity-js";

//information from aws cognito user pool
const poolData = {
  UserPoolId: "ap-southeast-1_qcncusyit",
  ClientId: "6k7j0skt1qajfa23c0dnbiq1gp",
  Storage: new CookieStorage({
    domain: ".protoslabs.io",
  }),
};

export default new CognitoUserPool(poolData);

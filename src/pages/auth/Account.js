import React, { useState, createContext } from "react";
import {
  CognitoUser,
  AuthenticationDetails,
  CookieStorage,
} from "amazon-cognito-identity-js";
import UserPool from "../../UserPool";

const AccountContext = createContext();

const Account = (props) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [uri, setUri] = useState("");
  const storage = new CookieStorage({ domain: ".protoslabs.io" });

  //enables user to stay signed in if tokens are still in cookie
  const getSession = async () => {
    return await new Promise((resolve, reject) => {
      const user = UserPool.getCurrentUser();
      if (user) {
        user.getSession((err, session) => {
          if (err) {
            reject();
          } else {
            resolve(session);
          }
        });
      } else {
        reject();
      }
    });
  };

  // signs out user by deleting all tokens in cookie
  const signOut = () => {
    const user = UserPool.getCurrentUser();
    if (user) {
      user.signOut();
    }
  };

  // verifies user's email through the confirmation code from user input
  const verifyUser = async (Code) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({
        Username: email,
        Pool: UserPool,
        Storage: storage,
      });

      user.confirmRegistration(Code, true, (err, result) => {
        if (err) {
          reject(err);
        } else {
          authenticate(email, password);
          resolve({ email, password });
        }
      });
    });
  };

  //resend confirmation code to user's email
  const resendCode = async () => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({
        Username: email,
        Pool: UserPool,
        Storage: storage,
      });

      user.resendConfirmationCode((err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  };

  // saves new user password after forget password
  const changePassword = async (Code, Password) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({
        Username: email,
        Pool: UserPool,
        Storage: storage,
      });

      setPassword(Password);

      user.confirmPassword(Code, Password, {
        onSuccess: (data) => {
          resolve(data);
        },
        onFailure: (err) => {
          reject(err);
        },
      });
    });
  };

  //help user reset password
  const forgetPassword = async (Username) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({
        Username: Username,
        Pool: UserPool,
        Storage: storage,
      });

      setEmail(Username);

      user.forgotPassword({
        onSuccess: (data) => {
          resolve(data);
        },
        onFailure: (err) => {
          reject(err);
        },
        inputVerificationCode: (data) => {
          resolve(data);
        },
      });
    });
  };

  // change password of user for first time login
  const completePassword = async (newPassword) => {
    return await new Promise((resolve, reject) => {
      var userAttr = [];
      userDetails.completeNewPasswordChallenge(newPassword, userAttr, {
        onSuccess: (data) => {
          resolve(data);
        },
        onFailure: (err) => {
          reject(err);
        },
      });
    });
  };

  // get uri for qrcode to setup mfa
  const getUri = () => {
    return uri;
  };

  // verifies user mfa device
  const submitTOTP = async (challengeAnswer) => {
    return await new Promise((resolve, reject) => {
      userDetails.verifySoftwareToken(challengeAnswer, "My TOTP device", {
        onSuccess: (session) => {
          var totpMfaSettings = {
            PreferredMfa: true,
            Enabled: true,
          };

          // turn on mfa totp for user
          userDetails.setUserMfaPreference(
            null,
            totpMfaSettings,
            function (err, result) {
              if (err) {
                alert(err.message || JSON.stringify(err));
              }
              resolve();
            }
          );
          resolve(session);
        },
        onFailure: (err) => {
          reject(err);
        },
      });
    });
  };

  //verifies user's totp codes
  const submitMFA = async (challengeAnswer) => {
    return await new Promise((resolve, reject) => {
      userDetails.sendMFACode(
        challengeAnswer,
        {
          onSuccess: (session) => {
            resolve(session);
          },
          onFailure: (err) => {
            reject(err);
          },
        },
        "SOFTWARE_TOKEN_MFA"
      );
    });
  };

  //enable MFA for user
  const setupMFA = async () => {
    return await new Promise((resolve, reject) => {
      const user = UserPool.getCurrentUser();
      if (user) {
        user.getSession((err, session) => {
          if (err) {
            reject();
          } else {
            setUserDetails(user);
            user.associateSoftwareToken({
              onSuccess: (data) => {
                resolve(data);
              },
              onFailure: (err) => {
                reject(err);
              },
              associateSecretCode: async (secretCode) => {
                const name = "Protoslabs";
                const uri = `otpauth://totp/${decodeURI(
                  name
                )}?secret=${secretCode}`;
                resolve();
                setUri(uri);
              },
            });
            resolve(session);
          }
        });
      } else {
        reject();
      }
    });
  };

  //disable MFA for user
  const offMFA = async () => {
    return await new Promise((resolve, reject) => {
      const user = UserPool.getCurrentUser();
      if (user) {
        user.getSession((err, session) => {
          if (err) {
            reject();
          } else {
            setUserDetails(user);
            var totpMfaSettings = {
              PreferredMfa: false,
              Enabled: false,
            };

            // turn off mfa totp for user
            user.setUserMfaPreference(
              null,
              totpMfaSettings,
              function (err, result) {
                if (err) {
                  alert(err.message || JSON.stringify(err));
                }
                resolve();
              }
            );
          }
        });
      } else {
        reject();
      }
    });
  };

  //check user MFA status
  const getMFAStatus = async () => {
    return await new Promise((resolve, reject) => {
      const user = UserPool.getCurrentUser();
      if (user) {
        user.getSession((err, session) => {
          if (err) {
            reject();
          } else {
            setUserDetails(user);
            user.getUserData((err, data) => {
              if (err) {
                alert(err.message || JSON.stringify(err));
                return;
              }
              const { PreferredMfaSetting, UserMFASettingList } = data;
              var MfaSetting = JSON.stringify(
                { PreferredMfaSetting, UserMFASettingList },
                null,
                2
              );

              if (MfaSetting == "{}") {
                resolve("No MFA");
              } else {
                resolve("Got MFA");
              }
            });
          }
        });
      } else {
        reject();
      }
    });
  };

  // function when user signs in
  const authenticate = async (Username, Password) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({
        Username: Username,
        Pool: UserPool,
        Storage: storage,
      });

      const authDetails = new AuthenticationDetails({ Username, Password });

      setEmail(Username);
      setPassword(Password);
      setUserDetails(user);

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          resolve(data);
        },
        onFailure: (err) => {
          reject(err);
        },
        totpRequired: function (secretCode) {
          resolve("OnMFA");
        },
        newPasswordRequired: function (userAttributes, requiredAttributes) {
          resolve("change_password");
          setUserDetails(user);
        },
      });
    });
  };

  return (
    <AccountContext.Provider
      value={{
        authenticate,
        getSession,
        signOut,
        verifyUser,
        resendCode,
        forgetPassword,
        changePassword,
        submitTOTP,
        getUri,
        submitMFA,
        completePassword,
        setupMFA,
        offMFA,
        getMFAStatus,
      }}
    >
      {props.children}
    </AccountContext.Provider>
  );
};
export { Account, AccountContext };

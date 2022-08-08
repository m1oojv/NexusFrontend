import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import { AccountContext } from "../pages/auth/Account";

// For routes that can only be accessed by authenticated users
function AuthGuard({ children }) {
  const [isLoggedOn, setIsLoggedOn] = useState();
  const { getSession } = useContext(AccountContext);

  async function checkUser() {
    await getSession()
      .then((session) => {
        setIsLoggedOn(true);
      })
      .catch((er) => {
        setIsLoggedOn(false);
      });
  }

  useEffect(() => {
    checkUser();
  }, []);

  if (isLoggedOn == false) {
    return <Redirect to="/auth/sign-in" />;
  }

  return children;
}

export default AuthGuard;

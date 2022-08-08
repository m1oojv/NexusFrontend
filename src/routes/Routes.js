import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import jwt_decode from "jwt-decode";
//import Redirect from "react-router-dom";
import {
  authLayoutRoutes,
  dashboardLayoutRoutesbroker,
  dashboardLayoutRoutessme,
  dashboardLayoutRoutesadmin,
} from "./index";

import DashboardLayout from "../layouts/Dashboard";
import AuthLayout from "../layouts/Auth";
//import PresentationLayout from "../layouts/Presentation";
import Page404 from "../pages/auth/Page404";

import Cookies from "js-cookie";
import UserPool from "../UserPool";
import Loader from "../components/Loader";

const childRoutes = (Layout, routes) =>
  routes.map(({ component: Component, guard, children, path }, index) => {
    const Guard = guard || React.Fragment;

    return children ? (
      children.map((element, index) => {
        const Guard = element.guard || React.Fragment;

        return (
          <Route
            key={index}
            path={element.path}
            exact
            render={(props) => (
              <Guard>
                <Layout>
                  <element.component {...props} />
                </Layout>
              </Guard>
            )}
          />
        );
      })
    ) : Component ? (
      <Route
        key={index}
        path={path}
        exact
        render={(props) => (
          <Guard>
            <Layout>
              <Component {...props} />
            </Layout>
          </Guard>
        )}
      />
    ) : null;
  });

const Routes = () => {
  const [access, setAccess] = useState("");
  const [isLoading, setLoading] = useState(true);

  function getToken() {
    const lastAuthUser = Cookies.get(
      `CognitoIdentityServiceProvider.${UserPool.clientId}.LastAuthUser`
    );
    const idToken = Cookies.get(
      `CognitoIdentityServiceProvider.${UserPool.clientId}.${lastAuthUser}.idToken`
    );
    return jwt_decode(idToken);
  }

  let accessType;

  React.useEffect(() => {
    try {
      let user = getToken();
      if (user) {
        accessType = user["custom:access_type"];
      }
      setAccess(accessType);
    } catch (error) {}
  }, [accessType]);

  const onLoadEffect = () => {
    setTimeout(() => {
      setLoading(false);
    }, 180);
  };

  React.useEffect(onLoadEffect, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router forceRefresh={true}>
      <Switch>
        {access === "broker"
          ? childRoutes(DashboardLayout, dashboardLayoutRoutesbroker)
          : null}
        {access === "sme"
          ? childRoutes(DashboardLayout, dashboardLayoutRoutessme)
          : null}
        {access === "superadmin"
          ? childRoutes(DashboardLayout, dashboardLayoutRoutesadmin)
          : null}
        {childRoutes(AuthLayout, authLayoutRoutes)}

        {/* Redirects from root URL path to either 
        /private or /auth/sign-in depending if credentials are present */}
        <Route exact path="/">
          <Redirect to="/auth/sign-in" />
        </Route>
        <Route
          render={() => (
            <AuthLayout>
              <Page404 />
            </AuthLayout>
          )}
        />
      </Switch>
    </Router>
  );
};

export default Routes;

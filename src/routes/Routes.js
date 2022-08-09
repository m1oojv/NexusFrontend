import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
//import Redirect from "react-router-dom";
import {
  dashboardLayoutRoutes,
  authLayoutRoutes,
  //presentationLayoutRoutes,
  protectedRoutes,
} from "./index";

import DashboardLayout from "../layouts/Dashboard";
import AuthLayout from "../layouts/Auth";
//import PresentationLayout from "../layouts/Presentation";
import Page404 from "../pages/auth/Page404";

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
  return (
    <Router>
      <Switch>
        {childRoutes(DashboardLayout, dashboardLayoutRoutes)}
        {childRoutes(DashboardLayout, protectedRoutes)}
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

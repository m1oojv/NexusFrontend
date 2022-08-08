import React from "react";

import async from "../components/Async";

import { Sliders, Users, Monitor } from "react-feather";

// Guards
const AuthGuard = async(() => import("../components/AuthGuard"));

// Auth components
const SignIn = async(() => import("../pages/auth/SignIn"));
const ForgetPassword = async(() => import("../pages/auth/ForgotPassword"));
const Page404 = async(() => import("../pages/auth/Page404"));
const Page500 = async(() => import("../pages/auth/Page500"));

// Pages components

//Temporary admin page
const Admin = async(() =>
  import("../pages/pages/InsuranceBroker/AddNewCompany/test")
);

//Profile
const Profile = async(() => import("../pages/pages/User/Profile"));

//Insurance Broker
const ExistingClients = async(() =>
  import("../pages/pages/InsuranceBroker/ExistingClients")
);
const ClientDetails = async(() =>
  import("../pages/pages/InsuranceBroker/ExistingClients/ClientDetails")
);
const AddNewCompany = async(() =>
  import("../pages/pages/InsuranceBroker/AddNewCompany")
);
const NewApplication = async(() =>
  import("../pages/pages/InsuranceBroker/AddNewCompany/NewApplication")
);

//SME
const Enterprise = async(() => import("../pages/dashboards/Enterprise"));

const insuranceBrokerRoutes = {
  id: "Existing Clients",
  icon: <Users />,
  path: "/existingclients",
  component: ExistingClients,
  guard: AuthGuard,
  children: null,
};

const insuranceBrokerHomeRoutes = {
  id: "Add New Client",
  icon: <Sliders />,
  path: "/home",
  component: AddNewCompany,
  guard: AuthGuard,
  children: null,
};

const insuranceBrokerHiddenRoutes = {
  id: "Existing Clients",
  children: [
    {
      path: "/clientdetails",
      name: "Client Details",
      component: ClientDetails,
      guard: AuthGuard,
    },
    {
      path: "/newapplication",
      name: "New App",
      component: NewApplication,
    },
  ],
};

const userRoutes = {
  id: "Profile",
  children: [
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
      guard: AuthGuard,
    },
  ],
};

const authRoutes = {
  id: "Auth",
  path: "/auth",
  icon: <Users />,
  children: [
    {
      path: "/auth/sign-in",
      name: "Sign In",
      component: SignIn,
    },
    {
      path: "/auth/404",
      name: "404 Page",
      component: Page404,
    },
    {
      path: "/auth/500",
      name: "500 Page",
      component: Page500,
    },
    {
      path: "/auth/forgot-password",
      name: "Forgot Password",
      component: ForgetPassword,
    },
  ],
  component: null,
};

const enterpriseRoutes = {
  id: "Enterprise",
  icon: <Monitor />,
  path: "/home",
  component: Enterprise,
  name: "Dashboard",
  guard: AuthGuard,
};

const adminRoutes = {
  id: "Admin",
  icon: <Monitor />,
  path: "/home",
  component: Admin,
  name: "Dashboard",
  guard: AuthGuard,
};

export const dashboardLayoutRoutesbroker = [
  userRoutes,
  insuranceBrokerRoutes,
  insuranceBrokerHomeRoutes,
  insuranceBrokerHiddenRoutes,
];

export const dashboardLayoutRoutessme = [userRoutes, enterpriseRoutes];

export const dashboardLayoutRoutesadmin = [userRoutes, adminRoutes];

// Routes using the Auth layout
export const authLayoutRoutes = [authRoutes];

// Routes visible in the sidebar
export const sidebarRoutesbroker = [
  insuranceBrokerHomeRoutes,
  insuranceBrokerRoutes,
];

export const sidebarRoutessme = [enterpriseRoutes];

export const sidebarRoutesadmin = [adminRoutes];

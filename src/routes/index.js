import React from "react";

import async from "../components/Async";

import { Sliders, Users } from "react-feather";

// Guards
const AuthGuard = async(() => import("../components/AuthGuard"));

// Auth components
const SignIn = async(() => import("../pages/auth/SignIn"));
const SignUp = async(() => import("../pages/auth/SignUp"));
const VerifyUser = async(() => import("../pages/auth/VerifyUser"));
const SetupMFA = async(() => import("../pages/auth/SetupMFA"));
const MFA = async(() => import("../pages/auth/MFA"));
const ForgetPassword = async(() => import("../pages/auth/ForgotPassword"));
const ChangePassword = async(() => import("../pages/auth/ChangePassword"));
const CompletePassword = async(() => import("../pages/auth/CompletePassword"));
const Page404 = async(() => import("../pages/auth/Page404"));
const Page500 = async(() => import("../pages/auth/Page500"));

// Pages components

// Protected routes
const ProtectedPage = async(() => import("../pages/protected/ProtectedPage"));

//New Application

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
      path: "/auth/sign-up",
      name: "Sign Up",
      component: SignUp,
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
      path: "/auth/verify-user",
      name: "Verify User",
      component: VerifyUser,
    },
    {
      path: "/auth/forgot-password",
      name: "Forgot Password",
      component: ForgetPassword,
    },
    {
      path: "/auth/change-password",
      name: "Change Password",
      component: ChangePassword,
    },
    {
      path: "/auth/setup-MFA",
      name: "Setup MFA",
      component: SetupMFA,
    },
    {
      path: "/auth/MFA",
      name: "MFA",
      component: MFA,
    },
    {
      path: "/auth/complete-password",
      name: "Complete Password",
      component: CompletePassword,
    },
  ],
  component: null,
};

// This route is only visible while signed in
const protectedPageRoutes = {
  id: "Private",
  path: "/private",
  component: ProtectedPage,
  children: null,
  guard: AuthGuard,
};

// Routes using the Dashboard layout
export const dashboardLayoutRoutes = [
  userRoutes,
  insuranceBrokerRoutes,
  insuranceBrokerHiddenRoutes,
];

// Routes using the Auth layout
export const authLayoutRoutes = [authRoutes];

// Routes that are protected
export const protectedRoutes = [
  protectedPageRoutes,
  userRoutes,
  insuranceBrokerHomeRoutes,
  insuranceBrokerRoutes,
  insuranceBrokerHiddenRoutes,
];

// Routes visible in the sidebar
export const sidebarRoutes = [insuranceBrokerHomeRoutes, insuranceBrokerRoutes];

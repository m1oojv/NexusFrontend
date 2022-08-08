import React, { useState, useEffect, useContext } from "react";
import { useHistory, withRouter } from "react-router-dom";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import * as Yup from "yup";
import { Formik } from "formik";
import { useLocation } from "react-router-dom";
import { AccountContext } from "./Account";

import {
  Avatar,
  CardMedia,
  Checkbox,
  FormControlLabel,
  Button,
  Paper,
  TextField as MuiTextField,
  Typography,
  Snackbar,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";
import { Alert as MuiAlert } from "@material-ui/lab";
import Loader from "../../../src/components/Loader";
import ChangePassword from "./CompletePassword";
import MFA from "./MFA";
import VerifyUser from "./VerifyUser";

const Alert = styled(MuiAlert)(spacing);

const TextField = styled(MuiTextField)(spacing);

const Wrapper = styled(Paper)`
  padding: ${(props) => props.theme.spacing(6)}px;
  ${(props) => props.theme.breakpoints.up("md")} {
    padding: ${(props) => props.theme.spacing(10)}px;
  }
`;

const BigAvatar = styled(Avatar)`
  width: 92px;
  height: 92px;
  text-align: center;
  margin: 0 auto ${(props) => props.theme.spacing(5)}px;
`;

function SignIn() {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isCompletePassword, setIsCompletePassword] = useState(false);
  const [isMFA, setIsMFA] = useState(false);
  const [isVerifyUser, setIsVerifyUser] = useState(false);
  const [resetPasswordSnackbar, setResetPasswordSnackbar] = useState(false);
  const { authenticate, getSession } = useContext(AccountContext);
  const history = useHistory();
  const location = useLocation();

  // Snackbar to be shown if the user password had just been reseted successfully
  React.useEffect(() => {
    if (location.search === "?reset=success") {
      setResetPasswordSnackbar(true);
    }
  }, [location]);

  React.useEffect(() => {
    getSession()
      .then((session) => {
        setIsAuthenticating(false);
        history.push("/home");
      })
      .catch((er) => {
        setIsAuthenticating(false);
      });
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setResetPasswordSnackbar(false);
  };

  return isAuthenticating === true ? (
    <Loader />
  ) : isCompletePassword === true ? (
    <ChangePassword />
  ) : isMFA === true ? (
    <MFA />
  ) : isVerifyUser === true ? (
    <VerifyUser />
  ) : (
    <Wrapper>
      <Helmet title="Sign In" />
      <CardMedia image="/static/img/avatars/Logo.png" style={{ height: 140 }} />
      <Typography component="h2" variant="body1" align="center">
        Sign in to your account to continue
      </Typography>

      <Formik
        initialValues={{
          email: "",
          password: "",
          submit: false,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Must be a valid email")
            .max(255)
            .required("Email is required"),
          password: Yup.string().max(255).required("Password is required"),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          authenticate(values.email, values.password)
            .then((data) => {
              if (data == "change_password") {
                setIsCompletePassword(true);
              } else if (data == "OnMFA") {
                setIsMFA(true);
              } else {
                history.push("/home");
              }
            })
            .catch((err) => {
              const message = err.message || "Something went wrong";
              if (message == "User is not confirmed.") {
                setIsVerifyUser(true);
              } else {
                setStatus({ success: false });
                setErrors({ submit: message });
                setSubmitting(false);
              }
            });
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            {errors.submit && (
              <Alert mt={2} mb={1} severity="warning">
                {errors.submit}
              </Alert>
            )}
            <TextField
              type="email"
              inputProps={{
                "data-testid": "email",
              }}
              name="email"
              label="Email Address"
              value={values.email}
              error={Boolean(touched.email && errors.email)}
              fullWidth
              helperText={touched.email && errors.email}
              onBlur={handleBlur}
              onChange={handleChange}
              my={2}
            />
            <TextField
              type="password"
              inputProps={{
                "data-testid": "password",
              }}
              name="password"
              label="Password"
              value={values.password}
              error={Boolean(touched.password && errors.password)}
              fullWidth
              helperText={touched.password && errors.password}
              onBlur={handleBlur}
              onChange={handleChange}
              my={2}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              data-testid="submit-button"
              fullWidth
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
              Sign in
            </Button>
            <Button
              component={Link}
              to="/auth/forgot-password"
              fullWidth
              color="primary"
            >
              Forgot password
            </Button>
          </form>
        )}
      </Formik>
      <Snackbar
        open={resetPasswordSnackbar}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Your password has been reset successfully!
        </Alert>
      </Snackbar>
    </Wrapper>
  );
}

export default withRouter(SignIn);

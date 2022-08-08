import React from "react";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet";
import * as Yup from "yup";
import { Formik } from "formik";
import { AccountContext } from "./Account";

import {
  Button,
  Paper,
  TextField as MuiTextField,
  Typography,
  Snackbar,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";
import { Alert as MuiAlert } from "@material-ui/lab";

const Alert = styled(MuiAlert)(spacing);

const TextField = styled(MuiTextField)(spacing);

const Wrapper = styled(Paper)`
  padding: ${(props) => props.theme.spacing(6)}px;

  ${(props) => props.theme.breakpoints.up("md")} {
    padding: ${(props) => props.theme.spacing(10)}px;
  }
`;

const Schema = Yup.object().shape({
  code: Yup.string().max(255).required("Confirmation code is required"),
  password: Yup.string().min(8).max(255).required("This field is required"),
  confirmpassword: Yup.string()
    .min(8)
    .max(255)
    .required("This field is required")
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both passwords needs to be the same"
      ),
    }),
});

function ChangePassword() {
  const history = useHistory();
  const [codeSnackbar, setCodeSnackbar] = useState(false);
  const { resendForgetPasswordCode, changePassword } =
    useContext(AccountContext);

  const CodeHandler = () => {
    resendForgetPasswordCode();
    setCodeSnackbar(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setCodeSnackbar(false);
  };

  return (
    <Wrapper>
      <Helmet title="Reset Password" />

      <Typography component="h1" variant="h4" align="center" gutterBottom>
        Change Password
      </Typography>
      <Typography component="h2" variant="body1" align="center">
        We have sent a confirmation code to your email.
      </Typography>
      <Typography component="h2" variant="body1" align="center">
        Enter your confirmation code and new password.
      </Typography>

      <Formik
        initialValues={{
          code: "",
          password: "",
          confirmpassword: "",
        }}
        validationSchema={Schema}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          changePassword(values.code, values.password)
            .then((data) => {
              history.push({
                pathname: "/auth/sign-in",
                search: "?reset=success",
              });
            })
            .catch((er) => {
              const message = er.message || "Something went wrong";

              setStatus({ success: false });
              setErrors({ submit: message });
              setSubmitting(false);
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
              type="code"
              name="code"
              label="Confirmation Code"
              value={values.code}
              error={Boolean(touched.code && errors.code)}
              fullWidth
              helperText={touched.code && errors.code}
              onBlur={handleBlur}
              onChange={handleChange}
              my={3}
            />
            <TextField
              type="password"
              name="password"
              label="Password"
              value={values.password}
              error={Boolean(touched.password && errors.password)}
              fullWidth
              helperText={touched.password && errors.password}
              onBlur={handleBlur}
              onChange={handleChange}
              my={3}
            />
            <TextField
              type="password"
              name="confirmpassword"
              label="Confirm Password"
              value={values.confirmpassword}
              error={Boolean(touched.confirmpassword && errors.confirmpassword)}
              fullWidth
              helperText={touched.confirmpassword && errors.confirmpassword}
              onBlur={handleBlur}
              onChange={handleChange}
              my={3}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
              Change password
            </Button>
            <Button
              type="button"
              fullWidth
              color="primary"
              onClick={CodeHandler}
            >
              Resend Code
            </Button>
          </form>
        )}
      </Formik>
      <Snackbar
        open={codeSnackbar}
        autoHideDuration={1700}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Your confirmation code is sent to your email.
        </Alert>
      </Snackbar>
    </Wrapper>
  );
}

export default ChangePassword;

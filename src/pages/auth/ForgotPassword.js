import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet";
import * as Yup from "yup";
import { Formik } from "formik";
import { AccountContext } from "./Account";
import ChangePassword from "./ChangePassword";

import {
  Button,
  Paper,
  TextField as MuiTextField,
  Typography,
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

function ForgotPassword() {
  const [isChangePassword, setIsChangePassword] = useState(false);
  const { forgetPassword } = useContext(AccountContext);

  return isChangePassword === true ? (
    <ChangePassword />
  ) : (
    <Wrapper>
      <Helmet title="Reset Password" />

      <Typography component="h1" variant="h4" align="center" gutterBottom>
        Reset Password
      </Typography>
      <Typography component="h2" variant="body1" align="center">
        Enter your email to reset your password
      </Typography>

      <Formik
        initialValues={{
          email: "",
          submit: false,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Must be a valid email")
            .max(255)
            .required("Email is required"),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          forgetPassword(values.email)
            .then((data) => {
              setIsChangePassword(true);
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
              type="email"
              name="email"
              label="Email Address"
              value={values.email}
              error={Boolean(touched.email && errors.email)}
              fullWidth
              helperText={touched.email && errors.email}
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
              Reset password
            </Button>
          </form>
        )}
      </Formik>
    </Wrapper>
  );
}

export default ForgotPassword;

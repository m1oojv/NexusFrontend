import React from "react";
import { useContext } from "react";
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
  const { signOut, completePassword } = useContext(AccountContext);

  return (
    <Wrapper>
      <Helmet title="Reset Password" />

      <Typography component="h1" variant="h4" align="center" gutterBottom>
        Change Password
      </Typography>
      <Typography component="h2" variant="body1" align="center">
        Enter your new password.
      </Typography>

      <Formik
        initialValues={{
          password: "",
          confirmpassword: "",
        }}
        validationSchema={Schema}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          completePassword(values.password)
            .then((data) => {
              signOut();
              history.push("/auth/sign-in");
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
          </form>
        )}
      </Formik>
    </Wrapper>
  );
}

export default ChangePassword;

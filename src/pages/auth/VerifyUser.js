import React from "react";
import { useState, useContext } from "react";
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

function VerifyUser() {
  const history = useHistory();
  const [codeSnackbar, setCodeSnackbar] = useState(false);
  const { verifyUser, resendCode } = useContext(AccountContext);

  const CodeHandler = () => {
    resendCode();
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
        We have sent a confirmation code to your email
      </Typography>
      <Typography component="h2" variant="body1" align="center">
        Enter your confirmation code
      </Typography>

      <Formik
        initialValues={{
          code: "",
          submit: false,
        }}
        validationSchema={Yup.object().shape({
          code: Yup.string().max(255).required("Confirmation code is required"),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          verifyUser(values.code)
            .then((data) => {
              history.push("/home");
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
              Submit
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

export default VerifyUser;

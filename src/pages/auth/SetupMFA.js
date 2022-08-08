import React from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet";
import { AccountContext } from "./Account";
import QRCode from "react-qr-code";
import * as Yup from "yup";
import { Formik } from "formik";

import {
  Button,
  Paper,
  TextField as MuiTextField,
  Typography,
  Box as MuiBox,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";
import { Alert as MuiAlert } from "@material-ui/lab";

const Alert = styled(MuiAlert)(spacing);
const Box = styled(MuiBox)(spacing);

const TextField = styled(MuiTextField)(spacing);

const Wrapper = styled(Paper)`
  padding: ${(props) => props.theme.spacing(6)}px;

  ${(props) => props.theme.breakpoints.up("md")} {
    padding: ${(props) => props.theme.spacing(10)}px;
  }
`;

function SetupMFA() {
  const history = useHistory();
  const { submitTOTP, getUri, signOut } = useContext(AccountContext);

  return (
    <Wrapper>
      <Helmet title="Reset Password" />
      <Typography component="h1" variant="h4" align="center" gutterBottom>
        Scan the QR code to set up your TOTP
      </Typography>
      <Box sx={{ textAlign: "center" }} mt={3} mb={5}>
        <QRCode level={"L"} size={150} value={getUri()} />
      </Box>
      <Typography component="h1" variant="h4" align="center" gutterBottom>
        Please input your TOTP code.
      </Typography>
      <Formik
        initialValues={{
          code: "",
          submit: false,
        }}
        validationSchema={Yup.object().shape({
          code: Yup.string().max(255).required("TOTP code is required"),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          submitTOTP(values.code)
            .then((data) => {
              signOut();
              window.location.pathname = "/auth/sign-in";
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
              label="TOTP"
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
          </form>
        )}
      </Formik>
    </Wrapper>
  );
}

export default SetupMFA;

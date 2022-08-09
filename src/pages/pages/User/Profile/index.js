import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import styled, { withTheme } from "styled-components/macro";

import Helmet from "react-helmet";
import {
  Grid,
  Button,
  Divider as MuiDivider,
  Typography,
  Avatar as MuiAvatar,
  Switch,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";

import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Add as AddIcon } from "@material-ui/icons";
import { spacing } from "@material-ui/system";
import BasicInfo from "./BasicInfo";
import AdditionalInfo from "./AdditionalInfo";

import { useMutation } from "react-query";
import services from "../../../../api/services/services.js";
import { AccountContext } from "../../../auth/Account.js";

//styling for buttons: new user, edit profile (spacing)
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Avatar = styled(MuiAvatar)`
  margin-right: ${(props) => props.theme.spacing(2)}px;
`;

const BigAvatar = styled(Avatar)`
  width: 230px;
  height: 230px;
  margin-bottom: 30px;
  border: 1px solid lightgray;
`;
const newUser = {
  email: "simeontanshujie@outlook.com",
  phoneNumber: "+6596445339",
};

const Divider = styled(MuiDivider)(spacing);
//data = callbackendapi();

function Profile() {
  const button = useStyles(); //styling for buttons: new user, edit profile (spacing)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [MFAstatus, setMFAstatus] = useState(false);
  const [organisation, setOrganisation] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const { getMFAStatus, setupMFA, offMFA, signOut } =
    useContext(AccountContext);
  const history = useHistory();

  React.useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setFirstName(userData.firstName);
      setLastName(userData.lastName);
      setEmail(userData.email);
      setPhone(userData.phone);
      setRole(userData.role);
      setOrganisation(userData.organization);
      setJobTitle(userData.jobTitle);
    }
    checkMFAStatus();
  }, []);

  const mutation = useMutation("createNewUser", (newUser) =>
    services.createnewuser(newUser)
  );

  const handleSubmit = (event, id) => {
    mutation.mutate(newUser);
  };

  const OnMFA = async () => {
    await setupMFA()
      .then((data) => {
        history.push("/auth/setup-MFA");
      })
      .catch((er) => {
        console.error(er);
      });
  };

  const OffMFA = async () => {
    await offMFA()
      .then((data) => {
        signOut();
        window.location.pathname = "/auth/sign-in";
      })
      .catch((er) => {
        console.error(er);
      });
  };

  const checkMFAStatus = async () => {
    await getMFAStatus()
      .then((data) => {
        if (data == "Got MFA") {
          setMFAstatus(true);
        }
      })
      .catch((er) => {
        console.error(er);
      });
  };

  const handleMFA = async () => {
    await getMFAStatus()
      .then((data) => {
        if (data == "Got MFA") {
          OffMFA();
          setMFAstatus(false);
        } else {
          OnMFA();
          setMFAstatus(true);
        }
      })
      .catch((er) => {
        console.error(er);
      });
  };

  return (
    <React.Fragment>
      <Helmet title="Profile" />
      <Grid justifyContent="space-between" container spacing={10}>
        <Grid item>
          <Typography variant="h3" gutterBottom display="inline">
            My Profile
          </Typography>
        </Grid>
      </Grid>

      <Divider my={6} />

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <BigAvatar
            alt="Simeon Tan"
            src="/static/img/avatars/avatar-blank.jpg"
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h3">{"Hi, " + firstName + "."}</Typography>
          <Typography variant="subtitle1" align="center">
            Here are your details.
          </Typography>
          <Divider my={9} />
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid item xs={6}>
          <Typography variant="h6">Basic Information</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">Organisation Information</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <BasicInfo
            name={firstName + " " + lastName}
            email={email}
            phone={phone}
          />
          <FormGroup>
            <FormControlLabel
              control={<Switch checked={MFAstatus} onChange={handleMFA} />}
              label="Enable Multi-Factor Authentication"
            />
          </FormGroup>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6}>
          <AdditionalInfo
            role={role}
            organisation={organisation}
            jobTitle={jobTitle}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default withTheme(Profile);

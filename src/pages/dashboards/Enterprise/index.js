import React, { useEffect, useState } from "react";
import styled, { withTheme } from "styled-components/macro";
import api_companies from "../../../api/services/api_companies";
import initialData2 from "./initialdata copy.json";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";

import { Helmet } from "react-helmet";

import {
  Grid,
  Card as MuiCard,
  CardContent,
  Divider as MuiDivider,
  Typography as MuiTypography,
} from "@material-ui/core";

import { green, red } from "@material-ui/core/colors";

import { spacing } from "@material-ui/system";

import WorldMap from "./WorldMap";
import Threats from "./Threats";
import Panel from "./Panel";
import Panel2 from "./Panel2";
import Panel3 from "./Panel3";
import ScoreTrend from "./ScoreTrend";
import ThreatCategory from "./ThreatCategory";
import { Alert as MuiAlert, AlertTitle } from "@material-ui/lab";
import Controls from "./Controls";
import RiskTrend from "./RiskTrend";
import Task from "./Task";
import Articles from "./Articles";
import Distribution from "./Distribution";
import RiskType from "./RiskType";
import Risk from "./RiskBU";

const Card = styled(MuiCard)(spacing);

const Spacer = styled.div(spacing);

const Alert = styled(MuiAlert)(spacing);

const DEFAULT_QUERY = "redux";

const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);

function Enterprise({ theme }) {
  let value = { id: "f25c3e62-eca4-4750-ad78-da5f3a625b35" };

  const [firstName, setFirstName] = useState("");

  React.useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setFirstName(userData.firstName);
    }
  }, []);

  const {
    data = {
      data: {
        data: {
          result: initialData2,
        },
      },
    },
  } = useQuery("fetchCompanyDetails", () =>
    api_companies.getCompanyDetails(value)
  );
  let companyDetails = data.data.data.result;

  return (
    <React.Fragment>
      <Helmet title="Overview" />
      <Grid justifyContent="space-between" container spacing={6}>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            Enterprise Cyber Risk Profile
          </Typography>
          <Typography variant="subtitle1">
            {"Welcome back, " + firstName + "! " + "We've missed you. "}
            <span role="img" aria-label="Waving Hand Sign">
              👋
            </span>
          </Typography>
        </Grid>
      </Grid>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={6} sm={6} md={6} lg={3}>
          <Panel
            title="Overall Risk Exposure"
            value={companyDetails.financial.risk}
            color={"orange"}
            hovertext={"Details about the Overall Risk Exposure goes here."}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={3}>
          <Panel3
            title="Dark Web Score"
            value={"2"}
            hovertext={"Details about the Dark Web Score goes here."}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={3}>
          <Panel3
            title="Phishing Performance"
            value={"Average"}
            color={"orange"}
            hovertext={"Details about the Phishing Performance goes here."}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={3}>
          <Panel3
            title="Remediation Alerts"
            value={"6"}
            hovertext={"Details about the Remediation Alerts goes here."}
          />
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <ThreatCategory
            threatCategory={
              companyDetails.financial.threat_category_losses.data
            }
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Task />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Threats id={value.id} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Articles />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default withTheme(Enterprise);

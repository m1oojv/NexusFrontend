import React from "react";
import { useState } from "react";
import styled from "styled-components/macro";

import {
  Button,
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardActionArea,
  Chip as MuiChip,
  Typography as MuiTypography,
  Grid,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CredentialsDialogContent from "../DialogContent/CredentialsDialogContent.js";
import VulnerabilitiesDialogContent from "../DialogContent/VulnerabilitiesDialogContent.js";
import PortsDialogContent from "../DialogContent/PortsDialogContent.js";
import EmptyDialogContent from "../DialogContent/EmptyDialogContent.js";
import EmailSecurityDialogContent from "../DialogContent/EmailSecurityDialogContent.js";
import MarketplaceDialogContent from "../DialogContent/MarketplaceDialogContent.js";

const Card = styled(MuiCard)(spacing);

const Typography = styled(MuiTypography)(spacing);

const CardContent = styled(MuiCardContent)`
  position: relative;

  &:last-child {
    padding-bottom: ${(props) => props.theme.spacing(4)}px;
  }
`;

const Chip = styled(MuiChip)`
  position: absolute;
  top: 16px;
  right: 16px;
  height: 20px;
  padding: 4px 0;
  font-size: 85%;
  background-color: ${(props) => props.theme.palette.secondary.main};
  color: ${(props) => props.theme.palette.common.white};
  margin-bottom: ${(props) => props.theme.spacing(4)}px;

  span {
    padding-left: ${(props) => props.theme.spacing(2)}px;
    padding-right: ${(props) => props.theme.spacing(2)}px;
  }
`;

const ClickablePanel = ({ data, title, description, records, score, icon }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  function chooseTitle(title, records) {
    if (title === "Exposed Credentials") {
      return "Total Number of Exposed Credentials: " + records;
    } else {
      return title;
    }
  }

  function chooseContent(title, records, data) {
    if (title === "Exposed Credentials" && records > 0) {
      return <CredentialsDialogContent data={data} />;
    } else if (title === "Vulnerabilities" && records > 0) {
      return <VulnerabilitiesDialogContent data={data} />;
    } else if (title === "Services" && records > 0) {
      return <PortsDialogContent data={data} />;
    } else if (title === "Email Security" && records > 0) {
      return <EmailSecurityDialogContent data={data} />;
    } else if (title === "Marketplace Mentions" && records > 0) {
      return <MarketplaceDialogContent data={data} />;
    } else {
      return <EmptyDialogContent />;
    }
  }

  function determineRisk(score) {
    if (score == 0) {
      return "-";
    } else if (score == 1) {
      return "Low Risk";
    } else if (score >= 2 && score <= 4) {
      return "Medium Risk";
    } else {
      return "High Risk";
    }
  }

  function determineTextColor(score) {
    if (score == 1) {
      return "#64dd17";
    } else if (score >= 2 && score <= 4) {
      return "#ff9100";
    } else {
      return "#d50000";
    }
  }

  function determinePathColor(score) {
    if (score == 1) {
      return `rgba(100, 221, 23, 1)`;
    } else if (score >= 2 && score <= 4) {
      return `rgba(255, 145, 0, 1)`;
    } else {
      return `rgba(213, 0, 0, 1)`;
    }
  }

  return (
    <Card mb={3} style={{ height: "100%" }}>
      <CardActionArea style={{ height: "100%" }}>
        <CardContent onClick={() => handleOpen()}>
          <Grid container spacing={2}>
            <Grid item xs={8} sm={8} md={8} lg={8}>
              <Typography variant="body2">
                <b>{title + "      "}</b>
                {icon}
              </Typography>
              <Typography mb={3} style={{ fontSize: 12 }}>
                {description}
              </Typography>
            </Grid>
            <Grid item xs={4} sm={4} md={4} lg={4} align="center">
              <Grid style={{ width: "50%" }}>
                <CircularProgressbar
                  value={(score / 5) * 100}
                  text={determineRisk(score)}
                  styles={buildStyles({
                    pathColor: determinePathColor(score),
                    textSize: "12px",
                    textColor: determineTextColor(score),
                  })}
                />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={"md"}
        fullWidth={true}
      >
        <DialogTitle>{chooseTitle(title, records)}</DialogTitle>
        <DialogContent>{chooseContent(title, records, data)}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default ClickablePanel;

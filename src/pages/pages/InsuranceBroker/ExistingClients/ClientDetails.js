import React, { useRef } from "react";
import styled, { withTheme } from "styled-components/macro";
import services from "../../../../api/services/services.js";
import { NavLink, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import initialData from "./initialdata.json";

import { Helmet } from "react-helmet";

import Panel from "./Panels/Panel.js";
import ClickablePanel from "./Panels/ClickablePanel.js";
import TopThreats from "./TopThreats";
import Articles from "./Articles/Articles.js";
import { IconButton } from "@material-ui/core";
import SaveAlt from "@material-ui/icons/SaveAlt";
import VpnKeyOutlinedIcon from "@material-ui/icons/VpnKeyOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import PublicOutlinedIcon from "@material-ui/icons/PublicOutlined";
import ReportOutlinedIcon from "@material-ui/icons/ReportOutlined";
import PolicyOutlinedIcon from "@material-ui/icons/PolicyOutlined";
import { grey } from "@material-ui/core/colors";

import ReactCountryFlag from "react-country-flag";
import Countries from "./countries.json";

import {
  CardContent,
  Link,
  Grid,
  Chip as MuiChip,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  Divider as MuiDivider,
  TextField as MuiTextField,
  Typography as MuiTypography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";
import queryString from "query-string";

const Card = styled(MuiCard)(spacing);

const Chip = styled(MuiChip)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);

function checkCompleted(value) {
  if (value == "COMPLETED") return true;
  return false;
}

const RiskDescription =
  "Protos Labs's cyber risk exposure estimates the expected loss of the organization annually. Our models ingests millions of data points daily and take into account real-world cyber loss data, threats and expert analysis.";

const ExposedCredentialsDescription =
  "Protos Labs has scanned the dark web for leaked credentials associated to your client's organization that can be used by threat actors to launch attacks.";

const EmailSecurityDescription =
  "Protos Labs has checked your client's email security to assess whether they are susceptible to phishing attacks and email spam.";

const CredsOnMarketDescription =
  "Protos Labs has searched underground cybercriminal forums to check if your client's data or network access is being sold.";

const VulnerabilitiesDescription =
  "Protos Labs has scanned your client's public facing assets to assess for vulnerabilities that threat actors can exploit.";

const ServicesDescription =
  "Protos Labs has scanned your client's public facing assets to assess for services that can be exploited by threat actors to conduct cyber attacks.";

function Details({ companyDetails, isCompleted }) {
  let country = Countries.filter((country) =>
    country.name.includes(companyDetails.country)
  )[0];
  let code = country.code;

  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="body2" gutterBottom>
          <b>Company Profile</b>
        </Typography>
        <Divider my={3} />
        <Grid container spacing={3}>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <Typography variant="body2" gutterBottom>
              <b>Annual Revenue</b>
            </Typography>
            <Typography component="div" variant="body1" gutterBottom>
              {"$" + parseInt(companyDetails.revenue).toLocaleString()}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <Typography variant="body2" gutterBottom>
              <b>No. of Employees</b>
            </Typography>
            <Typography component="div" variant="body1" gutterBottom>
              {parseInt(companyDetails.employees).toLocaleString()}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <Typography variant="body2" gutterBottom>
              <b>Country</b>
            </Typography>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <ReactCountryFlag
                  countryCode={code}
                  style={{
                    fontSize: "2em",
                    border: "1px solid rgba(0, 0, 0, 0.03)",
                  }}
                  svg
                />
              </Grid>
              <Grid item>
                <Typography component="div" variant="body1" gutterBottom>
                  {companyDetails.country}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <Typography variant="body2" gutterBottom>
              <b>Sector</b>
            </Typography>
            <Typography component="div" variant="body1" gutterBottom>
              <Chip
                label={companyDetails.industry}
                key={companyDetails.industry}
              />
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <Typography variant="body2" gutterBottom>
              <b>Domain</b>
            </Typography>
            <Grid container alignItems="center" spacing={2}>
              <Typography component="div" variant="body1" gutterBottom>
                <Chip
                  label={companyDetails.domain}
                  key={companyDetails.domain}
                />
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3}>
            <Typography variant="body2" gutterBottom>
              <b>Records Held</b>
            </Typography>
            <Typography component="div" variant="body1" gutterBottom>
              {companyDetails.pii.toLocaleString()}
            </Typography>
          </Grid>
        </Grid>
        <span>&nbsp;&nbsp;</span>
      </CardContent>
    </Card>
  );
}

function ClientDetails() {
  let location = useLocation();
  let value = queryString.parse(location.search);
  let isCompleted = false;

  const isMounted = useRef(false);
  const [download, setDownload] = React.useState(false);

  const {
    data = {
      data: initialData,
    },
  } = useQuery("fetchCompanyDetails", () => services.getcompanydetails(value));

  let companyDetails = data.data[0];
  isCompleted = checkCompleted(companyDetails.assessmentProgress);

  const link = useQuery(
    "generatepdf",
    () => services.generatepdf({ id: companyDetails.id }),
    {
      refetchOnWindowFocus: false,
      enabled: false,
      onSuccess: (pdf) => handleDownload(pdf.data),
    }
  );

  React.useEffect(() => {
    if (isMounted.current && download == true) {
      link.refetch();
    } else {
      isMounted.current = true;
    }
  }, [download]);

  function handleDownload(url) {
    if (url != undefined) {
      window.location.href = url;
      setDownload(false);
    }
  }

  return (
    <React.Fragment>
      <Helmet title="Company Details" />
      <Grid justifyContent="space-between" container spacing={10}>
        <Grid item xs={11}>
          <Typography variant="h3" gutterBottom display="inline">
            {companyDetails.companyName}
          </Typography>
          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} exact to="/existingclients">
              Existing Clients
            </Link>
            <Typography>{companyDetails.companyName}</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item xs={1}>
          <IconButton
            style={{ color: grey[900] }}
            onClick={() => {
              setDownload(true);
            }}
          >
            <SaveAlt />
          </IconButton>
        </Grid>
      </Grid>

      <Divider my={6} />

      <Grid container spacing={3} style={{ display: "flex" }}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Details companyDetails={companyDetails} isCompleted={isCompleted} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Panel
            title="Overall Risk Exposure"
            value={companyDetails.financials.risk}
            color={"orange"}
            hovertext={RiskDescription}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <ClickablePanel
            data={companyDetails.scanResults.data.credentials}
            title="Exposed Credentials"
            description={ExposedCredentialsDescription}
            records={
              companyDetails.scanResults.data.credentials.total_creds_exposed
            }
            score={companyDetails.scanResults.risk_results.creds_score}
            icon={<VpnKeyOutlinedIcon style={{ fontSize: 18 }} />}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <ClickablePanel
            data={companyDetails.scanResults.data.email_security}
            title="Email Security"
            description={EmailSecurityDescription}
            records={2}
            score={companyDetails.scanResults.risk_results.email_security_score}
            icon={<EmailOutlinedIcon style={{ fontSize: 18 }} />}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <ClickablePanel
            data={companyDetails.scanResults.data.marketplace}
            title="Marketplace Mentions"
            description={CredsOnMarketDescription}
            records={companyDetails.scanResults.data.marketplace.length}
            score={companyDetails.scanResults.risk_results.marketplace_score}
            icon={<PublicOutlinedIcon style={{ fontSize: 18 }} />}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <ClickablePanel
            data={companyDetails.scanResults.data.vulns}
            title="Vulnerabilities"
            description={VulnerabilitiesDescription}
            records={companyDetails.scanResults.data.vulns.totalNumberOfVulns}
            score={companyDetails.scanResults.risk_results.vulns_score}
            icon={<ReportOutlinedIcon style={{ fontSize: 18 }} />}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <ClickablePanel
            data={companyDetails.scanResults.data.ports}
            title="Services"
            description={ServicesDescription}
            records={
              companyDetails.scanResults.data.ports.totalNumberOfHighRisk +
              companyDetails.scanResults.data.ports.totalNumberOfMediumRisk
            }
            score={companyDetails.scanResults.risk_results.ports_score}
            icon={<PolicyOutlinedIcon style={{ fontSize: 18 }} />}
          />
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <TopThreats
            threatCategory={companyDetails.financials.threatCategory.data}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Articles />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default withTheme(ClientDetails);

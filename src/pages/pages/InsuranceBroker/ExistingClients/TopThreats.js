import React from "react";
import styled, { withTheme } from "styled-components/macro";

import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  Grid,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { HelpCircle } from "react-feather";
import { spacing } from "@material-ui/system";

import { ResponsiveBar } from "@nivo/bar";
import { grey } from "@material-ui/core/colors";

const Card = styled(MuiCard)(spacing);

const CardContent = styled(MuiCardContent)`
  &:last-child {
    padding-bottom: ${(props) => props.theme.spacing(4)}px;
  }
`;

const Spacer = styled.div(spacing);

const theme = {
  axis: {
    fontSize: "14px",
    tickColor: "#FFF",
    ticks: {
      line: {
        stroke: "#696969",
      },
      text: {
        fill: "#696969",
      },
    },
  },
  grid: {
    line: {
      stroke: "#f2f0f0",
    },
  },
};

const Description =
  "Annualized risk exposure of the organization is broken down by threat category. Organizations can prioritize protection and coverage across the top threat categories.";
const ThreatCategory = (props) => {
  const firstDatasetColor = props.theme.palette.secondary.main;
  let data = props.threatCategory;
  data = data.sort((a, b) => a.risk - b.risk);
  return (
    <Card mb={3}>
      <CardContent>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <Typography
              variant="body2"
              mb={4}
              style={{
                textOverflow: "ellipsis",
                display: "block",
                overflow: "hidden",
                maxWidth: "100%",
                whiteSpace: "nowrap",
              }}
            >
              <b>Top Risks by Threat Category </b>
              <Tooltip title={Description} placement="top-start">
                <HelpCircle size={14} color={grey[600]} />
              </Tooltip>
            </Typography>
          </Grid>
        </Grid>
        <Spacer mb={6} />
        <div style={{ height: "300px", width: "99%" }}>
          <ResponsiveBar
            data={data}
            keys={["risk"]}
            indexBy="threatCategory"
            margin={{ top: 0, right: 20, bottom: 0, left: 100 }}
            padding={0.3}
            layout="horizontal"
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            valueFormat={{ format: "", enabled: false }}
            colors={firstDatasetColor}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "#38bcb2",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "#eed312",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Risk ($M)",
              legendPosition: "middle",
              legendOffset: 32,
            }}
            axisLeft={{
              format: (v) => {
                return v.length > 10 ? (
                  <tspan>
                    {v.substring(0, 10) + "..."}
                    <title>{v}</title>
                  </tspan>
                ) : (
                  v
                );
              },
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "",
              legendPosition: "middle",
              legendOffset: -40,
            }}
            label={(d) => `${"$" + parseInt(d.value).toLocaleString()}`}
            labelSkipWidth={9}
            labelSkipHeight={12}
            labelTextColor="#f2f0f0"
            theme={theme}
            tooltip={({ value, indexValue }) => (
              <div
                style={{
                  padding: 12,
                  background: "#f2f0f0",
                }}
              >
                <strong>{indexValue}</strong>
                <br />
                Risk: ${parseInt(value).toLocaleString()}
              </div>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default withTheme(ThreatCategory);

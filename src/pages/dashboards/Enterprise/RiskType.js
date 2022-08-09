import React from "react";
import styled, { withTheme } from "styled-components/macro";
import TableChart from "@material-ui/icons/TableChart";
import { AutoSizer } from "react-virtualized";

import {
  CardContent,
  Card as MuiCard,
  Typography,
  Grid,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";
import {
  XYPlot,
  HorizontalBarSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
} from "react-vis";

const Card = styled(MuiCard)(spacing);

const Spacer = styled.div(spacing);

function RiskType({ theme, score }) {
  const data = [
    { x: "Feb", y: 1.7 },
    { x: "Mar", y: 2.1 },
    { x: "Apr", y: 1.9 },
    { x: "May", y: 2.1 },
    { x: "Jun", y: 2.2 },
    { x: "Jul", y: score },
  ];

  return (
    <Card mb={1}>
      <CardContent>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <Typography variant="body2" gutterBottom>
              <b>Risk by Threat Category</b>
            </Typography>
          </Grid>
        </Grid>

        <Spacer mb={6} />
        <div style={{ flex: "1 1 auto", height: "27vh" }}>
          <AutoSizer>
            {({ width }) => (
              <XYPlot
                height={250}
                width={width}
                yType="ordinal"
                margin={{ left: 170 }}
              >
                <XAxis
                  hideLine
                  style={{
                    text: { stroke: "none", fill: "#C8C8C8" },
                  }}
                  title="Risk ($M)"
                  position="end"
                />
                <YAxis
                  hideLine
                  style={{
                    text: { stroke: "none", fill: "#C8C8C8" },
                  }}
                />
                <HorizontalBarSeries
                  opacity="0.6"
                  data={[
                    { y: "Ransomware", x: 12.5 },
                    { y: "Phishing", x: 4.5 },
                    { y: "Business Email Compromise", x: 4 },
                    { y: "Web App Attack", x: 3 },
                    { y: "Database Compromise", x: 30 },
                    { y: "Identity Theft", x: 15 },
                  ]}
                />
              </XYPlot>
            )}
          </AutoSizer>
        </div>
      </CardContent>
    </Card>
  );
}

export default withTheme(RiskType);

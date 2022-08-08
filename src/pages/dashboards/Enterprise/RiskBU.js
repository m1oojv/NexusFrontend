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

function RiskBU({ theme, score }) {
  return (
    <Card mb={1}>
      <CardContent>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <Typography variant="body2" gutterBottom>
              <b>Risk by Business Unit</b>
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
                    { y: "Commercial Banking", x: 17 },
                    { y: "Global Banking", x: 8.5 },
                    { y: "Private Banking", x: 13 },
                    { y: "Retail Banking", x: 6.5 },
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

export default withTheme(RiskBU);

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
  AreaSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
} from "react-vis";

const Card = styled(MuiCard)(spacing);

const Spacer = styled.div(spacing);

function LineChart({ theme, score }) {
  const data = [
    { x: "Feb", y: 85 },
    { x: "Mar", y: 82 },
    { x: "Apr", y: 80 },
    { x: "May", y: 87 },
    { x: "Jun", y: 81 },
    { x: "Jul", y: 79.6 },
  ];

  return (
    <Card mb={1}>
      <CardContent>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <Typography variant="body2" gutterBottom>
              <b>Risk Trend</b>
            </Typography>
          </Grid>
        </Grid>

        <Spacer mb={6} />
        <div style={{ flex: "1 1 auto", height: "27vh" }}>
          <AutoSizer>
            {({ width }) => (
              <XYPlot height={250} width={width} xType="ordinal">
                <XAxis
                  hideLine
                  style={{
                    text: { stroke: "none", fill: "#C8C8C8" },
                  }}
                />
                <YAxis
                  hideLine
                  title="Risk ($M)"
                  position="middle"
                  style={{
                    text: { stroke: "none", fill: "#C8C8C8" },
                  }}
                />
                <AreaSeries
                  className="area-series-example"
                  curve="curveNatural"
                  data={data}
                  opacity={0.5}
                />
              </XYPlot>
            )}
          </AutoSizer>
        </div>
      </CardContent>
    </Card>
  );
}

export default withTheme(LineChart);

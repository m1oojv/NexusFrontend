import React from "react";
import styled, { withTheme } from "styled-components/macro";

import { CardContent, Card as MuiCard, Typography } from "@material-ui/core";
import { spacing } from "@material-ui/system";
import grey from "@material-ui/core/colors/grey";

import { Line } from "react-chartjs-2";

const Card = styled(MuiCard)(spacing);

const Spacer = styled.div(spacing);

const ChartWrapper = styled.div`
  height: 400px;
`;

function createData(maturity, effectiveness, coverage) {
  let triScore = ((maturity + effectiveness * 2) / 3) * coverage;
  return triScore.toFixed(2);
}

function LineChart({ theme, controlScore }) {
  let rows = [];
  let controlFamily = [];
  let benchmark = [];
  Array.from(controlScore).map((family) => {
    rows.push(createData(family[1], family[2], family[3]));
    controlFamily.push(family[0]);
  });

  for (let family in controlFamily) {
    benchmark.push((Math.random() * 4).toFixed(2));
  }
  console.log("line", benchmark);
  const data = {
    labels: controlFamily,
    datasets: [
      {
        label: "Control Score",
        fill: true,
        backgroundColor: "transparent",
        borderColor: theme.palette.secondary.main,
        data: rows,
      },
      {
        label: "Industry Benchmark",
        fill: true,
        backgroundColor: "transparent",
        borderColor: theme.palette.grey[500],
        borderDash: [4, 4],
        data: benchmark,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: true,
    },
    tooltips: {
      intersect: true,
    },
    hover: {
      intersect: true,
    },
    plugins: {
      filler: {
        propagate: false,
      },
    },
    scales: {
      xAxes: [
        {
          reverse: true,
          gridLines: {
            color: grey[900],
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            stepSize: 500,
          },
          display: true,
          borderDash: [5, 5],
          gridLines: {
            color: grey[900],
            fontColor: "#fff",
          },
        },
      ],
    },
  };

  return (
    <Card mb={1}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Benchmark by Controls Family
        </Typography>
        <Typography variant="body2" gutterBottom>
          Control scores benchmarked against industry average.
        </Typography>

        <Spacer mb={6} />

        <ChartWrapper>
          <Line data={data} options={options} />
        </ChartWrapper>
      </CardContent>
    </Card>
  );
}

export default withTheme(LineChart);

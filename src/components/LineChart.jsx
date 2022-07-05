import { MenuItem, Select, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import moment from "moment";

const LineChart = ({ coinHistory, currentPrice, coinName, timeArray, childToParent, timePeriod}) => {
  const coinPrice = [];
  const coinTimestamp = [];

    for (let i = 0; i < coinHistory?.data?.history.length; i++) {
      coinPrice.unshift(coinHistory?.data?.history[i].price);
    }

    // var day = moment.unix(coinHistory?.data?.history[i].timestamp); //seconds
    for (let i = 0; i < coinHistory?.data?.history.length; i++) {
      coinTimestamp.unshift(
        moment.unix(coinHistory?.data?.history[i].timestamp).calendar()
      );
    }

    useEffect(() => {
        console.log(timePeriod)
    }, [timePeriod])

  const data = {
    labels: coinTimestamp, // x - axes
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice, // y - axes
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", margin:"5px 20px"}}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={timePeriod}
          label="Select Time Range"
          // onChange={(e) => setTimeValue(e.target.value.toLowerCase())}
          onChange={(e) => childToParent(e.target.value.toLowerCase())}
          sx={{ width: "10%" }}
        >
          {timeArray?.map((timerange) => (
            <MenuItem value={timerange}>{timerange}</MenuItem>
          ))}
        </Select>

        <Typography variant="h6" sx={{ fontWeight: "bold", alignSelf:"center" }} color={"#00243D"} >
          {coinName} Price Chart
        </Typography>

        {/* <Box sx={{display:"flex", justifyContent:"space-evenly", gap:"5px"}} >
          <div style={{border:" 1px solid blue", backgroundColor:"blue", width:"20px", height:"20px"}}></div>
          Price in USD
        </Box> */}

      </Box>

      <Box margin={2}>
        <Line data={data}  />
      </Box>
    </Box>
  );
};

export default LineChart;

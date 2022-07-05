import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from "millify";


const Summary = () => {

  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  console.log(globalStats)

  if(isFetching) return '';

  return (
    <Box sx={{padding:"15px 25px", marginBottom: "20px"}}>

    <div>
        <Typography variant="h5" sx={{fontWeight: "3px", marginBottom: "20px"}}>
            Global Cryptocurrency Statistics
        </Typography>
    </div>

      <Grid container spacing={4}>

        <Grid item xs={6} md={3}>
          <Card sx={{ width: "90%", height: "95%" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Total Cryptocurrencies
              </Typography>
              <Typography variant="h5" component="div">
                {globalStats.total}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} md={3}>
          <Card sx={{ width: "90%", height: "95%" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Total Exchanges
              </Typography>
              <Typography variant="h5" component="div">
                {globalStats.totalExchanges}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} md={3}>
          <Card sx={{ width: "90%", height: "95%" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Total Market Cap
              </Typography>
              <Typography variant="h5" component="div">
                {millify(globalStats.totalMarketCap)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} md={3}>
          <Card sx={{ width: "90%", height: "95%" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Total 24h Volume
              </Typography>
              <Typography variant="h5" component="div">
                {millify(globalStats.total24hVolume)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>


      </Grid>
    </Box>
  );
};

export default Summary;

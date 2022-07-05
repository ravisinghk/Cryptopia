import { Alert } from "@mui/material";
import React from "react";
import ExchangesChild from "./ExchangesChild";

const Exchanges = () => {
  return (
    <>
      <Alert severity="error">
        Alert! This section does not contain realtime information as the
        Exchanges API does not belong to free tier. To view realtime information
        you can visit this
        <a href="https://coinmarketcap.com/rankings/exchanges/" target="_blank"> Link</a>
      </Alert>
      <ExchangesChild />
    </>
  );
};

export default Exchanges;

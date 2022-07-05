import { Box} from "@mui/material";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Cryptocurrencies from "./Cryptocurrencies";
import CryptoDetails from "./CryptoDetails";
import Exchanges from "./Exchanges";
import Homepage from "./Homepage";
import News from "./News"

const Main = () => {  
  return (
      <Box sx={{ bgcolor: "#F3FAFF", minHeight:"100vh", marginTop:{xs: "50px", sm: "0px"}}} flex={4}>
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/exchanges" element={<Exchanges />}></Route>
          <Route
            exact
            path="/cryptocurrencies"
            element={<Cryptocurrencies />}
          ></Route>
          <Route
            exact
            path="/crypto/:coinId"
            element={<CryptoDetails />}
          ></Route>
          <Route exact path="/news" element={<News />}></Route>
        </Routes>
      </Box>
  );
};

export default Main;

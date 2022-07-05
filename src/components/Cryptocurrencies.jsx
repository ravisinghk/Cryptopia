import { Card, CircularProgress, Grid, InputBase, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import CryptoCard from "./CryptoCard";


import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from "millify";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  // backgroundColor: alpha(theme.palette.common.white, 0.15),
  // '&:hover': {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  // },
  backgroundColor: alpha("#00243D", 0.15),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  marginBottom: "30px",
  [theme.breakpoints.up("sm")]: {
    // marginLeft: theme.spacing(3),
    width: "auto",
    marginBottom: "30px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Cryptocurrencies = ({simplified}) => {

  const [searchTerm, setSearchTerm] = useState("");
  const count = simplified ? 10 : 100;

  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos ]= useState(cryptosList?.data?.coins);
  // console.log(cryptos);

  useEffect(() => {
    // setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching || cryptos==null)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100",
          height: "100%",
        }}
      >
        <CircularProgress />
      </div>
    );

  return (
    <Box sx={{ padding: "15px 25px", marginBottom: "20px" }}>
    {
      !simplified && (<Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange = { (e) => setSearchTerm(e.target.value.toLowerCase())}
        />
      </Search>)
    }
      
      <Box>
        <Grid container spacing={4}>
          {cryptos.map((currency) => (
            <Grid item xs={12} md={4} lg={3} key = {currency.uuid}>
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`} style={{textDecoration:"none"}}>
              <CryptoCard
                rank={currency.rank}
                name={currency.name}
                price={millify(currency.price)}
                marketCap={millify(currency.marketCap)}
                change={currency.change}
                icon={currency.iconUrl}
                key = {currency.uuid}
              />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Cryptocurrencies;

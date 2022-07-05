import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'

import {
  Article,
  CurrencyExchange,
  Home,
  ShowChart,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const NavList = ({ displayOnXs, bgcolor, txtColor }) => {
  const [selectArray, setSelectArray] = useState([false, false, false, false]);
  const location = useLocation();
  
  useEffect(() => {
    if(location.pathname === "/"){
      setSelectArray([true, false, false, false])
    }
    else if(location.pathname === "/cryptocurrencies"){
      setSelectArray([false, true, false, false])
    }
    else if(location.pathname === "/exchanges"){
      setSelectArray([false, false, true, false])
    }
    else if(location.pathname === "/News"){
      setSelectArray([false, false, false, true])
    }
    

  },[location])
  


  return (
    <List
      sx={{
        color: txtColor,
        display: { xs: displayOnXs, sm: "block" },
        backgroundColor: bgcolor,
      }}
    >
      <Link to="/" style={{ textDecoration: "none",  }}>
        <ListItemButton
        >
          <ListItemIcon>
            <Home sx={{ color: selectArray[0] ? "#0099FA" : "white" }} />
          </ListItemIcon>
          <ListItemText
            primary="Home"
            sx={{
              color: selectArray[0] ? "#0099FA" : "white",
              textDecoration: "none",
            }}
          />
        </ListItemButton>
      </Link>

      <Link
        to="/cryptocurrencies"
        style={{ textDecoration: "none",  }}
      >
        <ListItemButton>
          <ListItemIcon>
            <ShowChart sx={{ color: selectArray[1] ? "#0099FA" : "white" }} />
          </ListItemIcon>

          <ListItemText primary="Cryptocurrencies"  sx={{ color: selectArray[1] ? "#0099FA" : "white" }}/>
        </ListItemButton>
      </Link>

      <Link to="/exchanges" style={{ textDecoration: "none",  }}>
        <ListItemButton>
          <ListItemIcon>
            <CurrencyExchange sx={{ color: selectArray[2] ? "#0099FA" : "white" }} />
          </ListItemIcon>

          <ListItemText primary="Exchanges" sx={{ color: selectArray[2] ? "#0099FA" : "white" }} />
        </ListItemButton>
      </Link>

      <Link to="/News" style={{ textDecoration: "none" }}>
        <ListItemButton>
          <ListItemIcon>
            <Article sx={{ color: selectArray[3] ? "#0099FA" : "white" }} />
          </ListItemIcon>

          <ListItemText primary="News" sx={{ color: selectArray[3] ? "#0099FA" : "white" }} />
        </ListItemButton>
      </Link>
    </List>
  );
};

export default NavList;

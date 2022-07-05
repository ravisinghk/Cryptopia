import { Box, Avatar, Typography, Button, styled, Menu } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect, useState } from "react";
import NavList from "./NavList";
import "../App.css";
import logo from "../images/cryptocurrency.png";
import { height } from "@mui/system";

import {
  GitHub,
  LinkedIn
} from "@mui/icons-material";


const StyledBox = styled(Box)(({ theme }) => ({
  height: "100vh",
  backgroundColor: "#00243D",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  alignItems: "center",
  position: "fixed",
  // transform: "translateY(50px)",
  // width: "100%",
  // border: "2px solid red",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100vw",
    bgcolor: "#00243D",
    justifyContent: "space-between",
    height: "50px",
    zIndex: "1",
  },
}));

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const myHandlerFunction = () => {
    setMenu(false);
  };

  useEffect(() => {
    window.onresize = myHandlerFunction;
  }, []);

  return (
    <Box
      flex={1}
      bgcolor={"#00243D"}
      sx={{ display: { sm: "flex" }, justifyContent: { sm: "center" } }}
    >
      <StyledBox>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "space-between", sm: "space-evenly" },
            width: { xs: "30%", sm: "100%" },
            marginTop: { xs: "0px", sm: "20px" },
            padding: "7px 15px",
          }}
        >
          <Avatar alt="Remy Sharp" src={logo} sx={{ cursor: "pointer" }} />
          <Typography
            sx={{
              fontSize: "30px",
              color: "white",
              display: { xs: "none", sm: "block" },
            }}
          >
            Cryptopia
          </Typography>
        </Box>
        <NavList displayOnXs="none" txtColor="white" />

      
          <Button
            sx={{
              display: { xs: "flex", sm: "none" },
              color: "white",
              marginRight: "10px",
              alignItems: "center",
            }}
            onClick={(e) => {
              setMenu(!menu);
            }}
          >
            <MenuIcon fontSize="large" />
          </Button>

          <Box sx={{marginTop: "auto", marginBottom:"10px", justifySelf: "flex-end", display:{xs: "none", sm: "flex"}, flexDirection: "column"}}>
            <Typography variant="caption" color={"white"} >Developed By Ravisingh K.</Typography>
            <Box sx={{display: "flex", justifyContent: "center", gap: "15px"}}>
            <a href="https://github.com/ravisinghk"  target="_blank"> <GitHub color="primary" /></a>
            <a href="https://www.linkedin.com/in/ravisingh-kushwah-3383861b5/" target="_blank"><LinkedIn color="primary" /></a>
             
              
            </Box>
          </Box>

      </StyledBox>
          {menu && (
            <Box bgcolor="#00243D" sx={{ transform:"translateY(50px)"}}>
              <NavList displayOnXs="block" bgcolor="#00243D" txtColor="grey" />
            </Box>
          )}
    </Box>
  );
};

export default Navbar;

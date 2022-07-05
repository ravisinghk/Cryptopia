import { Avatar, Card, CardContent, Divider, Typography } from "@mui/material";
import React from "react";

const CryptoCard = ({rank, name, price, marketCap, change, icon}) => {
  return (
    <Card sx={{ width: "90%", height: "90%", "&:hover": { transform: "scale3d(1.015, 1.015, 1.015)"} }}>
      <CardContent >
      <div style={{display:"flex", justifyContent: "space-between", alignItems: "center", marginBottom:"13px",}}>
        <Typography sx={{ fontSize: 17  , fontWeight:"bold"}} color="text.primary" >
          {rank}. {name}
        </Typography>
        <Avatar sx={{ width: "32px", height: "32px" }} alt="Bitcoin" src={icon}  />
      </div>
        <Divider light />
        <Typography variant="body2" sx={{margin: "5px 0px", padding: "5px", fontWeight: "560"}}>
          Price($): {price}
        </Typography>
        <Typography variant="body2" sx={{margin: "5px 0px", padding: "5px"}}>
          Market Cap($): {marketCap}
        </Typography>
        <Typography variant="body2" sx={{margin: "5px 0px", padding: "5px"}}>
          Daily Change: {change}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CryptoCard;

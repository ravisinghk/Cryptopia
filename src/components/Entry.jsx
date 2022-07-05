import { Divider, Typography } from "@mui/material";
import React from "react";

const Entry = ({ heading, val, urlContent}) => {
  return (
    <>
      <div
        style={{
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "5px" }}>
          {/* <Typography sx={{}}>{icon}</Typography> */}
          <Typography>{heading}</Typography>
        </div>
        
        {urlContent ? <a href={val} target='_blank'>{heading}</a> : <Typography sx={{ fontWeight: 600 }}>{val}</Typography>}
        
        
      </div>
      <Divider />
    </>
  );
};

export default Entry;

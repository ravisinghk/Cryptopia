import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Anchor, Favorite, MoreVert, Share } from "@mui/icons-material";
import React from "react";
import { Box } from "@mui/system";

const NewsCard = ({ title, image, description, provider, providerImage, newsUrl }) => {
  return (
    <Card sx={{ width: { sm: "80%", md: "90%", display: "flex", flexDirection:"column", justifyContent:"space-between" } }}>
      <Box sx={{ display: "flex", alignItems: "center", }} p={1}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            // border: "1px solid red",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "10px",
              alignItems: "center",
              padding: "5px",
            }}
          >
            <Avatar
              aria-label="recipe"
              src={providerImage}
              sx={{ height: "30px", width: "30px" }}
            />
            <Typography
              variant="body5"
              color="text.secondary"
              sx={{ fontSize: "12px" }}
            >
              {provider}
            </Typography>
          </div>

          <Typography
            gutterBottom
            component="div"
            sx={{ fontWeight: "bold", fontSize: "15px" }}
          >
            {title}
          </Typography>
        </Box>

        <CardMedia
          component="img"
          alt="img"
          height="100"
          image={image}
          sx={{borderRadius:"5px"}}
        />
      </Box>


      <Box sx={{display:"flex", flexDirection: "column", justifyContent: "space-between",height:"70%", }}>
        <Typography variant="body2" color="text.primary" p={1}>
          {description}
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            gap: "10px",
            alignItems: "center ",
            paddingLeft: "10px",
            marginBottom:"3px",
          }}
        >
          <a href={newsUrl} target="_blank" style={{textDecoration: "none"}}>
            <Button size="small">Learn More</Button>
          </a>
          <Share
            sx={{
              color: "text.secondary",
              cursor: "pointer",
              fontSize: "20px",
            }}
          />
          {/* <Typography
            variant="body5"
            color="text.secondary"
            sx={{ fontSize: "12px", alignSelf:"flex-end" }}
          >
            39 mins ago
          </Typography> */}
        </div>
      </Box>



    </Card>
  );
};

export default NewsCard;

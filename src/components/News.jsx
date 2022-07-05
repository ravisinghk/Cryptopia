import { CircularProgress, FormControl, Grid, InputBase, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useGetCryptosNewsQuery } from "../services/cryptoNewsApi";
import NewsCard from "./NewsCard";
import { styled, alpha } from "@mui/material/styles";

import { useGetCryptosQuery } from "../services/cryptoApi";

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const News = ({ simplified }) => {
  // const [count, setCount] = useState();

  const [searchTerm, setSearchTerm] = useState("Cryptocurrency");

  const count = 10;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(100);
  const [cryptos, setCryptos ]= useState(cryptosList?.data?.coins);

  // const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const [newsCategory, setNewsCategory] = useState(searchTerm);
  const { data: cryptoNews } = useGetCryptosNewsQuery({ newsCategory, count });

  useEffect(() => {
    setNewsCategory(searchTerm)
  }, [cryptosList, searchTerm]);

  
  if (!cryptoNews || isFetching) return (
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
  
  // console.log(cryptoNews.value);

  // useEffect(() => {
  //   const newCount = simplified ? 6 : 12;
  //   setCount(newCount);
  // });

  return (
    <Box>
      {!simplified && (
        <FormControl sx={{width:"80%", margin:"30px", alignSelf: "center"}}>
          <InputLabel id="demo-simple-select-label">Select Crypto</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Select Crypto"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          >
          <MenuItem value="Cryptocurrency">All</MenuItem>
          {
            cryptos?.map((currency) => (
              <MenuItem value={currency.name}>{currency.name}</MenuItem>
            ))
          }
          </Select>
        </FormControl>
      )}
      <Grid container spacing={2}>
        {cryptoNews?.value?.map((news) => (
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
              paddingBottom: "20px",
            }}
          >
            <NewsCard
              title={news.name}
              image={news.image?.thumbnail.contentUrl}
              description={news.description}
              provider={news.provider[0]?.name}
              providerImage={news?.provider[0]?.image?.thumbnail.contentUrl}
              newsUrl={news?.url}
            />
            {/* <NewsCard title={news.name} image={news.image.thumbnail.contentUrl} description={news.description} provider={news.provider[0].name} newsUrl={news.ampUrl}  /> */}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default News;

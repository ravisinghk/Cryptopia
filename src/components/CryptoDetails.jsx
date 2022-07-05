import { Avatar, CircularProgress, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import HTMLReactParser from 'html-react-parser';

import {
  CheckOutlined,
  MonetizationOnOutlined,
  StopOutlined,
  Store,
  Storefront,
  StorefrontOutlined,
} from "@mui/icons-material";

import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../services/cryptoApi";
import Entry from "./Entry";
import LineChart from "./LineChart";
import millify from "millify";

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timePeriod,
  });
  const cryptoDetails = data?.data?.coin;

  const childToParent = (childdata) => {
    setTimePeriod(childdata);
  }


  if (isFetching)
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

  // console.log(data);
  console.log(coinHistory);

  const timeArray = ['3h', '24h', '7d', '30d', '3m', '1y', '3y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}` },
    { title: 'Rank', value: cryptoDetails?.rank },
    { title: '24h Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}` },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}` },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}` },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges },
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, },
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}` },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`},
  ];

  return (
    <Box padding={2}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "5px",
          height: "35%",
          justifyContent: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Avatar src={cryptoDetails.iconUrl} />
          <Typography variant="h4" sx={{ margin: "10px" }}>
            {cryptoDetails.name} ({cryptoDetails.name})
          </Typography>
        </Box>
        <Typography variant="h3" sx={{ color: "#0099FA", fontWeight: 600 }}>
          $ {(Math.round(cryptoDetails.price*100)/100).toLocaleString()}
        </Typography>
        <Typography variant="p" sx={{ margin: "10px" }}>
          {cryptoDetails.name} Live Price in US Dollars. View Value Statistics, Market Cap
          and Supply
        </Typography>
      </Box>
      <Divider />

      
        <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails?.price)} coinName={cryptoDetails?.name} timeArray={timeArray} childToParent={childToParent} timePeriod={timePeriod}/>
        {/* <Chart timeArray={timeArray} /> */}
      
      <Divider />

      <Box
        sx={{
          height: "80%",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: { xs: "space-evenly", sm: "space-evenly" },
          alignItems: { sm: "center" },
          gap: "10%",
          // border: "1px solid black",
          padding: "53px 10px"
        }}
      >
        <Box sx={{ height: "90%", width: "40%" }}>
          <Typography variant="h6" color={"#0099FA"} sx={{ fontWeight: 600 }}>
            Value Statistics
          </Typography>
          <Typography variant="subtitle2" color={"#8E94B8"}>
            An Overview Showing the stats of Bitcoin
          </Typography>
          <Box>
            {
              stats.map((entry) => (
                <Entry
              heading={entry.title}
              val={entry.value}
            />
              ))
            }
            {/* <Entry
              icon={<MonetizationOnOutlined />}
              heading="Price to USD"
              val="$ 20.1K"
            />
            <Entry heading="Rank" val="1" />
            <Entry heading="24h Volume" val="$ 39.5B" />
            <Entry heading="Market Cap" val="$ 878.58" />
            <Entry heading="All time high(daily Avg.)" val="$ 64.2K" /> */}
          </Box>
        </Box>

        <Box sx={{ height: "90%", width: "40%" }}>
          <Typography variant="h6" color={"#0099FA"} sx={{ fontWeight: 600 }}>
            Other Statistics
          </Typography>
          <Typography variant="subtitle2" color={"#8E94B8"}>
            An Overview Showing the stats of all Cryptocurrencies
          </Typography>

          {
              genericStats.map((entry) => (
                <Entry
              heading={entry.title}
              val={entry.value}
            />
              ))
          }

          {/* <Entry
            icon={<StorefrontOutlined />}
            heading="Number Of Markets"
            val="$ 20.1K"
          />
          <Entry heading="Number Of Exchanges" val="1" />
          <Entry heading="Approved" val="$ 39.5B" />
          <Entry heading="Total Supply" val="$ 878.58" />
          <Entry heading="Circulating Supply" val="$ 64.2K" /> */}
        </Box>
      </Box>


      <Divider />

      <Box
        sx={{
          display: "flex",
          flexDirection: {xs: "column", sm:"row"},
          alignItems: "center",
          gap: "30px",
          height: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <Box sx={{display: "flex", flexDirection :"column", gap:"30px", padding:"10px 5px" }} flex={1.5}>
          <div>
          {HTMLReactParser(cryptoDetails.description)}
          </div>
          {/* <div>
            <Typography variant="h5" color={"#0099FA"}>What is Bitcoin</Typography>
            <Typography variant="p" color={"#00243D"}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis laboriosam corrupti, tempore voluptates voluptatem a
              dolor recusandae quos voluptatibus inventore placeat quae vero
              nisi nulla quam omnis expedita sit officia nobis corporis,
              explicabo fugit.
            </Typography>
          </div>
          <div>
            <Typography variant="h5">The Goal of Bitcoin</Typography>
            <Typography variant="p" color={"#0099FA"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              laborum fugit reiciendis porro reprehenderit adipisci modi, nisi
              quis molestias fuga maxime sequi consequuntur. Cumque quo illo
              nesciunt maiores molestias, totam impedit ipsam dolores
              dignissimos!
            </Typography>
          </div>
          <div>
            <Typography variant="h5">Who Built Bitcoin</Typography>
            <Typography variant="p" color={"#0099FA"}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus sequi iusto unde blanditiis eos dicta. Natus, ullam
              magni recusandae provident ducimus odio sequi tempore cum,
              inventore et minima perspiciatis nam sint. Ullam, iure dolores.
            </Typography>
          </div> */}
        </Box>

        <Box sx={{padding:"10px 5px"}} flex={1}>
        <Typography variant="h4">{cryptoDetails.name} Links</Typography>

        {/* {cryptoDetails.links?.map((link) => (
            <Row className="coin-link" key={link.name}>
              <Title level={5} className="link-name">{link.type}</Title>
              <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
            </Row>
          ))} */}

          {
            cryptoDetails.links?.map((link) => (
              <Entry heading={link.name} val={link.url} urlContent/>
            ))
          }

          {/* <Entry heading="Website" val="Website"/>
          <Entry heading="Twitter" val="Website"/>
          <Entry heading="Reddit" val="Website"/>
          <Entry heading="Reddit" val="Website"/>
          <Entry heading="BitcoinTalk" val="Website"/>
          <Entry heading="Youtube" val="Website"/>
          <Entry heading="Facebook" val="Website"/>
          <Entry heading="Github" val="Website"/> */}
        </Box>
      </Box>
    </Box>
  );
};

export default CryptoDetails;

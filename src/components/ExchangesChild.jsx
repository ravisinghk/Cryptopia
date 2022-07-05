import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Avatar } from '@mui/material';
import { RsvpTwoTone } from '@mui/icons-material';

function createData(sr, exchange, tradeVolume, market, change, iconUrl) {
  return {
    sr,
    exchange,
    tradeVolume,
    market,
    change,
    iconUrl
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  return (
    <>
    
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" >
        <Box sx={{display:"flex", alignItems:"center", justifyContent: "flex-start", gap:"15px"}}>
          <Typography>{row.sr}.</Typography>
          <Avatar sx={{height:"30px", width:"30px"}}  src={row.iconUrl}>H</Avatar>
          <Typography>
          {row.exchange}
          </Typography>
        </Box>
        </TableCell>
        <TableCell align="right">{row.tradeVolume}</TableCell>
        <TableCell align="right">{row.market}</TableCell>
        <TableCell align="right">{row.change}</TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography>{row.exchange}</Typography>
              <Box sx={{width: "90%"}}>
              <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, iusto! Consectetur placeat nobis natus, aut nam eius tempore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ipsam exercitationem ex iste, ullam vel temporibus odio. Consequatur, alias! Excepturi consequuntur tempore illum repellat nostrum hic laudantium quibusdam alias provident.</Typography>
              </Box>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>

    </>
  );
}


const rows = [
  createData(1, 'Binance', "$22.4B", "1682", "9.9", "https://cdn.pixabay.com/photo/2021/04/30/16/47/binance-logo-6219389_960_720.png"),
  createData(2, 'FTX', "$2.6B", "419", "8.5", "https://s2.coinmarketcap.com/static/img/exchanges/64x64/524.png"),
  createData(3, 'Coinbase Exchange', "$1.9B", "560", "8.3", "https://s2.coinmarketcap.com/static/img/exchanges/64x64/89.png"),
  createData(4, 'Kraken', "$0.6B", "598", "7.9", "https://s2.coinmarketcap.com/static/img/exchanges/64x64/24.png"),
  createData(5, 'KuCoin', "$1.5B", "1343", "7.7", "https://s2.coinmarketcap.com/static/img/exchanges/64x64/311.png"),
  createData(6, 'Binance.US', "$0.4B", "216", "7.4", "https://cdn.pixabay.com/photo/2021/04/30/16/47/binance-logo-6219389_960_720.png"),
  createData(7, 'Gate.io', "$1.0B", "2403", "7.4", "https://s2.coinmarketcap.com/static/img/exchanges/64x64/302.png"),
  createData(8, 'Bitfinex', "$0.36B", "378", "7.2", "https://s2.coinmarketcap.com/static/img/exchanges/64x64/302.png"),
  createData(9, 'Huobi Global', "$1.4BB", "1133", "7.1", "https://s2.coinmarketcap.com/static/img/exchanges/64x64/102.png"),
  createData(10, 'Gemini', "$0.13B", "124", "7.1", "https://s2.coinmarketcap.com/static/img/exchanges/64x64/151.png"),
];

export default function CollapsibleTable() {
  return (
    <Box sx={{margin:"25px", padding:"10px"}}>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell sx={{fontWeight: "700"}}>Exchange</TableCell>
              <TableCell align="right" sx={{fontWeight: "700"}}>24h Trade Volume</TableCell>
              <TableCell align="right" sx={{fontWeight: "700"}}>Market</TableCell>
              <TableCell align="right" sx={{fontWeight: "700"}}>Exchange Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import Cryptocurrencies from './Cryptocurrencies'
import News from './News'
import Summary from './Summary'

const Homepage = () => {
  return (
    <>
    <Summary />
    <Divider light />
    <Box sx={{padding:"15px 25px", marginBottom: "20px"}}>
      <div>
        <Typography variant="h5" sx={{fontWeight: "3px", marginBottom: "20px"}}>
            Top 10 Cryptocurrencies in the World
        </Typography>
        <Cryptocurrencies simplified/>
      </div>
    </Box>
    <Divider light />
    <div>
    <Box sx={{padding:"15px 25px", marginBottom: "20px"}}>
      <div>
        <Typography variant="h5" sx={{fontWeight: "3px", marginBottom: "20px"}}>
            Latest News
        </Typography>
        <News simplified />
      </div>
    </Box>
    </div>
    </>
  )
}

export default Homepage
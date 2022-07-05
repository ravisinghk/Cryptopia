import { Box, Container, createTheme, Stack, ThemeProvider } from "@mui/material";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import "./App.css";
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ position:"relative", display: "flex", flexDirection : {xs:"column", sm :"row"}}}>
        <Navbar />
        <Main />
      </Box>
    </ThemeProvider>
  );
}

export default App;

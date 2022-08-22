
import React from 'react'
import Header from './Components/Header';
 import Home from './Components/Home';

import { createTheme, ThemeProvider } from '@mui/material/styles';
 import Sidebar from './Components/Sidebar';
 import Footer from './Components/Footer';
import Aboutus from './Components/Aboutus';
// import Ticket from './Components/Ticket';
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: { main: "#FF8227"},
    secondary: { main: "#000"},
  },
});


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Header/>  
       <Router>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/Aboutus" element={<Aboutus/>} />
      


      </Routes>
      </Router>
      <Sidebar/>
      <Footer/>  
    </ThemeProvider>
    </div>
  );
}

export default App;
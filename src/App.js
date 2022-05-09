import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error from "./components/Error/Error";
import Footer from "./Layouts/Footer/Footer";
import Navbar from "./Layouts/Navbar/Navbar";
import SingleMovie from "./components/SingleMovie/SingleMovie";
import Home from "./pages/Home";
import Upcoming from "./pages/Upcoming";
import WatchList from "./pages/WatchList";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<SingleMovie />} />
        <Route path="/upcoming/movies/:id" element={<SingleMovie />} />
        <Route path="/watchList/movies/:id" element={<SingleMovie />} />
        <Route path="/upcoming" element={<Upcoming/>} />
        <Route path="/watchList" element={<WatchList/>} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;

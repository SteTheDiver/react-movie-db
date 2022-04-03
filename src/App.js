import React from "react";

import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Error from "./components/Error/Error";
import Navbar from "./components/Navbar/Navbar";
import SingleMovie from "./components/SingleMovie/SingleMovie";
import Home from "./pages/Home";
import Popular from "./pages/Popular";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<SingleMovie />} />
        <Route path="/popular" element={<Popular/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

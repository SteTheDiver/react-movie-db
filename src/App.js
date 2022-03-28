import React from "react";

import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Error from "./components/Error/Error";
import SingleMovie from "./components/SingleMovie/SingleMovie";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<SingleMovie />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

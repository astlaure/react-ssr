import React from "react";
import { Route, Routes } from "react-router-dom";
import Articles from "./articles/Articles";
import Navigation from "./core/components/Navigation";
import Home from "./core/Home";

export default function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/articles" element={<Articles/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  );
}

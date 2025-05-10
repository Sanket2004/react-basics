import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Menu from "./page/Menu";
import Setting from "./page/Setting";
import Navbar from "./components/Navbar";

export default function Layout() {
  const props = {
    title: "Suhana's Kitchen",
    search: "Search for any recepie",
  };
  return (
    <BrowserRouter>
      <Navbar {...props} />
      <Routes>
        <Route element={<App />} path="/" />
        <Route element={<Menu />} path="/menu" />
        <Route element={<Setting />} path="/setting" />
      </Routes>
    </BrowserRouter>
  );
}

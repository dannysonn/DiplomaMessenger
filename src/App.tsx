import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
// eslint-disable-next-line import/no-extraneous-dependencies
import "normalize.css";
import "./App.css";
import Registration from "./pages/Registration/Registration";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
}

import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
// eslint-disable-next-line import/no-extraneous-dependencies
import "normalize.css";
import "./App.css";
import Registration from "./pages/Registration/Registration";
import Chats from "./pages/Chats/Chats";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/" element={<Chats />} />
    </Routes>
  );
}

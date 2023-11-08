import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import "normalize.css";
import "./App.css";
import Registration from "./pages/Registration/Registration";
import Chats from "./pages/Chats/Chats";
import Profile from "./pages/Profile/Profile";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/chats" element={<Chats />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

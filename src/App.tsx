import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import "normalize.css";
import "./App.css";
import Registration from "./pages/Registration/Registration";
import Chats from "./pages/Chats/Chats";
import Profile from "./pages/Profile/Profile";
import { getUser } from "./redux/slices/authSlice";
import { useAppDispatch } from "./redux/hooks";

export default function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUser());
  });

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/chats" element={<Chats />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

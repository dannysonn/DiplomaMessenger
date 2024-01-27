import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./src/pages/Login/Login";
import "normalize.css";
import "./App.css";
import Registration from "./src/pages/Registration/Registration";
import Chats from "./src/pages/Chats/Chats";
import Profile from "./src/pages/Profile/Profile";
import { getUser } from "./src/redux/slices/userSlice";
import { useAppDispatch } from "./src/redux/hooks";

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

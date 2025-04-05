import React, { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./src/pages/Login/Login";
import "normalize.css";
import "./App.css";
import { getUser } from "./src/redux/slices/userSlice";
import { useAppDispatch } from "./src/redux/hooks";

const Registration = React.lazy(() => import("./src/pages/Registration/Registration"))
const Chats = React.lazy(() => import("./src/pages/Chats/Chats"))
const Profile = React.lazy(() => import("./src/pages/Profile/Profile"))

export default function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUser());
  });

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/chats" element={<Chats />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    </Suspense>
  );
}

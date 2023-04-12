import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./components/Auth/Auth";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
import Profile from "./pages/Profile/Profile";
import Routines from "./pages/Routines/Routines";
import Tasks from "./pages/Tasks/Tasks";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/routines" element={<Routines />} />
            <Route path="/tasks" element={<Tasks />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

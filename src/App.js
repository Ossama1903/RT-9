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
import "./App.scss";
import NonPrivateRoutes from "./components/NonPrivateRoutes/NonPrivateRoutes";
import SideNavLayout from "./components/SideNavLayout/SideNavLayout";
import { Box, ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import { CustomizableProvider } from "./useCustomizable";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CustomizableProvider>
        <AuthProvider>
          <Router>
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route
                  path="/"
                  element={
                    <SideNavLayout>
                      <Home />
                    </SideNavLayout>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <SideNavLayout>
                      <Profile />
                    </SideNavLayout>
                  }
                />
                <Route
                  path="/routines"
                  element={
                    <SideNavLayout>
                      <Routines />
                    </SideNavLayout>
                  }
                />
                <Route
                  path="/tasks"
                  element={
                    <SideNavLayout>
                      <Tasks />
                    </SideNavLayout>
                  }
                />
              </Route>
              <Route element={<NonPrivateRoutes />}>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
              </Route>
            </Routes>
          </Router>
        </AuthProvider>
      </CustomizableProvider>
    </ThemeProvider>
  );
}

export default App;

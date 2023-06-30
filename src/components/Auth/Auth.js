import { createContext, useContext, useEffect, useState } from "react";
import { attemptLogin } from "../../API/user";
import Cookies from "js-cookie";
import { authenticate } from "../../API/util";
import { Navigate } from "react-router-dom";

const AuthContext = createContext({
  isAuthenticated: false,
  isLoading: false,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const savedToken = Cookies.get("rt9AuthenticationToken");
    authenticate(savedToken)
      .then((response) => {
        setIsAuthenticated(true);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsAuthenticated(false);
        setIsLoading(false);
        <Navigate to="/login" />;
      });
  }, []);

  async function login(email, password) {
    let response = "";
    setIsLoading(true);
    try {
      response = await attemptLogin(email, password);
      console.log("LOGGING IN");
      Cookies.set("rt9AuthenticationToken", response.data.token);
      setIsAuthenticated(true);
    } catch (e) {
      response = e;
      Cookies.remove("rt9AuthenticationToken");
      setIsAuthenticated(false);
    }
    setIsLoading(false);
    return response;
  }

  function logout() {
    setIsLoading(true);
    Cookies.remove("rt9AuthenticationToken");
    setIsAuthenticated(false);
    setIsLoading(false);
  }

  const value = { isAuthenticated, isLoading, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

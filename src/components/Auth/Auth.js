import { createContext, useContext, useEffect, useState } from "react";
import { attemptLogin } from "../../API/user";

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
    console.log(localStorage.getItem("token"));
  }, []);

  async function login(email, password, rememberMe) {
    let response = "";
    setIsLoading(true);
    try {
      response = await attemptLogin(email, password);
      if (rememberMe) localStorage.setItem("token", response.data.token);
      setIsAuthenticated(true);
    } catch (e) {
      response = e;
      setIsAuthenticated(false);
    }
    setIsLoading(false);
    return response;
  }

  function logout() {
    setIsLoading(true);
    // Implement your logout logic here and reset the isAuthenticated state
    // must destroy our session here
    setIsLoading(false);
    setIsAuthenticated(false);
  }

  const value = { isAuthenticated, isLoading, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

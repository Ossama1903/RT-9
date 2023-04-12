import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  isLoading: false,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  function login() {
    // Implement your login logic here and set the isAuthenticated state
    setIsAuthenticated(true);
  }

  function logout() {
    // Implement your logout logic here and reset the isAuthenticated state
    setIsAuthenticated(false);
  }

  const value = { isAuthenticated, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
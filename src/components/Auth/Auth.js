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
    setIsLoading(true);

    // Implement your login logic here and set the isAuthenticated state
    setIsLoading(false);
    setIsAuthenticated(true);
  }

  function logout() {
    setIsLoading(true);
    // Implement your logout logic here and reset the isAuthenticated state
    setIsLoading(false);
    setIsAuthenticated(false);
  }

  const value = { isAuthenticated, isLoading, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

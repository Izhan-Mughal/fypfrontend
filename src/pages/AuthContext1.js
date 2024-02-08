// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie'; // Import the library for handling cookies

const AuthContext = createContext();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Use useEffect to check if the user is logged in when the component mounts
  useEffect(() => {
    // Check if the user is already logged in based on the cookies
    const storedUser = JSON.parse(Cookies.get('user') || 'null');
    const storedAccessToken = Cookies.get('accessToken');
    const storedRefreshToken = Cookies.get('refreshToken');

    if (storedUser && storedAccessToken && storedRefreshToken) {
      setUser(storedUser);
      setAccessToken(storedAccessToken);
      setRefreshToken(storedRefreshToken);
      setIsLoggedIn(true);
    }
  }, []);

  // Function to handle login
  const login = (userData, accessToken, refreshToken) => {
    setUser(userData);
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    setIsLoggedIn(true);

    // Store user information in cookies
    Cookies.set('user', JSON.stringify(userData), { expires: 7 }); // Set expiration if needed
    Cookies.set('accessToken', accessToken, { expires: 7 }); // Set expiration if needed
    Cookies.set('refreshToken', refreshToken, { expires: 7 }); // Set expiration if needed
  };

  // Function to handle logout
  const logout = () => {
    setUser(null);
    setAccessToken(null);
    setRefreshToken(null);
    setIsLoggedIn(false);

    // Remove user information from cookies
    Cookies.remove('user');
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
  };

  const authValues = {
    user,
    accessToken,
    refreshToken,
    isLoggedIn,
    login,
    logout,
  };

  return <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProviders, useAuth };

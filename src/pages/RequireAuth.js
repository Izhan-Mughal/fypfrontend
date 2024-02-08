import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthProvider, useAuth } from "./AuthContext1";

const RequireAuth = ({ children }) => {
    const { isLoggedIn } = useAuth();
    const location = useLocation();

    // List of routes that should not go through authentication
    const nonAuthRoutes = ["/", "/login", "/register","/verify","/forgetPassword","/resetPassword"];

    // Check if the current route is in the nonAuthRoutes array
    const isNonAuthRoute = nonAuthRoutes.includes(location.pathname);

    // If the user is not authenticated and the route requires authentication, redirect to login
    if (!isLoggedIn && !isNonAuthRoute) {
        return <Navigate to="/login" />;
    }

    // If the user is authenticated and the route is one of the non-auth routes, redirect to dashboard
    if (isLoggedIn && isNonAuthRoute) {
        return <Navigate to="/dashboard" />;
    }

    // Otherwise, render the children (component for the current route)
    return <>{children}</>;
};

export default RequireAuth;

import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
// import useAuth from 'dashboard/app/hooks/useAuth'
import { useAuth, AuthProviders } from '../pages/AuthContext1'
import Login from './Login';
const RequireAuth = () => {
    const { user, isLoggedIn, login, logout } = useAuth();

    const location = useLocation();
    const isLoggedIn1 = true;
    console.log(isLoggedIn);
    return (
        isLoggedIn ?
            <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
    )
}

export default RequireAuth
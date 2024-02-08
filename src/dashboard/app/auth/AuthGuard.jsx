import useAuth from 'dashboard/app/hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const AuthGuard = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const isAuthenticated2 = true;
  const { pathname } = useLocation();

  if (isAuthenticated2) return <>{children}</>;

  return <Navigate replace to="/session/signin" state={{ from: pathname }} />;
};

export default AuthGuard;

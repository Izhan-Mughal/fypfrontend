import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import AuthGuard from './auth/AuthGuard';
import { authRoles } from './auth/authRoles';
import Loadable from './components/Loadable';
import MatxLayout from './components/MatxLayout/MatxLayout';
import materialRoutes from 'dashboard/app/views/material-kit/MaterialRoutes';
import Profile from './views/dashboard/Profile';
import { Chatbox } from './components';
import Funding from './views/dashboard/Funding';
import InboxDash from './views/dashboard/Inbox';
import DashHome from './views/dashboard/DashHome';


// session pages
const NotFound = Loadable(lazy(() => import('dashboard/app/views/sessions/NotFound')));
const JwtLogin = Loadable(lazy(() => import('dashboard/app/views/sessions/JwtLogin')));
const JwtRegister = Loadable(lazy(() => import('dashboard/app/views/sessions/JwtRegister')));
const ForgotPassword = Loadable(lazy(() => import('dashboard/app/views/sessions/ForgotPassword')));

// echart page
const AppEchart = Loadable(lazy(() => import('dashboard/app/views/charts/echarts/AppEchart')));

// dashboard page
const Analytics = Loadable(lazy(() => import('dashboard/app/views/dashboard/Analytics')));

const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [
      ...materialRoutes,
      // dashboard route
      {
        path: '/dashboard/',
        element: <DashHome />,
        auth: authRoles.admin
      },
      {
        path: '/',
        element: <DashHome />,
        auth: authRoles.admin
      },
      {
        path: '/dashboard/Profile',
        element: <Profile />,
        auth: authRoles.admin
      },
      {
        path: '/dashboard/EditProfile',
        element: <Profile />,
        auth: authRoles.admin
      },
      {
        path: '/dashboard/Funding',
        element: <Funding />,
        auth: authRoles.admin
      },
      {
        path: '/dashboard/Inbox',
        element: <InboxDash />,
        auth: authRoles.admin
      },
      {
        path: '/dashboard/Analytics',
        element: <Analytics />,
        auth: authRoles.admin
      },

      // e-chart rooute
      {
        path: '/charts/echarts',
        element: <AppEchart />,
        auth: authRoles.editor
      }
    ]
  },

  // session pages route
  { path: '/session/404', element: <NotFound /> },
  { path: '/session/signin', element: <JwtLogin /> },
  { path: '/session/signup', element: <JwtRegister /> },
  { path: '/session/forgot-password', element: <ForgotPassword /> },

  { path: '/', element: <Navigate to="dashboard/default" /> },
  { path: '*', element: <NotFound /> }
];

export default routes;

import "./App.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/auth-context";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Analytics from "./views/dashboard/analytics/page/Analytics";
import Ecommerce from "./views/dashboard/ecommerce/page/Ecommerce";
import Calendar from "./views/apps/Calendar";
import Chat from "./views/apps/Chat";
import Projects from "./views/apps/projects/Projects";
import ProjectDetail from "./views/apps/projects/detail/ProjectDetail";
import Tasks from "./views/apps/tasks/Tasks";
import Inbox from "./views/apps/email/Inbox";
import Detail from "./views/apps/email/Detail";
import Compose from "./views/apps/email/Compose";
import SignIn from "./views/auth/SignIn";
import SignUp from "./views/auth/SignUp";
import ForgotPassword from "./views/auth/ForgotPassword";
import RequireAuth from "./context/require-auth";

function App() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if currentUser exists on initial render
  useEffect(() => {
    if (currentUser) {
      // Check if the user is trying to access one of the auth routes (SignIn, SignUp, or ForgotPassword)
      const isAuthRoute =
        location.pathname === "/" ||
        location.pathname === "/signup" ||
        location.pathname === "/forgot-password";
      if (!isAuthRoute) {
        // Redirect the user to the ecommerce dashboard if they are logged in and trying to access an auth route
        navigate("/dashboard/ecommerce", { replace: true });
      }
    }
  }, [currentUser, navigate, location]);

  return (
    <Routes>
      {/* Unprotected routes */}
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Protected routes */}
      <Route
        path="/dashboard/ecommerce"
        element={
          <RequireAuth>
            <Ecommerce />
          </RequireAuth>
        }
      />
      <Route
        path="/dashboard/analytics"
        element={
          <RequireAuth>
            <Analytics />
          </RequireAuth>
        }
      />
      <Route
        path="/apps/calendar"
        element={
          <RequireAuth>
            <Calendar />
          </RequireAuth>
        }
      />
      <Route
        path="/apps/chat"
        element={
          <RequireAuth>
            <Chat />
          </RequireAuth>
        }
      />
      <Route
        path="/apps/projects/list"
        element={
          <RequireAuth>
            <Projects />
          </RequireAuth>
        }
      />
      <Route
        path="/apps/projects/details"
        element={
          <RequireAuth>
            <ProjectDetail />
          </RequireAuth>
        }
      />
      <Route
        path="/apps/tasks"
        element={
          <RequireAuth>
            <Tasks />
          </RequireAuth>
        }
      />
      <Route
        path="/apps/email/inbox"
        element={
          <RequireAuth>
            <Inbox />
          </RequireAuth>
        }
      />
      <Route
        path="/apps/email/details"
        element={
          <RequireAuth>
            <Detail />
          </RequireAuth>
        }
      />
      <Route
        path="/apps/email/compose"
        element={
          <RequireAuth>
            <Compose />
          </RequireAuth>
        }
      />
    </Routes>
  );
}

export default App;

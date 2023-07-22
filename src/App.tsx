import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard/e-commerce" element={<Ecommerce />} />
        <Route path="/dashboard/analytics" element={<Analytics />} />
        <Route path="/apps/calendar" element={<Calendar />} />
        <Route path="/apps/chat" element={<Chat />} />
        <Route path="/apps/projects/list" element={<Projects />} />
        <Route path="/apps/projects/details" element={<ProjectDetail />} />
        <Route path="/apps/tasks" element={<Tasks />} />
        <Route path="/apps/email/inbox" element={<Inbox />} />
        <Route path="/apps/email/details" element={<Detail />} />
        <Route path="/apps/email/compose" element={<Compose />} />
      </Routes>
    </Router>
  );
}

export default App;

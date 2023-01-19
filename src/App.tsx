import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Analytics from "./views/dashboard/analytics/page/Analytics";
import Ecommerce from "./views/dashboard/ecommerce/page/Ecommerce";
import Calendar from "./views/apps/Calendar";
import Chat from "./views/apps/Chat";
import Projects from "./views/apps/projects/Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ecommerce />} />
        <Route path="/dashboard/analytics" element={<Analytics />} />
        <Route path="/apps/calendar" element={<Calendar />} />
        <Route path="/apps/chat" element={<Chat />} />
        <Route path="/apps/projects/list" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Analytics from "./views/dashboard/analytics/page/Analytics";
import Ecommerce from "./views/dashboard/ecommerce/page/Ecommerce";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ecommerce />} />
        <Route path="/dashboard/analytics" element={<Analytics />} />
      </Routes>
    </Router>
  );
}

export default App;

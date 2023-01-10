import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Analytics from "./views/dashboard/analytics/page/Analytics";
import Ecommerce from "./views/dashboard/ecommerce/page/Ecommerce";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Analytics />} />
        <Route path="/dashboard/ecommerce" element={<Ecommerce />} />
      </Routes>
    </Router>
  );
}

export default App;

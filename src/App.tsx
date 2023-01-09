import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Analytics from "./pages/dashboard/Analytics";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Analytics />} />
      </Routes>
    </Router>
  );
}

export default App;

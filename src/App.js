import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home/Home";
import Introduction from "./pages/Introduction/Introduction";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduction" element={<Introduction />} />
      </Routes>
    </Router>
  );
}

export default App;

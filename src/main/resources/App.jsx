import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ApiDetail from "./components/ApiDetail";
import ApiList from "./components/ApiList";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ApiList />} />
        <Route path="/apis/:id" element={<ApiDetail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    );
  }
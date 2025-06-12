import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ApiDetail from "../resource/components/ApiDetail";
import ApiList from "../resource/components/ApiList";
import Login from "../resource/components/Login";

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
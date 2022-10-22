import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import NotFoundPage from "./pages/NotFound404";
import DashboardPage from "./pages/Dashboard";
import DetailPage from "./pages/Detail";
import LoginPage from "./pages/Login"

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

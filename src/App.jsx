import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Main/Home";
import About from "../pages/Main/About";
import Vans from "../pages/Main/Vans";
import VanDetails from "../pages/Main/VanDetails";
import Layout from "../components/main-components/Layout";
import DashboardLayout from "../components/host-components/DashboardLayout";
import DashboardGeneral from "../pages/Host/DashboardGeneral";
import DashboardReviews from "../pages/Host/DashboardReviews";
import DashboardIncome from "../pages/Host/DashboardIncome";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetails />} />
          <Route element={<DashboardLayout />}>
            <Route path="/host" element={<DashboardGeneral />} />
            <Route path="/host/reviews" element={<DashboardReviews />} />
            <Route path="/host/income" element={<DashboardIncome />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

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
import DashboardVans from "../pages/Host/DashboardVans";
import DashboardVanDetailLayout from "../components/host-components/DashboardVanDetailsLayout";
import DashboardVanDescription from "../pages/Host/DashboardVanDescription";
import DashboardVanPhotos from "../pages/Host/DashboardVanPhotos";
import DashboardVanPricing from "../pages/Host/DashboardVanPricing";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetails />} />
          <Route path="host" element={<DashboardLayout />}>
            <Route index element={<DashboardGeneral />} />
            <Route path="reviews" element={<DashboardReviews />} />
            <Route path="income" element={<DashboardIncome />} />
            <Route path="vans" element={<DashboardVans />} />
            <Route path="vans/:id" element={<DashboardVanDetailLayout />}>
              <Route index element={<DashboardVanDescription />} />
              <Route path="pricing" element={<DashboardVanPricing />} />
              <Route path="photos" element={<DashboardVanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

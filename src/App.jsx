import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/main-components/Layout";
import Home from "../pages/Main/Home";
import About from "../pages/Main/About";
import Vans from "../pages/Main/Vans";
import Login from "../pages/Main/Login";
import VanDetails from "../pages/Main/VanDetails";
import AuthRequired from "../components/host-components/AuthRequired";
import HostLayout from "../components/host-components/HostLayout";
import HostGeneral from "../pages/Host/HostGeneral";
import HostReviews from "../pages/Host/HostReviews";
import HostIncome from "../pages/Host/HostIncome";
import HostVans from "../pages/Host/HostVans";
import HostVanDetailLayout from "../components/host-components/HostVanDetailsLayout";
import HostVanDescription from "../pages/Host/HostVanDescription";
import HostVanPhotos from "../pages/Host/HostVanPhotos";
import HostVanPricing from "../pages/Host/HostVanPricing";
import NotFound from "../pages/Main/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetails />} />
          <Route path="login" element={<Login />} />
          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<HostGeneral />} />
              <Route path="reviews" element={<HostReviews />} />
              <Route path="income" element={<HostIncome />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetailLayout />}>
                <Route index element={<HostVanDescription />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

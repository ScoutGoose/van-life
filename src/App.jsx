import "../styles/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Vans from "../pages/Vans";
import VanDetails from "../pages/VanDetails";
import Layout from "../components/Layout";
import Dashboard from "../pages/Host/Dashboard";
import Reviews from "../pages/Host/Reviews";
import Income from "../pages/Host/Income";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetails />} />
          <Route path="/host" element={<Dashboard />} />
          <Route path="/host/reviews" element={<Reviews />} />
          <Route path="/host/income" element={<Income />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

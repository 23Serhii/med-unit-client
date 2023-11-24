import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Doctors from "../pages/Doctors/Doctors";
import Drugs from "../pages/Drugs/Drugs";
import { Routes, Route } from "react-router-dom";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import DrugDetails from "../pages/Drugs/DrugDetails";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/services" element={<Services />} />
      <Route path="/drugs" element={<Drugs />} />
      <Route path="/drugs/:id" element={<DrugDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;

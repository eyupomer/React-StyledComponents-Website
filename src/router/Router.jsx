import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "../globalStyles";
import Home from "../pages/Home";
import PricingPage from "../pages/Pricing";
import SignupPage from "../pages/Signup";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default Router;

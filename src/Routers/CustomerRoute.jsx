import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../components/Home/Home.jsx";
import OurJourney from "../components/OurJourney/OurJourney.jsx";
import NotFound from "../components/NotFound/NotFound.jsx";
import ComingSoon from "../components/ComingSoon/ComingSoon.jsx";
import Services from "../components/Services/Services.jsx";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy.jsx";
import TermsConditions from "../components/TermsConditions/TermsConditions.jsx";
import RefundPolicy from "../components/RefundPolicy/RefundPolicy.jsx";
import Product from "../components/Product/Product.jsx";
import News from "../components/News/News.jsx";
import About from "../components/About/About.jsx";
import Login from "../components/Login/Login.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const CustomerRoute = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Home />} />
        <Route path="/our-journey" element={<OurJourney />} />
        <Route path="/About" element={<About />} />
        <Route path="/News" element={<News />} />
        <Route path="/Investors" element={<ComingSoon />} />
        <Route path="/Claim" element={<ComingSoon />} />
        <Route path="/Discover" element={<ComingSoon />} />
        <Route path="/Aggregate" element={<ComingSoon />} />
        <Route path="/Make a Will" element={<ComingSoon />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsConditions" element={<TermsConditions />} />
        <Route path="/RefundPolicy" element={<RefundPolicy />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Investor" element={<ComingSoon />} />
        <Route path="/TryVealthxNow" element={<ComingSoon />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default CustomerRoute;

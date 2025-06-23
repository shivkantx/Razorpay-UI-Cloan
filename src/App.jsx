// src/App.jsx

import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Page sections
import Hero from "./pages/Hero";
import FeaturePayments from "./pages/FeaturePayments";
import FeatureBusinessBanking from "./pages/FeatureBusinessBanking";
import ProductSuiteSection from "./pages/ProductSuiteSection";
import CoreFeaturesSection from "./pages/CoreFeaturesSection";
import JoinRazorpaySection from "./pages/JoinRazorpaySection";
import TestimonialSection from "./pages/TestimonialSection";

function App() {
  return (
    <div className="w-full overflow-x-hidden font-mullish">
      <Header />
      <Hero />
      <FeaturePayments />
      <FeatureBusinessBanking />
      <ProductSuiteSection />
      <CoreFeaturesSection />
      <JoinRazorpaySection />
      <TestimonialSection />
      <Footer />
    </div>
  );
}

export default App;



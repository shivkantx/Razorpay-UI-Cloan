import React from "react";
import activation from "../assets/instant-activation-icon.svg";
import integration from "../assets/easy-integration.svg";
import apiDriven from "../assets/api-driven-icon.svg";
import paymentModes from "../assets/payment-modes.svg";
import pricing from "../assets/simple-pricing.svg";
import support from "../assets/industry-support-icon.svg";
import dashboard from "../assets/dashboard-reporting-icon.svg";
import secure from "../assets/secure-icon.svg";
// import bgImage from "../assets/core-features-sectionBg.svg";
import Knowmore from "../components/Usable/Knowmore"


function CoreFeaturesSection() {
  const features = [
    {
      img: activation,
      title: "Instant Activation",
      desc: "Get activated and transact within 2 minutes. Completely online onboarding with minimum documentation.",
    },
    {
      img: integration,
      title: "Easy Integration",
      desc: "With plugins for all major platforms and languages, integrate and go live with Razorpay in less than an hour.",
    },
    {
      img: apiDriven,
      title: "API Driven",
      desc: "Build your business for scale with our complete API-driven automation that requires zero manual intervention.",
    },
    {
      img: paymentModes,
      title: "100+ payment modes",
      desc: "Offer your customers the luxury of all payment modes including Credit/Debit cards, Netbanking, UPI, Wallets etc.",
    },
    {
      img: pricing,
      title: "Simple Pricing",
      desc: "Our innovative payment solutions with competitive pricing make payments simpler.",
    },
    {
      img: support,
      title: "Best in Industry Support",
      desc: "Always available email, phone and chat based support to help you in your every step.",
    },
    {
      img: dashboard,
      title: "Dashboard Reporting",
      desc: "Real-time data and insights on your Razorpay Dashboard to make informed business decisions.",
    },
    {
      img: secure,
      title: "Secure",
      desc: "PCI DSS Level 1 compliant solution which removes your burden of regulatory compliance.",
    },
  ];

  return (
    <section
      className="bg-[#0E5DC4] mb-[200px] relative w-full bg-cover bg-no-repeat bg-center mt-14 pt-[120px] pb-[120px]"
      // style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="relative w-11/12 max-w-[1080px] mx-auto items-center pt-4">
        <h3 className="text-white font-mullish font-extrabold text-2xl text-center">Features</h3>
        <div className="w-[30px] h-1 bg-greenLight mx-auto mt-4"></div>
        <p className="text-white font-mullish font-medium text-center mx-auto max-w-[500px] mt-4">
          Empower your business with all the right tools to accept
        </p>
        <p className="text-white font-mullish font-medium text-center mx-auto max-w-[500px]">
          online payments and provide the best customer experience
        </p>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 mt-8">
          {features.map((feature, index) => (
            <div key={index} className="relative p-4">
              <img src={feature.img} alt={feature.title} />
              <h3 className="text-white font-mullish font-bold text-lg py-3 leading-[1.2]">{feature.title}</h3>
              <p className="font-mullish font-medium text-white opacity-75">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreFeaturesSection;

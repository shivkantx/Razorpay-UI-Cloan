// src/pages/FeaturePayments.jsx
import React from "react";
import dotted1 from "../assets/feature-section1-dottedrows.png";
import dotted2 from "../assets/feature-section1-dottedrows.png";
import paymentSuite from "../assets/payment-suite.png";
import Knowmore from "../components/Usable/Knowmore";
import { FaCheck } from "react-icons/fa6";

// Icons per card
import { MdLink, MdInsertPageBreak } from "react-icons/md";
import { FaRegCirclePlay } from "react-icons/fa6";
import { BsRepeat } from "react-icons/bs";
import { MdOutlineAccountTree } from "react-icons/md";
import { FaFileInvoice } from "react-icons/fa6";

const cards = [
  {
    title: "Payment Links",
    desc: "Share payment link via an email, SMS, messenger, chatbot etc. and get paid immediately",
    icon: <MdLink className="text-white w-6 h-6" />,
  },
  {
    title: "Payment Pages",
    desc: "Take your store online instantly with zero coding. Accept payments with a custom-branded page",
    icon: <MdInsertPageBreak className="text-white w-6 h-6" />,
  },
  {
    title: "Payment Buttons",
    desc: "Create, copy & collect with just one click. Add Payment Button to your website or blog with ease",
    icon: <FaRegCirclePlay className="text-white w-6 h-6" />,
  },
  {
    title: "Subscriptions",
    desc: "Set up and manage recurring payments for your products & services easily with Razorpay Subscriptions",
    icon: <BsRepeat className="text-white w-6 h-6" />,
  },
  {
    title: "Route",
    desc: "Split incoming payments to individual accounts or manage marketplace money flow easily",
    icon: <MdOutlineAccountTree className="text-white w-6 h-6" />,
  },
  {
    title: "Invoices",
    desc: "Create, customize, and send GST-compliant invoices with a built-in payment link instantly",
    icon: <FaFileInvoice className="text-white w-6 h-6" />,
  },
];

function FeaturePayments() {
  return (
    <section className="relative mt-[190px] px-8 xl:px-0">
      <img
        src={dotted1}
        alt=""
        loading="lazy"
        width="233px"
        height="167px"
        className="absolute -top-[8rem] left-[10rem] inline-block"
      />
      <img
        src={dotted2}
        alt=""
        loading="lazy"
        width="233px"
        height="167px"
        className="absolute top-[3rem] right-0 inline-block rotate-180"
      />

      <div className="relative w-[11/12] max-w-[1080px] mx-auto pt-4">
        <h2 className="font-mullish text-center text-2xl leading-[1.2] font-extrabold hidden md:block">
          Accept Payments with Razorpay Payment Suite
        </h2>
        <h2 className="font-mullish text-center text-[40px] leading-[1.2] font-bold block md:hidden px-10">
          Explore Razorpay Payment Suite
        </h2>
        <div className="w-6 h-1 bg-greenLight mx-auto mt-4 mb-6"></div>

        {/* content box */}
        <div className="w-full bg-white flex rounded-md relative px-8 py-10 min-h-[500px] border border-gray-200 lg:px-12 lg:my-20">
          {/* left section */}
          <div className="flex flex-col justify-between w-full">
            <h3 className="font-mullish font-bold md:text-[28px] leading-12 md:max-w-[500px] text-[20px] max-w-[75%]">
              Supercharge your business with the all‑powerful{" "}
              <span className="text-blue-500">Payment Gateway</span>
            </h3>
            <ul className="space-y-2">
              {[
                "100+ Payment Methods",
                "Industry Leading Success Rate",
                "Superior Checkout Experience",
                "Easy to Integrate",
                "Instant Settlements from day 1",
                "In-depth Reporting and Insights",
              ].map((item, index) => (
                <li
                  key={index}
                  className="font-mullish flex items-center gap-3 lg:gap-4"
                >
                  <FaCheck className="text-green-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* buttons */}
            <div className="flex items-stretch md:items-center gap-4 flex-col-reverse md:flex-row">
              <button className="bg-blue-500 md:w-fit text-white py-[14px] px-[18px] rounded-md font-mullish font-bold hover:bg-blue-400 transition-all duration-200 w-full">
                Sign Up Now &#10132;
              </button>
              <a
                href="#"
                className="font-mullish font-bold text-lightBlue500 hover:text-grayBlue transition-all duration-200"
              >
                <Knowmore />
              </a>
            </div>
          </div>

          {/* right section */}
          <img
            src={paymentSuite}
            alt=""
            className="hidden md:block lg:max-w-[600px] absolute right-0 bottom-0 md:max-w-[400px] md:mr-8 lg:mr-0"
          />
        </div>

        {/* card grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="w-full min-h-[15rem] relative cursor-pointer"
            >
              <div className="bg-blue-500 absolute right-3 top-3 w-12 h-12 rounded-full z-[8] flex items-center justify-center">
                {card.icon}
              </div>

              <svg
                viewBox="0 0 349.32501220703125 225"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9] transition-all duration-200"
                style={{ strokeOpacity: 0.15 }}
              >
                <path
                  d="m 0 6   a 6 6 0 0 1 6 -6   h 250.32501220703125   a 16 16 0 0 1 11 5   l 77 77   a 16 16 0 0 1 5 11   v 126   a 6 6 0 0 1 -6 6   h -337.32501220703125   a 6 6 0 0 1 -6 -6   z"
                  fill="#fff"
                ></path>
              </svg>

              <div className="z-[10] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                <div>
                  <h3 className="font-mullish font-extrabold text-deepBlueHead leading-[1.2] text-[1.375rem]">
                    {card.title}
                  </h3>
                  <p className="font-mullish text-grayText mt-6">{card.desc}</p>
                </div>
                <div className="flex items-center cursor-pointer group">
                  <a
                    href="#"
                    className="font-mullish font-bold text-lightBlue500 group-hover:text-grayBlue transition-all duration-200"
                  >
                    <Knowmore />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturePayments;

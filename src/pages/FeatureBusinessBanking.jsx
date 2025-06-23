// src/pages/FeatureBusinessBanking.jsx
import React from "react";
import flame1 from "../assets/x-flame-1.png";
import flame2 from "../assets/x-flame-2.png";
import razorpayX from "../assets/razorpayX.svg";
import bankingImg from "../assets/buisness-banking.png";
// import bgImage from "../assets/feature-section-2BG.svg";
import Knowmore from "../components/Usable/Knowmore";
import { MdAccountBalance } from "react-icons/md";
import { MdCreditScore } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa6";

const cardData = [
  {
    title: "Current Account",
    desc: "Current accounts for fast-growing businesses, supported by the best-in-class technology",
    icon: <MdAccountBalance className="text-2xl"/>,
  },
  {
    title: "Capital & Credits",
    desc: "Instant additional cash and corporate cards designed for growing businesses",
    icon: <MdCreditScore className="text-2xl"/>,
  },
  {
    title: "Payouts",
    desc: "Make simple, reliable & secure payouts to bank accounts, UPI IDs or wallets",
    icon: <FaArrowUp className="transition-all rotate-45 text-2xl " />,
  },
];

function FeatureBusinessBanking() {
  return (
    <section
      className="bg-[#14182B] pt-[11rem] mb-[400px] mt-14 px-8 xl:px-0"
      
    >
      <div className="w-[11/12] max-w-[1080px] pt-12 mx-auto relative mt-8">
        <h2 className="font-mullish text-center text-2xl leading-[1.2] font-bold text-white">
          Explore Razorpay Business Banking
        </h2>
        <div className="w-6 h-1 bg-greenLight mx-auto mt-4 mb-6" />

        <div className="relative w-full min-h-[440px] flex flex-col gap-8 mt-20">
          <img src={flame1} alt="" className="absolute -top-[142px] -left-[140px] w-[200px]" />
          <img src={flame2} alt="" className="absolute top-[145px] -right-[180px] w-[270px]" />

          <div className="relative w-full bg-[#181c2e] p-12 border border-slate-600 rounded-md z-20">
            <div className="flex flex-col justify-between h-full w-full gap-12 z-20">
              <h3 className="font-mullish text-[28px] text-white font-bold leading-10 max-w-[500px]">
                Manage your company’s finances with{" "}
                <img src={razorpayX} alt="" className="h-[32px] w-[168px] inline" />
                <span className="text-greenLight"> Business Banking</span>
              </h3>

              <ul className="space-y-[0.6rem]">
                {[
                  "Open a fully digital current account",
                  "Automate payables & compliment payments",
                  "Simplify and track spends with Corporate cards",
                  "View financial insights at a glance",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="font-mullish text-white opacity-90 flex items-center gap-4"
                  >
                    <i data-feather="check" className="text-greenLight"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col-reverse items-stretch md:flex-row w-full md:items-center gap-5">
                <div className="flex items-stretch md:items-center gap-4 flex-col-reverse md:flex-row">
                  <button className="bg-blue-500 md:w-fit text-white py-[14px] px-[18px] rounded-md font-mullish font-bold hover:bg-blue-400 transition-all duration-200 w-full">
                    Sign Up Now &#10132;
                  </button>
                </div>
                <div className="flex gap-2 items-center group cursor-pointer">
                  <a
                    href="#"
                    className="font-mullish text-lightBlue300 font-bold group-hover:text-lightBlue500 transition-all duration-200"
                  >
                    <Knowmore />
                  </a>
                  <i
                    data-feather="chevron-right"
                    className="w-5 h-5 text-lightBlue300 group-hover:text-lightBlue500 transition-all duration-200"
                  ></i>
                </div>
              </div>
            </div>

            <img
              src={bankingImg}
              alt=""
              className="absolute right-0 bottom-0 hidden md:block md:max-w-[400px] lg:max-w-[600px]"
            />
          </div>

          {/* Grid cards - 3 items with icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8 md:my-8 mb-52">
            {cardData.map((card, index) => (
              <div key={index} className="w-full min-h-[15rem] relative cursor-pointer">
                <div className="bg-blue-500 text-white absolute right-3 top-3 w-12 h-12 rounded-full z-[8] flex items-center justify-center text-xl">
                  {card.icon}
                </div>
                <svg
                  viewBox="0 0 349.32501220703125 225"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  className="stroke-1 stroke-[#818597] h-full w-full absolute z-[9]"
                  style={{ strokeOpacity: 0.5 }}
                >
                  <path
                    d="m 0 6 a 6 6 0 0 1 6 -6 h 250.32501220703125 a 16 16 0 0 1 11 5 l 77 77 a 16 16 0 0 1 5 11 v 126 a 6 6 0 0 1 -6 6 h -337.32501220703125 a 6 6 0 0 1 -6 -6 z"
                    fill="#181c2e"
                  ></path>
                </svg>

                <div className="z-[10] absolute w-full h-full flex flex-col justify-between pl-5 py-6 pr-8">
                  <div>
                    <h3 className="font-mullish font-bold text-white leading-[1.2] text-[1.375rem]">
                      {card.title}
                    </h3>
                    <p className="font-mullish text-gray-400 mt-6">{card.desc}</p>
                  </div>
                  <div className="flex items-center cursor-pointer group">
                    <a
                      href="#"
                      className="font-mullish font-bold text-lightBlue500 group-hover:text-grayBlue transition-all duration-200"
                    >
                      <Knowmore />
                    </a>
                    <i
                      data-feather="chevron-right"
                      className="w-5 h-5 text-lightBlue500 group-hover:text-grayBlue transition-all duration-200"
                    ></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA section */}
          <div className=" md:flex md:flex-col lg:flex-row w-full items-center justify-evenly border border-slate-600 mb-20 py-8 relative rounded-md">
            <p className="  font-mullish text-white text-xl opacity-80">
              Check out the live demo to learn how RazorpayX works.{" "}
              <span className="font-bold">No sign-up required!</span>
            </p>
            <button className="relative flex items-center bg-blue-500 text-white py-[12px] px-[18px] pr-[90px] rounded-md font-mullish font-bold hover:bg-blue-400 transition-all duration-200">
              Check out the demo
              <div className="w-12 h-[55px] bg-greenLight absolute right-5 skew-x-[20deg] flex items-center justify-center">
                <span className="-skew-x-[20deg]">&#10132;</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureBusinessBanking;

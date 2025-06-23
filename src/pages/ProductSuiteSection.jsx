// src/pages/ProductSuiteSection.jsx
import React from "react";
import { FaBolt, FaMobileAlt, FaMousePointer, FaShoppingCart, FaCreditCard } from "react-icons/fa";
import dottedImg from "../assets/feature-section1-dottedrows.png";
import bgImg from "../assets/instant-settlement-bg.svg";
import bgHoverImg from "../assets/instant-settlement-bghover.svg";
import Knowmore from "../components/Usable/Knowmore";

const cardData = [
  {
    icon: <FaBolt className=" bg-blue-400 p-3 rounded-full text-5xl" />,

    title: "Instant Settlements",
    description:
      "Settle your customer payments within 10 seconds as soon your account is activated, even during holidays.",
  },
  {
    icon: <FaMobileAlt className="bg-blue-400 p-3 rounded-full text-5xl" />,
    title: "UPI AutoPay",
    description: "Allow customers to set up recurring payments using UPI Apps.",
  },
  {
    icon: <FaMousePointer className="bg-blue-400 p-3 rounded-full text-5xl" />,
    title: "Payment Button",
    description:
      "Accept payments on your website, in less than 5 minutes. No developer needed.",
  },
  {
    icon: <FaShoppingCart className="bg-blue-400 p-3 rounded-full text-5xl" />,
    title: "Magic Checkout",
    description:
      "Improve your order conversion rates & reduce return-to-origins. Boost your business by 20%!",
  },
  {
    icon: <FaCreditCard className="bg-blue-400 p-3 rounded-full text-5xl" />,
    title: "Corporate Cards",
    description:
      "Simplify your recurring, international and team expenses with savings on every spend. Save up to ₹10 lacs every month.",
  },
];

const ProductSuiteSection = () => {
  return (
    <section className="relative   md:-mt-36 px-8 xl:px-0 font-mullish">
      <div className="w-[11/12] max-w-[1080px] pt-4 mx-auto relative mt-8">
        <img
          src={dottedImg}
          alt=""
          className="absolute w-[233px] left-[300px] -top-[6rem] -z-10"
          loading="lazy"
        />
        <img
          src={dottedImg}
          alt=""
          className="absolute w-[233px] -right-[3.5rem] -top-[6rem] -z-10"
          loading="lazy"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4 relative z-20">
          {/* Section heading */}
          <div className="relative flex items-center z-0">
            <h2 className="font-extrabold text-deepBlue text-[40px] leading-[3.375rem] max-w-[80%]">
              New in the <span className="text-lightBlue">Razorpay</span> Product Suite
            </h2>
          </div>

          {/* Cards */}
          {cardData.map((card, index) => (
            <div
              key={index}
              className="p-10 w-full min-h-[300px] bg-no-repeat bg-white hover:cursor-pointer hover:scale-105 transition-all duration-200 group shadow-sm"
              style={{
                backgroundImage: `url(${bgImg})`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundImage = `url(${bgHoverImg})`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundImage = `url(${bgImg})`;
              }}
            >
              <div>{card.icon}</div>
              <h3 className="font-extrabold text-lg pt-4">{card.title}</h3>
              <p className="py-3 text-grayText leading-normal">{card.description}</p>
              <div>
                <a
                  href="#"
                  className="font-bold text-lightBlue500 group-hover:text-lightBlue transition-all duration-200"
                >
                  <Knowmore />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSuiteSection;

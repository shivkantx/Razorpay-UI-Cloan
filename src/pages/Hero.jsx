import React from "react";
import HeroImage from "../assets/hero-illustration.jpg";
import HeroShape from "../assets/hero-shape.svg";

const Hero = () => {
  return (
    <section className="relative bg-[#02042a]">
      <div className="flex justify-between items-center w-11/12 mx-auto max-w-[1080px] lg:flex-row flex-col">
        {/* Left */}
        <div className="space-y-8">
          <h1 className="font-mullish font-extrabold text-[40px] leading-[1.2] text-white">
            Power your finance, grow your business
          </h1>

          <div className="w-6 h-1 bg-greenLight"></div>

          <p className="font-mullish text-[18px] leading-7 text-white opacity-70">
            Accept payments from customers. Automate payouts to vendors & employees.
            Never run out of working capital.
          </p>

          <button className="bg-blue-500 text-white hover:bg-blue-600 rounded-md font-mullish font-bold hover:bg-lightBlue500 transition-all duration-200 py-[14px] px-[18px]">
            Sign Up Now
          </button>
        </div>

        {/* Right */}
        <img
          src={HeroImage}
          alt="Hero Illustration"
          className="lg:max-w-[670px] w-full mt-32 mb-12 md:my-0"
        />
      </div>

      {/* Background Shape */}
      <div className="absolute left-0 right-0 w-[103%]">
        <img src={HeroShape} alt="Hero Shape" className="object-fill w-[103%]" />
      </div>
    </section>
  );
};

export default Hero;
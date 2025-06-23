import React from "react";
import companiesImage from "../assets/comanies.png";

const JoinRazorpaySection = () => {
  return (
    <section className="bg-[#f4f8fe] w-full relative md:pt-40 md:pb-12 md:-mt-[200px] -z-10 -mt-[5rem] font-mullish">
      <div className="w-11/12 max-w-[1080px] mx-auto relative flex flex-col md:flex-row items-center md:h-[530px] gap-14">
        {/* Left Content */}
        <div className="flex flex-col justify-center md:max-w-[450px]">
          <h2 className="font-extrabold text-2xl text-deepBlue">
            Join the 50,00,000+ businesses using Razorpay
          </h2>
          <div className="w-6 h-1 bg-greenLight mb-6 my-4"></div>
          <p>
            We make it easier for you to focus on building great products while
            we work on simplifying your payments. Become one of us by joining
            thousands of our happy users and simplify the online payment
            experience for your customers.
          </p>
          <p className="mt-6">
            Focus on your business while we handle the complexities of payments
            for you.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-[500px] h-[550px] relative overflow-hidden">
          <div className="absolute top-0 bg-gradient-to-b from-[#f4f8ff] to-[#fff0] h-[150px] w-full z-10"></div>
          <img
            src={companiesImage}
            alt="Companies"
            className="w-[500px] move-image absolute"
          />
          <div className="absolute bottom-0 bg-gradient-to-t from-[#f4f8ff] to-[#fff0] h-[150px] w-full z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default JoinRazorpaySection;

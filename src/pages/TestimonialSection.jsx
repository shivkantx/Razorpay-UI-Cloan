import React from "react";
import dottedRows from "../assets/feature-section1-dottedrows.png";
import profilePic from "../assets/profile.jpg";
import quotes from "../assets/double-quotes.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";
import githubIcon from "../assets/github-icon.svg";
import htmlLogo from "../assets/htmllogo.png";
import cssLogo from "../assets/csslogo.png";
import tailwindLogo from "../assets/tailwindlogo.png";
import jsLogo from "../assets/JavaScript-logo.png";
import googleFonts from "../assets/googlefonts.png";

function TestimonialSection() {
  return (
    <section className="relative">
      <div className="w-11/12 max-w-[1300px] relative mx-auto py-20">
        <img
          src={dottedRows}
          alt=""
          loading="lazy"
          className="absolute top-[120px] -z-10"
        />
        <h2 className="font-mullish mx-auto text-center text-2xl font-bold text-deepBlueHead">
          Razorpay Clone
        </h2>
        <h2 className="font-mullish mx-auto text-center text-2xl font-bold text-deepBlueHead">
          This is not an official site of Razorpay
        </h2>

        <div className="w-[30px] h-1 bg-greenLight mx-auto my-4" />

        {/* Left Button */}
        <button className="w-[100px] h-[100px] bg-[#f4f8ff] rounded-full absolute left-0 top-1/2 flex justify-center items-center">
          <div className="w-[65%] h-[65%] bg-[#f4f8ff] flex justify-center items-center rounded-full mix-blend-multiply">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="feather feather-chevron rotate-180 -right w-10 h-10 text-lightBlue500 group-hover:text-lightBlue transition-all duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </button>

        {/* Right Button */}
        <button className="w-[100px] h-[100px] bg-[#f4f8ff] rounded-full absolute right-0 top-1/2 flex justify-center items-center">
          <div className="w-[65%] h-[65%] bg-[#f4f8ff] flex justify-center items-center rounded-full mix-blend-multiply">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="feather feather-chevron -right w-10 h-10 text-lightBlue500 group-hover:text-lightBlue transition-all duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </button>

        {/* Main Content */}
        <div className="flex flex-row max-w-[800px] items-center mx-auto gap-[100px] mt-10">
          {/* Profile Image */}
          <div>
            <img
              src={profilePic}
              alt="Profile"
              className="rounded-md w-[300px] h-[450px]"
            />
          </div>

          {/* Right Info */}
          <div className="flex flex-col gap-6">
            <img src={quotes} alt="quotes" className="h-[50px] w-[50px]" />
            <p className="font-mullish text-3xl font-extralight opacity-40">
              Front-End Part of Razorpay
            </p>

            <div className="flex flex-row gap-4 items-center">
              <h3 className="font-mullish font-extrabold text-xl">
                Shiv Kant
              </h3>
              <a
                href="https://www.linkedin.com/in/shiv-kant-036a17289/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="h-[30px] w-[30px]"
                />
              </a>
              <a
                href="https://github.com/Shivkant639624"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={githubIcon}
                  alt="GitHub"
                  className="h-[30px] w-[30px]"
                />
              </a>
            </div>

            <p className="font-mullish text-xl text-gray-500 w-[420px]">
              The goal of cloning the Razorpay{" "}
              <span className="text-deepBlueHead font-extrabold">Responsive</span>{" "}
              website is to learn a lot about creating the visual part of websites,
              making sure users have a really good experience.
            </p>

            <h3 className="font-mullish font-extrabold text-xl leading-[1.2]">
              Made with
            </h3>
            <div className="flex flex-row gap-4">
              <img src={htmlLogo} alt="HTML" className="h-[40px] w-[30px]" />
              <img src={cssLogo} alt="CSS" className="h-[40px] w-[30px]" />
              <img
                src={tailwindLogo}
                alt="Tailwind"
                className="h-[40px] w-[30px]"
              />
              <img src={jsLogo} alt="JavaScript" className="h-[40px] w-[30px]" />
              <img
                src={googleFonts}
                alt="Google Fonts"
                className="h-[40px] w-[200px]"
              />
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex flex-row gap-3 w-full mx-auto justify-center mt-[60px]">
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-lightBlue rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;

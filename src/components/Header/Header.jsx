import React from "react";
import Logo from "../../assets/logo.svg";
import IndiaFlag from "../../assets/india-flag.svg";

const Header = () => {
  return (
    <nav className="bg-[#02042a]">
      <div className="w-11/12 max-w-[1110px] mx-auto flex items-center justify-between">
        {/* logo */}
        <a className="cursor-pointer py-7 pr-7">
          <img src={Logo} alt="Logo" width="125px" height="30px" />
        </a>

        <ul className="lg:flex lg:gap-6 items-center justify-between hidden">
          {[
            { title: "Payments", hasUnderline: true },
            { title: "Banking", hasUnderline: true },
            { title: "Corporate Card" },
            { title: "Payroll" },
            { title: "Resources", hasUnderline: true },
            { title: "Support", hasUnderline: true },
            { title: "Pricing", hasUnderline: true },
          ].map((item, index) => (
            <li
              key={index}
              className="text-white font-mullish py-7 hover:text-lightBlue cursor-pointer transition-all duration-200 relative group"
            >
              <a href="#">{item.title}</a>
              {item.hasUnderline && (
                <div className="absolute bottom-0 w-full h-1 bg-lightBlue hidden group-hover:block transition-all duration-200"></div>
              )}
            </li>
          ))}
        </ul>

        <div className="flex gap-3 items-center">
          <img
            src={IndiaFlag}
            alt="India Flag"
            width="28px"
            height="20px"
            className="hidden lg:block"
          />

          <button className="py-3 px-5 font-mullish text-white border-lightBlue border rounded text-sm font-bold">
            Log in
          </button>

          <button className="py-3 px-4 font-mullish border rounded-sm text-sm font-bold bg-white text-lightBlue300 transition-all duration-200 hover:text-lightBlue500 hidden lg:block">
            Sign Up &#10132;
          </button>

          {/* hamburger */}
          <div className="w-[18px] flex flex-col gap-1 ml-4 lg:hidden">
            <div className="bg-white w-full h-[1.2px]"></div>
            <div className="bg-white w-full h-[1.2px]"></div>
            <div className="bg-white w-full h-[1.2px]"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

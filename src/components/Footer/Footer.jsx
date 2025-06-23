import React from "react";
import LogoDark from "../../assets/logo-dark.svg";
import Cert1 from "../../assets/footer-certificate-1.png";
import Cert2 from "../../assets/footer-certificate-2.jpg";
import FacebookIcon from "../../assets/facebook-icon.svg";
import TwitterIcon from "../../assets/twitter-icon.svg";
import InstagramIcon from "../../assets/instagram-icon.svg";
import GithubIcon from "../../assets/github-icon.svg";
import LinkedInIcon from "../../assets/linkedin-icon.svg";

function Footer() {
  return (
    <footer className="w-full">
      <div className="w-11/12 max-w-[1016px] mx-auto flex gap-10 mb-6 flex-col lg:flex-row">
        {/* Left Column */}
        <div className="flex flex-col gap-3 max-w-[260px]">
          <img src={LogoDark} alt="Razorpay" className="w-[120px] h-[24px]" />
          <p className="font-mullish opacity-80 text-sm leading-[1.425rem]">
            Razorpay is the only payments solution in India that allows businesses to accept, process and disburse payments with its product suite. It gives you access to all payment modes including credit card, debit card, netbanking, UPI and popular wallets including JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money and PayZapp.
          </p>
          <p className="font-mullish opacity-80 text-sm leading-[1.425rem]">
            RazorpayX supercharges your business banking experience, bringing effectiveness, efficiency, and excellence to all financial processes. With RazorpayX, businesses can get access to fully-functional current accounts, supercharge their payouts and automate payroll compliance.
          </p>
          <p className="font-mullish opacity-80 text-sm leading-[1.425rem]">
            Manage your marketplace, automate bank transfers, collect recurring payments, share invoices with customers and avail working capital loans - all from a single platform. Fast forward your business with Razorpay.
          </p>
          <p className="font-mullish opacity-80 text-[0.625rem] leading-[1rem]">
            Disclaimer: The RazorpayX powered Current Account and VISA corporate credit card are provided by RBI licensed banks. Your RazorpayX powered account is provided by our partner bank, in accordance with RBI regulations. RazorpayX itself is not a bank and doesn't hold or claim to hold a banking license.
          </p>

          {/* Newsletter */}
          <div className="flex flex-col gap-6 my-4">
            <h3 className="font-mullish font-bold text-deepBlueHead">
              SUBSCRIBE TO OUR NEWSLETTER
            </h3>
            <form className="border-2 flex justify-between w-full rounded-md group px-2">
              <input
                type="email"
                required
                placeholder="Your email address"
                className="font-mullish text-sm h-[30px] w-[120px]"
              />
              <button className="text-lightBlue500 flex items-center justify-center font-mullish font-bold text-sm">
                Subscribe
                <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] ml-3">
                  <path
                    fill="currentColor"
                    d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                  ></path>
                </svg>
              </button>
            </form>
          </div>

          {/* Certificates */}
          <div className="flex items-start gap-2">
            <img src={Cert1} alt="certificate1" className="w-[100px]" />
            <img src={Cert2} alt="certificate2" className="max-w-[100%]" />
          </div>
        </div>

        {/* Right Columns */}
        <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap sm:justify-start md:justify-between w-auto">
          {/* Column 1 */}
          <div className="flex flex-col gap-7 mr-[1.5rem]">
            {/* Multiple rows */}
            <FooterLinks
              title="BANKING PLUS"
              links={[
                "RazorpayX",
                "Current Accounts",
                "Payouts",
                "Payout Links",
                "Corporate Credit Card",
                {
                  label: "View Live Demo",
                  badge: true,
                },
              ]}
            />
            <FooterLinks
              title="LENDING"
              links={[
                "Razorpay Capital",
                "Instant Settlements",
                "Working Capital Loans",
                "Marketplace Instant Settlements",
              ]}
            />
            <FooterLinks
              title="BECOME A PARTNER"
              links={["Refer and Earn", "Onboarding APIs"]}
            />
            <FooterLinks
              title="MORE"
              links={[
                "Route",
                "Invoices",
                "Freelancer Payments",
                "International",
                "Flash Checkout",
                "UPI",
                "ePOS",
                "Checkout Demo",
                "RazorpayX Payroll",
              ]}
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-7 mr-2">
            <FooterLinks
              title="ACCEPT PAYMENTS"
              links={[
                "Payment Gateway",
                "Payment Pages",
                "Payment Links",
                "QR Codes",
                "Subscriptions",
                "Smart Collect",
                "Optimizer",
              ]}
            />
            <FooterLinks
              title="DEVELOPERS"
              links={["Docs", "Integrations", "API Reference"]}
            />
            <FooterLinks
              title="RESOURCES"
              links={[
                "Blog",
                "Customer Stories",
                "Events",
                "Chargeback Guide",
                "Settlement Guide",
              ]}
            />
            <FooterLinks
              title="SOLUTIONS"
              links={["Education", "E-commerce", "Saas", "BFSI"]}
            />
            <FooterLinks
              title="FREE TOOLS"
              links={[
                "GST Calculator",
                "Online TDS Payment",
                {
                  label: "GST Number Search",
                  badge: true,
                },
              ]}
            />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-7 w-[33.11%]">
            <FooterLinks
              title="COMPANY"
              links={[
                "About Us",
                "Careers",
                "Terms of Use",
                "Privacy Policy",
                "Grievance Redressal",
                "Responsible Disclosure",
                "Partners",
                "White Papers",
                "Corporate Information",
              ]}
            />
            <FooterLinks
              title="HELP & SUPPORT"
              links={["Support", "Knowledge base"]}
            />

            {/* Social Media */}
            <div className="flex flex-col gap-3">
              <h3 className="font-mullish font-bold text-deepBlueHead text-[1rem] tracking-wider">
                FIND US ONLINE
              </h3>
              <div className="flex gap-4">
                {[FacebookIcon, TwitterIcon, InstagramIcon, GithubIcon, LinkedInIcon].map((icon, index) => (
                  <a href="#" key={index}>
                    <img src={icon} alt="social" className="w-[1.5rem]" />
                  </a>
                ))}
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col gap-5 mt-8">
              <h3 className="font-mullish font-bold text-deepBlueHead text-[1rem] tracking-wider">
                REGD. OFFICE ADDRESS
              </h3>
              <p className="font-mullish text-[0.9rem] leading-5">
                Razorpay Software Private Limited,
                <br />
                1st Floor, SJR Cyber,
                <br />
                22 Laskar Hosur Road, Adugodi,
                <br />
                Bengaluru, 560030,
                <br />
                Karnataka, India
                <br />
                CIN: U72200KA2013PTC097389
              </p>
              <p className="font-mullish text-[0.9rem]">
                &copy; Razorpay 2022
                <br />
                All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Reusable component for grouped links
function FooterLinks({ title, links }) {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="font-mullish font-bold text-deepBlueHead text-[1rem] tracking-wider">
        {title}
      </h3>
      {links.map((link, index) =>
        typeof link === "string" ? (
          <a
            href="#"
            key={index}
            className="text-lightBlue500 font-mullish w-full hover:text-deepBlueHead transition-all duration-200"
          >
            {link}
          </a>
        ) : (
          <a
            href="#"
            key={index}
            className="text-lightBlue500 font-mullish w-full hover:text-deepBlueHead transition-all duration-200 flex items-center gap-1"
          >
            {link.label}
            {link.badge && (
              <span className="font-mullish bg-green-500 font-bold rounded-sm text-white text-[11.5px] p-[0.2rem] px-[0.3rem] h-[1.275rem]">
                NEW
              </span>
            )}
          </a>
        )
      )}
    </div>
  );
}

export default Footer;

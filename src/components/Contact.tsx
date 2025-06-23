import React from "react";
import logo from "../assests/Amplify-logo-2.png";
import videoImage from "../assests/video.png";
import cameraIcon from "../assests/camera-icon.jpg";
import emailIcon from "../assests/email-icon.jpeg";
import linkedinIcon from "../assests/linkedin-icon.jpeg";
import micIcon from "../assests/mic.svg";

const ContactPage: React.FC = () => {
  return (
    <div className="bg-black text-white font-['Red_Hat_Display'] px-4 py-10">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </div>

        {/* LET’S CONNECT */}
        <div className="md:flex items-start gap-8">
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-4xl font-bold">LET’S CONNECT</h1>
            <p className="text-gray-400">
              Whether you’re a budding artist, visitor, or creative—we’re ready to hear from you. Give us a shout, and start a magic happen.
            </p>
            <form className="space-y-4 mt-6">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" className="bg-[#1a1a1a] p-3 rounded w-full border border-gray-700 text-white" />
                <input type="email" placeholder="Email" className="bg-[#1a1a1a] p-3 rounded w-full border border-gray-700 text-white" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Phone Number" className="bg-[#1a1a1a] p-3 rounded w-full border border-gray-700 text-white" />
                <input type="text" placeholder="Company/Organisation" className="bg-[#1a1a1a] p-3 rounded w-full border border-gray-700 text-white" />
              </div>
              <textarea placeholder="Message" className="bg-[#1a1a1a] p-3 rounded w-full border border-gray-700 text-white" rows={4}></textarea>
              <button type="submit" className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded font-semibold">
                Lets Talk →
              </button>
            </form>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img src={cameraIcon} alt="Camera" className="w-full h-auto rounded-md" />
          </div>
        </div>

        {/* WORK WITH US */}
        <div className="my-20 text-center">
          <h1 className="mb-9" style={{ fontSize: "50px", fontWeight: "normal", textAlign: "center" }}>
            WANT TO WORK WITH US?
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            <img
              src={videoImage}
              alt="Camera Icon"
              style={{ width: "385px", height: "385px" }}
              className="object-cover"
            />
            <div className="max-w-xl text-left" style={{ fontSize: "33px", textAlign: "left" }}>
              <p>
                Are you a{" "}
                <span className="text-orange-400 font-semibold">
                  FILMMAKER, EDITOR, DIRECTOR OF PHOTOGRAPHY, STYLIST, PRODUCTION DESIGNER
                </span>
                , or <span className="text-orange-400 font-semibold">CREATIVE SOUL</span>{" "}
                with something amazing to share?
              </p>
            </div>
          </div>
        </div>

        {/* COLLABORATORS */}
<div className="my-20 px-4">
  <div className="flex flex-col items-end">
    {/* Heading on right but left-aligned */}
    <div className="w-full md:w-[60%]">
  <h2
    className="mb-10"
    style={{ fontSize: "33px", fontWeight: "normal", textAlign: "left" }}
  >
    WE’RE ALWAYS LOOKING FOR<br />
    PASSIONATE COLLABORATORS AND <br />
    FREELANCERS
  </h2>
</div>


    {/* Centered Email + LinkedIn */}
    <div className="w-full flex flex-col md:flex-row gap-6 justify-center">
      {/* Email Box */}
      <div className="bg-[#2A2A2A] rounded-xl p-6 w-full md:w-1/2 max-w-md flex flex-col justify-between">
        <div className="flex items-center gap-3 mb-3">
          <img src={emailIcon} alt="Email" className="w-6 h-6" />
          <div>
            <p className="text-sm text-white">Email Address</p>
            <p className="text-sm text-gray-400">content@amplifyfilms.com</p>
          </div>
        </div>
        <p className="text-sm text-gray-400 mb-5">
          Send your work to our email address we will contact you.
        </p>
        <button className="self-start bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md text-sm font-semibold">
          Send Email →
        </button>
      </div>

      {/* LinkedIn Box */}
      <div className="bg-[#2A2A2A] rounded-xl p-6 w-full md:w-1/2 max-w-md flex flex-col justify-between">
        <div className="flex items-center gap-3 mb-3">
          <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
          <div>
            <p className="text-sm text-white">LinkedIn</p>
            <p className="text-sm text-gray-400">Connect with team directly.</p>
          </div>
        </div>
        <div className="flex-grow" />
        <button className="self-start bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md text-sm font-semibold">
          Send Email →
        </button>
      </div>
    </div>
  </div>
</div>


        {/* LET’S WORK TOGETHER */}
        <div className="text-center">
          <h2 className="text-3xl mb-4 font-normal">LET’S WORK TOGETHER</h2>
          <div className="flex justify-center mb-4">
            <img src={micIcon} alt="Mic" className="w-8 h-8" />
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md font-semibold">
            Contact →
          </button>
        </div>

        {/* FOOTER */}
        <footer className="border-t border-gray-800 pt-10 text-sm">
          <div className="md:flex justify-between items-start gap-8">
            {/* Left */}
            <div className="md:w-1/3 space-y-3">
              <img src={logo} alt="Footer Logo" className="h-10" />
              <p className="text-gray-400">
                Amplify Films is a dynamic creative content company and
                powerhouse production house.
              </p>
              <div className="flex gap-4 mt-2">
                <img src={emailIcon} alt="Email" className="w-5 h-5" />
                <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
              </div>
            </div>

            {/* Center */}
            <div className="md:w-1/3 mt-6 md:mt-0">
              <ul className="space-y-2 text-gray-300">
                <li>Main</li>
                <li>Home</li>
                <li>Our Story</li>
                <li>Showreel</li>
                <li>About Us</li>
              </ul>
            </div>

            {/* Right */}
            <div className="md:w-1/3 mt-6 md:mt-0 space-y-2 text-gray-300">
              <p>Address</p>
              <p>400058, Mumbai, Maharashtra, India</p>
              <p>Email: xzn@gmail.com</p>
              <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 mt-3 rounded-md text-sm font-semibold">
                Contact →
              </button>
            </div>
          </div>

          <div className="text-center text-gray-500 mt-10 text-xs">
            INDIA 🇮🇳 • © 2025 - Copyright • Privacy Policy • Terms & Conditions
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ContactPage;

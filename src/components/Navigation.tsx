import { useState, useEffect } from "react";
import logo from "../assests/amplify-logo-2.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "OUR STORY", href: "#about" },
    { name: "OUR SERVICES", href: "#services" },
    { name: "SHOWREEL", href: "#work" },
    { name: "ABOUT US", href: "#about" },
    { name: "CONTACT US", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[72px]">
      <div className="lg:mx-[2rem] mr-[3.5rem] h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className=" w-[128px]" />
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                
                className="hover:text-[#EE6F20] text-white text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          <button className="md:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

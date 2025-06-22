import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] ${
        isMobileMenuOpen ? "bg-[#2E2D2D]" : ""
      }`}
    >
      <div className="lg:mx-[2rem] mx-5 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/amplify-logo.png"
              alt="Logo"
              className={`w-[128px] ${isMobileMenuOpen ? "hidden" : ""}`}
            />
          </div>

          {/* Desktop Nav */}
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

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
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
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#2E2D2D] h-screen px-6 py-4 flex flex-col space-y-4 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#8D8D8D] text-2xl "
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;

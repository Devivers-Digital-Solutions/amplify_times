import logo from '../assests/logo.png';

const Footer = () => {
  return (
    //       {/* Updated Footer Section */}
    <footer className="w-full bg-black pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between border-t border-white pt-10">
          <div className="mb-8 md:mb-0">
            <img src={logo} alt="Logo" className="w-24 mb-4" />
            <p className="text-sm text-white max-w-xs">
              Amplify Times is a dynamic creative content company and a
              powerhouse production house.
            </p>
            <div className="flex gap-4 mt-4">
              {["facebook", "instagram", "youtube", "twitter"].map(
                (icon, idx) => (
                  <div
                    key={idx}
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold"
                  >
                    {icon.charAt(0).toUpperCase()}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-10">
            <div>
              <h3 className="text-white font-bold mb-2">Main</h3>
              <ul className="text-sm text-white space-y-1">
                <li>Home</li>
                <li>Our Story</li>
                <li>Show reel</li>
                <li>About Us</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-2">Address</h3>
              <p className="text-sm text-white">
                400056, Mumbai, Maharashtra 22/2/5, Office 4
              </p>
              <p className="text-sm text-white mt-2">
                Email: amplify@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-10 border-t border-white pt-6 text-sm text-white">
          <span>INDIA 🇮🇳</span>
          <span>© 2025 — Copyright | Privacy Policy | Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

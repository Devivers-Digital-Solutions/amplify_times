
const Footer = () => {
  const leftLinks = [
    { name: 'Style Guide', url: '#' },
    { name: 'Licenses', url: '#' },
    { name: 'Support', url: '#' }
  ];

  const rightLinks = [
    { name: 'Privacy Policy', url: '#' },
    { name: 'Terms of Service', url: '#' }
  ];

  return (
    <footer className="bg-genesis-black py-12 px-6 lg:px-8 border-t border-genesis-gray">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          {/* Left Side */}
          <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
            <div className="text-xl font-bold tracking-tight">GENESIS</div>
            <div className="flex space-x-6">
              {leftLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="text-sm text-genesis-lightGray hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* Right Side */}
          <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 text-center lg:text-right">
            <div className="flex space-x-6">
              {rightLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="text-sm text-genesis-lightGray hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="text-sm text-genesis-lightGray">
              © 2024 Genesis. Built with passion.
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-genesis-gray text-center">
          <p className="text-xs text-genesis-lightGray">
            Professional video production and creative direction services.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

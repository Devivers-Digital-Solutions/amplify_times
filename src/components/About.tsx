
const About = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-genesis-black">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop&crop=center"
              alt="Creative team member working"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop&crop=center"
              alt="Video production setup"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Center Text */}
        <div className="text-center mb-16">
          <h2 className="text-6xl lg:text-8xl font-black tracking-tight mb-8 leading-none">
            WE MAKE<br />
            VIDEOS THAT<br />
            TURN HEADS
          </h2>
          <p className="text-sm font-medium text-genesis-lightGray tracking-widest">
            GENESIS STUDIO
          </p>
        </div>

        {/* Description Text */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-3xl lg:text-4xl font-light leading-relaxed">
            We shoot and produce everything from films to videos, with a quality you can trust. We work with businesses and creatives to create the best content possible, working around the clock to deliver results in an efficient manner.
          </p>
          <p className="text-sm text-genesis-lightGray mt-8 tracking-wide">
            CONSEQUAT EU VOLUTPAT RISUS NON. VELIT,<br />
            TORTOR PLACERAT ARCU.
          </p>
        </div>

        {/* Bottom Images */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=center"
              alt="Creative workspace"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop&crop=center"
              alt="Video editing setup"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Scrolling Text Marquee */}
      <div className="mt-24 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="text-sm font-medium text-genesis-lightGray mx-8">CREATIVE DIRECTION</span>
          <span className="text-sm font-medium text-genesis-lightGray mx-8">•</span>
          <span className="text-sm font-medium text-genesis-lightGray mx-8">BRANDING</span>
          <span className="text-sm font-medium text-genesis-lightGray mx-8">•</span>
          <span className="text-sm font-medium text-genesis-lightGray mx-8">DESIGN</span>
          <span className="text-sm font-medium text-genesis-lightGray mx-8">•</span>
          <span className="text-sm font-medium text-genesis-lightGray mx-8">MOTION</span>
          <span className="text-sm font-medium text-genesis-lightGray mx-8">•</span>
          <span className="text-sm font-medium text-genesis-lightGray mx-8">ANIMATED REELS</span>
          <span className="text-sm font-medium text-genesis-lightGray mx-8">•</span>
          <span className="text-sm font-medium text-genesis-lightGray mx-8">CREATIVE DIRECTION</span>
          <span className="text-sm font-medium text-genesis-lightGray mx-8">•</span>
          <span className="text-sm font-medium text-genesis-lightGray mx-8">BRANDING</span>
          <span className="text-sm font-medium text-genesis-lightGray mx-8">•</span>
        </div>
      </div>
    </section>
  );
};

export default About;

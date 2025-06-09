
import { useState, useEffect } from 'react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 22,
    minutes: 26
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes } = prev;
        
        if (minutes > 0) {
          minutes--;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
        }
        
        return { days, hours, minutes };
      });
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none mb-16">
          WE ARE<br />
          STORYTELLERS
        </h1>
        
        {/* Progress Bar */}
        <div className="flex items-center justify-center mb-16">
          <div className="w-8 h-8 rounded-full bg-white"></div>
          <div className="w-64 md:w-96 h-0.5 bg-white/30 mx-4 relative">
            <div className="absolute left-0 top-0 h-full w-1/2 bg-white"></div>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-orange-500"></div>
          </div>
          <div className="w-8 h-8 rounded-full border-2 border-white"></div>
        </div>
        
        {/* Countdown */}
        <div className="text-center">
          <p className="text-sm text-genesis-lightGray mb-4 tracking-widest">
            WE ARE SCRIPTING OUR STORY
          </p>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold">
                {String(timeLeft.days).padStart(2, '0')}
              </div>
              <div className="text-xs text-orange-500 tracking-widest mt-2">
                Days
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <div className="text-xs text-orange-500 tracking-widest mt-2">
                Hours
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <div className="text-xs text-orange-500 tracking-widest mt-2">
                Minutes
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

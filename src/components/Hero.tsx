import { useState, useEffect } from "react";

const HERO_TEXTS = [
  ["WE ARE", "STORYTELLERS."],
  ["WE TURN", "IDEAS INTO NARRATIVES."],
  ["WE TURN", "CAMPAIGNS INTO EXPERIENCES."],
  ["WE TURN", "MOMENTS INTO MEMORIES."],
];

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [fade, setFade] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 22,
    minutes: 26,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
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

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % HERO_TEXTS.length);
        setFade(true);
      }, 400); // fade out duration
    }, 3200); // total duration per text
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-[55vh] md:h-[82vh] lg:h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute left-1/2 mt-[8vh] md:mt-0 top-0 md:top-[calc(50%+2.5vh)] -translate-x-1/2 md:-translate-y-1/2 z-0 w-[95vw] md:w-[calc(100%-6rem)]  md:mx-0 h-[45vh] md:h-[70vh] lg:h-[86vh] rounded-[2rem]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover rounded-[2rem]"
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50 rounded-[2rem]"></div>
        {/* Content */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 w-full px-2 md:px-6 py-2 md:py-[1rem]">
          <h1
            className={`text-[3.1rem] overflow-x-clip md:text-6xl lg:text-[5rem] font-black tracking-tight leading-none mb-[4rem] md:mb-[5rem] text-center transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {HERO_TEXTS[currentText][0]}
            <br />
            {HERO_TEXTS[currentText][1]}
          </h1>
          {/* Progress Bar */}
          <div className="flex items-center justify-center w-full px-2 md:px-[0.5rem]">
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-white"></div>
            <div className="flex-1 h-0.5 bg-[#949494] mx-2 md:mx-3 animate-pulse"></div>
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#E21C1C] animate-pulse"></div>
            <div className="flex-1 h-0.5 bg-[#949494] mx-2 md:mx-3 animate-pulse"></div>
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

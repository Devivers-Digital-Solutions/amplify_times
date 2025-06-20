import { useEffect, useRef } from "react";

const HERO_TEXTS = [
  "Storytellers",
  "Creators",
  "Thinkers",
  "FlimMakers",
  "Dreamers",
  "Strategists",
  "Visionaries",
];

const HeroSectionVideo = () => {
  const videoRef = useRef(null);
  const animatedRef = useRef(null);
  const indexRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const onLoadedMetadata = () => {
      video.currentTime = 3;
      video.play();
    };

    const onTimeUpdate = () => {
      if (video.currentTime >= 121.8) {
        video.currentTime = 3;
        video.play();
      }
    };

    if (video) {
      video.addEventListener("loadedmetadata", onLoadedMetadata);
      video.addEventListener("timeupdate", onTimeUpdate);
    }

    return () => {
      if (video) {
        video.removeEventListener("loadedmetadata", onLoadedMetadata);
        video.removeEventListener("timeupdate", onTimeUpdate);
      }
    };
  }, []);

  useEffect(() => {
    const animated = animatedRef.current;
    if (!animated) return;

    const lineHeight = 80;
    indexRef.current = 0;

    // Clone first child to enable seamless looping
    const firstClone = animated.children[0].cloneNode(true);
    animated.appendChild(firstClone);

    const total = animated.children.length;

    intervalRef.current = setInterval(() => {
      indexRef.current += 1;
      animated.style.transition = "transform 0.7s ease-in-out";
      animated.style.transform = `translateY(-${lineHeight * indexRef.current}px)`;

      if (indexRef.current === total - 1) {
        setTimeout(() => {
          animated.style.transition = "none";
          animated.style.transform = "translateY(0)";
          indexRef.current = 0;
        }, 700);
      }
    }, 2000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    // <section className="relative w-full flex items-end overflow-hidden md:rounded-[24px] md:mt-[65px] lg:h-[40em] h-screen">
      
    <section className="relative w-full flex items-end overflow-hidden md:rounded-[24px] md:mt-[65px] h-[70vh] md:h-[80vh] lg:h-[85vh]">
    <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover 2xl:scale-[1.2] scale-[1.5]"
      >
        <source
          src="https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="flex flex-col justify-end w-full p-6 relative z-10">
        <div className="text-white font-bold md:text-5xl text-[40px] leading-none mb-8">
          <div className="text-center uppercase">We are</div>
          <div className="relative h-[80px] overflow-hidden">
            <div
              ref={animatedRef}
              className="absolute top-0 left-0 w-full transition-transform duration-700 ease-in-out flex flex-col items-center uppercase"
            >
              {HERO_TEXTS.map((text, idx) => (
                <div key={idx} className="h-[80px]">
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slider navigation indicator */}
        <div className="flex gap-4 items-center w-full">
          <span className="w-[18px] h-[18px] rounded-full bg-white opacity-50 flex-shrink-0"></span>
          <span className="w-full bg-[#949494] h-px"></span>
          <span
            className="w-[18px] h-[18px] rounded-full bg-[#E21C1C] flex-shrink-0"
            id="redDot"
          ></span>
          <span className="w-full bg-[#949494] h-px"></span>
          <span className="w-[18px] h-[18px] rounded-full bg-white opacity-50 flex-shrink-0"></span>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionVideo;

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

  // Handle video loop
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

  // Handle text animation
  useEffect(() => {
    const animated = animatedRef.current;
    if (!animated) return;

    const lineHeight = 60;
    indexRef.current = 0;

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
    <section className="relative w-full overflow-hidden mt-[80px]">
      {/* Background Video */}
      <div className="relative w-full h-[80vh] md:h-[90vh]">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Text Overlay at Bottom-Center */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 px-4 text-white text-center w-full max-w-screen-md">
          <div className="font-bold text-[28px] sm:text-[36px] md:text-5xl uppercase">
            We are
          </div>
          <div className="relative h-[60px] sm:h-[70px] md:h-[80px] overflow-hidden mt-2">
            <div
              ref={animatedRef}
              className="absolute top-0 left-0 w-full transition-transform duration-700 ease-in-out flex flex-col items-center uppercase"
            >
              {HERO_TEXTS.map((text, idx) => (
                <div
                  key={idx}
                  className="h-[60px] sm:h-[70px] md:h-[80px] text-[28px] sm:text-[36px] md:text-5xl"
                >
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Slider navigation indicator */}
          <div className="flex gap-2 md:gap-4 items-center justify-center mt-5">
            <span className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] rounded-full bg-white opacity-50"></span>
            <span className="w-full bg-[#949494] h-px max-w-[80px]"></span>
            <span className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] rounded-full bg-[#E21C1C]"></span>
            <span className="w-full bg-[#949494] h-px max-w-[80px]"></span>
            <span className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] rounded-full bg-white opacity-50"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionVideo;




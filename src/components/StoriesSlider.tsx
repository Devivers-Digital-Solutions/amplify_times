import { useRef, useState, useEffect } from "react";

const images = [
  { src: "src/assests/tiraha.png", alt: "Tiraha" },
  { src: "src/assests/silkyara.png", alt: "Silkyara" },
  { src: "src/assests/raavi.png", alt: "Raavi" },
  { src: "src/assests/roar.png", alt: "Roar" },
  { src: "src/assests/patange.png", alt: "Patange" },
  { src: "src/assests/one-day.png", alt: "One Day" },
  { src: "src/assests/final-click.png", alt: "Final Click" },
  { src: "src/assests/last-party.png", alt: "Last Party" },
];

const visibleCount = 6;
const transitionDuration = 500;

export default function Stories() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(visibleCount);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const prefix = images.slice(-visibleCount);
  const postfix = images.slice(0, visibleCount);
  const clonedImages = [...prefix, ...images, ...postfix];

  const goNext = () => setCurrentIndex((prev) => prev + 1);
  const goPrev = () => setCurrentIndex((prev) => prev - 1);

  const handleTransitionEnd = () => {
    if (currentIndex === clonedImages.length - visibleCount) {
      setTransitionEnabled(false);
      setCurrentIndex(visibleCount);
    } else if (currentIndex === 0) {
      setTransitionEnabled(false);
      setCurrentIndex(images.length);
    }
  };

  useEffect(() => {
    if (!transitionEnabled && sliderRef.current) {
      sliderRef.current.style.transition = "none";
      void sliderRef.current.offsetWidth;
      sliderRef.current.style.transition = `transform ${transitionDuration}ms ease-in-out`;
      setTransitionEnabled(true);
    }
  }, [transitionEnabled]);

  const transformStyle = {
    transform: `translateX(-${(currentIndex * 100) / visibleCount}%)`,
    transition: transitionEnabled ? `transform ${transitionDuration}ms ease-in-out` : "none",
  };

  return (
    <>
      <div className="relative w-full flex flex-col items-center px-6 py-10">
        <div className="w-full overflow-hidden">
          <div
            ref={sliderRef}
            className="flex"
            style={transformStyle}
            onTransitionEnd={handleTransitionEnd}
          >
            {clonedImages.map((img, index) => (
              <div key={index} className="flex-shrink-0 md:px-3 px-2 slide">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover md:rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center gap-6 justify-end w-full">
          <button onClick={goPrev} className="cursor-pointer">
            <img
              src="src/assests/left-arrow.svg"
              alt="Left"
              className="lg:w-[42px] lg:h-[42px] w-7 h-7"
            />
          </button>
          <button onClick={goNext} className="cursor-pointer">
            <img
              src="src/assests/right-arrow.svg"
              alt="Right"
              className="lg:w-[42px] lg:h-[42px] w-7 h-7"
            />
          </button>
        </div>
      </div>

      {/* Separated Style Section */}
      <style>{`
        .slide {
          width: 16.66%;
          height: 450px;
        }

        @media (max-width: 1499px) {
          .slide {
            width: 20%;
            height: 350px;
          }
        }

        @media (max-width: 1024px) {
          .slide {
            width: 25%;
            height: 243px;
          }
        }

        @media (max-width: 640px) {
          .slide {
            width: 50%;
            height: 350px;
          }
        }

        @media (max-width: 400px) {
          .slide {
            width: 50%;
            height: 243px;
          }
        }
      `}</style>
    </>
  );
}

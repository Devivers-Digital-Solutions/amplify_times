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
  const [index, setIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const getVisibleSlides = () => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      const img = images[(index + i) % images.length];
      result.push(img);
    }
    return result;
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="relative w-full flex flex-col items-center px-6 py-10">
        <div className="mb-16">
          <h1 className="text-[#BFBFBF] text-[50px] text-center font-medium mb-5">
            STORIES WE ARE SCRIPTING
          </h1>
          <img
            src="src/assests/video-camera.svg"
            alt=""
            className="mx-auto"
          />
        </div>

        <div className="w-full overflow-hidden">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
          >
            {getVisibleSlides().map((img, i) => (
              <div key={i} className="slide flex-shrink-0 px-2 md:px-3">
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
          <button onClick={prevSlide} className="cursor-pointer">
            <img
              src="src/assests/left-arrow.svg"
              alt="Left"
              className="lg:w-[42px] lg:h-[42px] w-7 h-7"
            />
          </button>
          <button onClick={nextSlide} className="cursor-pointer">
            <img
              src="src/assests/right-arrow.svg"
              alt="Right"
              className="lg:w-[42px] lg:h-[42px] w-7 h-7"
            />
          </button>
        </div>
      </div>

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
            height: 300px;
          }
        }

        @media (max-width: 768px) {
          .slide {
            width: 50%;
            height: 300px;
          }
        }

        @media (max-width: 480px) {
          .slide {
            width: 100%;
            height: 250px;
          }
        }
      `}</style>
    </>
  );
}

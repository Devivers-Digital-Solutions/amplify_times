import React, { useState, useEffect, useRef } from "react";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import { IoVolumeMute, IoVolumeHigh } from "react-icons/io5";
import { IoPlay, IoPause } from "react-icons/io5";

const videos = [
  { src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { src: "https://www.w3schools.com/html/mov_bbb.mp4" },
];

interface VideoState {
  muted: boolean;
  paused: boolean;
}

const ReelSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoStates, setVideoStates] = useState<VideoState[]>(
    videos.map(() => ({ muted: true, paused: false }))
  );
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const autoSlideInterval = useRef<NodeJS.Timeout | null>(null);

  // Group videos into sets of 4
  const groupedSlides = () => {
    const chunkSize = 4;
    const result = [];
    for (let i = 0; i < videos.length; i += chunkSize) {
      result.push(videos.slice(i, i + chunkSize));
    }
    return result;
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      // Infinite scroll - go to last slide
      setCurrentIndex(groupedSlides().length - 1);
    }
  };

  const goNext = () => {
    if (currentIndex < groupedSlides().length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Infinite scroll - go to first slide
      setCurrentIndex(0);
    }
  };

  const toggleMute = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      const newVideoStates = [...videoStates];
      newVideoStates[index].muted = !newVideoStates[index].muted;
      video.muted = newVideoStates[index].muted;
      setVideoStates(newVideoStates);
    }
  };

  const togglePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      const newVideoStates = [...videoStates];
      if (video.paused) {
        video.play();
        newVideoStates[index].paused = false;
      } else {
        video.pause();
        newVideoStates[index].paused = true;
      }
      setVideoStates(newVideoStates);
    }
  };

  // Auto-slide functionality (only for desktop)
  useEffect(() => {
    const isMobile = window.innerWidth < 768; // md breakpoint
    if (!isMobile) {
      autoSlideInterval.current = setInterval(() => {
        goNext();
      }, 5000); // Auto-slide every 5 seconds
    }

    return () => {
      if (autoSlideInterval.current) {
        clearInterval(autoSlideInterval.current);
      }
    };
  }, [currentIndex]);

  // Keyboard navigation (only for desktop)
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goPrev();
      } else if (e.key === "ArrowRight") {
        goNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  // Initialize video refs
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length);
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center px-4 md:px-6 py-10">
      {/* Mobile View - Horizontal Carousel */}
      <div
        className="w-full overflow-x-auto md:hidden snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
      >
        <div className="flex flex-nowrap gap-4 px-[10vw]">
          {videos.map((video, index) => {
            const videoState = videoStates[index];
            return (
              <div key={index} className="w-[80vw] flex-shrink-0 snap-center">
                <div
                  className="relative rounded-xl overflow-hidden"
                  style={{
                    width: "100%",
                    aspectRatio: "9/16",
                  }}
                >
                  <video
                    className="w-full h-full object-cover"
                    src={video.src}
                    autoPlay
                    loop
                    playsInline
                    muted={videoState?.muted}
                    ref={(el) => (videoRefs.current[index] = el)}
                  />

                  {/* Control Icons */}
                  <div className="absolute bottom-4 right-4 flex gap-4">
                    <button
                      onClick={() => toggleMute(index)}
                      className="bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                    >
                      {videoState?.muted ? (
                        <IoVolumeMute className="w-6 h-6 text-white" />
                      ) : (
                        <IoVolumeHigh className="w-6 h-6 text-white" />
                      )}
                    </button>
                    <button
                      onClick={() => togglePlay(index)}
                      className="bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                    >
                      {videoState?.paused ? (
                        <IoPlay className="w-6 h-6 text-white" />
                      ) : (
                        <IoPause className="w-6 h-6 text-white" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop View - Slider with Navigation */}
      <div className="hidden md:block w-full">
        {/* Custom Slider */}
        <div className="w-full overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {groupedSlides().map((group, i) => (
              <div key={i} className="w-full flex-shrink-0">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-[2rem] gap-y-[1rem]">
                  {group.map((video, j) => {
                    const index = i * 4 + j;
                    const videoState = videoStates[index];
                    return (
                      <div
                        key={j}
                        className="relative h-auto rounded-xl overflow-hidden mx-auto"
                        style={{
                          width: "100%",
                          aspectRatio: "9/16",
                        }}
                      >
                        <video
                          className="w-full h-full object-cover"
                          src={video.src}
                          autoPlay
                          loop
                          playsInline
                          muted={videoState?.muted}
                          ref={(el) => (videoRefs.current[index] = el)}
                        />

                        {/* Control Icons */}
                        <div className="absolute bottom-4 right-4 flex gap-4">
                          {/* Mute/Unmute Icon */}
                          <button
                            onClick={() => toggleMute(index)}
                            className="bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                          >
                            {videoState?.muted ? (
                              <IoVolumeMute className="w-7 h-7 text-white" />
                            ) : (
                              <IoVolumeHigh className="w-7 h-7 text-white" />
                            )}
                          </button>

                          {/* Play/Pause Icon */}
                          <button
                            onClick={() => togglePlay(index)}
                            className="bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                          >
                            {videoState?.paused ? (
                              <IoPlay className="w-6 h-6 text-white" />
                            ) : (
                              <IoPause className="w-6 h-6 text-white" />
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Arrows - Desktop Only */}
        <div className="mt-10 flex items-center gap-6 justify-end w-full">
          <button onClick={goPrev} className="cursor-pointer">
            <IoArrowBackCircleOutline className="text-white text-[3rem]" />
          </button>
          <button onClick={goNext} className="cursor-pointer">
            <IoArrowForwardCircleOutline className="text-white text-[3rem]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReelSlider;

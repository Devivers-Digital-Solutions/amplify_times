import React, { useState, useEffect, useRef } from "react";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";

const videos = [
  { title: "Wolf", src: "1NVqjsmZxRg" },
  { title: "Suppo Mario", src: "djjl_6n4ef0" },
  { title: "Vaani Kapoor", src: "aW35OAPJlas" },
  { title: "Sky Fall", src: "xCIlrrPY5Dk" },
  { title: "Dream Land", src: "l1mEuutHY9A" },
  { title: "Fire Storm", src: "FFuMFd8T0gU" },
  { title: "Ocean Deep", src: "pfnHuEDBgYU" },
  { title: "Ocean Deep", src: "GjY8QJGvg3c" },
  { title: "Ocean Deep", src: "_PHfcd9AZ6s" },
  { title: "Ocean Deep", src: "3PwQQPG0rsA" },
  { title: "Ocean Deep", src: "iaTybo-UKjY" },
  { title: "Ocean Deep", src: "NALpUMraeug" },
  { title: "Ocean Deep", src: "iG-XwRaRpw8" },
  { title: "Ocean Deep", src: "ePhDOnzAey4" },
  { title: "Ocean Deep", src: "xkSRtG8Xcb4" },
  { title: "Ocean Deep", src: "Cg5i7VL9lzU" },
  { title: "Ocean Deep", src: "Z05XanMvsSY" },
  { title: "Ocean Deep", src: "Ig3DXpaPxPE" },
  { title: "Ocean Deep", src: "fvSIGV_UMgA" },
  { title: "Ocean Deep", src: "Cg5i7VL9lzU" },
  { title: "Ocean Deep", src: "WXiGLzQP-fw" },
  { title: "Ocean Deep", src: "hqZwqC8r0CU" },
  { title: "Ocean Deep", src: "4eA_FNAKxEs" },
  { title: "Ocean Deep", src: "06W8eQygNgU" },
  { title: "Ocean Deep", src: "jIZRkrYkZLM" },
  { title: "Ocean Deep", src: "zQIOb4IdajU" },
  { title: "Ocean Deep", src: "m873ovGVA7Q" },
  { title: "Ocean Deep", src: "7CJ01F4EpBc" },
  { title: "Ocean Deep", src: "91uTyNuuO-Q" },
  { title: "Ocean Deep", src: "FkVg_xoPAkg" },
  { title: "Ocean Deep", src: "qe79x4y9olQ" },
  { title: "Ocean Deep", src: "4EIwhPoAdV0" },
  { title: "Ocean Deep", src: "i2p_742MOO8" },
  { title: "Ocean Deep", src: "KIP4cgZHVec" },
  { title: "Ocean Deep", src: "fFjFBVZfCZo" },
  { title: "Ocean Deep", src: "EehbTWT4rOw" },
  { title: "Ocean Deep", src: "atJu1ebxo-I" },
  { title: "Ocean Deep", src: "z4kVb3dSPfs" },
  { title: "Ocean Deep", src: "hlNnW15fxOE" },
  { title: "Ocean Deep", src: "oJw2QUstnyg" },
  { title: "Ocean Deep", src: "Wxxs7gShkAQ" },
  { title: "Ocean Deep", src: "ddGuU4nW2dg" },
  { title: "Ocean Deep", src: "vvjaTjsdcSI" },
  { title: "Ocean Deep", src: "OPd0-hLXqZ0" },
  { title: "Ocean Deep", src: "BO8bHJlJueQ" },
  { title: "Ocean Deep", src: "NyvEZTSLMRM" },
  { title: "Ocean Deep", src: "YrU2oQk7Das" },
  { title: "Ocean Deep", src: "hqZwqC8r0CU" },
  { title: "Ocean Deep", src: "QT-0MtslcfM" },
  { title: "Ocean Deep", src: "NQZefpVC5IY" },
  { title: "Ocean Deep", src: "YtzZi_zUSoo" },
  { title: "Ocean Deep", src: "3qcb6DWCY4Q" },
  { title: "Ocean Deep", src: "1LqyALJQvDI" },
  { title: "Ocean Deep", src: "4eA_FNAKxEs" },
  { title: "Ocean Deep", src: "2iTWJiEeCuI" },
  { title: "Ocean Deep", src: "lnkpq4HLX6o" },
  { title: "Ocean Deep", src: "ExgEvon7zmE" },
  { title: "Ocean Deep", src: "qCSrdK6Xuy8" },
  { title: "Ocean Deep", src: "ExgEvon7zmE" },
  { title: "Ocean Deep", src: "ExgEvon7zmE" },
];

const VideoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [playingVideos, setPlayingVideos] = useState<Set<string>>(new Set());
  const mobileScrollContainerRef = useRef<HTMLDivElement>(null);
  const mobileVideoRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Group into sets of 4
  const groupedSlides = () => {
    const chunkSize = 4;
    const result = [];
    for (let i = 0; i < videos.length; i += chunkSize) {
      result.push(videos.slice(i, i + chunkSize));
    }
    return result;
  };

  // Convert to YouTube embed format without autoplay
  const getYoutubeEmbedUrl = (videoId: string, isPlaying: boolean = false) => {
    // Remove any timestamp parameters from the videoId
    const cleanVideoId = videoId.split("&")[0];
    const baseUrl = `https://www.youtube.com/embed/${cleanVideoId}`;
    const params = new URLSearchParams({
      controls: "1",
      modestbranding: "1",
      rel: "0",
      showinfo: "0",
      playsinline: "1",
      mute: "0",
    });

    // Only add autoplay if the video is supposed to be playing
    if (isPlaying) {
      params.append("autoplay", "1");
    }

    return `${baseUrl}?${params.toString()}`;
  };

  const handleVideoClick = (videoId: string) => {
    setPlayingVideos((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(videoId)) {
        newSet.delete(videoId);
      } else {
        newSet.add(videoId);
      }
      return newSet;
    });
  };

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : groupedSlides().length - 1
    );
  };

  const goNext = () => {
    setCurrentIndex((prev) =>
      prev < groupedSlides().length - 1 ? prev + 1 : 0
    );
  };

  const goPrevMobile = () => {
    const newIndex = mobileIndex > 0 ? mobileIndex - 1 : videos.length - 1;
    setMobileIndex(newIndex);
    mobileVideoRefs.current[newIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const goNextMobile = () => {
    const newIndex = mobileIndex < videos.length - 1 ? mobileIndex + 1 : 0;
    setMobileIndex(newIndex);
    mobileVideoRefs.current[newIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  useEffect(() => {
    mobileVideoRefs.current = mobileVideoRefs.current.slice(0, videos.length);
  }, []);

  return (
    <div className="w-full h-full">
      {/* Mobile View - Horizontal Carousel */}
      <div className="md:hidden w-full">
        <div
          className="w-full overflow-x-auto snap-x snap-mandatory"
          ref={mobileScrollContainerRef}
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          <div className="flex flex-nowrap gap-4 px-[10vw]">
            {videos.map((video, index) => {
              const isPlaying = playingVideos.has(video.src);
              return (
                <div
                  key={index}
                  className="w-[80vw] flex-shrink-0 snap-center"
                  ref={(el) => (mobileVideoRefs.current[index] = el)}
                >
                  <div
                    className="relative rounded-[1.6875rem] overflow-hidden group cursor-pointer"
                    style={{ width: "100%", aspectRatio: "16/9" }}
                    onClick={() => handleVideoClick(video.src)}
                  >
                    <iframe
                      className="w-full h-full object-cover"
                      src={getYoutubeEmbedUrl(video.src, isPlaying)}
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={video.title}
                    />
                    {!isPlaying && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="white"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    )}
                    <div className="absolute top-3 left-3 text-white uppercase text-[1.125rem] lg:text-[2rem] font-medium z-10">
                      <span className="border-l-2 border-orange-500 pl-2">
                        {video.title}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center gap-6 mt-4">
          <button onClick={goPrevMobile} className="cursor-pointer">
            <IoArrowBackCircleOutline className="text-white text-[2.5rem] lg:text-[3rem]" />
          </button>
          <button onClick={goNextMobile} className="cursor-pointer">
            <IoArrowForwardCircleOutline className="text-white text-[2.5rem] lg:text-[3rem]" />
          </button>
        </div>
      </div>

      {/* Desktop View - Grid Slider */}
      <div className="hidden md:block w-full h-full">
        <div className="w-full h-full overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {groupedSlides().map((group, i) => (
              <div key={i} className="w-full flex-shrink-0 h-full">
                <div className="grid grid-cols-2 gap-[2rem] h-full">
                  {group.map((video, j) => {
                    const isPlaying = playingVideos.has(video.src);
                    return (
                      <div
                        key={j}
                        className="relative rounded-[1.6875rem] overflow-hidden group h-full min-h-[60vh] cursor-pointer"
                        onClick={() => handleVideoClick(video.src)}
                      >
                        {/* YouTube iframe */}
                        <iframe
                          className="w-full h-full object-cover"
                          src={getYoutubeEmbedUrl(video.src, isPlaying)}
                          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={video.title}
                        />

                        {/* Play/Pause Overlay */}
                        {!isPlaying && (
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M8 5v14l11-7z" fill="white" />
                              </svg>
                            </div>
                          </div>
                        )}

                        {/* Title */}
                        <div className="absolute top-3 left-3 text-white uppercase text-sm font-medium z-10">
                          <span className="border-l-2 border-orange-500 pl-2">
                            {video.title}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-4">
          <button onClick={goPrev} className="cursor-pointer rounded-full p-2">
            <IoArrowBackCircleOutline className="text-white text-[3rem]" />
          </button>
          <button onClick={goNext} className="cursor-pointer rounded-full p-2">
            <IoArrowForwardCircleOutline className="text-white text-[3rem]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoSlider;

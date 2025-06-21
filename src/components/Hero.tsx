// // import { useEffect, useRef } from "react";

// // const HERO_TEXTS = [
// //   "Storytellers",
// //   "Creators",
// //   "Thinkers",
// //   "FlimMakers",
// //   "Dreamers",
// //   "Strategists",
// //   "Visionaries",
// // ];

// // const HeroSectionVideo = () => {
// //   const videoRef = useRef(null);
// //   const animatedRef = useRef(null);
// //   const indexRef = useRef(0);
// //   const intervalRef = useRef(null);

// //   useEffect(() => {
// //     const video = videoRef.current;

// //     const onLoadedMetadata = () => {
// //       video.currentTime = 3;
// //       video.play();
// //     };

// //     const onTimeUpdate = () => {
// //       if (video.currentTime >= 121.8) {
// //         video.currentTime = 3;
// //         video.play();
// //       }
// //     };

// //     if (video) {
// //       video.addEventListener("loadedmetadata", onLoadedMetadata);
// //       video.addEventListener("timeupdate", onTimeUpdate);
// //     }

// //     return () => {
// //       if (video) {
// //         video.removeEventListener("loadedmetadata", onLoadedMetadata);
// //         video.removeEventListener("timeupdate", onTimeUpdate);
// //       }
// //     };
// //   }, []);

// //   useEffect(() => {
// //     const animated = animatedRef.current;
// //     if (!animated) return;

// //     const lineHeight = 80;
// //     indexRef.current = 0;

// //     // Clone first child to enable seamless looping
// //     const firstClone = animated.children[0].cloneNode(true);
// //     animated.appendChild(firstClone);

// //     const total = animated.children.length;

// //     intervalRef.current = setInterval(() => {
// //       indexRef.current += 1;
// //       animated.style.transition = "transform 0.7s ease-in-out";
// //       animated.style.transform = `translateY(-${lineHeight * indexRef.current}px)`;

// //       if (indexRef.current === total - 1) {
// //         setTimeout(() => {
// //           animated.style.transition = "none";
// //           animated.style.transform = "translateY(0)";
// //           indexRef.current = 0;
// //         }, 700);
// //       }
// //     }, 2000);

// //     return () => {
// //       clearInterval(intervalRef.current);
// //     };
// //   }, []);

// //   return (
// //     <section className="relative w-full flex items-end overflow-hidden mt-[80px] md:mt-[65px] md:rounded-[24px] h-[70vh] md:h-[80vh] lg:h-[85vh]">
// //     {/* <section className="relative w-full flex items-end overflow-hidden mt-[80px] md:mt-[65px] md:rounded-[24px] h-[70vh] md:h-[calc(65vh+16px)] lg:h-[calc(60vh+16px)]"> */}

// //     <video
// //         ref={videoRef}
// //         autoPlay
// //         muted
// //         loop
// //         playsInline
// //         className="absolute top-0 left-0 w-full h-full object-cover 2xl:scale-[1.2] scale-[1.5]"
// //       >
// //         <source
// //           src="https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/video.mp4"
// //           type="video/mp4"
// //         />
// //         Your browser does not support the video tag.
// //       </video>

// //       <div className="flex flex-col justify-end w-full p-6 relative z-10">
// //         <div className="text-white font-bold md:text-5xl text-[40px] leading-none mb-8">
// //           <div className="text-center uppercase">We are</div>
// //           <div className="relative h-[80px] overflow-hidden">
// //             <div
// //               ref={animatedRef}
// //               className="absolute top-0 left-0 w-full transition-transform duration-700 ease-in-out flex flex-col items-center uppercase"
// //             >
// //               {HERO_TEXTS.map((text, idx) => (
// //                 <div key={idx} className="h-[80px]">
// //                   {text}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>

// //         {/* Slider navigation indicator */}
// //         <div className="flex gap-4 items-center w-full">
// //           <span className="w-[18px] h-[18px] rounded-full bg-white opacity-50 flex-shrink-0"></span>
// //           <span className="w-full bg-[#949494] h-px"></span>
// //           <span
// //             className="w-[18px] h-[18px] rounded-full bg-[#E21C1C] flex-shrink-0"
// //             id="redDot"
// //           ></span>
// //           <span className="w-full bg-[#949494] h-px"></span>
// //           <span className="w-[18px] h-[18px] rounded-full bg-white opacity-50 flex-shrink-0"></span>
// //         </div>
// //       </div>
// //     </section>
// //     <section className="w-full bg-black text-white py-20 px-6 md:px-20 text-center text-[28px] md:text-[40px] leading-snug font-semibold">
// //   <p>We are creating agency that</p>
// //   <p>builds</p>
// //   <p>
// //     <span className="text-[#EE6F20]">beautiful stories</span>
// //   </p>
// //   <p>with and for brands</p>
// // </section>

// //   );
// // };

// // export default HeroSectionVideo;

// import { useEffect, useRef } from "react";

// const HERO_TEXTS = [
//   "Storytellers",
//   "Creators",
//   "Thinkers",
//   "FlimMakers",
//   "Dreamers",
//   "Strategists",
//   "Visionaries",
// ];

// const HeroSectionVideo = () => {
//   const videoRef = useRef(null);
//   const animatedRef = useRef(null);
//   const indexRef = useRef(0);
//   const intervalRef = useRef(null);

//   useEffect(() => {
//     const video = videoRef.current;

//     const onLoadedMetadata = () => {
//       video.currentTime = 3;
//       video.play();
//     };

//     const onTimeUpdate = () => {
//       if (video.currentTime >= 121.8) {
//         video.currentTime = 3;
//         video.play();
//       }
//     };

//     if (video) {
//       video.addEventListener("loadedmetadata", onLoadedMetadata);
//       video.addEventListener("timeupdate", onTimeUpdate);
//     }

//     return () => {
//       if (video) {
//         video.removeEventListener("loadedmetadata", onLoadedMetadata);
//         video.removeEventListener("timeupdate", onTimeUpdate);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     const animated = animatedRef.current;
//     if (!animated) return;

//     const lineHeight = 80;
//     indexRef.current = 0;

//     const firstClone = animated.children[0].cloneNode(true);
//     animated.appendChild(firstClone);

//     const total = animated.children.length;

//     intervalRef.current = setInterval(() => {
//       indexRef.current += 1;
//       animated.style.transition = "transform 0.7s ease-in-out";
//       animated.style.transform = `translateY(-${lineHeight * indexRef.current}px)`;

//       if (indexRef.current === total - 1) {
//         setTimeout(() => {
//           animated.style.transition = "none";
//           animated.style.transform = "translateY(0)";
//           indexRef.current = 0;
//         }, 700);
//       }
//     }, 2000);

//     return () => {
//       clearInterval(intervalRef.current);
//     };
//   }, []);

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative w-full flex items-end overflow-hidden mt-[80px] md:mt-[65px] md:rounded-[24px] h-[70vh] md:h-[80vh] lg:h-[85vh] bg-black">
//         <video
//           ref={videoRef}
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="absolute top-0 left-0 w-full h-full object-cover 2xl:scale-[1.2] scale-[1.5]"
//         >
//           <source
//             src="https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/video.mp4"
//             type="video/mp4"
//           />
//           Your browser does not support the video tag.
//         </video>

//         <div className="flex flex-col justify-end w-full p-6 relative z-10">
//           <div className="text-white font-bold md:text-5xl text-[40px] leading-none mb-8">
//             <div className="text-center uppercase">We are</div>
//             <div className="relative h-[80px] overflow-hidden">
//               <div
//                 ref={animatedRef}
//                 className="absolute top-0 left-0 w-full transition-transform duration-700 ease-in-out flex flex-col items-center uppercase"
//               >
//                 {HERO_TEXTS.map((text, idx) => (
//                   <div key={idx} className="h-[80px]">
//                     {text}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Slider indicators */}
//           <div className="flex gap-4 items-center w-full">
//             <span className="w-[18px] h-[18px] rounded-full bg-white opacity-50 flex-shrink-0"></span>
//             <span className="w-full bg-[#949494] h-px"></span>
//             <span className="w-[18px] h-[18px] rounded-full bg-[#E21C1C] flex-shrink-0"></span>
//             <span className="w-full bg-[#949494] h-px"></span>
//             <span className="w-[18px] h-[18px] rounded-full bg-white opacity-50 flex-shrink-0"></span>
//           </div>
//         </div>
//       </section>

//       {/* Additional Section - LEFT aligned, black background */}
//       <section className="w-full bg-black text-white py-20 px-6 md:px-20 text-left text-[28px] md:text-[40px] leading-snug font-semibold">
//         <p>We are creating agency that</p>
//         <p>builds</p>
//         <p>
//           <span className="text-[#EE6F20]">beautiful stories</span>
//         </p>
//         <p>with and for brands</p>
//       </section>
//     </>
//   );
// };

// export default HeroSectionVideo;

import { useEffect, useRef, useState } from "react";
import img1 from "../assests/img1.png";
import img2 from "../assests/img2.png";
import img3 from "../assests/img3.png";
import img4 from "../assests/img4.png";
import img5 from "../assests/img5.png";

const HERO_TEXTS = [
  "Storytellers",
  "Creators",
  "Thinkers",
  "FlimMakers",
  "Dreamers",
  "Strategists",
  "Visionaries",
];

const VIDEO_URLS = [
  "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/Film+Production.mp4",
  "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/Story+Telling.mp4",
  "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/Creative+Content+Production.mp4",
  "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/Tv+Commercials.mp4",
  "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/Brand+Campaign.mp4",
  "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/Show+Direction.mp4",
  "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/Sports+Production+%26+Broadcasting.mp4",
  "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/Content+Development.mp4",
  "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/Documentries.mp4",
  "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/Research.mp4",
];

const HeroSectionVideo = () => {
  const videoRef = useRef(null);
  const animatedRef = useRef(null);
  const indexRef = useRef(0);
  const intervalRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(0);

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
  }, [currentVideo]);

  useEffect(() => {
    const animated = animatedRef.current;
    if (!animated) return;

    const lineHeight = 80;
    indexRef.current = 0;

    const firstClone = animated.children[0].cloneNode(true);
    animated.appendChild(firstClone);

    const total = animated.children.length;

    intervalRef.current = setInterval(() => {
      indexRef.current += 1;
      animated.style.transition = "transform 0.7s ease-in-out";
      animated.style.transform = `translateY(-${
        lineHeight * indexRef.current
      }px)`;

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

  const handleNextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % VIDEO_URLS.length);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full flex items-end overflow-hidden mt-[80px] md:mt-[65px] md:rounded-[24px] h-[70vh] md:h-[80vh] lg:h-[85vh] bg-black">
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

          <div className="flex gap-4 items-center w-full">
            <span className="w-[18px] h-[18px] rounded-full bg-white opacity-50 flex-shrink-0"></span>
            <span className="w-full bg-[#949494] h-px"></span>
            <span className="w-[18px] h-[18px] rounded-full bg-[#E21C1C] flex-shrink-0"></span>
            <span className="w-full bg-[#949494] h-px"></span>
            <span className="w-[18px] h-[18px] rounded-full bg-white opacity-50 flex-shrink-0"></span>
          </div>
        </div>
      </section>

      {/* Text Section */}
      <section className="w-full  text-white py-20 px-6 md:px-20 text-left text-[28px] md:text-[40px] leading-snug font-semibold">
        <p>We are creating agency that</p>
        <p>builds</p>
        <p>
          <span className="text-[#EE6F20]">beautiful stories</span>
        </p>
        <p>with and for brands</p>
      </section>

      {/* What We Do Section */}
      <section className="w-full  text-white py-20 px-6 md:px-20 text-center">
        <h2 className="text-[24px] md:text-[32px] font-bold uppercase mb-4">
          WHAT WE DO
        </h2>
        <p className="text-[18px] md:text-[24px] max-w-4xl mx-auto">
          we focus on quality and meticulous attention to detail, making us the
          go-to source for creative and innovative content solutions.
        </p>
      </section>

      {/* Video Slider Section */}
      <section className="relative w-full flex justify-center items-center py-10 px-6 md:px-20">
        <div className="relative w-full rounded-2xl overflow-hidden">
          <video
            key={currentVideo}
            src={VIDEO_URLS[currentVideo]}
            controls
            className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl"
          />
          <button
            onClick={handleNextVideo}
            className="absolute bottom-4 right-4 bg-[#EE6F20] text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
          >
            ➡
          </button>
        </div>
      </section>
      <section className="w-full text-white py-16 px-6 md:px-20">
        <div className="text-[28px] md:text-[40px] font-bold flex flex-col justify-center items-center pb-[3rem]">
          <span className="mb-[1rem]">STORIES WE ARE SCRIPTING</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="74"
            height="65"
            viewBox="0 0 74 65"
            fill="none"
          >
            <path
              d="M73.3566 33.0888C72.5583 31.6697 70.6956 31.1375 69.1877 32.0244L59.0762 37.8784L56.5039 39.3862V53.4002L58.8988 54.8193C58.9875 54.8193 58.9875 54.908 59.0762 54.908L69.0104 60.6732C69.4538 61.028 70.0747 61.2054 70.6956 61.2054C72.3809 61.2054 73.7113 59.875 73.7113 58.1897V46.3045L73.8 34.5966C73.8 34.0645 73.7113 33.5323 73.3566 33.0888Z"
              fill="#BFBFBF"
              fill-opacity="0.4"
            />
            <path
              d="M14.2813 28.5601C22.1755 28.5601 28.5617 22.174 28.5617 14.28C28.5617 6.38611 22.1755 0 14.2813 0C6.38717 0 0.000900562 6.38611 0.000900562 14.28C-0.0877977 22.174 6.38717 28.5601 14.2813 28.5601ZM14.2813 8.42611C17.5631 8.42611 20.1354 11.087 20.1354 14.28C20.1354 17.5618 17.4745 20.134 14.2813 20.134C11.0882 20.134 8.42723 17.4731 8.42723 14.28C8.33853 10.9983 10.9995 8.42611 14.2813 8.42611Z"
              fill="#BFBFBF"
              fill-opacity="0.4"
            />
            <path
              d="M50.4788 29.3621C48.1726 30.5151 45.6004 31.2247 42.8507 31.2247C39.4802 31.2247 36.2871 30.249 33.6261 28.4751H23.5145C20.8536 30.249 17.6604 31.2247 14.2899 31.2247C11.5403 31.2247 8.96802 30.6038 6.66187 29.3621C4.62181 30.5151 3.20264 32.8212 3.20264 35.3047V56.9465C3.20264 60.9378 6.48447 64.1309 10.3872 64.1309H46.8421C50.8336 64.1309 54.0267 60.8491 54.0267 56.9465V35.3047C53.938 32.8212 52.5188 30.5151 50.4788 29.3621Z"
              fill="#BFBFBF"
              fill-opacity="0.4"
            />
            <path
              d="M42.8512 28.5601C50.7454 28.5601 57.1316 22.174 57.1316 14.28C57.1316 6.38611 50.7454 0 42.8512 0C34.9571 0 28.5708 6.38611 28.5708 14.28C28.5708 22.174 34.9571 28.5601 42.8512 28.5601ZM42.8512 8.42611C46.133 8.42611 48.7053 11.087 48.7053 14.28C48.7053 17.5618 46.0443 20.134 42.8512 20.134C39.6581 20.134 36.9971 17.4731 36.9971 14.28C36.9971 10.9983 39.5694 8.42611 42.8512 8.42611Z"
              fill="#BFBFBF"
              fill-opacity="0.4"
            />
          </svg>
        </div>
        <div className="grid grid-cols-5 justify-items-center gap-[2rem]">
          <div>
            <img src={img1} alt="img1" />
          </div>
          <div>
            <img src={img2} alt="img2" />
          </div>
          <div>
            <img src={img3} alt="img3" />
          </div>
          <div>
            <img src={img4} alt="img4" />
          </div>
          <div>
            <img src={img5} alt="img5" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSectionVideo;

// import { useEffect, useRef, useState, useMemo } from "react";
// import logo from "../assests/Amplify-logo-2.png";
// import mic from "../assests/mic.svg";
// import vector from "../assests/vector.svg";
// import img1 from "../assests/img1.png";
// import img2 from "../assests/img2.png";
// import img3 from "../assests/img3.png";
// import img4 from "../assests/img4.png";
// import img5 from "../assests/img5.png";
// import img6 from "../assests/img1.png";
// import img7 from "../assests/img2.png";
// import img8 from "../assests/img3.png";

// const HERO_TEXTS = ["Storytellers", "Creators", "Thinkers", "FlimMakers", "Dreamers", "Strategists", "Visionaries"];

// // const VIDEO_URLS = [
// //   "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/video1.mp4",
// //   "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/video2.mp4",
// //   "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/video3.mp4",
// //   "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/video4.mp4",
// //   "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/video5.mp4",
// //   "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/video6.mp4",
// //   "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/video7.mp4",
// //   "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/video8.mp4",
// //   "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/video9.mp4",
// // ];
// const videos = [
//   { src: 'https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/Film+Production.mp4' },
//   { src: 'https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/Story+Telling.mp4' },
//   { src: 'https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/Creative+Content+Production.mp4' },
//   { src: 'https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/Tv+Commercials.mp4' },
//   { src: 'https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/Brand+Campaign.mp4' },
//   { src: 'https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/Show+Direction.mp4' },
//   { src: 'https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/Sports+Production+%26+Broadcasting.mp4' },
//   { src: 'https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/Content+Development.mp4' },
//   { src: 'https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/Documentries.mp4' },
//   { src: 'https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/Research.mp4' }
// ]

// const IMAGES = [img1, img2, img3, img4, img5, img6, img7, img8];

// const FullLandingPage = () => {
//   const videoRef = useRef(null);
//   const animatedRef = useRef(null);
//   const indexRef = useRef(0);
//   const intervalRef = useRef(null);
//   const [currentVideo, setCurrentVideo] = useState(0);
//   const [photoIndex, setPhotoIndex] = useState(0);

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const onLoadedMetadata = () => {
//       video.currentTime = 3;
//       video.play();
//     };

//     const onTimeUpdate = () => {
//       if (video.currentTime >= 121.8) {
//         video.currentTime = 3;
//         video.play();
//       }
//     };

//     video.addEventListener("loadedmetadata", onLoadedMetadata);
//     video.addEventListener("timeupdate", onTimeUpdate);

//     return () => {
//       video.removeEventListener("loadedmetadata", onLoadedMetadata);
//       video.removeEventListener("timeupdate", onTimeUpdate);
//     };
//   }, [currentVideo]);

//   useEffect(() => {
//     const animated = animatedRef.current;
//     if (!animated) return;

//     const lineHeight = 80;
//     indexRef.current = 0;
//     const firstClone = animated.children[0].cloneNode(true);
//     animated.appendChild(firstClone);
//     const total = animated.children.length;

//     intervalRef.current = setInterval(() => {
//       indexRef.current += 1;
//       animated.style.transition = "transform 0.7s ease-in-out";
//       animated.style.transform = `translateY(-${lineHeight * indexRef.current}px)`;
//       if (indexRef.current === total - 1) {
//         setTimeout(() => {
//           animated.style.transition = "none";
//           animated.style.transform = "translateY(0)";
//           indexRef.current = 0;
//         }, 700);
//       }
//     }, 2000);

//     return () => clearInterval(intervalRef.current);
//   }, []);

//   const handleNextVideo = () => {
//     setCurrentVideo((prev) => (prev + 1) % VIDEO_URLS.length);
//   };

//   const handlePhotoSwap = () => {
//     setPhotoIndex((prev) => (prev + 4) % IMAGES.length);
//   };

//   const targetDate = new Date("2025-06-22T23:59:00");
//   const getTimeLeft = () => {
//     const total = targetDate - new Date();
//     return {
//       total,
//       days: Math.floor(total / (1000 * 60 * 60 * 24)),
//       hours: Math.floor((total / (1000 * 60 * 60)) % 24),
//       minutes: Math.floor((total / 1000 / 60) % 60),
//     };
//   };
//   const [timeLeft, setTimeLeft] = useState(getTimeLeft());
//   useEffect(() => {
//     const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="bg-black text-white">
//       {/* ... existing content remains unchanged ... */}

//       {/* Updated Footer Section */}
//       <footer className="w-full bg-black pt-16 pb-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex flex-col md:flex-row justify-between border-t border-white pt-10">
//             <div className="mb-8 md:mb-0">
//               <img src={logo} alt="Logo" className="w-24 mb-4" />
//               <p className="text-sm text-white max-w-xs">
//                 Amplify Times is a dynamic creative content company and a powerhouse production house.
//               </p>
//               <div className="flex gap-4 mt-4">
//                 {['facebook', 'instagram', 'youtube', 'twitter'].map((icon, idx) => (
//                   <div key={idx} className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold">
//                     {icon.charAt(0).toUpperCase()}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="flex flex-col md:flex-row gap-10">
//               <div>
//                 <h3 className="text-white font-bold mb-2">Main</h3>
//                 <ul className="text-sm text-white space-y-1">
//                   <li>Home</li>
//                   <li>Our Story</li>
//                   <li>Show reel</li>
//                   <li>About Us</li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="text-white font-bold mb-2">Address</h3>
//                 <p className="text-sm text-white">400056, Mumbai, Maharashtra 22/2/5, Office 4</p>
//                 <p className="text-sm text-white mt-2">Email: amplify@gmail.com</p>
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-between items-center mt-10 border-t border-white pt-6 text-sm text-white">
//             <span>INDIA 🇮🇳</span>
//             <span>© 2025 — Copyright   Privacy Policy   Terms & Conditions</span>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default FullLandingPage;

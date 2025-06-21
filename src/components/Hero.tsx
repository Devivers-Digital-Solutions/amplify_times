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

// import { useEffect, useRef, useState } from "react";

// const HERO_TEXTS = [
//   "Storytellers",
//   "Creators",
//   "Thinkers",
//   "FlimMakers",
//   "Dreamers",
//   "Strategists",
//   "Visionaries",
// ];

// const VIDEO_URLS = [
//   "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/video1.mp4",
//   "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/video2.mp4",
//   "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/video3.mp4",
//   "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/video4.mp4",
//   "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/video5.mp4",
//   "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/video6.mp4",
//   "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/video7.mp4",
//   "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/video8.mp4",
//   "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/video9.mp4",
// ];

// const HeroSectionVideo = () => {
//   const videoRef = useRef(null);
//   const animatedRef = useRef(null);
//   const indexRef = useRef(0);
//   const intervalRef = useRef(null);
//   const [currentVideo, setCurrentVideo] = useState(0);

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

//     return () => {
//       clearInterval(intervalRef.current);
//     };
//   }, []);

//   const handleNextVideo = () => {
//     setCurrentVideo((prev) => (prev + 1) % VIDEO_URLS.length);
//   };

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
//           <source src="https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/video.mp4" type="video/mp4" />
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

//           <div className="flex gap-4 items-center w-full">
//             <span className="w-[18px] h-[18px] rounded-full bg-white opacity-50 flex-shrink-0"></span>
//             <span className="w-full bg-[#949494] h-px"></span>
//             <span className="w-[18px] h-[18px] rounded-full bg-[#E21C1C] flex-shrink-0"></span>
//             <span className="w-full bg-[#949494] h-px"></span>
//             <span className="w-[18px] h-[18px] rounded-full bg-white opacity-50 flex-shrink-0"></span>
//           </div>
//         </div>
//       </section>

//       {/* Text Section */}
//       <section className="w-full bg-black text-white py-20 px-6 md:px-20 text-left text-[28px] md:text-[40px] leading-snug font-semibold">
//         <p>We are creating agency that</p>
//         <p>builds</p>
//         <p><span className="text-[#EE6F20]">beautiful stories</span></p>
//         <p>with and for brands</p>
//       </section>

//       {/* What We Do Section */}
//       <section className="w-full bg-black text-white py-20 px-6 md:px-20 text-center">
//         <h2 className="text-[24px] md:text-[32px] font-bold uppercase mb-4">WHAT WE DO</h2>
//         <p className="text-[18px] md:text-[24px] max-w-4xl mx-auto">
//           we focus on quality and meticulous attention to detail, making us the go-to
//           source for creative and innovative content solutions.
//         </p>
//       </section>

//       {/* Video Slider Section */}
//       <section className="relative w-full bg-black flex justify-center items-center py-10 px-6 md:px-20">
//         <div className="relative w-full max-w-6xl rounded-2xl overflow-hidden">
//           <video
//             key={currentVideo}
//             src={VIDEO_URLS[currentVideo]}
//             controls
//             className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl"
//           />
//           <button
//             onClick={handleNextVideo}
//             className="absolute bottom-4 right-4 bg-[#EE6F20] text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
//           >
//             ➡
//           </button>
//         </div>
//       </section>
//       <section className="w-full bg-black text-white py-16 px-6 md:px-20 text-center">
//   <h2 className="text-[28px] md:text-[40px] font-bold">
//     STORIES WE ARE SCRIPTING </h2>
//     <h2><span role="img" aria-label="camera">📷</span>
//   </h2>
// </section>
//     </>
//   );
// };

// export default HeroSectionVideo;

import { useEffect, useRef, useState, useMemo } from "react";
import logo from "../assests/Amplify-logo-2.png";
import mic from "../assests/mic.svg";
import vector from "../assests/vector.svg";
import img1 from "../assests/img1.jpg";
import img2 from "../assests/img2.jpg";
import img3 from "../assests/img3.jpg";
import img4 from "../assests/img4.jpg";
import img5 from "../assests/img5.jpg";
import img6 from "../assests/img6.jpg";
import img7 from "../assests/img7.jpg";
import img8 from "../assests/img8.jpg";

const HERO_TEXTS = ["Storytellers", "Creators", "Thinkers", "FlimMakers", "Dreamers", "Strategists", "Visionaries"];

const VIDEO_URLS = [
  "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/video1.mp4",
  "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/video2.mp4",
  "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/video3.mp4",
  "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/video4.mp4",
  "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/video5.mp4",
  "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/video6.mp4",
  "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/video7.mp4",
  "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/video8.mp4",
  "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/video9.mp4",
];

const IMAGES = [img1, img2, img3, img4, img5, img6, img7, img8];

const FullLandingPage = () => {
  const videoRef = useRef(null);
  const animatedRef = useRef(null);
  const indexRef = useRef(0);
  const intervalRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

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

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("timeupdate", onTimeUpdate);

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("timeupdate", onTimeUpdate);
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
      animated.style.transform = `translateY(-${lineHeight * indexRef.current}px)`;
      if (indexRef.current === total - 1) {
        setTimeout(() => {
          animated.style.transition = "none";
          animated.style.transform = "translateY(0)";
          indexRef.current = 0;
        }, 700);
      }
    }, 2000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const handleNextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % VIDEO_URLS.length);
  };

  const handlePhotoSwap = () => {
    setPhotoIndex((prev) => (prev + 4) % IMAGES.length);
  };

  const targetDate = new Date("2025-06-22T23:59:00");
  const getTimeLeft = () => {
    const total = targetDate - new Date();
    return {
      total,
      days: Math.floor(total / (1000 * 60 * 60 * 24)),
      hours: Math.floor((total / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((total / 1000 / 60) % 60),
    };
  };
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white">
      {/* ... existing content remains unchanged ... */}

      {/* Updated Footer Section */}
      <footer className="w-full bg-black pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between border-t border-white pt-10">
            <div className="mb-8 md:mb-0">
              <img src={logo} alt="Logo" className="w-24 mb-4" />
              <p className="text-sm text-white max-w-xs">
                Amplify Times is a dynamic creative content company and a powerhouse production house.
              </p>
              <div className="flex gap-4 mt-4">
                {['facebook', 'instagram', 'youtube', 'twitter'].map((icon, idx) => (
                  <div key={idx} className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold">
                    {icon.charAt(0).toUpperCase()}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-10">
              <div>
                <h3 className="text-white font-bold mb-2">Main</h3>
                <ul className="text-sm text-white space-y-1">
                  <li>Home</li>
                  <li>Our Story</li>
                  <li>Show reel</li>
                  <li>About Us</li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">Address</h3>
                <p className="text-sm text-white">400056, Mumbai, Maharashtra 22/2/5, Office 4</p>
                <p className="text-sm text-white mt-2">Email: amplify@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-10 border-t border-white pt-6 text-sm text-white">
            <span>INDIA 🇮🇳</span>
            <span>© 2025 — Copyright   Privacy Policy   Terms & Conditions</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FullLandingPage;


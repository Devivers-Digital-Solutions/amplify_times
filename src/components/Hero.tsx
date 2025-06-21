import { useEffect, useRef, useState } from "react";
import img1 from "../assests/img1.png";
import img2 from "../assests/img2.png";
import img3 from "../assests/img3.png";
import img4 from "../assests/img4.png";
import img5 from "../assests/img5.png";
import worldCup from "../assests/worldcup.jpg";
import sriLanka from "../assests/srilanka.png";
import ipl2023 from "../assests/ipl.png";
import wpl2023 from "../assests/wpl23.png";
import wpl2025 from "../assests/wpl25.png";
import upt20 from "../assests/upt20.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import Countdown from "./CountDown";

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
  {
    src: "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/Film+Production.mp4",
    name: "Film Production",
  },
  {
    src: "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/Story+Telling.mp4",
    name: "Story Telling",
  },
  {
    src: "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/Creative+Content+Production.mp4",
    name: "Creative Content Production",
  },
  {
    src: "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/Tv+Commercials.mp4",
    name: "TV Commercials",
  },
  {
    src: "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/Brand+Campaign.mp4",
    name: "Brand Campaign",
  },
  {
    src: "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/Show+Direction.mp4",
    name: "Show Direction",
  },
  {
    src: "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/Sports+Production+%26+Broadcasting.mp4",
    name: "Sports Production & Broadcasting",
  },
  {
    src: "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/Content+Development.mp4",
    name: "Content Development",
  },
  {
    src: "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/Documentries.mp4",
    name: "Documentaries",
  },
  {
    src: "https://taahadevivers.s3.ap-south-1.amazonaws.com/amplifytimeswebsite/Research.mp4",
    name: "Research",
  },
];

const sportsEvents = [
  {
    title: "World cup 2023",
    image: worldCup,
    size: "w-full sm:w-[60%] h-[290px] text-[64px]",
  },
  {
    title: "Sri Lanka Legends Premier League 2024",
    image: sriLanka,
    size: "w-full sm:w-[38%] h-[290px] text-[42px]",
  },
  {
    title: "IPL 2023",
    image: ipl2023,
    size: "w-full sm:w-[38%] h-[290px] text-[42px]",
  },
  {
    title: "WPL 2023",
    image: wpl2023,
    size: "w-full sm:w-[60%] h-[290px] text-[42px]",
  },
  {
    title: "WPL 2025",
    image: wpl2025,
    size: "w-full sm:w-[60%] h-[290px] text-[42px]",
  },
  {
    title: "UPT 20",
    image: upt20,
    size: "w-full sm:w-[38%] h-[290px] text-[42px]",
  },
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
      <section className="relative w-[92vw] mx-auto flex items-end overflow-hidden mt-[4rem] lg:mt-[5rem] md:rounded-[24px] h-[70vh] md:h-[80vh] lg:h-[85vh] bg-black">
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

      {/* CountDown */}
      <Countdown />

      {/* Text Section */}
      <section
        className="w-full py-[4rem] px-[3rem] lg:px-[5rem] text-left text-[2.5rem] lg:text-[4rem]"
        style={{
          color: "#FFF",
          fontFamily: "Red Hat Display",
          fontSize: "4rem",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "5.5625rem",
        }}
      >
        <p>We are creating agency that</p>
        <p>builds</p>
        <p>
          <span className="text-[#EE6F20]">beautiful stories</span>
        </p>
        <p>with and for brands</p>
      </section>

      {/* What We Do Section */}
      <section className="w-full  text-white pt-[3rem] pb-[3rem] text-center">
        <h2
          className="text-[2.5rem] lg:text-[3.125rem] mb-[1rem]"
          style={{
            color: "#BFBFBF",
            fontFamily: "Red Hat Display",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
          }}
        >
          WHAT WE DO
        </h2>
        <p
          className="text-[1rem] lg:text-[1.375rem] max-w-4xl mx-auto"
          style={{
            color: "#FFF",
            textAlign: "center",
            fontFamily: "Red Hat Display",
            fontSize: "1.375rem",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "1.6875rem",
          }}
        >
          we focus on quality and meticulous attention to detail, making us the
          go-to source for creative and innovative content solutions.
        </p>
      </section>

      {/* Video Slider Section */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <div className="relative w-full h-full">
          <video
            key={currentVideo}
            src={VIDEO_URLS[currentVideo].src}
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-full object-cover"
          />
          <button
            onClick={handleNextVideo}
            className="absolute bottom-[3rem] right-[4rem] z-10 px-[1rem]"
            style={{
              borderRadius: "3.375rem",
              border: "2px solid #FFF",
            }}
          >
            <IoIosArrowRoundForward className="text-[3rem]" />
          </button>
          <div className="absolute bottom-[3rem] left-[4rem] z-10">
            <div
              className="bg-white mb-[1rem]"
              style={{
                width: "4.87163rem",
                height: "0.12419rem",
                flexShrink: 0,
              }}
            />
            <div
              className="text-[3.125rem]"
              style={{
                color: "#FFF",
                fontFamily: "Helvetica",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                textTransform: "uppercase",
              }}
            >
              {VIDEO_URLS[currentVideo].name}
            </div>
          </div>
        </div>
      </section>

      {/* stories we are scripting  */}
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

      {/* our-journey */}
      <section className="">
        <div className="bg-[#303030] w-full h-[0.0625rem]" />
        <div className="flex flex-col items-center justify-center py-[2rem]">
          <p
            className="mb-[0.5rem]"
            style={{
              color: "#BFBFBF",
              fontFamily: "Red Hat Display",
              fontSize: "3.125rem",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
            }}
          >
            OUR JOURNEY
          </p>
          <div
            className="mb-[1rem]"
            style={{
              borderRadius: "6.25rem",
              background:
                "linear-gradient(90deg, rgba(217, 217, 217, 0.00) 0%, #737373 47.6%, rgba(115, 115, 115, 0.00) 100%)",
              width: "8.125rem",
              height: "0.125rem",
              flexShrink: 0,
            }}
          />
          <p>
            <span
              className="pr-[1rem]"
              style={{
                color: "#EE6F20",
                fontFamily: "Red Hat Display",
                fontSize: "4rem",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
              }}
            >
              1000 +
            </span>
            <span
              style={{
                color: "#FFF",
                fontFamily: "Red Hat Display",
                fontSize: "2.8125rem",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              TV COMMERCIALS
            </span>
          </p>
        </div>
        <div className="bg-[#303030] w-full h-[0.0625rem]" />
      </section>

      {/* sports production & broadcasting */}
      <section className="w-full py-[4rem]">
        {/* header-div */}
        <div className="flex flex-col items-center justify-center">
          <span
            className="pb-[1rem]"
            style={{
              color: "#BFBFBF",
              fontFamily: "Red Hat Display",
              fontSize: "3.125rem",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
            }}
          >
            OUR SPORTING MILESTONES
          </span>
          <span
            className="px-[0.8rem] py-[0.3rem]"
            style={{
              color: "#FFF",
              fontFamily: "Red Hat Display",
              fontSize: "1rem",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              borderRadius: "0.5rem",
              border: "1px solid #FFF",
            }}
          >
            Cricket
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="79"
            height="78"
            viewBox="0 0 79 78"
            fill="none"
          >
            <g filter="url(#filter0_d_942_346)">
              <mask id="path-1-inside-1_942_346" fill="white">
                <path d="M30.6891 28.1969C36.5932 23.3743 45.345 24.2239 50.1983 30.0911C55.0516 35.9582 54.1965 44.655 48.2924 49.4776C42.3883 54.3003 33.6365 53.4506 28.7832 47.5835C23.9299 41.7163 24.785 33.0195 30.6891 28.1969ZM48.0216 49.1503C53.7443 44.4759 54.5728 36.0468 49.8689 30.3602C45.1649 24.6735 36.6825 23.8499 30.9599 28.5243C25.2372 33.1987 24.4087 41.6277 29.1126 47.3144C33.8166 53.001 42.299 53.8247 48.0216 49.1503Z" />
              </mask>
              <path
                d="M30.6891 28.1969C36.5932 23.3743 45.345 24.2239 50.1983 30.0911C55.0516 35.9582 54.1965 44.655 48.2924 49.4776C42.3883 54.3003 33.6365 53.4506 28.7832 47.5835C23.9299 41.7163 24.785 33.0195 30.6891 28.1969ZM48.0216 49.1503C53.7443 44.4759 54.5728 36.0468 49.8689 30.3602C45.1649 24.6735 36.6825 23.8499 30.9599 28.5243C25.2372 33.1987 24.4087 41.6277 29.1126 47.3144C33.8166 53.001 42.299 53.8247 48.0216 49.1503Z"
                fill="black"
              />
              <path
                d="M30.6891 28.1969L31.3264 28.9674C36.8037 24.4935 44.9233 25.283 49.4238 30.7237L50.1983 30.0911L50.9728 29.4585C45.7668 23.1649 36.3826 22.2551 30.0517 27.4263L30.6891 28.1969ZM50.1983 30.0911L49.4238 30.7237C53.9244 36.1644 53.1323 44.2331 47.655 48.7071L48.2924 49.4776L48.9298 50.2482C55.2608 45.0769 56.1788 35.752 50.9728 29.4585L50.1983 30.0911ZM48.2924 49.4776L47.655 48.7071C42.1778 53.1811 34.0582 52.3915 29.5577 46.9508L28.7832 47.5835L28.0087 48.2161C33.2147 54.5096 42.5989 55.4195 48.9298 50.2482L48.2924 49.4776ZM28.7832 47.5835L29.5577 46.9508C25.0571 41.5102 25.8492 33.4414 31.3264 28.9674L30.6891 28.1969L30.0517 27.4263C23.7207 32.5976 22.8027 41.9225 28.0087 48.2161L28.7832 47.5835ZM48.0216 49.1503L48.659 49.9208C54.8085 44.8977 55.7001 35.8406 50.6433 29.7276L49.8689 30.3602L49.0944 30.9928C53.4456 36.253 52.68 44.054 47.3842 48.3797L48.0216 49.1503ZM49.8689 30.3602L50.6433 29.7276C45.5866 23.6145 36.472 22.7307 30.3225 27.7537L30.9599 28.5243L31.5973 29.2948C36.8931 24.9691 44.7431 25.7325 49.0944 30.9928L49.8689 30.3602ZM30.9599 28.5243L30.3225 27.7537C24.173 32.7768 23.2814 41.8339 28.3382 47.947L29.1126 47.3144L29.8871 46.6817C25.5359 41.4215 26.3015 33.6205 31.5973 29.2948L30.9599 28.5243ZM29.1126 47.3144L28.3382 47.947C33.3949 54.06 42.5095 54.9439 48.659 49.9208L48.0216 49.1503L47.3842 48.3797C42.0884 52.7055 34.2384 51.942 29.8871 46.6817L29.1126 47.3144Z"
                fill="#FFF2F2"
                mask="url(#path-1-inside-1_942_346)"
              />
            </g>
            <g filter="url(#filter1_d_942_346)">
              <mask id="path-3-inside-2_942_346" fill="white">
                <path d="M37.9514 25.3947L38.3613 25.279C40.4948 32.7404 45.7032 39.0414 52.6507 42.5671L52.4571 42.9444C45.4042 39.3655 40.1168 32.969 37.9514 25.3947Z" />
              </mask>
              <path
                d="M37.9514 25.3947L38.3613 25.279C40.4948 32.7404 45.7032 39.0414 52.6507 42.5671L52.4571 42.9444C45.4042 39.3655 40.1168 32.969 37.9514 25.3947Z"
                fill="black"
              />
              <path
                d="M37.9514 25.3947L37.6762 24.4357L36.7126 24.7078L36.9866 25.6662L37.9514 25.3947ZM38.3613 25.279L39.3261 25.0075L39.0516 24.0474L38.0862 24.3199L38.3613 25.279ZM52.6507 42.5671L53.5443 43.021L54 42.1331L53.106 41.6793L52.6507 42.5671ZM52.4571 42.9444L52.0019 43.8322L52.8953 44.2856L53.3507 43.3983L52.4571 42.9444ZM37.9514 25.3947L38.2265 26.3538L38.6365 26.238L38.3613 25.279L38.0862 24.3199L37.6762 24.4357L37.9514 25.3947ZM38.3613 25.279L37.3965 25.5505C39.6063 33.2785 44.9992 39.803 52.1954 43.4549L52.6507 42.5671L53.106 41.6793C46.4073 38.2798 41.3833 32.2022 39.3261 25.0075L38.3613 25.279ZM52.6507 42.5671L51.7571 42.1133L51.5635 42.4905L52.4571 42.9444L53.3507 43.3983L53.5443 43.021L52.6507 42.5671ZM52.4571 42.9444L52.9123 42.0566C46.1082 38.6039 41.0054 32.4308 38.9162 25.1233L37.9514 25.3947L36.9866 25.6662C39.2283 33.5072 44.7002 40.1271 52.0019 43.8322L52.4571 42.9444Z"
                fill="#FFF2F2"
                mask="url(#path-3-inside-2_942_346)"
              />
              <mask id="path-5-inside-3_942_346" fill="white">
                <path d="M51.877 41.2773L50.8745 42.9871L50.5059 42.7737L51.5083 41.0639L51.877 41.2773Z" />
              </mask>
              <path
                d="M51.877 41.2773L50.8745 42.9871L50.5059 42.7737L51.5083 41.0639L51.877 41.2773Z"
                fill="black"
              />
              <path
                d="M51.877 41.2773L52.7445 41.7796L53.2495 40.9183L52.3819 40.416L51.877 41.2773ZM50.8745 42.9871L50.3696 43.8484L51.2371 44.3507L51.7421 43.4894L50.8745 42.9871ZM50.5059 42.7737L49.6383 42.2714L49.1333 43.1327L50.0009 43.635L50.5059 42.7737ZM51.5083 41.0639L52.0133 40.2026L51.1457 39.7003L50.6407 40.5616L51.5083 41.0639ZM51.877 41.2773L51.0094 40.7751L50.007 42.4848L50.8745 42.9871L51.7421 43.4894L52.7445 41.7796L51.877 41.2773ZM50.8745 42.9871L51.3795 42.1258L51.0109 41.9123L50.5059 42.7737L50.0009 43.635L50.3696 43.8484L50.8745 42.9871ZM50.5059 42.7737L51.3735 43.2759L52.3759 41.5662L51.5083 41.0639L50.6407 40.5616L49.6383 42.2714L50.5059 42.7737ZM51.5083 41.0639L51.0033 41.9252L51.372 42.1387L51.877 41.2773L52.3819 40.416L52.0133 40.2026L51.5083 41.0639Z"
                fill="#FFF2F2"
                mask="url(#path-5-inside-3_942_346)"
              />
              <mask id="path-7-inside-4_942_346" fill="white">
                <path d="M50.0282 40.1182L48.8941 41.7435L48.5436 41.502L49.6777 39.8767L50.0282 40.1182Z" />
              </mask>
              <path
                d="M50.0282 40.1182L48.8941 41.7435L48.5436 41.502L49.6777 39.8767L50.0282 40.1182Z"
                fill="black"
              />
              <path
                d="M50.0282 40.1182L50.853 40.6865L51.4243 39.8677L50.5995 39.2994L50.0282 40.1182ZM48.8941 41.7435L48.3228 42.5622L49.1476 43.1305L49.7189 42.3118L48.8941 41.7435ZM48.5436 41.502L47.7189 40.9337L47.1476 41.7524L47.9723 42.3207L48.5436 41.502ZM49.6777 39.8767L50.249 39.0579L49.4243 38.4896L48.853 39.3084L49.6777 39.8767ZM50.0282 40.1182L49.2034 39.5499L48.0693 41.1752L48.8941 41.7435L49.7189 42.3118L50.853 40.6865L50.0282 40.1182ZM48.8941 41.7435L49.4654 40.9247L49.1149 40.6832L48.5436 41.502L47.9723 42.3207L48.3228 42.5622L48.8941 41.7435ZM48.5436 41.502L49.3684 42.0703L50.5025 40.445L49.6777 39.8767L48.853 39.3084L47.7189 40.9337L48.5436 41.502ZM49.6777 39.8767L49.1064 40.6954L49.4569 40.9369L50.0282 40.1182L50.5995 39.2994L50.249 39.0579L49.6777 39.8767Z"
                fill="#FFF2F2"
                mask="url(#path-7-inside-4_942_346)"
              />
              <mask id="path-9-inside-5_942_346" fill="white">
                <path d="M48.2832 38.8325L47.0218 40.3619L46.692 40.0933L47.9534 38.5639L48.2832 38.8325Z" />
              </mask>
              <path
                d="M48.2832 38.8325L47.0218 40.3619L46.692 40.0933L47.9534 38.5639L48.2832 38.8325Z"
                fill="black"
              />
              <path
                d="M48.2832 38.8325L49.0597 39.4649L49.6953 38.6942L48.9189 38.0618L48.2832 38.8325ZM47.0218 40.3619L46.3862 41.1326L47.1626 41.7649L47.7983 40.9943L47.0218 40.3619ZM46.692 40.0933L45.9155 39.4609L45.2799 40.2316L46.0563 40.864L46.692 40.0933ZM47.9534 38.5639L48.589 37.7932L47.8126 37.1608L47.1769 37.9315L47.9534 38.5639ZM48.2832 38.8325L47.5068 38.2002L46.2454 39.7295L47.0218 40.3619L47.7983 40.9943L49.0597 39.4649L48.2832 38.8325ZM47.0218 40.3619L47.6575 39.5912L47.3276 39.3226L46.692 40.0933L46.0563 40.864L46.3862 41.1326L47.0218 40.3619ZM46.692 40.0933L47.4684 40.7256L48.7298 39.1962L47.9534 38.5639L47.1769 37.9315L45.9155 39.4609L46.692 40.0933ZM47.9534 38.5639L47.3177 39.3346L47.6476 39.6032L48.2832 38.8325L48.9189 38.0618L48.589 37.7932L47.9534 38.5639Z"
                fill="#FFF2F2"
                mask="url(#path-9-inside-5_942_346)"
              />
              <mask id="path-11-inside-6_942_346" fill="white">
                <path d="M46.6571 37.4204L45.278 38.8465L44.9705 38.5528L46.3496 37.1268L46.6571 37.4204Z" />
              </mask>
              <path
                d="M46.6571 37.4204L45.278 38.8465L44.9705 38.5528L46.3496 37.1268L46.6571 37.4204Z"
                fill="black"
              />
              <path
                d="M46.6571 37.4204L47.3807 38.1114L48.0753 37.3932L47.3517 36.7022L46.6571 37.4204ZM45.278 38.8465L44.5834 39.5647L45.3071 40.2558L46.0016 39.5375L45.278 38.8465ZM44.9705 38.5528L44.2469 37.8618L43.5523 38.58L44.2759 39.2711L44.9705 38.5528ZM46.3496 37.1268L47.0442 36.4085L46.3205 35.7175L45.626 36.4357L46.3496 37.1268ZM46.6571 37.4204L45.9335 36.7294L44.5544 38.1555L45.278 38.8465L46.0016 39.5375L47.3807 38.1114L46.6571 37.4204ZM45.278 38.8465L45.9726 38.1282L45.6651 37.8346L44.9705 38.5528L44.2759 39.2711L44.5834 39.5647L45.278 38.8465ZM44.9705 38.5528L45.6941 39.2439L47.0732 37.8178L46.3496 37.1268L45.626 36.4357L44.2469 37.8618L44.9705 38.5528ZM46.3496 37.1268L45.655 37.845L45.9625 38.1386L46.6571 37.4204L47.3517 36.7022L47.0442 36.4085L46.3496 37.1268Z"
                fill="#FFF2F2"
                mask="url(#path-11-inside-6_942_346)"
              />
              <mask id="path-13-inside-7_942_346" fill="white">
                <path d="M45.1483 35.8896L43.6616 37.2039L43.3782 36.8873L44.8649 35.5731L45.1483 35.8896Z" />
              </mask>
              <path
                d="M45.1483 35.8896L43.6616 37.2039L43.3782 36.8873L44.8649 35.5731L45.1483 35.8896Z"
                fill="black"
              />
              <path
                d="M45.1483 35.8896L45.8153 36.6347L46.5642 35.9727L45.8972 35.2277L45.1483 35.8896ZM43.6616 37.2039L42.9127 37.8659L43.5797 38.611L44.3286 37.949L43.6616 37.2039ZM43.3782 36.8873L42.7112 36.1423L41.9623 36.8043L42.6293 37.5493L43.3782 36.8873ZM44.8649 35.5731L45.6138 34.9111L44.9468 34.166L44.1979 34.828L44.8649 35.5731ZM45.1483 35.8896L44.4813 35.1446L42.9946 36.4588L43.6616 37.2039L44.3286 37.949L45.8153 36.6347L45.1483 35.8896ZM43.6616 37.2039L44.4105 36.5419L44.1271 36.2253L43.3782 36.8873L42.6293 37.5493L42.9127 37.8659L43.6616 37.2039ZM43.3782 36.8873L44.0452 37.6324L45.5319 36.3182L44.8649 35.5731L44.1979 34.828L42.7112 36.1423L43.3782 36.8873ZM44.8649 35.5731L44.1161 36.2351L44.3994 36.5516L45.1483 35.8896L45.8972 35.2277L45.6138 34.9111L44.8649 35.5731Z"
                fill="#FFF2F2"
                mask="url(#path-13-inside-7_942_346)"
              />
              <mask id="path-15-inside-8_942_346" fill="white">
                <path d="M43.5127 33.9043L43.7704 34.2418L42.1851 35.4369L41.9274 35.0994L43.5127 33.9043Z" />
              </mask>
              <path
                d="M43.5127 33.9043L43.7704 34.2418L42.1851 35.4369L41.9274 35.0994L43.5127 33.9043Z"
                fill="black"
              />
              <path
                d="M43.5127 33.9043L44.3112 33.3023L43.7047 32.5079L42.9062 33.1098L43.5127 33.9043ZM43.7704 34.2418L44.3769 35.0363L45.1754 34.4344L44.5689 33.6399L43.7704 34.2418ZM42.1851 35.4369L41.3865 36.0389L41.9931 36.8334L42.7916 36.2314L42.1851 35.4369ZM41.9274 35.0994L41.3209 34.3049L40.5223 34.9069L41.1289 35.7013L41.9274 35.0994ZM43.5127 33.9043L42.7142 34.5063L42.9719 34.8438L43.7704 34.2418L44.5689 33.6399L44.3112 33.3023L43.5127 33.9043ZM43.7704 34.2418L43.1639 33.4474L41.5786 34.6424L42.1851 35.4369L42.7916 36.2314L44.3769 35.0363L43.7704 34.2418ZM42.1851 35.4369L42.9836 34.835L42.7259 34.4974L41.9274 35.0994L41.1289 35.7013L41.3865 36.0389L42.1851 35.4369ZM41.9274 35.0994L42.5339 35.8938L44.1192 34.6988L43.5127 33.9043L42.9062 33.1098L41.3209 34.3049L41.9274 35.0994Z"
                fill="#FFF2F2"
                mask="url(#path-15-inside-8_942_346)"
              />
              <mask id="path-17-inside-9_942_346" fill="white">
                <path d="M42.2764 32.1328L42.5064 32.4897L40.8305 33.5565L40.6004 33.1996L42.2764 32.1328Z" />
              </mask>
              <path
                d="M42.2764 32.1328L42.5064 32.4897L40.8305 33.5565L40.6004 33.1996L42.2764 32.1328Z"
                fill="black"
              />
              <path
                d="M42.2764 32.1328L43.1206 31.5954L42.5791 30.7556L41.7349 31.2929L42.2764 32.1328ZM42.5064 32.4897L43.0478 33.3295L43.892 32.7922L43.3506 31.9523L42.5064 32.4897ZM40.8305 33.5565L39.9863 34.0939L40.5277 34.9337L41.3719 34.3964L40.8305 33.5565ZM40.6004 33.1996L40.059 32.3598L39.2148 32.8971L39.7562 33.737L40.6004 33.1996ZM42.2764 32.1328L41.4322 32.6702L41.6622 33.027L42.5064 32.4897L43.3506 31.9523L43.1206 31.5954L42.2764 32.1328ZM42.5064 32.4897L41.965 31.6498L40.2891 32.7166L40.8305 33.5565L41.3719 34.3964L43.0478 33.3295L42.5064 32.4897ZM40.8305 33.5565L41.6747 33.0191L41.4446 32.6623L40.6004 33.1996L39.7562 33.737L39.9863 34.0939L40.8305 33.5565ZM40.6004 33.1996L41.1419 34.0395L42.8178 32.9727L42.2764 32.1328L41.7349 31.2929L40.059 32.3598L40.6004 33.1996Z"
                fill="#FFF2F2"
                mask="url(#path-17-inside-9_942_346)"
              />
              <mask id="path-19-inside-10_942_346" fill="white">
                <path d="M41.1913 30.2754L41.3924 30.6493L39.6367 31.5817L39.4356 31.2078L41.1913 30.2754Z" />
              </mask>
              <path
                d="M41.1913 30.2754L41.3924 30.6493L39.6367 31.5817L39.4356 31.2078L41.1913 30.2754Z"
                fill="black"
              />
              <path
                d="M41.1913 30.2754L42.0759 29.8056L41.6026 28.9256L40.718 29.3954L41.1913 30.2754ZM41.3924 30.6493L41.8656 31.5293L42.7502 31.0595L42.2769 30.1795L41.3924 30.6493ZM39.6367 31.5817L38.7521 32.0515L39.2254 32.9315L40.11 32.4617L39.6367 31.5817ZM39.4356 31.2078L38.9623 30.3278L38.0777 30.7975L38.551 31.6775L39.4356 31.2078ZM41.1913 30.2754L40.3067 30.7452L40.5078 31.1191L41.3924 30.6493L42.2769 30.1795L42.0759 29.8056L41.1913 30.2754ZM41.3924 30.6493L40.9191 29.7693L39.1634 30.7017L39.6367 31.5817L40.11 32.4617L41.8656 31.5293L41.3924 30.6493ZM39.6367 31.5817L40.5213 31.1119L40.3202 30.738L39.4356 31.2078L38.551 31.6775L38.7521 32.0515L39.6367 31.5817ZM39.4356 31.2078L39.9089 32.0878L41.6646 31.1554L41.1913 30.2754L40.718 29.3954L38.9623 30.3278L39.4356 31.2078Z"
                fill="#FFF2F2"
                mask="url(#path-19-inside-10_942_346)"
              />
              <mask id="path-21-inside-11_942_346" fill="white">
                <path d="M40.2627 28.3169L40.4333 28.7053L38.6091 29.4964L38.4385 29.108L40.2627 28.3169Z" />
              </mask>
              <path
                d="M40.2627 28.3169L40.4333 28.7053L38.6091 29.4964L38.4385 29.108L40.2627 28.3169Z"
                fill="black"
              />
              <path
                d="M40.2627 28.3169L41.1816 27.9184L40.7802 27.0043L39.8613 27.4028L40.2627 28.3169ZM40.4333 28.7053L40.8347 29.6194L41.7536 29.2209L41.3522 28.3068L40.4333 28.7053ZM38.6091 29.4964L37.6902 29.8949L38.0916 30.809L39.0105 30.4105L38.6091 29.4964ZM38.4385 29.108L38.0371 28.1939L37.1182 28.5924L37.5196 29.5065L38.4385 29.108ZM40.2627 28.3169L39.3438 28.7154L39.5144 29.1038L40.4333 28.7053L41.3522 28.3068L41.1816 27.9184L40.2627 28.3169ZM40.4333 28.7053L40.0318 27.7912L38.2077 28.5823L38.6091 29.4964L39.0105 30.4105L40.8347 29.6194L40.4333 28.7053ZM38.6091 29.4964L39.528 29.0979L39.3574 28.7095L38.4385 29.108L37.5196 29.5065L37.6902 29.8949L38.6091 29.4964ZM38.4385 29.108L38.84 30.0221L40.6641 29.231L40.2627 28.3169L39.8613 27.4028L38.0371 28.1939L38.4385 29.108Z"
                fill="#FFF2F2"
                mask="url(#path-21-inside-11_942_346)"
              />
              <mask id="path-23-inside-12_942_346" fill="white">
                <path d="M39.5028 26.2939L39.6419 26.6944L37.7614 27.3394L37.6223 26.939L39.5028 26.2939Z" />
              </mask>
              <path
                d="M39.5028 26.2939L39.6419 26.6944L37.7614 27.3394L37.6223 26.939L39.5028 26.2939Z"
                fill="black"
              />
              <path
                d="M39.5028 26.2939L40.4502 25.969L40.1228 25.0267L39.1755 25.3517L39.5028 26.2939ZM39.6419 26.6944L39.9692 27.6366L40.9166 27.3116L40.5893 26.3694L39.6419 26.6944ZM37.7614 27.3394L36.814 27.6644L37.1414 28.6067L38.0887 28.2817L37.7614 27.3394ZM37.6223 26.939L37.2949 25.9968L36.3476 26.3217L36.6749 27.264L37.6223 26.939ZM39.5028 26.2939L38.5554 26.6189L38.6945 27.0193L39.6419 26.6944L40.5893 26.3694L40.4502 25.969L39.5028 26.2939ZM39.6419 26.6944L39.3146 25.7521L37.434 26.3972L37.7614 27.3394L38.0887 28.2817L39.9692 27.6366L39.6419 26.6944ZM37.7614 27.3394L38.7087 27.0145L38.5697 26.6141L37.6223 26.939L36.6749 27.264L36.814 27.6644L37.7614 27.3394ZM37.6223 26.939L37.9496 27.8813L39.8301 27.2362L39.5028 26.2939L39.1755 25.3517L37.2949 25.9968L37.6223 26.939Z"
                fill="#FFF2F2"
                mask="url(#path-23-inside-12_942_346)"
              />
              <mask id="path-25-inside-13_942_346" fill="white">
                <path d="M26.5187 34.7288C33.5782 38.3085 38.8687 44.7043 41.0338 52.2762L40.6239 52.3919C38.4909 44.9331 33.2791 38.6326 26.3251 35.1061L26.5187 34.7288Z" />
              </mask>
              <path
                d="M26.5187 34.7288C33.5782 38.3085 38.8687 44.7043 41.0338 52.2762L40.6239 52.3919C38.4909 44.9331 33.2791 38.6326 26.3251 35.1061L26.5187 34.7288Z"
                fill="black"
              />
              <path
                d="M26.5187 34.7288L26.9737 33.8409L26.0803 33.3879L25.6251 34.2749L26.5187 34.7288ZM41.0338 52.2762L41.309 53.2352L42.2727 52.9631L41.9986 52.0047L41.0338 52.2762ZM40.6239 52.3919L39.6591 52.6634L39.9336 53.6235L40.899 53.351L40.6239 52.3919ZM26.3251 35.1061L25.4315 34.6522L24.9756 35.5404L25.8701 35.994L26.3251 35.1061ZM26.5187 34.7288L26.0637 35.6168C32.8746 39.0704 37.9803 45.2428 40.069 52.5477L41.0338 52.2762L41.9986 52.0047C39.7572 44.1657 34.2817 37.5466 26.9737 33.8409L26.5187 34.7288ZM41.0338 52.2762L40.7587 51.3171L40.3487 51.4329L40.6239 52.3919L40.899 53.351L41.309 53.2352L41.0338 52.2762ZM40.6239 52.3919L41.5886 52.1204C39.3793 44.3945 33.9827 37.8707 26.7801 34.2181L26.3251 35.1061L25.8701 35.994C32.5755 39.3945 37.6024 45.4717 39.6591 52.6634L40.6239 52.3919ZM26.3251 35.1061L27.2187 35.5599L27.4123 35.1827L26.5187 34.7288L25.6251 34.2749L25.4315 34.6522L26.3251 35.1061Z"
                fill="#FFF2F2"
                mask="url(#path-25-inside-13_942_346)"
              />
              <mask id="path-27-inside-14_942_346" fill="white">
                <path d="M41.2324 50.3223L41.3715 50.7227L39.491 51.3678L39.3519 50.9674L41.2324 50.3223Z" />
              </mask>
              <path
                d="M41.2324 50.3223L41.3715 50.7227L39.491 51.3678L39.3519 50.9674L41.2324 50.3223Z"
                fill="black"
              />
              <path
                d="M41.2324 50.3223L42.1798 49.9973L41.8524 49.055L40.9051 49.38L41.2324 50.3223ZM41.3715 50.7227L41.6989 51.6649L42.6462 51.34L42.3189 50.3977L41.3715 50.7227ZM39.491 51.3678L38.5436 51.6927L38.871 52.635L39.8183 52.31L39.491 51.3678ZM39.3519 50.9674L39.0246 50.0251L38.0772 50.3501L38.4045 51.2923L39.3519 50.9674ZM41.2324 50.3223L40.2851 50.6472L40.4242 51.0477L41.3715 50.7227L42.3189 50.3977L42.1798 49.9973L41.2324 50.3223ZM41.3715 50.7227L41.0442 49.7804L39.1637 50.4255L39.491 51.3678L39.8183 52.31L41.6989 51.6649L41.3715 50.7227ZM39.491 51.3678L40.4384 51.0428L40.2993 50.6424L39.3519 50.9674L38.4045 51.2923L38.5436 51.6927L39.491 51.3678ZM39.3519 50.9674L39.6792 51.9096L41.5598 51.2645L41.2324 50.3223L40.9051 49.38L39.0246 50.0251L39.3519 50.9674Z"
                fill="#FFF2F2"
                mask="url(#path-27-inside-14_942_346)"
              />
              <mask id="path-29-inside-15_942_346" fill="white">
                <path d="M40.3585 48.1704L40.5291 48.5588L38.7049 49.3499L38.5344 48.9615L40.3585 48.1704Z" />
              </mask>
              <path
                d="M40.3585 48.1704L40.5291 48.5588L38.7049 49.3499L38.5344 48.9615L40.3585 48.1704Z"
                fill="black"
              />
              <path
                d="M40.3585 48.1704L41.2774 47.7719L40.876 46.8578L39.9571 47.2563L40.3585 48.1704ZM40.5291 48.5588L40.9305 49.4729L41.8495 49.0744L41.448 48.1603L40.5291 48.5588ZM38.7049 49.3499L37.786 49.7484L38.1875 50.6625L39.1064 50.264L38.7049 49.3499ZM38.5344 48.9615L38.1329 48.0474L37.214 48.4459L37.6154 49.36L38.5344 48.9615ZM40.3585 48.1704L39.4396 48.5689L39.6102 48.9573L40.5291 48.5588L41.448 48.1603L41.2774 47.7719L40.3585 48.1704ZM40.5291 48.5588L40.1277 47.6447L38.3035 48.4358L38.7049 49.3499L39.1064 50.264L40.9305 49.4729L40.5291 48.5588ZM38.7049 49.3499L39.6239 48.9514L39.4533 48.563L38.5344 48.9615L37.6154 49.36L37.786 49.7484L38.7049 49.3499ZM38.5344 48.9615L38.9358 49.8756L40.76 49.0845L40.3585 48.1704L39.9571 47.2563L38.1329 48.0474L38.5344 48.9615Z"
                fill="#FFF2F2"
                mask="url(#path-29-inside-15_942_346)"
              />
              <mask id="path-31-inside-16_942_346" fill="white">
                <path d="M39.3292 46.104L39.5303 46.4779L37.7742 47.4105L37.5732 47.0366L39.3292 46.104Z" />
              </mask>
              <path
                d="M39.3292 46.104L39.5303 46.4779L37.7742 47.4105L37.5732 47.0366L39.3292 46.104Z"
                fill="black"
              />
              <path
                d="M39.3292 46.104L40.2138 45.6342L39.7405 44.7542L38.8559 45.224L39.3292 46.104ZM39.5303 46.4779L40.0036 47.3579L40.8882 46.8881L40.4149 46.0081L39.5303 46.4779ZM37.7742 47.4105L36.8897 47.8803L37.363 48.7603L38.2475 48.2905L37.7742 47.4105ZM37.5732 47.0366L37.0999 46.1566L36.2153 46.6264L36.6886 47.5064L37.5732 47.0366ZM39.3292 46.104L38.4446 46.5738L38.6457 46.9477L39.5303 46.4779L40.4149 46.0081L40.2138 45.6342L39.3292 46.104ZM39.5303 46.4779L39.057 45.5979L37.301 46.5305L37.7742 47.4105L38.2475 48.2905L40.0036 47.3579L39.5303 46.4779ZM37.7742 47.4105L38.6588 46.9407L38.4577 46.5668L37.5732 47.0366L36.6886 47.5064L36.8897 47.8803L37.7742 47.4105ZM37.5732 47.0366L38.0464 47.9166L39.8025 46.984L39.3292 46.104L38.8559 45.224L37.0999 46.1566L37.5732 47.0366Z"
                fill="#FFF2F2"
                mask="url(#path-31-inside-16_942_346)"
              />
              <mask id="path-33-inside-17_942_346" fill="white">
                <path d="M38.1378 44.1143L38.3679 44.4711L36.6919 45.5379L36.4619 45.1811L38.1378 44.1143Z" />
              </mask>
              <path
                d="M38.1378 44.1143L38.3679 44.4711L36.6919 45.5379L36.4619 45.1811L38.1378 44.1143Z"
                fill="black"
              />
              <path
                d="M38.1378 44.1143L38.982 43.5769L38.4406 42.737L37.5964 43.2744L38.1378 44.1143ZM38.3679 44.4711L38.9093 45.311L39.7535 44.7736L39.212 43.9337L38.3679 44.4711ZM36.6919 45.5379L35.8477 46.0753L36.3892 46.9152L37.2333 46.3778L36.6919 45.5379ZM36.4619 45.1811L35.9205 44.3412L35.0763 44.8786L35.6177 45.7185L36.4619 45.1811ZM38.1378 44.1143L37.2936 44.6516L37.5237 45.0085L38.3679 44.4711L39.212 43.9337L38.982 43.5769L38.1378 44.1143ZM38.3679 44.4711L37.8264 43.6312L36.1505 44.6981L36.6919 45.5379L37.2333 46.3778L38.9093 45.311L38.3679 44.4711ZM36.6919 45.5379L37.5361 45.0006L37.3061 44.6437L36.4619 45.1811L35.6177 45.7185L35.8477 46.0753L36.6919 45.5379ZM36.4619 45.1811L37.0033 46.021L38.6792 44.9541L38.1378 44.1143L37.5964 43.2744L35.9205 44.3412L36.4619 45.1811Z"
                fill="#FFF2F2"
                mask="url(#path-33-inside-17_942_346)"
              />
              <mask id="path-35-inside-18_942_346" fill="white">
                <path d="M36.8107 42.23L37.0684 42.5675L35.483 43.7626L35.2254 43.4251L36.8107 42.23Z" />
              </mask>
              <path
                d="M36.8107 42.23L37.0684 42.5675L35.483 43.7626L35.2254 43.4251L36.8107 42.23Z"
                fill="black"
              />
              <path
                d="M36.8107 42.23L37.6092 41.628L37.0027 40.8335L36.2042 41.4355L36.8107 42.23ZM37.0684 42.5675L37.6749 43.362L38.4734 42.76L37.8669 41.9656L37.0684 42.5675ZM35.483 43.7626L34.6845 44.3646L35.291 45.159L36.0896 44.5571L35.483 43.7626ZM35.2254 43.4251L34.6188 42.6306L33.8203 43.2325L34.4268 44.027L35.2254 43.4251ZM36.8107 42.23L36.0121 42.8319L36.2698 43.1695L37.0684 42.5675L37.8669 41.9656L37.6092 41.628L36.8107 42.23ZM37.0684 42.5675L36.4618 41.7731L34.8765 42.9681L35.483 43.7626L36.0896 44.5571L37.6749 43.362L37.0684 42.5675ZM35.483 43.7626L36.2816 43.1606L36.0239 42.8231L35.2254 43.4251L34.4268 44.027L34.6845 44.3646L35.483 43.7626ZM35.2254 43.4251L35.8319 44.2195L37.4172 43.0245L36.8107 42.23L36.2042 41.4355L34.6188 42.6306L35.2254 43.4251Z"
                fill="#FFF2F2"
                mask="url(#path-35-inside-18_942_346)"
              />
              <mask id="path-37-inside-19_942_346" fill="white">
                <path d="M35.6124 40.7852L34.1258 42.0995L33.8424 41.7829L35.3291 40.4686L35.6124 40.7852Z" />
              </mask>
              <path
                d="M35.6124 40.7852L34.1258 42.0995L33.8424 41.7829L35.3291 40.4686L35.6124 40.7852Z"
                fill="black"
              />
              <path
                d="M35.6124 40.7852L36.2794 41.5303L37.0282 40.8682L36.3613 40.1231L35.6124 40.7852ZM34.1258 42.0995L33.3769 42.7615L34.0439 43.5066L34.7927 42.8446L34.1258 42.0995ZM33.8424 41.7829L33.1754 41.0378L32.4266 41.6998L33.0935 42.4449L33.8424 41.7829ZM35.3291 40.4686L36.0779 39.8066L35.4109 39.0615L34.6621 39.7235L35.3291 40.4686ZM35.6124 40.7852L34.9455 40.0401L33.4588 41.3544L34.1258 42.0995L34.7927 42.8446L36.2794 41.5303L35.6124 40.7852ZM34.1258 42.0995L34.8746 41.4374L34.5912 41.1209L33.8424 41.7829L33.0935 42.4449L33.3769 42.7615L34.1258 42.0995ZM33.8424 41.7829L34.5093 42.528L35.996 41.2137L35.3291 40.4686L34.6621 39.7235L33.1754 41.0378L33.8424 41.7829ZM35.3291 40.4686L34.5802 41.1306L34.8636 41.4472L35.6124 40.7852L36.3613 40.1231L36.0779 39.8066L35.3291 40.4686Z"
                fill="#FFF2F2"
                mask="url(#path-37-inside-19_942_346)"
              />
              <mask id="path-39-inside-20_942_346" fill="white">
                <path d="M34.0146 39.1133L32.6355 40.5394L32.328 40.2457L33.7071 38.8196L34.0146 39.1133Z" />
              </mask>
              <path
                d="M34.0146 39.1133L32.6355 40.5394L32.328 40.2457L33.7071 38.8196L34.0146 39.1133Z"
                fill="black"
              />
              <path
                d="M34.0146 39.1133L34.7383 39.8043L35.4329 39.0861L34.7092 38.395L34.0146 39.1133ZM32.6355 40.5394L31.941 41.2576L32.6646 41.9486L33.3592 41.2304L32.6355 40.5394ZM32.328 40.2457L31.6044 39.5547L30.9098 40.2729L31.6335 40.9639L32.328 40.2457ZM33.7071 38.8196L34.4017 38.1014L33.6781 37.4104L32.9835 38.1286L33.7071 38.8196ZM34.0146 39.1133L33.291 38.4223L31.9119 39.8483L32.6355 40.5394L33.3592 41.2304L34.7383 39.8043L34.0146 39.1133ZM32.6355 40.5394L33.3301 39.8211L33.0226 39.5275L32.328 40.2457L31.6335 40.9639L31.941 41.2576L32.6355 40.5394ZM32.328 40.2457L33.0517 40.9367L34.4308 39.5107L33.7071 38.8196L32.9835 38.1286L31.6044 39.5547L32.328 40.2457ZM33.7071 38.8196L33.0126 39.5379L33.3201 39.8315L34.0146 39.1133L34.7092 38.395L34.4017 38.1014L33.7071 38.8196Z"
                fill="#FFF2F2"
                mask="url(#path-39-inside-20_942_346)"
              />
              <mask id="path-41-inside-21_942_346" fill="white">
                <path d="M32.2803 37.564L31.0186 39.0937L30.6888 38.825L31.9504 37.2953L32.2803 37.564Z" />
              </mask>
              <path
                d="M32.2803 37.564L31.0186 39.0937L30.6888 38.825L31.9504 37.2953L32.2803 37.564Z"
                fill="black"
              />
              <path
                d="M32.2803 37.564L33.0567 38.1963L33.6924 37.4256L32.9159 36.7933L32.2803 37.564ZM31.0186 39.0937L30.383 39.8644L31.1594 40.4967L31.7951 39.726L31.0186 39.0937ZM30.6888 38.825L29.9123 38.1927L29.2767 38.9634L30.0531 39.5957L30.6888 38.825ZM31.9504 37.2953L32.5861 36.5246L31.8096 35.8923L31.174 36.663L31.9504 37.2953ZM32.2803 37.564L31.5038 36.9316L30.2422 38.4613L31.0186 39.0937L31.7951 39.726L33.0567 38.1963L32.2803 37.564ZM31.0186 39.0937L31.6543 38.323L31.3244 38.0543L30.6888 38.825L30.0531 39.5957L30.383 39.8644L31.0186 39.0937ZM30.6888 38.825L31.4652 39.4574L32.7269 37.9277L31.9504 37.2953L31.174 36.663L29.9123 38.1927L30.6888 38.825ZM31.9504 37.2953L31.3148 38.066L31.6446 38.3347L32.2803 37.564L32.9159 36.7933L32.5861 36.5246L31.9504 37.2953Z"
                fill="#FFF2F2"
                mask="url(#path-41-inside-21_942_346)"
              />
              <mask id="path-43-inside-22_942_346" fill="white">
                <path d="M30.4346 36.1543L29.3005 37.7796L28.95 37.5381L30.0841 35.9128L30.4346 36.1543Z" />
              </mask>
              <path
                d="M30.4346 36.1543L29.3005 37.7796L28.95 37.5381L30.0841 35.9128L30.4346 36.1543Z"
                fill="black"
              />
              <path
                d="M30.4346 36.1543L31.2594 36.7226L31.8307 35.9038L31.0059 35.3356L30.4346 36.1543ZM29.3005 37.7796L28.7292 38.5983L29.554 39.1666L30.1253 38.3479L29.3005 37.7796ZM28.95 37.5381L28.1252 36.9698L27.5539 37.7886L28.3787 38.3569L28.95 37.5381ZM30.0841 35.9128L30.6554 35.0941L29.8306 34.5258L29.2593 35.3445L30.0841 35.9128ZM30.4346 36.1543L29.6098 35.586L28.4757 37.2113L29.3005 37.7796L30.1253 38.3479L31.2594 36.7226L30.4346 36.1543ZM29.3005 37.7796L29.8718 36.9609L29.5213 36.7194L28.95 37.5381L28.3787 38.3569L28.7292 38.5983L29.3005 37.7796ZM28.95 37.5381L29.7748 38.1064L30.9089 36.4811L30.0841 35.9128L29.2593 35.3445L28.1252 36.9698L28.95 37.5381ZM30.0841 35.9128L29.5128 36.7316L29.8633 36.973L30.4346 36.1543L31.0059 35.3356L30.6554 35.0941L30.0841 35.9128Z"
                fill="#FFF2F2"
                mask="url(#path-43-inside-22_942_346)"
              />
              <mask id="path-45-inside-23_942_346" fill="white">
                <path d="M28.4572 34.9102L27.4547 36.6199L27.0861 36.4065L28.0885 34.6967L28.4572 34.9102Z" />
              </mask>
              <path
                d="M28.4572 34.9102L27.4547 36.6199L27.0861 36.4065L28.0885 34.6967L28.4572 34.9102Z"
                fill="black"
              />
              <path
                d="M28.4572 34.9102L29.3247 35.4124L29.8297 34.5511L28.9621 34.0488L28.4572 34.9102ZM27.4547 36.6199L26.9498 37.4812L27.8173 37.9835L28.3223 37.1222L27.4547 36.6199ZM27.0861 36.4065L26.2185 35.9042L25.7135 36.7655L26.5811 37.2678L27.0861 36.4065ZM28.0885 34.6967L28.5935 33.8354L27.7259 33.3331L27.2209 34.1944L28.0885 34.6967ZM28.4572 34.9102L27.5896 34.4079L26.5872 36.1176L27.4547 36.6199L28.3223 37.1222L29.3247 35.4124L28.4572 34.9102ZM27.4547 36.6199L27.9597 35.7586L27.5911 35.5451L27.0861 36.4065L26.5811 37.2678L26.9498 37.4812L27.4547 36.6199ZM27.0861 36.4065L27.9537 36.9088L28.9561 35.199L28.0885 34.6967L27.2209 34.1944L26.2185 35.9042L27.0861 36.4065ZM28.0885 34.6967L27.5835 35.5581L27.9522 35.7715L28.4572 34.9102L28.9621 34.0488L28.5935 33.8354L28.0885 34.6967Z"
                fill="#FFF2F2"
                mask="url(#path-45-inside-23_942_346)"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_942_346"
                x="0.635864"
                y="0.0693359"
                width="77.7098"
                height="77.5356"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="12.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_942_346"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_942_346"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_942_346"
                x="1.32507"
                y="0.278809"
                width="76.3257"
                height="77.1133"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="12.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_942_346"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_942_346"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        {/* image-section */}
        <div className="px-[2rem] mt-[2rem]">
          <div className="flex flex-wrap gap-4 justify-start">
            {sportsEvents.map((item) => (
              <div
                className={`relative overflow-hidden rounded-xl ${item.size} group cursor-pointer`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full hfull- object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-[80%]" />
                <p className="absolute bottom-8 left-6" style={{
                  color: "#FFF", 
                  fontFamily: "Red Hat Display",
                  fontSize: item.title.toLowerCase().includes('sri lanka') ? '2.5rem' : '4rem',
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal"
                }}>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSectionVideo;

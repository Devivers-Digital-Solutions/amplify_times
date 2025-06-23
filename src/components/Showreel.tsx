import React from "react";
import VideoSlider from "./VideoSlider";
import ReelSlider from "./ReelSlider";

const Showreel = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center pt-[9vh] bg-[#111]">
      {/* our-work */}
      <div className="w-[95vw] mx-auto h-full flex flex-col">
        {/* outwork-txt */}
        <div className="flex flex-col items-center justify-center pb-[3rem]">
          <h1
            className="text-[2.5rem] lg:text-[3.125rem] mb-[0.25rem]"
            style={{
              color: "#BFBFBF",
              fontFamily: "Red Hat Display",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            Our Work
          </h1>
          <p
            className="text-[1.125rem] lg:text-[1.375rem]"
            style={{
              color: "#FFF",
              textAlign: "center",
              fontFamily: "Red Hat Display",
              fontStyle: "normal",
              fontWeight: 300,
              lineHeight: "1.75rem",
            }}
          >
            Watch what we've created for our clients
          </p>
        </div>
        {/* outwork-vid */}
        <div className="flex-1">
          <VideoSlider />
        </div>
      </div>
      {/* shorts */}
      <div className="w-[95vw] mx-auto h-full flex flex-col pt-[5rem] pb-[5rem]">
        {/* shorts-txt */}
        <div className="flex flex-col items-center justify-center pb-[3rem]">
          <h1
            className="text-[2.5rem] lg:text-[3.125rem] mb-[0.25rem]"
            style={{
              color: "#BFBFBF",
              fontFamily: "Red Hat Display",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            SHORTS
          </h1>
          <div className="pt-[1rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M51.4841 47.5465H46.021C43.8527 47.5465 42.0875 45.7823 42.0875 43.614V26C42.0875 25.7197 42.315 25.4922 42.5953 25.4922C42.8756 25.4922 43.1031 25.7197 43.1031 26V43.614C43.1031 45.2227 44.4123 46.5319 46.021 46.5319H51.4841C51.7644 46.5319 51.9909 46.7594 51.9909 47.0397C51.9909 47.32 51.7644 47.5465 51.4841 47.5465Z"
                fill="#B0B0B0"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.5556 47.5466C9.67484 47.5466 0.00914001 37.8809 0.00914001 26.0001C0.00914001 14.1194 9.67484 4.45264 21.5556 4.45264C33.4374 4.45264 43.1031 14.1194 43.1031 26.0001C43.1031 37.8809 33.4374 47.5466 21.5556 47.5466Z"
                fill="#D9D9D9"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.5556 44.77C11.2064 44.77 2.78586 36.3495 2.78586 26.0002C2.78586 15.65 11.2064 7.23047 21.5556 7.23047C31.9058 7.23047 40.3264 15.65 40.3264 26.0002C40.3264 36.3495 31.9058 44.77 21.5556 44.77Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.5556 22.031C18.6601 22.031 16.3038 19.6747 16.3038 16.7792C16.3038 13.8826 18.6601 11.5264 21.5556 11.5264C24.4522 11.5264 26.8084 13.8826 26.8084 16.7792C26.8084 19.6747 24.4522 22.031 21.5556 22.031Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.5556 40.4738C18.6601 40.4738 16.3038 38.1176 16.3038 35.222C16.3038 32.3255 18.6601 29.9692 21.5556 29.9692C24.4522 29.9692 26.8084 32.3255 26.8084 35.222C26.8084 38.1176 24.4522 40.4738 21.5556 40.4738Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30.7775 31.2527C27.8809 31.2527 25.5247 28.8964 25.5247 25.9999C25.5247 23.1033 27.8809 20.7471 30.7775 20.7471C33.6741 20.7471 36.0303 23.1033 36.0303 25.9999C36.0303 28.8964 33.6741 31.2527 30.7775 31.2527Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.3348 31.2527C9.43819 31.2527 7.08194 28.8964 7.08194 25.9999C7.08194 23.1033 9.43819 20.7471 12.3348 20.7471C15.2313 20.7471 17.5876 23.1033 17.5876 25.9999C17.5876 28.8964 15.2313 31.2527 12.3348 31.2527Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.5556 19.7072C19.9408 19.7072 18.6266 18.394 18.6266 16.7781C18.6266 15.1633 19.9408 13.8501 21.5556 13.8501C23.1715 13.8501 24.4847 15.1633 24.4847 16.7781C24.4847 18.394 23.1715 19.7072 21.5556 19.7072Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30.7775 28.9289C29.1626 28.9289 27.8484 27.6147 27.8484 25.9999C27.8484 24.385 29.1626 23.0708 30.7775 23.0708C32.3923 23.0708 33.7065 24.385 33.7065 25.9999C33.7065 27.6147 32.3923 28.9289 30.7775 28.9289Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.5556 38.1501C19.9408 38.1501 18.6266 36.8369 18.6266 35.2211C18.6266 33.6062 19.9408 32.292 21.5556 32.292C23.1715 32.292 24.4847 33.6062 24.4847 35.2211C24.4847 36.8369 23.1715 38.1501 21.5556 38.1501Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.3348 28.9289C10.7199 28.9289 9.4057 27.6147 9.4057 25.9999C9.4057 24.385 10.7199 23.0708 12.3348 23.0708C13.9496 23.0708 15.2638 24.385 15.2638 25.9999C15.2638 27.6147 13.9496 28.9289 12.3348 28.9289Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.5556 28.1937C20.346 28.1937 19.3619 27.2095 19.3619 25.9999C19.3619 24.7903 20.346 23.8062 21.5556 23.8062C22.7663 23.8062 23.7504 24.7903 23.7504 25.9999C23.7504 27.2095 22.7663 28.1937 21.5556 28.1937Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        {/* shorts-vid */}
        <div className="flex-1">
          <ReelSlider />
        </div>
      </div>
    </section>
  );
};

export default Showreel;

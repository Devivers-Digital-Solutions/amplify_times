import React from "react";

const CountDown = () => {
  return (
    <section className="flex justify-center items-center w-full py-8 sm:py-12 md:py-16 lg:py-[5rem]">
      <div className="text-center">
        <p className="text-[#A6A6A6] text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] mb-6 md:mb-8">
          WE ARE SCRIPTING OUR STORY
        </p>
        <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[2rem]">
          <span className="flex flex-col justify-center items-center">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.5rem] font-bold">
              02
            </p>
            <p className="text-sm sm:text-base lg:text-[1rem] text-[#EE6F20]">
              Days
            </p>
          </span>
          <span className="flex flex-col justify-center items-center">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.5rem] font-bold">
              22
            </p>
            <p className="text-sm sm:text-base lg:text-[1rem] text-[#EE6F20]">
              Hours
            </p>
          </span>
          <span className="flex flex-col justify-center items-center">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.5rem] font-bold">
              22
            </p>
            <p className="text-sm sm:text-base lg:text-[1rem] text-[#EE6F20]">
              Minutes
            </p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default CountDown;

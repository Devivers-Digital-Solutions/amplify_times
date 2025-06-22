import { useEffect, useState, useMemo } from "react";

const Countdown = () => {
  const targetDate = new Date("2025-06-30T23:59:00");

  const getTimeLeft = () => {
    const total = targetDate - new Date();
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return { total, days, hours, minutes };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = useMemo(
    () => [
      { label: "Days", value: timeLeft.days },
      { label: "Hours", value: timeLeft.hours },
      { label: "Minutes", value: timeLeft.minutes },
    ],
    [timeLeft]
  );

  return (
    <div className="pt-[113px] flex flex-col justify-center items-center pb-10">
      <p className="text-[#A6A6A6] md:text-[40px] text-[32px] text-center font-medium mb-3 leading-normal">
      COMING SOON
      </p>
      <div className="flex space-x-6 rounded-md">
        {timeUnits.map((item, index) => (
          <div key={index} className="text-center">
            <div
              className="text-white md:text-[56px] text-[50px] font-bold"
              style={{ lineHeight: "normal" }}
            >
              {item.value.toString().padStart(2, "0")}
            </div>
            <div className="text-[#EE6F20] md:text-lg text-base uppercase">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;

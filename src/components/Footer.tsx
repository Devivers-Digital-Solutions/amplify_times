
const Footer = () => {
  return (
    <footer className="w-full">
      <div
    className="bg-[#EE6F20] lg:rounded-[26px] rounded-[14px] lg:max-w-6xl lg:mx-auto mx-5 lg:pt-0 pt-[50px]"
  >
    <div
      className="border-l lg:border-l-2 lg:border-l-white lg:border-t-0 border-t-2 border-t-white lg:ml-[50px] lg:pl-[52px] lg:pr-[100px] lg:pt-[132px] lg:pb-[66px] pb-8 pt-11 px-3.5"
    >
      <p className="text-white md:text-[80px] text-[40px]">LET'S WORK</p>
      <p
        className="text-white md:text-[80px] text-[40px] flex justify-center items-center"
      >
        TOGETHER <img
          src="src/assests/mic.svg"
          alt=""
          className=" h-[30px] md:h-12"
        />
      </p>
      <div className="flex justify-between items-center md:pt-0 pt-[50px]">
        <div>
          <p className="text-white md:text-[20px] text-base">Email ID</p>
          <p className="text-white md:text-[20px] text-base">amplify@gmail.com</p>
        </div>
        <button
          className="border border-[#EBEBEB] rounded-full px-5 py-3 md:text-[20px] text-base text-white flex items-center gap-x-1"
        >
          Contact
          <img src="src/assests/vector.svg" alt="" />
        </button>
      </div>  
    </div>
  </div>
    </footer>
  );
};

export default Footer;

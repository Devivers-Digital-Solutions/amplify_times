
const Footer = () => {
   const handleClick = () => {
     window.location.href =
      "mailto:harshita@devivers.com?subject=Let%27s%20Work%20Together&body=Hi%20Team%20Ampliify%2C"
  };
  return (
    <footer className="w-full mb-14">
      <div className="flex flex-col justify-center items-center" >
        <h1 className="text-[80px] text-white tracking-[3.2px] text-center">LET’S WORK TOGETHER</h1>
        <div>
          <img src="src/assests/mic.svg" alt="" />
        </div>
           <button  onClick={handleClick}
          className="mt-10 border border-[#EBEBEB] rounded-full px-5 py-3 md:text-[20px] text-base text-white flex items-center gap-x-3 w-fit"
        >
          content@ampliifytimes.com
          <img src="src/assests/vector.svg" alt="" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

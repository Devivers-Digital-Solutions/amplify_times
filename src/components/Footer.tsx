
const Footer = () => {
  return (
    <footer className="w-full mb-14">
      <div className="flex flex-col justify-center items-center" >
        <h1 className="text-[80px] text-white tracking-[3.2px] text-center">LET’S WORK TOGETHER</h1>
        <div>
          <img src="src/assests/mic.svg" alt="" />
        </div>
           <button  
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

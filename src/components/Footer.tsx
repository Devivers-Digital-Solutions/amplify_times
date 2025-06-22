
const Footer = () => {
  return (
    <footer className="w-full mb-14">
      <div className="flex flex-col justify-center items-center" >
        <h1 className="text-[80px] text-white tracking-[3.2px] text-center">LET’S WORK TOGETHER</h1>
        <div>
          <img src="src/assests/mic.svg" alt="" />
        </div>
          <a
          href="mailto:content@ampliifytimes.com?subject=Let%27s%20Work%20Together&body="
          className="mt-6 border border-white rounded-full px-6 py-3 md:text-[20px] text-base text-white flex items-center gap-x-2 transition hover:bg-white hover:text-black"
        >
          content@ampliifytimes.com
          <img src="src/assests/vector.svg" alt="arrow" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

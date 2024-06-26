import BRAND_RECOGNITION from "../assets/images/icon-brand-recognition.svg";
import DETAILED_RECORDS from "../assets/images/icon-detailed-records.svg";
import FULLY_CUSTOMIZABLE from "../assets/images/icon-fully-customizable.svg";

const Goals = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-between p-4 md:p-8 md:px-12 lg:p-12 lg:px-[12%] bg-[#dbd8e6]">
      <div className="flex flex-col text-center items-center">
        <h1 className="text-[40px] font-bold">Advanced Statistics</h1>
        <p className="font-medium text-[18px] mt-2 w-2/3 text-[#9e9aa7]">
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>
      <div className="flex flex-col md:flex-row mt-24 md:h-[350px] mb-20">
        <div className="bg-white md:w-1/3 p-8 rounded-lg mb-20 md:mb-0 md:mr-8 h-fit z-10 text-center md:text-left">
          <div className="bg-[#3b3054] w-20 p-6 rounded-full -mt-16 mx-auto">
            <img src={BRAND_RECOGNITION} alt="Brand-Recognition" />
          </div>
          <div>
            <h1 className="mt-6 font-bold text-[24px] text-[#35323e]">
              Brand Recognition
            </h1>
            <h2 className="mt-4 text-[16px] text-[#bfbfbf]">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </h2>
          </div>
        </div>
        <div className="bg-white md:w-1/3 p-8 rounded-lg mb-20 md:mr-8 h-fit md:my-auto z-10 text-center md:text-left">
          <div className="bg-[#3b3054] w-20 p-6 rounded-full -mt-16 mx-auto">
            <img src={DETAILED_RECORDS} alt="Detailed-Records" />
          </div>
          <div>
            <h1 className="mt-6 font-bold text-[24px] text-[#35323e]">
              Detailed Records{" "}
            </h1>
            <h2 className="mt-4 text-[16px] text-[#bfbfbf]">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </h2>
          </div>
        </div>
        <div className="bg-white md:w-1/3 p-8 rounded-lg h-fit mt-auto z-10 text-center md:text-left">
          <div className="bg-[#3b3054] w-20 p-6 rounded-full -mt-16 mx-auto">
            <img src={FULLY_CUSTOMIZABLE} alt="Fully-Customizable" />
          </div>
          <div>
            <h1 className="mt-6 font-bold text-[24px] text-[#35323e]">
              Fully Customizable
            </h1>
            <h2 className="mt-4 text-[16px] text-[#bfbfbf]">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </h2>
          </div>
        </div>
        <div className="bg-[#2acfcf] h-2 w-2/3 absolute mt-40  z-0"></div>
        <div className="bg-[#2acfcf] h-5/6 w-2 ml-[45%] absolute mt-40  z-0 md:hidden"></div>
      </div>
    </div>
    <div className="bg-[url('/src/assets/images/bg-boost-mobile.svg')] md:bg-[url('/src/assets/images/bg-boost-desktop.svg')] bg-[#3b3054] bg-cover py-20 flex flex-col items-center">
      <h1 className="text-white text-[32px] md:text-[40px] font-bold text-center">
        Boost your links today
      </h1>
      <button className="text-[18px] text-white font-bold p-4 px-8 mt-4 bg-[#2acfcf] rounded-full hover:bg-[#82eeee]">
        Get Started
      </button>
    </div>
    </>
  );
};

export default Goals;

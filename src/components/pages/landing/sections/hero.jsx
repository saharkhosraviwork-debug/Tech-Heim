export default function HeroSection() {
  return (
    <div className="flex items-center justify-between ">
      <div className="flex  flex-col gap-4 lg:gap-8 ">
        <h1 className="text-[26px] text-blue md:text-[48px] lg:text-[64px]">Tech Heim</h1>
        <p className="text-[10px] text-blue md:text-[24px] lg:text-[32px]">
          "Join the <span className="text-button">digital revolution</span>"
        </p>
        <button className="w-[89px] h-[32px]  bg-button rounded-[4px] text-white text-[10px] mt-10 cursor-pointer md:mt-8 md:h-[48px] md:w-[230px] lg:mt-16 lg:h-[56px]  lg:w-[288px] lg:text-[16px] rounded-[8px]">
          Explore More
        </button>
      </div>

      <div className="w-[60%]  md:w-[58%] ">
        <img
          src="/public/image/landing/img-landing.svg"
          alt="img_herosection"
          className="mx-auto h-auto  max-w-[100%] object-contain md:max-w-full lg:w-[700px]"
        ></img>
      </div>
    </div>
  );
}

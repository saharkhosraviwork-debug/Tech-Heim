
const brands = [
    "/public/image/landing/topbrand/apple.svg",
    "/public/image/landing/topbrand/sony.svg",
    "/public/image/landing/topbrand/sumsung.svg",
    "/public/image/landing/topbrand/canon.svg",
    "/public/image/landing/topbrand/huawei.svg",
    "/public/image/landing/topbrand/lenovo.svg",
  ];
  
  export default function TopBrands() {
    return (
      <section className="mt-12 w-full min-w-0">
        <div className="mb-4 flex items-center justify-between border-b-2 border-gray-300 pb-3">
          <h2 className="text-[22px] font-semibold text-black sm:text-[32px]">
            Top Brands
          </h2>
        </div>
  
        <div className="mt-10 w-full overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:overflow-visible">
          <div className="flex w-max min-w-full flex-nowrap items-center justify-between gap-6 cursor-pointer lg:w-full lg:flex-wrap">
            {brands.map((brand, index) => (
              <div key={index} className="flex shrink-0 justify-center">
                <img
                  src={brand}
                  alt="logo brands"
                  className="h-8 max-w-[80px] object-contain sm:h-12 sm:max-w-[145px]"
                />
              </div>
            ))}
          </div>
        </div>
  
        <img
          src="/public/image/landing/smart-watch-baner.svg"
          alt="smart-watch-baner"
          className="mt-20 w-full"
        />
      </section>
    );
  }
  
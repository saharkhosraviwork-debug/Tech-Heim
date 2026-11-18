import { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ProductCard from "./ProductCard";

export default function SalesSlider({ products }) {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateNavigation = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="relative flex h-full min-w-0 flex-1 items-center">
      <Swiper
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
          updateNavigation(swiper);
        }}
        onSlideChange={updateNavigation}
        slidesPerView="auto"
        spaceBetween={12}
        slidesPerGroup={1}
        speed={400}
        className="!h-[234px] !w-full"
      >
        {products.map((product) => (
          <SwiperSlide
          key={product.id}
          className="!h-[80px] !w-[130px] sm:!h-[195px] sm:!w-[184px]"
        >
          <ProductCard product={product} />
        </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-2 right-3 z-10 hidden items-center gap-2 sm:flex">
        <button
          type="button"
          onClick={() => swiperInstance?.slidePrev()}
          disabled={isBeginning}
          aria-label="Previous slide"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue  transition hover:bg-blue-100 cursor-pointer"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          type="button"
          onClick={() => swiperInstance?.slideNext()}
          disabled={isEnd}
          aria-label="Next slide"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue  transition hover:bg-blue-100  cursor-pointer"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </div>
  );
}

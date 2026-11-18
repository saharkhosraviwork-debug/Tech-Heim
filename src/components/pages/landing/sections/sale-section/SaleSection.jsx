import { ChevronRight } from "lucide-react";
import SalesSlider from "./SaleSlider";

const products = [
  {
    id: 1,
    name: "Logitech G502 Gaming Mouse",
    image: "/image/landing/salesection/mouse.svg",
    discount: 50,
    oldPrice: 38,
    price: 19,
  },
  {
    id: 2,
    name: "NPET K10 Wired Gaming Keyboard, LED Backlit, Spill-Resistant Design",
    image: "/image/landing/salesection/keybord.svg",
    discount: 30,
    oldPrice: 49,
    price: 34.3,
  },
  {
    id: 3,
    name: "Apple Watch Series 7 (GPS, 41MM)",
    image: "/image/landing/salesection/watch-pink.svg",
    discount: 20,
    oldPrice: 289,
    price: 231.2,
  },
  {
    id: 4,
    name: "Apple 2022 MacBook Air M2",
    image: "/image/landing/salesection/labtop.svg",
    discount: 25,
    oldPrice: 950,
    price: 712.5,
  },
  {
    id: 5,
    name: "samsung Titan smart watch",
    image: "/public/image/landing/salesection/watch-black.png",
    discount: 17,
    oldPrice: 420,
    price: 348.6,
  },
  {
    id: 6,
    name: "mobile iphone 17 promax",
    image: "/public/image/landing/mobile.svg",
    discount: 17,
    oldPrice: 420,
    price: 348.6,
  },
];

export default function SalesSection() {
  return (
    <section className="relative mt-12 flex h-[270px] w-full items-center overflow-hidden rounded-lg bg-box-shop sm:h-[330px]">
      <img
        src="/public/image/landing/salesection/bg-left.svg"
        alt=""
        className="absolute left-0 -top-5 h-full w-[180px] object-fill sm:w-[335px]"
      />

      <div className="relative z-10 flex h-full w-[150px] shrink-0 flex-col items-center justify-start pt-8 text-white sm:w-[310px] sm:pt-10">
        <div className="absolute left-2 top-12 flex flex-col items-center sm:left-auto sm:right-23 sm:top-14">
          <h2 className="whitespace-nowrap text-[15px] font-semibold sm:text-[24px]">
            Products On Sale
          </h2>

          <p className="mt-1 text-[13px] text-white/80 sm:text-[20px]">
            Shop Now!
          </p>
        </div>

        <a
          href="/products"
          className="absolute bottom-[55px] left-3 flex items-center gap-1 text-[12px] sm:bottom-[75px] sm:left-23 sm:gap-2 sm:text-[16px]"
        >
          View all
          <ChevronRight size={16} className="sm:h-5 sm:w-5" />
        </a>
      </div>

      <SalesSlider products={products} />
    </section>
  );
}

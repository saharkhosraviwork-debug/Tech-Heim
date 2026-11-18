import { useState } from "react";
import { Menu, X, Search, ChevronUp  } from "lucide-react";
import UserMenu from "./UserMenu";
import CartButton from "./CartButton";
import SearchBar from "./SearchBar";
import NavMenu, { categories } from "./NavMenu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(true);

  return (
    <header className="relative w-full">

      {/* ردیف اصلی هدر */}
      <div className="relative flex w-full items-center justify-between gap-3 py-2 md:py-2">

        {/*  قسمت همبرگری موبایل  */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
          className="shrink-0 md:hidden"
        >
          <Menu size={18} />
        </button>

        {/*  قسمت لوگوی دسکتاپ و تبلت  */}
        <div className="hidden p-1 md:block lg:p-2">
          <img
            src="/icon/logo.svg"
            alt="logo"
            className="h-12 w-12 object-contain lg:h-14 lg:w-14"
          />
        </div>

        {/* عنوان موبایل */}
        <span className="absolute left-1/2 -translate-x-1/2 text-[20px] font-semibold text-[#0951BE] md:hidden">
          Tech Heim
        </span>

        {/* منوی دسکتاپ و تبلت */}
        <div className="hidden flex-1 justify-center items-center md:flex">
          <NavMenu />
        </div>

        {/*  آیکن‌های سمت راست منو*/}
        <div className="flex items-center gap-4 md:gap-5">
          <div className="hidden md:block">
            <SearchBar />
          </div>

          <CartButton />
          <UserMenu />
        </div>
      </div>

      {/*قسمت  سرچ موبایل  */}
      <div className="relative mb-3 w-full md:hidden">
        <input
          type="text"
          placeholder="What can we help you to find?"
          className="w-full rounded-[4px] mt-4 bg-[#EDEDED] p-3 pr-10 text-[16px] outline-none"
        />

        <Search
          size={28}
          className="absolute right-3 top-[60%] -translate-y-1/2 text-gray-500"
        />
      </div>

      {/* منوی همبرگری موبایل */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[100] md:hidden cursor-pointer"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* پس زمینه تیره */}
          <div className="absolute inset-0 bg-black/60" />

          {/* پنل منو */}
          <div
            className="absolute left-0 top-0 h-full w-[70%] max-w-[300px] overflow-y-auto bg-white px-4 py-5 "
            onClick={(event) => event.stopPropagation()}
          >

            {/* دکمه بستن */}
            <div className="mb-5 flex justify-end">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            {/* عنوان محصولات */}
            <button
              type="button"
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="flex w-full items-center justify-between text-[18px] text-hover"
            >
              Products

              <ChevronUp 
                size={16}
                className={`transition-transform ${
                  isProductsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* دسته بندی ها */}
            {isProductsOpen && (
              <div className="mt-3 flex flex-col gap-3">
                {categories.map((category) => {
                  const Icon = category.icon;

                  return (
                    <button
                      key={category.name}
                      type="button"
                      className="flex items-center gap-2 text-left text-[16px] text-blog"
                    >
                      <Icon size={14} strokeWidth={1.5} />
                      <span>{category.name}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* لینک های پایین منو */}
            <nav className="mt-5 flex flex-col gap-4">
              {["Blog", "FAQ", "Contact Us"].map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[18px] text-gray-700 hover:text-hover"
                >
                  {item}
                </a>
              ))}
            </nav>

          </div>
        </div>
      )}

      <div className="hidden h-px w-full bg-gray-200 lg:block md:block" />

    </header>
  );
}

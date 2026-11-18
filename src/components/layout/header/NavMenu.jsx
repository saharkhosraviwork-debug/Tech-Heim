import { useState } from "react";
import { Link } from "react-router-dom";
import Overlay from "../../common/Overlay";

import {
  Smartphone,
  Monitor,
  Tablet,
  Watch,
  Headphones,
  Camera,
  Gamepad2,
  Router,
  Cable,
  Sun,
} from "lucide-react";

export const categories = [
  {
    name: "Mobile Phones",
    icon: Smartphone,

    subcategories: [
      {
        name: "Smart Phones",
        icon: Smartphone,
        href: "#",
      },
      {
        name: "Accessories",
        icon: Sun,
        href: "#",
      },
    ],

    products: [
      {
        name: "Watch & Earpods",
        image: "/public/image/landing/header/earpods.svg",
        href: "#",
      },
      {
        name: "Holder",
        image: "/public/image/landing/header/holder.svg",
        href: "#",
      },
      {
        name: "Power cables",
        image: "/public/image/landing/header/power-cable.svg",
        href: "#",
      },
      {
        name: "Cases & Protection",
        image: "/public/image/landing/header/cases.svg",
        href: "#",
      },
    ],
  },

  {
    name: "Laptops & Computers",
    icon: Monitor,
    subcategories: [],
    products: [],
  },
  {
    name: "Tablets & E-reader",
    icon: Tablet,
    subcategories: [],
    products: [],
  },
  {
    name: "Wearables",
    icon: Watch,
    subcategories: [],
    products: [],
  },
  {
    name: "Audio",
    icon: Headphones,
    subcategories: [],
    products: [],
  },
  {
    name: "Cameras",
    icon: Camera,
    subcategories: [],
    products: [],
  },
  {
    name: "Gaming",
    icon: Gamepad2,
    subcategories: [],
    products: [],
  },
  {
    name: "Networking",
    icon: Router,
    subcategories: [],
    products: [],
  },
  {
    name: "Accessories",
    icon: Cable,
    subcategories: [],
    products: [],
  },
];

const menuItems = ["Home", "Products", "Blog", "FAQ", "Contact Us"];

export default function NavMenu() {
  const [activeCategory, setActiveCategory] = useState(0);

  const activeMenu = categories[activeCategory];
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <div onMouseLeave={() => setIsProductsOpen(false)}>
      <nav>
        <ul className="flex items-center gap-12">
          {menuItems.map((item) => (
            <li
              key={item}
              className="group"
              onMouseEnter={() => {
                if (item === "Products") {
                  setIsProductsOpen(true);
                }
              }}
            >
              <Link
                to={
                  item === "Home"
                    ? "/"
                    : item === "Contact Us"
                    ? "/contact"
                    : "#"
                }
                className="relative block py-2 text-[16px] text-black transition-all duration-300 hover:text-hover"
              >
                {item}

                <span
                  className="absolute bottom-0 right-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                  style={{
                    background:
                      "linear-gradient(to right, #0C68F44D 0%, #0C68F4 30%, #0C68F4 70%, #0C68F44D 100%)",
                  }}
                />
              </Link>

              {item === "Products" && isProductsOpen && (
                <div
                  className={`absolute left-1/2 top-full z-50 w-full -translate-x-1/2 transition-all duration-300 ease-in-out ${
                    isProductsOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible translate-y-2 opacity-0"
                  }`}
                >
                  <div className="flex min-h-[400px] overflow-hidden rounded-[6px] bg-white shadow-[0_2px_12px_rgba(113,113,113,0.12)]">
                    {/* دسته بندی ها  */}

                    <div className="w-[289px] border-r border-gray-300 py-3">
                      {categories.map((category, index) => {
                        const Icon = category.icon;

                        return (
                          <button
                            key={category.name}
                            type="button"
                            onMouseEnter={() => setActiveCategory(index)}
                            onClick={() => setActiveCategory(index)}
                            className={`flex w-full items-center gap-2 px-3 py-2.5 text-left text-[13px] transition-colors ${
                              activeCategory === index
                                ? "text-hover"
                                : "text-gray-600 hover:text-hover"
                            }`}
                          >
                            <Icon size={20} strokeWidth={1.5} />

                            <span className="text-[16px]">{category.name}</span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex flex-1 gap-5 p-4">
                      <div className="w-[150px] ">
                        <div className="flex flex-col gap-3">
                          {activeMenu.subcategories.map((subcategory) => {
                            const Icon = subcategory.icon;

                            return (
                              <a
                                key={subcategory.name}
                                href={subcategory.href}
                                className="flex items-center gap-2 text-[16px] text-black transition-colors hover:text-hover"
                              >
                                <Icon size={20} strokeWidth={1.5} />

                                <span>{subcategory.name}</span>
                              </a>
                            );
                          })}

                          <a href="#" className="mt-1 text-[15px] text-hover">
                            View all
                          </a>
                        </div>
                      </div>

                      {/* عکس محصولات */}

                      <div className="flex flex-1 flex-wrap gap-4 mt-13">
                        {activeMenu.products.map((product) => (
                          <a
                            key={product.name}
                            href={product.href}
                            className="flex h-[238px] w-[152px]  flex-col items-center overflow-hidden rounded-[6px] bg-white shadow-[0_2px_12px_rgba(113,113,113,0.15)] transition-shadow hover:shadow-[0_4px_16px_rgba(0,0,0,0.16)]"
                          >
                            <div className="flex h-[205px] w-full items-center justify-center p-3">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="h-full w-full object-contain"
                              />
                            </div>

                            <span className="px-1 text-center text-[16px] text-black">
                              {product.name}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
      {isProductsOpen && <Overlay onClick={() => setIsProductsOpen(false)} />}
    </div>
  );
}

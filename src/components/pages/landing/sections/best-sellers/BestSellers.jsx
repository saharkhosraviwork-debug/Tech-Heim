import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import ProductCard from "../../../../common/ProductCard";

const products = [
  {
    id: 1,
    name: "EchoX Pro H900",
    image: "/public/image/landing/bestseller/hedphone.svg",
    price: 32.30,
    rating: 4.1,
    colors: ["#222222"],
  },
  {
    id: 2,
    name: "Play Station 4 Pro 1Tb",
    image: "/public/image/landing/bestseller/playstaition.svg",
    price: 980.00,
    originalPrice: 1090.00,
    rating: 4.4,
    colors: [],
  },
  {
    id: 3,
    name:" Apple MacBook Air 15 w/ Touch ID (2023) - Space Grey (Apple M)",
    image: "/public/image/landing/bestseller/labtop.svg",
    price: 1983.05,
    rating: 4.5,
    colors: ["#FFFFFF","#8B8B8B"],
  },
  {
    id: 4,
    name: "Airpods pro2",
    image: "/public/image/landing/bestseller/eirpod.svg",
    price: 274.04,
    originalPrice: 288.08,
    discount: 10,
    rating: 4.2,
    colors: ["#FFFFFF"],
  },
];

export default function BestSellers() {
    const [favorites, setFavorites] = useState(() => {
        try {
          return JSON.parse(localStorage.getItem("favoriteProducts")) || [];
        } catch {
          return [];
        }
      });
    
    
      useEffect(() => {
        localStorage.setItem(
          "favoriteProducts",
          JSON.stringify(favorites)
        );
      }, [favorites]);
    
    
      const toggleFavorite = (productId) => {
        setFavorites((prev) =>
          prev.includes(productId)
            ? prev.filter((id) => id !== productId)
            : [...prev, productId]
        );
      };

  return (
    <section className="mt-12 w-full">

      <div className="mb-4 flex items-center justify-between border-b-2 border-gray-300 pb-3">

        <h2 className="text-[22px] sm:text-[32px] font-semibold text-black">
          Best Sellers
        </h2>

        <a
          href="/products"
          className="flex items-center gap-1 text-[16px] sm:text-[16px] text-black transition-colors hover:text-blue mr-2 sm:mr-7"
        >
          View all
          <ChevronRight size={15} />
        </a>

      </div>

      <div className="grid w-full min-w-0 grid-cols-2 gap-3 md:grid-cols-4 gap-2">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isFavorite={favorites.includes(product.id)}
            onToggleFavorite={() => toggleFavorite(product.id)}
          />
        ))}

      </div>

    </section>
  );
}

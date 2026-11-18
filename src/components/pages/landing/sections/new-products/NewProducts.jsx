
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

import ProductCard from "../../../../common/ProductCard";

const products = [
  {
    id: 1,
    name: "Iphone 14 promax 256 gig",
    image: "/public/image/landing/newproduct/iphon14.png",
    price: 930.90,
    rating: 4.5,
    colors: ["#51504C", "#F8F8EE", "#96B9D7"],
  },
  {
    id: 2,
    name: "Blackmagic Design Pocket Cinema Camera 6K Pro (Canon EF)",
    image: "/public/image/landing/newproduct/labtop.svg",
    price: 2535.00,
    rating: 4.8,
    colors: [],
  },
  {
    id: 3,
    name: "SAMSUNG Galaxy S23 Ultra Cell Phone,256 GB",
    image: "/public/image/landing/newproduct/sumsung.png",
    price: 1018.00,
    rating: 4.7,
    colors: ["#EADEE9", "#BCD7FF", "#8B8B8B"],
  },
  {
    id: 4,
    name: "VR VisionTech X1",
    image: "/public/image/landing/newproduct/vr.png",
    price: 1399.00,
    rating: 3.9,
    colors: ["#B4B4B4"],
  },
];

export default function NewProducts() {
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
    <section className="mt-12 w-full min-w-0">

      <div className="mb-4 flex items-center justify-between border-b-2 border-gray-300 pb-3">

        <h2 className="text-[22px] sm:text-[32px] font-semibold text-black">
          New Products
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

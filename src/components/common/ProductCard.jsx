import { useState } from "react";
import { Heart, Star } from "lucide-react";

export default function ProductCard({ product, isFavorite, onToggleFavorite }) {
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <article className="group relative h-[280px] w-full min-w-0 sm:h-[279px] sm:w-[200px] lg:h-[327px] lg:w-[270px]  rounded-md bg-white p-2 sm:p-3 shadow-[0_2px_12px_rgba(0,0,0,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_5px_18px_rgba(0,0,0,0.12)] mt-3 cursor-pointer">
      <button
        type="button"
        onClick={onToggleFavorite}
        className={`absolute left-3 top-2 z-20 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white transition-all duration-300 ${
          isFavorite
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
        }`}
      >
        <Heart
          size={22}
          strokeWidth={1.5}
          className={isFavorite ? "fill-red-600 text-red-600" : "text-blue"}
        />
      </button>

      <div className="relative flex h-[105px] items-center justify-center ">
        <img
          src={product.image}
          alt={product.name}
          className="mt-16 h-[160px] w-[100%] object-contain"
        />

        {product.colors.length > 0 && (
          <div className="absolute right-1 top-1/2 flex  flex-col gap-2">
            {product.colors.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(index)}
                className="h-[11px] w-[11px] rounded-full border-1 border-gray-400 cursor-pointer"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>

      <div
        className="h-[1px] w-full mt-18 shrink-0"
        style={{
          background:
            "linear-gradient(to right, #0C68F44D 0%, #0C68F4 30%, #0C68F4 70%, #0C68F44D 100%)",
        }}
      />

      <div className="flex h-[125px] flex-col pt-2 lg:pt-6 ">
        <h3 className="h-[20px] line-clamp-1 text-[12px] text-black sm:h-[44px] sm:line-clamp-2 lg:text-[16px]">
          {product.name}
        </h3>

        <div className=" flex items-end justify-between lg:mt-auto">
          <div className="flex flex-col">
            {product.originalPrice && (
              <span className="text-[14px] text-blog line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}

            <span className="txet-[14px] lg:text-[18px] font-medium text-black">
              $
              {product.price.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
          </div>

          <div className="flex items-center gap-1 text-blue">
            <Star size={18} fill="blue" strokeWidth={1} />

            <span className="text-[16px] text-blue font-semibold">
              {product.rating}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

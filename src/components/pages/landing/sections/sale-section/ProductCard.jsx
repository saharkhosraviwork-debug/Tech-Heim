
export default function ProductCard({ product }) {
    return (
      <article className="relative flex h-[234px] w-full flex-col overflow-hidden rounded-[4px] bg-white p-2">
  
        <span className="absolute left-0 top-2 z-10 rounded-tr-[8px] rounded-br-[8px] bg-diskount px-2 py-[3px] text-[13px] font-medium text-button">
          -{product.discount}%
        </span>
  
        <div className="flex h-[145px] w-full shrink-0 items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="h-[135px] w-[95%] object-contain"
          />
        </div>
  
        <div className="flex flex-1 flex-col justify-between pt-2">
  
          <h3 className="line-clamp-2 text-[12px] leading-4 text-[#333]">
            {product.name}
          </h3>
  
          <div className="flex items-center justify-between gap-1">
  
            <del className="text-[12px] text-gray-400">
              ${product.oldPrice.toFixed(2)}
            </del>
  
            <span className="text-[14px] font-medium text-[#333]">
              ${product.price.toFixed(2)}
            </span>
  
          </div>
  
        </div>
  
      </article>
    );
  }
  
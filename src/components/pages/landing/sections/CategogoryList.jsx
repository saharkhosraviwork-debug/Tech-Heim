const categories = [
    {
      id: 1,
      title: "Accessories",
      image: "/image/landing/Accessories.svg",
      alt: "Accessories",
    },
    {
      id: 2,
      title: "Camera",
      image: "/image/landing/photo.svg",
      alt: "Camera",
    },
    {
      id: 3,
      title: "Laptop",
      image: "/image/landing/labtop.svg",
      alt: "Laptop",
    },
    {
      id: 4,
      title: "Smart Phone",
      image: "/image/landing/mobile.svg",
      alt: "Smart Phone",
    },
    {
      id: 5,
      title: "Gaming",
      image: "/image/landing/game.svg",
      alt: "Gaming",
    },
    {
      id: 6,
      title: "Smart Watch",
      image: "/image/landing/watch.svg",
      alt: "Smart Watch",
    },
  ];
  
  export default function CategoryList() {
    return (
      <section className="mt-8 w-full">
        <div className="flex cursor-pointer gap-4 overflow-x-auto pb-2 scrollbar-none md:justify-center md:gap-6 md:overflow-visible md:pb-0">
  
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex h-[100px] w-[82px] shrink-0 flex-col items-center justify-center gap-2 rounded-[8px] bg-white shadow-[0_2px_12px_rgba(113,113,113,0.12)] lg:h-[196px] lg:w-[184px]"
            >
              <img
                src={category.image}
                alt={category.alt}
                className="h-[60px] w-[60px] object-contain lg:h-[135px] lg:w-[135px]"
              />
  
              <h2 className="text-center text-[12px] font-normal text-[#838383] lg:text-[16px]">
                {category.title}
              </h2>
            </div>
          ))}
  
        </div>
      </section>
    );
  }
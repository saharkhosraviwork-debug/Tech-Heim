
export default function BanerSection() {
    return (
      <section className="mt-12 w-full">
  
        <div className="flex w-full flex-col gap-5 lg:flex-row md:flex-row">
  
          <div className="h-[200px] w-full min-w-0 overflow-hidden rounded-md cursor-pointer lg:h-auto lg:flex-[1.6] md:h-auto lg:flex-[1.6]">
            <img
              src="/public/image/landing/baner/banner-left.png"
              alt="iPhone 15 Series"
              className="block h-full w-full object-fill"
            />
          </div>
  
          <div className="h-[200px] w-full min-w-0 overflow-hidden rounded-md cursor-pointer lg:h-auto lg:flex-1 md:h-auto lg:flex-1">
            <img
              src="/public/image/landing/baner/Banner-right.png"
              alt="PlayStation 5"
              className="block h-full w-full object-fill"
            />
          </div>
  
        </div>
  
      </section>
    );
  }
  
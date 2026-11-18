import { ChevronRight, CalendarDays, Clock3, Bookmark } from "lucide-react";

let blogs = [
  {
    id: 1,
    title: "Meta Platforms plans to release free software that...",
    description:
      "The parent company of Facebook, Meta Platforms, is introducing software to help developers.",
    image: "/image/landing/blog/meta.svg",
    date: "12 August 2023",
    time: "3 min read",
  },
  {
    id: 2,
    title: "8 Things You Probably Didn’t Know About Headphones",
    description:
      "Owning a headphone could mean a different thing for different people. For some, it acts as a fashion statement.",
    image: "/image/landing/blog/podcast.svg",
    date: "28 March 2023",
    time: "",
  },
  {
    id: 3,
    title: "Analyzing the August 17th Bitcoin Price Drop",
    description:
      "On August 17th at 9:30PM UTC, Bitcoin’s price dropped more than 8% in a 10-minute window.",
    image: "/image/landing/blog/bitcoin.svg",
    date: "17 August 2023",
    time: "",
  },
];

export default function OurBlogs() {
  return (
    <section className="w-full py-12">
      <div className="mb-4 flex items-center justify-between border-b-2 border-gray-300 pb-3">
        <h2 className="text-[22px] sm:text-[32px] font-semibold text-black">
        Our Blogs
        </h2>

        <a
          href="#"
          className="flex items-center gap-1 text-[16px] sm:text-[16px] text-black transition-colors hover:text-blue mr-2 sm:mr-7"
        >
          View all
          <ChevronRight size={15} />
        </a>
      </div>

      <div className="mt-8 flex w-full flex-col gap-5 lg:flex-row">
        <div className="w-full min-w-0 rounded-[8px] bg-white shadow-md lg:w-[392px]">
          <img
            src={blogs[0].image}
            alt={blogs[0].title}
            className="h-[172px] w-full rounded-t-[8px] object-cover lg:h-[180px]"
          />

          <div className="flex justify-between px-3 py-3 text-[12px] text-text-footer">
            <span className="flex items-center gap-1">
              <CalendarDays size={14} />
              {blogs[0].date}
            </span>

            <span className="flex items-center gap-1">
              <Clock3 size={14} />
              {blogs[0].time}
            </span>
          </div>

          <h3 className="px-4 text-[14px] font-semibold lg:text-[17px]">
            {blogs[0].title}
          </h3>

          <p className="mt-2 px-4 pb-4 text-[12px] text-gray-500 lg:text-[15px]">
            {blogs[0].description}
          </p>
        </div>


        <div className="flex w-full min-w-0 flex-col gap-5 lg:w-[60%] lg:gap-10">
          {blogs.slice(1).map((blog) => (
            <div
              key={blog.id}
              className="group rounded-[18px] bg-white shadow-md"
            >
              <div className="flex flex-col lg:flex-row">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-[172px] w-full rounded-t-[8px] object-cover lg:h-[156px] lg:w-[240px] lg:rounded-l-[8px] lg:rounded-tr-none"
                />

                <div className="flex min-w-0 flex-1 flex-col justify-between px-3 py-3 lg:pr-3">
                  <div>
                    <h3 className="text-[15px] font-semibold transition-colors duration-300 group-hover:text-red-700 ">
                      {blog.title}
                    </h3>

                    <p className="mt-2 text-[13px] text-gray-500 lg:text-[14px]">
                      {blog.description}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex flex-wrap items-center gap-3 text-[11px] text-text-footer lg:text-[12px]">
                      <span className="flex items-center gap-1">
                        <CalendarDays size={14} />
                        {blog.date}
                      </span>

                      {blog.time && (
                        <span className="flex items-center gap-1">
                          <Clock3 size={14} />
                          {blog.time}
                        </span>
                      )}
                    </div>

                    <Bookmark
                      size={19}
                      className="hidden cursor-pointer text-text-footer opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:block"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

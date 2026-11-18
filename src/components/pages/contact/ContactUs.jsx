import { MapPinPlusInside, Mail, Phone } from "lucide-react";
import Breadcrumb from "../../common/Breadcrumb";
import Header from "../../layout/header/Header";

const contactInfo = [
  {
    icon: MapPinPlusInside,
    title: "Office",
    description: (
      <>
        123 Main Street,
        <br />
        Anytown, USA
      </>
    ),
  },
  {
    icon: Mail,
    title: "Email",
    description: "info@techheim.com",
  },
  {
    icon: Phone,
    title: "Phone",
    description: "+1 (555) 123-4567",
  },
];

export default function ContactUs() {
  return (
    <>
    <Header />

    <main className="mx-auto w-full  px-4 sm:px-6 lg:px-8">
      <div className="py-5">
        <Breadcrumb items={[{ label: "Contact Us" }]} />
      </div>

      <div className="mx-auto grid grid-cols-3 gap-2 py-5 sm:gap-5">
  {contactInfo.map((item) => {
    const Icon = item.icon;

    return (
      <div
        key={item.title}
        className="flex flex-col items-center text-center"
      >
        <Icon
          size={28}
          strokeWidth={1.8}
          className="mb-2 text-hover sm:size-[42px]"
        />

        <h3 className="text-[13px] font-semibold text-black sm:text-[16px]">
          {item.title}
        </h3>

        <p className="mt-1 text-[11px] text-blog sm:text-[16px]">
          {item.description}
        </p>
      </div>
    );
  })}
</div>

      <section className="mt-5 grid w-full grid-cols-1 gap-8 py-8 sm:grid-cols-2 sm:gap-12 lg:gap-16 ">
        <div>
          <h2 className="mb-3 text-[22px] font-semibold text-black">
            Message us
          </h2>

          <p className="text-[14px]  text-blog lg:text-[18px]">
            We're here to assist you every step of the way. Whether you have a
            question, need technical support, or simply want to share your
            feedback, our dedicated team is ready to listen and provide prompt
            assistance.
          </p>
        </div>

        <form
          className="flex flex-col gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="* Your name"
            required
            className="h-10 w-full rounded-[8px] border border-gray-300 px-3 text-[16px] outline-none focus:border-[#0C68F4]"
          />

          <input
            type="email"
            placeholder="* Email"
            required
            className="h-10 w-full rounded-[8px] border border-gray-300 px-3 text-[16px] outline-none focus:border-hover"
          />

          <textarea
            placeholder="Message"
            rows={5}
            required
            className="w-full  rounded-[8px] border border-gray-300 p-4 text-[16px] outline-none focus:border-hover"
          />

          <button
            type="submit"
            className="h-[48px] w-full rounded-[8px] bg-hover text-[14px]  text-white transition  sm:w-[184px] sm:self-end cursor-pointer "
          >
            Submit
          </button>
        </form>
      </section>
    </main>
    </>
  );
}

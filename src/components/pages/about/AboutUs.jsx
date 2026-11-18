import Breadcrumb from "../../common/Breadcrumb";
import Header from "../../layout/header/Header";

export default function AboutUs() {
  return (
    <>
      <Header />

      <main className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="py-5">
          <Breadcrumb items={[{ label: "About Us" }]} />
        </div>

        <div className="mx-auto max-w-[900px]">
          <img
            src="/image/about/pic-about.png"
            alt="Tech Heim team working together"
            className="h-[220px] w-full rounded-[8px] object-cover sm:h-[280px] lg:h-[350px]"
          />
        </div>

        <section className="mx-auto max-w-[900px] py-6 text-[16px] leading-6 text-blog">
          <p className="mb-5">
            Tech Heim is an innovative online store that offers a diverse
            selection of digital gadgets, available for purchase in both cash
            and installment options. Embodying the motto "Join the digital
            revolution today" the website not only provides a seamless shopping
            experience but also features a captivating blog section filled with
            insightful reviews, articles, and videos about cutting-edge
            technology and digital gadgets. Users can actively engage with the
            content through comments and a question-answer section, fostering a
            dynamic community of tech enthusiasts
          </p>

          <h2 className="mb-2 font-semibold text-black">Tech Heim Meaning</h2>

          <p className="mb-5">
            The name "Tech Heim" cleverly combines two languages (English &
            German), signifying a home of technology that provides all the
            essential tech products and services, making it a one-stop
            destination for tech-savvy individuals seeking the latest and most
            exciting gadgets.
          </p>

          <h2 className="mb-2 font-semibold text-black">
            Some of Tech Heim’s impressive features :
          </h2>

          <div className="text-blog">
            Diverse digital gadgets for purchase in cash or installments
            <br />
            A blog with reviews and articles about the latest technology and
            gadgets
            <br />
            User comments and Q&A section for community interaction
            <br />
            Represents a tech-savvy "home" with all necessary technology
            <br />
            Easy-to-use interface for a great user experience
            <br />
            Consistent and visually appealing design
            <br />
            A hub for tech enthusiasts to connect and share insights
            <br />
            Helps users make informed purchase decisions
            <br />
          </div>
        </section>
      </main>
    </>
  );
}

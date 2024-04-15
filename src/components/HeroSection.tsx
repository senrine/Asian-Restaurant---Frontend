import heroSectionImage from "../assets/HeroSectionPhoto.svg";
import TestimonialHeroSection from "./TestimonialHeroSection";

export default function HeroSection() {
  return (
    <div className="py-2 md:min-h-[800px] w-full font-Poppins text-primary-white flex flex-col lg:flex-row items-center justify-center relative md:justify-between max-md:mt-10">
      <div className="max-lg:w-full flex items-center justify-center mx-auto max-md:mb-10">
        <aside className="text-title mr-4 ">
          <div className="mb-10">
            <p className="text-primary-red50 w-full font-semibold">1.</p>
            <p className="w-full">Adresse,</p>
            <p className="w-full">Code postal.</p>
          </div>
          <div>
            <p className="text-primary-red50 w-full font-semibold">1.</p>
            <p className="w-full">Adresse,</p>
            <p className="w-full">Code postal.</p>
          </div>
        </aside>
        <div className="text-[24px] md:text-[32px] border-l border-primary-white80 pl-4 font-semibold">
          <h1 className="font-bold mb-2 w-full">
            <span className="text-primary-red">
              Sip<span className="text-primary-white">, </span>Slurp and Savor.
            </span>
          </h1>
          <h1 className="font-bold mb-4 w-full md:mb-20">
            Dive into ramen paradise.
          </h1>
          <a
            href="#menu"
            className="py-1 px-3 rounded-full text-[12px] md:text-[18px] font-semibold hover:bg-primary-red hover:text-primary-white bg-primary-red80 border border-primary-white15"
          >
            Get Order
          </a>
        </div>
      </div>
      <div className="-z-10 -mt-20 relative flex flex-col items-center justify-center max-lg:min-w-full">
        <div className="min-w-[80%] min-h-[80%] bg-primary-red rounded-full absolute -z-10 blur-[100px] md:blur-[150px]"></div>
        <img
          className="flex-shrink-0 h-[400px] md:h-[600px]"
          src={heroSectionImage}
          alt="Hero Section Image"
        />
        <TestimonialHeroSection />
      </div>
    </div>
  );
}

import heroSectionImage from "../assets/HeroSectionPhoto.svg";
import TestimonialHeroSection from "./TestimonialHeroSection";

export default function HeroSection() {
  return (
    <div className="py-2 h-full w-full font-Poppins text-primary-white flex flex-col lg:flex-row items-center relative md:justify-between">
      <div className="max-lg:min-w-full flex items-center mx-auto max-md:mb-10">
        <aside className="text-[16px] md:text-[20px] mr-4 ">
          <p className="text-primary-red50 w-full font-semibold">1.</p>
          <p className="w-full">Adresse,</p>
          <p className="w-full">Code postal.</p>
        </aside>
        <div className="text-[24px] md:text-[38px] border-l border-primary-white80 pl-4">
          <h1 className="font-bold mb-2 w-full">
            <span className="text-primary-red">
              Sip<span className="text-primary-white">, </span>Slurp and Savor.
            </span>
          </h1>
          <h1 className="font-bold mb-4 w-full md:mb-8">
            Dive into ramen paradise.
          </h1>
          <button className="py-1 px-3 bg-primary-red80 rounded-full text-[12px] md:text-[18px] font-semibold hover:bg-primary-red hover:text-primary-white">
            Get Order
          </button>
        </div>
      </div>
      <div className="-z-10 -mt-20 flex flex-col justify-center items-center max-lg:min-w-full">
        <div className="min-w-[80%] min-h-[60%] bg-primary-red rounded-full absolute -z-10 blur-[150px] md:blur-[200px]"></div>
        <img
          className="w-full flex-shrink-0 h-full"
          src={heroSectionImage}
          alt="Hero Section Image"
        />
        <TestimonialHeroSection />
      </div>
    </div>
  );
}

import testimonial1 from "../assets/TestimonnialPerson1.svg";
import testimonial2 from "../assets/TestimonnialPerson2.svg";
import testimonial3 from "../assets/TestimonnialPerson3.svg";
import fullStar from "../assets/Full Star.svg";
import halfStar from "../assets/Half Star.svg";

export default function TestimonialHeroSection() {
  return (
    <div className="flex-col md:flex-row md:py-10 md:-mt-24 lg:-mt-36 -mt-10 border border-primary-white15 bg-primary-black50 rounded-3xl mx-auto px-4 py-4 flex justify-between items-center w-[80%]">
      <div className="flex items-center justify-center max-sm:mb-4">
        <img className="-mr-2 max-md:w-10 md:w-12" src={testimonial1} alt="" />
        <img className="-mr-2 max-md:w-10 md:w-12" src={testimonial2} alt="" />
        <img className="-mr-2 max-md:w-10 md:w-12" src={testimonial3} alt="" />
        <span className="max-md:w-8 md:min-w-16 md:py-5 md:mr-10 bg-primary-black text-primary-white px-4 py-3 rounded-full flex items-center justify-center text-[12px] md:text-[24px]">
          +100
        </span>
      </div>
      <div className="md:min-w-[50%] flex flex-col items-center justify-center">
        <p className="mb-4 text-[16px] md:text-[28px]">What people think</p>
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex items-center max-md:mb-2">
            <img className="w-3 md:w-4" src={fullStar} alt="" />
            <img className="w-3 md:w-4" src={fullStar} alt="" />
            <img className="w-3 md:w-4" src={fullStar} alt="" />
            <img className="w-3 md:w-4" src={fullStar} alt="" />
            <img className="w-3 md:w-4" src={halfStar} alt="" />
          </div>
          <p className="mt-1 text-[14px] md:text-[24px] md:ml-2">( 100 )</p>
        </div>
      </div>
    </div>
  );
}

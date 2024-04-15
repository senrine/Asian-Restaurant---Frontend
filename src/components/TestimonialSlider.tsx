import { useState } from "react";
import left from "../assets/left-arrow.svg";
import right from "../assets/right-arrow.svg";
import sliderData from "../features/sliderData";
import { getTestimonialPerson } from "../utils";

interface Testimonial {
  id: Number;
  name: string;
  message: string;
}

export default function TestimonialSlider() {
  const [indexSlider, setIndexSlider] = useState(0);

  const handleClick = (indexAdded: number) => {
    setIndexSlider((state) => {
      if (
        indexAdded + state > sliderData.length ||
        indexAdded + state === sliderData.length
      ) {
        return 0;
      } else if (indexAdded + state < 0) {
        return sliderData.length - 1;
      } else {
        return state + indexAdded;
      }
    });
    console.log(indexSlider);

    console.log(sliderData[indexSlider]);
  };

  return (
    <div className="flex flex-col items-center mt-28 text-primary-white font-Poppins w-full">
      <hr className="w-full border-primary-white15 mb-20 md:mb-32" />

      <div className="justify-center flex flex-row items-center w-full">
        <button
          className="mr-10 md:mr-16 py-2 px-2 rounded-full border border-primary-white15 hover:bg-primary-black90 flex items-center justify-center"
          onClick={() => handleClick(-1)}
        >
          <img className="w-2" src={left} alt="previous image" />
        </button>
        <div className="flex flex-row justify-center items-center w-[80%] transition-transform duration-500 ease-out">
          <div className="flex flex-col items-center justify-center relative mr-16 md:mr-32 flex-shrink-0 ">
            <div
              className="min-w-16 md:min-w-18 min-h-16 md:min-h-18 bg-primary-red rounded-full absolute -z-10 blur-lg
              md:blur-xl"
            ></div>
            <img
              src={getTestimonialPerson(indexSlider)}
              alt=""
              className="relative mr-4 min-w-14 md:min-w-16"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="font-Bellefair text-[20px] lg:text-[24px] mb-4">
              {sliderData[indexSlider].name}
            </h2>
            <p className="text-[14px] lg:text-[18px]">
              <span className="font-Bellefair text-primary-red font-semibold mr-1">
                "
              </span>
              {sliderData[indexSlider].message}
              <span className="font-Bellefair text-primary-red font-semibold ml-1">
                "
              </span>
            </p>
          </div>
        </div>
        <button
          className="ml-10 md:ml-16 py-2 px-2 rounded-full border border-primary-white15 hover:bg-primary-black90 flex items-center justify-center"
          onClick={() => handleClick(1)}
        >
          <img className="" src={right} alt="next image" />
        </button>
      </div>
    </div>
  );
}

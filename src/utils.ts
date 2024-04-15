import beef_ramen from "./assets/beef_ramen.svg";
import curry from "./assets/curry.svg";
import chicken_dumplings from "./assets/chicken_dumplings.svg";
import pad_thai from "./assets/pad_thai.svg";
import { Order } from "./types";
import TestimonialPerson1 from "./assets/TestimonnialPerson1.svg";
import TestimonialPerson2 from "./assets/TestimonnialPerson2.svg";
import TestimonialPerson3 from "./assets/TestimonnialPerson3.svg";

interface MyObject {
  id: Number;
  name: string;
  price: Number;
  image: string;
  description: string;
}

export const addPickedVariable = (data: MyObject[]) => {
  return data.map((item) => ({
    ...item,
    picked: false,
  }));
};

export const addDeliveryVariable = (data: Order[]) => {
  return {
    ...data,
    standardDelivery: true,
    speedDelivery: false,
  };
};

export const getIcon = (iconName: string) => {
  switch (iconName) {
    case "beef_ramen":
      return beef_ramen;
    case "curry":
      return curry;
    case "chicken_dumplings":
      return chicken_dumplings;
    case "pad_thai":
      return pad_thai;
  }
};

export const getTestimonialPerson = (indexSlider: number) => {
  switch (indexSlider) {
    case 0:
      return TestimonialPerson1;
    case 1:
      return TestimonialPerson2;
    case 2:
      return TestimonialPerson3;
  }
};

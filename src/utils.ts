import beef_ramen from "./assets/beef_ramen.svg";
import curry from "./assets/curry.svg";
import chicken_dumplings from "./assets/chicken_dumplings.svg";
import pad_thai from "./assets/pad_thai.svg";
import { User } from "./types";

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
    picked: false, // Adding picked property with initial value false
  }));
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


export const getUpdateFormatData = (data: Object , user:User)=>{
  if(data.name === ""){data.name = user.name}
  data.email = user.email;
  return data
}
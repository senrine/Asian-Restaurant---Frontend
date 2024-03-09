import beef_ramen from "./assets/beef_ramen.svg";
import curry from "./assets/curry.svg";
import chicken_dumplings from "./assets/chicken_dumplings.svg";
import pad_thai from "./assets/pad_thai.svg";

export const getIcon = (iconName: string) => {
  switch (iconName) {
    case "beef_ramen":
      return beef_ramen
    case "curry":
        return curry;
    case "chicken_dumplings":
        return chicken_dumplings;
    case "pad_thai":
        return pad_thai;
  }
};

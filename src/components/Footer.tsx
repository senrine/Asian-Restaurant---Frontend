import facebookIcon from "../assets/Facebook.svg";
import instagramIcon from "../assets/Instagram.svg";

export default function Footer() {
  return (
    <div className="mt-40 md:mt-56 flex flex-col items-center justify-center font-Poppins text-primary-white80 font-semibold text-[12px] lg:text-[14px]">
      <div className="flex flex-row justify-center items-center mb-8">
        <img
          className="w-4 md:w-5 mr-4"
          src={facebookIcon}
          alt="facebook-icon"
        />
        <img className="w-4 md:w-5" src={instagramIcon} alt="instagram-icon" />
      </div>
      <p>Risign Sun</p>
    </div>
  );
}

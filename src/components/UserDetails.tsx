import LogoutBtn from "./LogoutBtn";
import UpdateUserForm from "./UpdateUserForm";

export default function UserDetails() {
  return (
    <div className="flex flex-col w-full text-primary-white font-Poppins md:w-[60%] mx-auto">
      <div className="mb-10 text-center w-[30%] mx-auto">
      <h1 className="font-Bellefair text-primary-white xl:text-[28px] md:text-[26px] text-[24px]">
        Update your profil
      </h1>
      <hr className="border-primary-red"/>
      </div>
      <UpdateUserForm />
      <hr className="my-20 border-primary-white15" />
      <div className="bottom-10 w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-title">Logout here</h1>
          <LogoutBtn />
        </div>
      </div>
    </div>
  );
}

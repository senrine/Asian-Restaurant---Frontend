import { FormEvent } from "react";
import { useLogoutMutation } from "../features/userApi.ts";
import { useNavigate } from "react-router-dom";
import { logoutFront } from "../features/auth.ts";
import { useDispatch } from "react-redux";
import Logout from "../assets/Logout.svg";
import { deleteOrder } from "../features/order.ts";

export default function LogoutBtn() {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await logout("").unwrap();
      dispatch(logoutFront());
      dispatch(deleteOrder())
      navigate("/");
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button
      className="py-2 px-3 text-primary-white font-Poppins hover:font-semibold border border-primary-white15 hover:border-primary-red rounded ml-auto"
      onClick={handleClick}
    >
      <img className="inline-block w-4 h-4 mr-2 ml-0" src={Logout} alt="" />
      Logout
    </button>
  );
}

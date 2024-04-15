import { FormEvent } from "react";
import { useLogoutMutation } from "../features/userApi.ts";
import { useNavigate } from "react-router-dom";
import { logoutFront } from "../features/auth.ts";
import { useDispatch, useSelector } from "react-redux";
import Logout from "../assets/Logout.svg";
import { deleteStoreOrder } from "../features/order.ts";
import { useDeleteOrderMutation } from "../features/orderApi.ts";
import { RootState } from "../store.ts";

export default function LogoutBtn() {
  const [logout] = useLogoutMutation();
  const [deleteOrder] = useDeleteOrderMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const orders = useSelector((state: RootState) => state.order);

  const handleClick = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const responseLogout = await logout("").unwrap();
      console.log(responseLogout);

      dispatch(logoutFront());
      dispatch(deleteStoreOrder());
      navigate("/");
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

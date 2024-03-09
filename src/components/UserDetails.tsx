import { FormEvent } from "react";
import { useLogoutMutation } from "../features/userApi";
import { deleteUser } from "../features/user";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

export default function UserDetails() {
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  var users = useSelector((state: RootState) => state.user);

  const handleClick = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await logout("").unwrap();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button className="p-4" onClick={handleClick}>
      Logout
    </button>
  );
}

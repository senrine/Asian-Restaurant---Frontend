import { FormEvent, useState } from "react";
import { useLoginMutation } from "../features/userApi";
import { createUser } from "../features/user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await login({ email, password }).unwrap();
      const user = response.user;
      dispatch(createUser(user));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col w-[80%] text-primary-white font-Poppins">
      <form onSubmit={handleSubmit}>
        <label className="text-[16px] md:text-[18px]">Email Adress</label>
        <input
          className="max-lg:border-2 text-[16px] md:text-[18px] py-1 px-2 block rounded bg-transparent border border-primary-white15 w-full mb-4"
          type="email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label className="text-[16px] md:text-[18px]">Password</label>
        <input
          className={`max-lg:border-2 text-[16px] md:text-[18px] py-1 px-2 block rounded bg-transparent border border-primary-white15 mb-8 w-full`}
          type="password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          className="w-full block hover:bg-primary-red bg-primary-red80 border border-primary-white15 py-1 px-3 rounded text-[18px] md:text-[20px]"
          type="submit"
        >
          Log in
        </button>
      </form>
    </div>
  );
}

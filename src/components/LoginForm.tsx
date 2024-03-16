import { useLoginMutation } from "../features/userApi.ts";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCredentials, authenticate } from "../features/auth";
import { FormEvent, useState } from "react";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login] = useLoginMutation();

  const [validation, setValidation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await login({
        username: email,
        password: password,
      }).unwrap();
      dispatch(setCredentials(response.as));
      dispatch(authenticate());
      navigate("/");
      console.log(response.as);
    } catch (err) {
      setValidation(err?.error || "Invalid Credentials");
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col w-[80%] text-primary-white font-Poppins">
      <form onSubmit={handleSubmit}>
        <label className="text-[16px] md:text-[18px]">Email Address</label>

        <input
          className={`max-lg:border-2 text-[16px] md:text-[18px] py-1 px-2 block rounded bg-transparent border w-full ${
            validation
              ? "border-primary-red mb-2"
              : "border-primary-white15 mb-4"
          }`}
          type="email"
          id="email"
          placeholder="Enter your Email Adress"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="text-[16px] md:text-[18px]">Password</label>

        <input
          className={`max-lg:border-2 text-[16px] md:text-[18px] py-1 px-2 block rounded bg-transparent border w-full ${
            validation
              ? "border-primary-red mb-2"
              : "border-primary-white15 mb-4"
          }`}
          type="password"
          placeholder="Enter your password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {validation && (
          <span className="text-[16px] md:text-[18px] my-2 text-primary-red block">
            {validation}
          </span>
        )}
        <button
          className="w-full block hover:bg-primary-red bg-primary-red80 border border-primary-white15 py-1 px-3 rounded text-[18px] md:text-[20px]"
          type="submit"
        >
          Log In
        </button>
      </form>
    </div>
  );
}

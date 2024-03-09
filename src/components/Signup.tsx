import { useState, FormEvent } from "react";
import { useSignupMutation } from "../features/userApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials, authenticate } from "../features/auth";

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPsw, setConfirmedPsw] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPsw, setInvalidPsw] = useState(false);
  const [invalidName, setInvalidName] = useState(false);
  const [signup] = useSignupMutation();

  const [invalidConfirmedPsw, setInvalidConfirmedPsw] = useState(false);

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();

    if (confirmedPsw !== password) {
      setInvalidConfirmedPsw(true);
      throw Error;
    }

    const address = "";
    const phoneNumber = 0;
    setInvalidEmail(false);
    setInvalidPsw(false);
    setInvalidName(false);
    try {
      const response = await signup({
        name,
        email,
        password,
        address,
        phoneNumber,
      }).unwrap();
      navigate("/");
    } catch (err) {
      const message = err?.data?.message.split(":");
      console.log(err);

      if (message[1] === " email") {
        setInvalidEmail(true);
      }
      if (message[1] === " password") {
        setInvalidPsw(true);
      }

      if (message[1] === " name") {
        setInvalidName(true);
      }
    }
  };

  return (
    <div className="flex flex-col w-[80%] text-primary-white font-Poppins">
      <form onSubmit={handleSignup}>
        <label className="text-[16px] md:text-[18px]">Your Name</label>
        <input
          className={`max-lg:border-2 text-[16px] md:text-[18px] py-1 px-2 block rounded bg-transparent border ${
            invalidName
              ? "border-primary-red mb-2"
              : "border-primary-white15 mb-4"
          } w-full`}
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {invalidName && (
          <span className="text-[16px] md:text-[18px] my-2 text-primary-red block">
            Please enter your name.
          </span>
        )}
        <label className="text-[16px] md:text-[18px]">Email Adress</label>
        <input
          className={`max-lg:border-2 text-[16px] md:text-[18px] py-1 px-2 block rounded bg-transparent border ${
            invalidEmail
              ? "border-primary-red mb-2"
              : "border-primary-white15 mb-4"
          } w-full`}
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {invalidEmail && (
          <span className="text-[16px] md:text-[18px] my-2 text-primary-red block">
            Already used, Please enter a new email adress.
          </span>
        )}
        <label className="text-[16px] md:text-[18px]">Password</label>
        <input
          className={`max-lg:border-2 text-[16px] md:text-[18px] py-1 px-2 block rounded bg-transparent border ${
            invalidPsw
              ? "border-primary-red mb-2"
              : "border-primary-white15 mb-4"
          } w-full`}
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {invalidPsw && (
          <span className="text-[16px] md:text-[18px] mb-4 text-primary-red block">
            Invalid Password, your password should have at least 6 characters.
          </span>
        )}
        <label className="text-[16px] md:text-[18px]">
          Confirm your password
        </label>
        <input
          className={`max-lg:border-2 text-[16px] md:text-[18px] py-1 px-2 block rounded bg-transparent border w-full ${
            confirmedPsw
              ? "mb-2 border-primary-red "
              : "mb-8 border-primary-white15 "
          }`}
          type="password"
          name="password-confirmed"
          onChange={(e) => {
            setConfirmedPsw(e.target.value);
            if (e.target.value !== password) {
              setInvalidConfirmedPsw(true);
            }
            if (e.target.value === password) {
              setInvalidConfirmedPsw(false);
            }
          }}
        />
        {invalidConfirmedPsw && (
          <span className="text-[16px] md:text-[18px] mb-8 text-primary-red block">
            Invalid Password.
          </span>
        )}
        <button
          className="w-full block hover:bg-primary-red bg-primary-red80 border border-primary-white15 py-1 px-3 rounded text-[18px] md:text-[20px]"
          type="submit"
        >
          Sign up
        </button>
      </form>
    </div>
  );
}

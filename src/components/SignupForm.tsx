import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSignupMutation, useLoginMutation } from "../features/userApi.ts";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCredentials, authenticate } from "../features/auth";

const validationSchema = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
    password: z
      .string()
      .min(6, { message: "Password must be atleast 6 characters" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password don't match",
  });

type ValidationSchema = z.infer<typeof validationSchema>;

export default function SignupForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signup] = useSignupMutation();
  const [login] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = async (data) => {
    try {
      const response = await signup({
        name: data.name,
        email: data.email,
        password: data.password,
      }).unwrap();
      await login({
        username: data.email,
        password: data.password,
      });
      dispatch(setCredentials(response.user));
      dispatch(authenticate());
      navigate("/");
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col w-[80%] text-primary-white font-Poppins">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="text-[16px] md:text-[18px]">Your Name</label>
        <input
          className={`max-lg:border-2 text-[16px] md:text-[18px] py-1 px-2 block rounded bg-transparent border w-full ${
            errors.name
              ? "border-primary-red mb-2"
              : "border-primary-white15 mb-4"
          }`}
          type="text"
          id="name"
          placeholder="Enter your Name"
          {...register("name")}
        />
        {errors.name && (
          <span className="text-[16px] md:text-[18px] my-2 text-primary-red block">
            {errors.name?.message}
          </span>
        )}
        <label className="text-[16px] md:text-[18px]">Email Address</label>

        <input
          className={`max-lg:border-2 text-[16px] md:text-[18px] py-1 px-2 block rounded bg-transparent border w-full ${
            errors.email
              ? "border-primary-red mb-2"
              : "border-primary-white15 mb-4"
          }`}
          type="email"
          id="email"
          placeholder="Enter your Email Adress"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-[16px] md:text-[18px] my-2 text-primary-red block">
            {errors.email?.message}
          </span>
        )}
        <label className="text-[16px] md:text-[18px]">Password</label>

        <input
          className={`max-lg:border-2 text-[16px] md:text-[18px] py-1 px-2 block rounded bg-transparent border w-full ${
            errors.password
              ? "border-primary-red mb-2"
              : "border-primary-white15 mb-4"
          }`}
          type="password"
          id="password"
          placeholder="Enter your password"
          {...register("password")}
        />
        {errors.password && (
          <span className="text-[16px] md:text-[18px] my-2 text-primary-red block">
            {errors.password?.message}
          </span>
        )}

        <label className="text-[16px] md:text-[18px]">Confirm Password</label>

        <input
          className={`max-lg:border-2 text-[16px] md:text-[18px] py-1 px-2 block rounded bg-transparent border w-full ${
            errors.confirmPassword
              ? "border-primary-red mb-2"
              : "border-primary-white15 mb-4"
          }`}
          type="password"
          id="c_password"
          placeholder="Confirm your password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <span className="text-[16px] md:text-[18px] my-2 text-primary-red block">
            {errors.confirmPassword?.message}
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

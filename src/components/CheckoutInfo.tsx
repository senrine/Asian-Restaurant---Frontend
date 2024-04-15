import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { useState } from "react";
import up from "../assets/Up.svg";
import down from "../assets/Down.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useUpdateUserMutation } from "../features/userApi";
import { setCredentials } from "../features/auth";

const validationSchema = z.object({
  address: z.string().optional(),
  phoneNumber: z.string().optional(),
});

type ValidationSchema = z.infer<typeof validationSchema>;

export default function CheckoutInfo() {
  const auth = useSelector((state: RootState) => state.auth);

  const [updateUser] = useUpdateUserMutation();

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = async (data) => {
    const id = auth.userInfo.id;
    if (data.address === "") {
      data.address = auth.userInfo.address;
    }
    if (data.phoneNumber === "") {
      data.phoneNumber = auth.userInfo.phoneNumber;
    }
    const newData = {
      ...data,
      email: auth.userInfo.email,
      name: auth.userInfo.name,
    };

    console.log(newData);

    try {
      const response = await updateUser({ data: newData, id }).unwrap();
      console.log(response);
      dispatch(setCredentials(response.user));
    } catch (err) {
      console.log(err);
    }
  };

  const [drop, setDrop] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setDrop(!drop);
          console.log(auth);
        }}
        className="w-full flex justify-center items-center mt-10 md:mt-16 mb-2 md:mb-4 px-10 md:px-20"
      >
        <p className="mr-auto text-[18px] md:text-[20px] font-Bellefair">
          Personal Information
        </p>
        <img className="inline-block w-4" src={`${drop ? up : down}`} alt="" />
      </div>
      <div
        className={`${drop ? "" : "hidden"} w-full px-10 md:px-20 mb-2 md:mb-4 mt-4 md:mt-6`}
      >
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <label className="text-[16px] md:text-[18px]">Address</label>

          <input
            className={`max-lg:border-2 text-[16px] md:text-[18px] py-1 px-2 block rounded bg-transparent border w-full ${
              errors.address
                ? "border-primary-red mb-2"
                : "border-primary-white15 mb-4"
            }`}
            type="text"
            id="address"
            placeholder={auth.userInfo.address}
            {...register("address")}
          />
          {errors.address && (
            <span className="text-[16px] md:text-[18px] my-2 text-primary-red block">
              {errors.address?.message}
            </span>
          )}

          <label className="text-[16px] md:text-[18px]">Phone Number</label>

          <input
            className={`max-lg:border-2 text-[16px] md:text-[18px] py-1 px-2 block rounded bg-transparent border w-full ${
              errors.phoneNumber
                ? "border-primary-red mb-2"
                : "border-primary-white15 mb-4"
            }`}
            type="tel"
            id="phoneNumber"
            placeholder={`${
              auth.userInfo.phoneNumber
                ? auth.userInfo.phoneNumber
                : "Enter your Phone Number"
            }`}
            {...register("phoneNumber")}
          />
          {errors.phoneNumber && (
            <span className="text-[16px] md:text-[18px] my-2 text-primary-red block">
              {errors.phoneNumber?.message}
            </span>
          )}
          <button
            className="ml-auto block hover:bg-primary-red bg-primary-red80 border border-primary-white15 py-1 px-3 rounded text-[18px] md:text-[20px]"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
      <hr className="w-full border-primary-white15 rounded" />
    </>
  );
}

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { useUpdateUserMutation } from "../features/userApi";
import { setCredentials } from "../features/auth";

const validationSchema = z.object({
  name: z.string().optional(),
  address: z.string().optional(),
  phoneNumber: z.string().optional(),
});

type ValidationSchema = z.infer<typeof validationSchema>;

export default function UpdateUserForm() {
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
    if (data.name === "") {
      data.name = auth.userInfo.name;
    }
    const newData = { ...data, email: auth.userInfo.email };
    console.log(newData);
    
    try {
      const response = await updateUser({ data: newData, id }).unwrap();
      console.log(response);
      dispatch(setCredentials(response.user))
    } catch (err) {
      console.log(err);
    }
  };
  return (
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
        placeholder={auth.userInfo.name}
        {...register("name")}
      />
      {errors.name && (
        <span className="text-[16px] md:text-[18px] my-2 text-primary-red block">
          {errors.name?.message}
        </span>
      )}
      <label className="text-[16px] md:text-[18px]">Address</label>

      <input
        className={`max-lg:border-2 text-[16px] md:text-[18px] py-1 px-2 block rounded bg-transparent border w-full ${
          errors.address
            ? "border-primary-red mb-2"
            : "border-primary-white15 mb-4"
        }`}
        type="text"
        id="address"
        placeholder={`${
          auth.userInfo.address ? auth.userInfo.address : "Enter your address"
        }`}
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
  );
}

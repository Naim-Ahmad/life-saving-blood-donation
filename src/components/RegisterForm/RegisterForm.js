"use client";
import { userSchema } from "@/utils/registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) });

  const onSubmit = (data) => data;
  return (
    <div className="w-full">
      <h2 className="font-medium text-black text-3xl text-center ">
        Registration From{" "}
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 flex flex-col items-center space-y-5 w-full"
      >
        <div className="max-w-[407px] w-full">
          <input
            type="text"
            placeholder="First Name"
            {...register("firstName", { required: true })}
            className="w-full h-12  rounded-lg border border-color-gray outline-none px-3"
          />
          <p className="text-xs text-red-700">{errors?.firstName?.message}</p>
        </div>
        {/*  */}
        <div className="max-w-[407px] w-full">
          <input
            type="text"
            placeholder="Last Name"
            {...register("lastName", { required: true })}
            className="w-full h-12 rounded-lg border border-color-gray outline-none px-3"
          />
          <p className="text-xs text-red-700">{errors?.lastName?.message}</p>
        </div>
        {/*  */}
        <div className="max-w-[407px] w-full">
          <input
            type="text"
            placeholder="Email"
            {...register("email", { required: true })}
            className="w-full h-12 rounded-lg border border-color-gray outline-none px-3"
          />
          <p className="text-xs text-red-700">{errors?.email?.message}</p>
        </div>
        {/*  */}

        <div className="max-w-[407px] w-full">
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
            className=" h-12 w-full rounded-lg border border-color-gray outline-none px-3"
          />
          <p className="text-xs text-red-700">{errors?.password?.message}</p>
        </div>

        <div className="max-w-[407px] w-full">
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", { required: true })}
            className=" w-full h-12 rounded-lg border border-color-gray outline-none px-3"
          />
          <p className="text-xs text-red-700">
            {errors?.confirmPassword?.message}
          </p>
        </div>
        <p className="text-color-gray1">
          Already have an account?{" "}
          <Link className="text-cyan-600 hover:text-cyan-700" href={"/login"}>
            login
          </Link>
        </p>
        <button
          type="submit"
          className="bg-black text-white max-w-[407px] w-full rounded-lg h-11 text-base font-medium"
        >
          Sign UP
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;

"use client";

import { userSchema } from "@/utils/registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) });

  const onSubmit = (data) => data;
  return (
    <div className="w-full flex-1">
      <h2 className="text-center font-medium text-black text-3xl">
        Login To Your Account{" "}
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 flex flex-col items-center space-y-5"
      >
        {/*  */}
        <div className="max-w-[407px]  w-full">
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
            className="w-full h-12 rounded-lg border border-color-gray outline-none px-3"
          />
          <p className="text-xs text-red-700">{errors?.password?.message}</p>
        </div>
        <p className="text-color-gray1">
          Don&apos;t have an account?{" "}
          <Link
            className="text-cyan-600 hover:text-cyan-700"
            href={"/register"}
          >
            register
          </Link>
        </p>
        <button
          type="submit"
          className="bg-black text-white max-w-[407px] w-full rounded-lg h-11 text-base font-medium"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

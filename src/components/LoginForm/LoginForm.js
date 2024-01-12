"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "@/utils/registerSchema";
import Link from "next/link";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) });

  const onSubmit = (data) => data;
  return (
    <div>
      <h2 className="text-center font-medium text-black text-3xl">
        Login To Your Account{" "}
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 flex flex-col space-y-10"
      >
        {/*  */}
        <div>
          <input
            type="text"
            placeholder="Email"
            {...register("email", { required: true })}
            className="w-[407px] h-14 rounded-lg border border-color-gray outline-none px-3"
          />
          <p className="text-xs text-red-700">{errors?.email?.message}</p>
        </div>
        {/*  */}

        <div>
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
            className="w-[407px] h-14 rounded-lg border border-color-gray outline-none px-3"
          />
          <p className="text-xs text-red-700">{errors?.password?.message}</p>
        </div>
        <p className="text-color-gray1">
          Don&apos;t have an account? <Link className="text-cyan-600 hover:text-cyan-700" href={"/register"}>register</Link>
        </p>
        <button
          type="submit"
          className="bg-black text-white w-[407px] rounded-lg h-11 text-base font-medium"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

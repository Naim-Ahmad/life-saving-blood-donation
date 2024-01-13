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
        className="mt-10 flex flex-col items-center w-full"
      >
        <div className="max-w-[407px] mb-2 w-full">
          <input
            type="text"
            placeholder="First Name"
            {...register("firstName", { required: true })}
            className={`w-full h-12 rounded-lg input input-bordered ${
              errors?.firstName && "input-error"
            }`}
          />
          <div className="label">
            <span className="label-text-alt text-red-700">
              {errors?.firstName?.message}
            </span>
          </div>
        </div>
        {/*  */}
        <div className="max-w-[407px] mb-2 w-full">
          <input
            type="text"
            placeholder="Last Name"
            {...register("lastName", { required: true })}
            className={`w-full h-12 rounded-lg input input-bordered ${
              errors?.lastName && "input-error"
            }`}
          />
          <div className="label">
            <span className="label-text-alt text-red-700">
              {errors?.lastName?.message}
            </span>
          </div>
        </div>
        {/*  */}
        <div className="max-w-[407px] mb-2 w-full">
          <input
            type="text"
            placeholder="Email"
            {...register("email", { required: true })}
            className={`w-full h-12 rounded-lg input input-bordered ${
              errors?.email && "input-error"
            }`}
          />
          <div className="label">
            <span className="label-text-alt text-red-700">
              {errors?.email?.message}
            </span>
          </div>
        </div>
        {/*  */}

        <div className="max-w-[407px] mb-2 w-full">
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
            className={`w-full h-12 rounded-lg input input-bordered ${
              errors?.password && "input-error"
            }`}
          />
          <div className="label">
            <span className="label-text-alt text-red-700">
              {errors?.password?.message}
            </span>
          </div>
        </div>

        <div className="max-w-[407px] mb-2 w-full">
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", { required: true })}
            className={`w-full h-12 rounded-lg input input-bordered ${
              errors?.confirmPassword && "input-error"
            }`}
          />
          <div className="label">
            <span className="label-text-alt text-red-700">
              {errors?.confirmPassword?.message}
            </span>
          </div>
        </div>
        <p className="text-color-gray1 mb-3">
          Already have an account?{" "}
          <Link className="text-cyan-600 hover:text-cyan-700" href={"/login"}>
            login
          </Link>
        </p>
        <button
          type="submit"
          className=" max-w-[407px] w-full rounded-lg btn btn-neutral text-base font-medium"
        >
          Sign UP
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;

"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "@/utils/registerSchema";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(userSchema) });

  const onSubmit = (data) => data;
  return (
    <div>
      <h2 className="text-center font-medium text-black text-3xl">
        Registration From{" "}
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 flex flex-col space-y-10"
      >
        <div>
          <input
            type="text"
            placeholder="First Name"
            {...register("firstName", { required: true })}
            className="w-[407px] h-14 rounded-lg border border-color-gray outline-none px-3"
          />
          <p className="text-xs text-red-700">{errors?.firstName?.message}</p>
        </div>
        {/*  */}
        <div>
          <input
            type="text"
            placeholder="Last Name"
            {...register("lastName", { required: true })}
            className="w-[407px] h-14 rounded-lg border border-color-gray outline-none px-3"
          />
          <p className="text-xs text-red-700">{errors?.lastName?.message}</p>
        </div>
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
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", { required: true })}
            className="w-[407px] h-14 rounded-lg border border-color-gray outline-none px-3"
          />
          <p className="text-xs text-red-700">
            {errors?.confirmPassword?.message}
          </p>
        </div>

        <button
          type="submit"
          className="bg-black text-white w-[407px] rounded-lg h-11 text-base font-medium"
        >
          Sign UP
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;

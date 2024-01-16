"use client";

import InputForm from "@/components/InputForm";
import style from "./style.module.css";
import ButtonForm from "@/components/ButtonForm";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SignupFormProps } from "./SignupFormProps";

const SignupForm = () => {
  const [showLoadingComponent, setShowLoadingComponent] =
    useState<boolean>(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<SignupFormProps>();

  const onSubmit = handleSubmit(async (data) => {
    alert("test!");

    setShowLoadingComponent(true);
  });

  return (
    <form className="w-full" onSubmit={onSubmit}>
      <legend className="sr-only">login</legend>
      <fieldset className="flex flex-col gap-6">
        <div className="relative flex flex-col gap-1">
          <InputForm
            placeholder="e.g. alex@email.com"
            className={`${style.input}`}
            labelText="Email address"
            {...register("email", {
              required: "Can’t be empty",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email!",
              },
            })}
          />

          {errors.email && (
            <span className="absolute right-3 top-9">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1 relative">
          <InputForm
            className={`${style.input}`}
            labelText="Create password"
            type="password"
            placeholder="At least 8 characters"
            {...register("password", {
              required: "Please check again",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />

          {errors.password && (
            <span className="absolute right-3 top-9">
              {errors.password.message}
            </span>
          )}
        </div>

        <div className="relative flex flex-col gap-1">
          <InputForm
            className={`${style.input}`}
            labelText="Confirm password"
            type="password"
            placeholder="At least 8 characters"
            {...register("confirm_password", {
              required: "Please check again",
              validate: (value) => {
                const passwordValue = getValues("password");
                return value === passwordValue || "Passwords do not match";
              },
            })}
          />

          {errors.confirm_password && (
            <span className="absolute right-3 top-9">
              {errors.confirm_password.message}
            </span>
          )}
        </div>

        <ButtonForm
          disabled={false}
          label="Create new account"
          type="submit"
          showLoadingComponent={showLoadingComponent}
        />
      </fieldset>
    </form>
  );
};
export default SignupForm;

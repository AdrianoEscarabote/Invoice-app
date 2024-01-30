"use client";

import InputForm from "@/components/InputForm";
import style from "./style.module.css";
import ButtonForm from "@/components/ButtonForm";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SignupFormProps } from "./SignupFormProps";
import { useRouter } from "next/navigation";
import useUserAuthenticated from "@/hooks/useUserAuthenticated";

const SignupForm = () => {
  useUserAuthenticated("signup");
  const url = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();
  const [errorData, setErrorData] = useState<string>("");
  const [showLoadingComponent, setShowLoadingComponent] =
    useState<boolean>(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<SignupFormProps>();

  const onSubmit = handleSubmit(async (data) => {
    setShowLoadingComponent(true);
    try {
      const response = await fetch(`${url}/auth/signup`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status === 201) {
        router.push("/");
        setErrorData("");
      }
      if (response.status === 409) {
        setErrorData("User already exists with this email");
        setShowLoadingComponent(false);
      }
    } catch (error) {
      console.error("error " + error);
    }
  });

  return (
    <form className="w-full" onSubmit={onSubmit}>
      <legend className="sr-only">login</legend>
      <fieldset className="relative flex flex-col gap-6">
        {errorData && (
          <p className="HeadingSVariant absolute right-0 top-1 text-[#EC5757]">
            {errorData}
          </p>
        )}
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
          error={errors.email?.message ? true : false}
          errorMessage={errors.email?.message}
        />

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
          error={errors.password?.message ? true : false}
          errorMessage={errors.password?.message}
        />

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
          error={errors.confirm_password?.message ? true : false}
          errorMessage={errors.confirm_password?.message}
        />

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

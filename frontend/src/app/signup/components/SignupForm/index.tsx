"use client";

import InputForm from "@/components/InputForm";
import style from "./style.module.css";
import ButtonForm from "@/components/ButtonForm";
import { FormEventHandler } from "react";

const SignupForm = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (ev) => {
    ev.preventDefault();

    console.log("Formulário enviado!");
  };
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <legend className="sr-only">login</legend>
      <fieldset className="flex flex-col gap-6">
        <InputForm
          placeholder="e.g. alex@email.com"
          className={`${style.input}`}
          labelText="Email address"
        />

        <InputForm
          className={`${style.input}`}
          labelText="Create password"
          type="password"
          placeholder="At least 8 characters"
        />

        <InputForm
          className={`${style.input}`}
          labelText="Confirm password"
          type="password"
          placeholder="At least 8 characters"
        />

        <ButtonForm
          disabled={false}
          label="Create new account"
          type="submit"
          showLoadingComponent={false}
        />
      </fieldset>
    </form>
  );
};
export default SignupForm;

"use client";

import InputForm from "@/components/InputForm";
import style from "./style.module.css";
import { FormEventHandler } from "react";
import ButtonForm from "@/components/ButtonForm";

const LoginForm = () => {
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
          placeholder="Enter your password"
        />

        <ButtonForm
          disabled={false}
          label="Login"
          type="submit"
          showLoadingComponent={false}
        />
      </fieldset>
    </form>
  );
};
export default LoginForm;

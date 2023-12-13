import "../../styles/global.css";
import Link from "next/link";
import InputForm from "@/components/InputForm";
import style from "./style.module.css";
import NothingHereComponent from "@/components/NothingHereComponent";

const LoginPage = () => {
  return (
    <>
      <main className="min-h-screen flex items-center justify-center">
        <div className="bg-almost_dark_blue p-10 flex items-center flex-col  rounded-3xl">
          <h1 className="self-start">Login</h1>
          <form>
            <legend className="sr-only">login</legend>
            <fieldset>
              <InputForm
                className={`${style.input}`}
                labelText="Email address"
              />

              <InputForm
                className={`${style.input}`}
                labelText="Create password"
                type="password"
              />
            </fieldset>
          </form>
          <div className="flex ">
            <p>Don’t have an account?</p>
            <Link href={"/signup"}>Create account</Link>
          </div>
        </div>
      </main>
      <NothingHereComponent />
    </>
  );
};

export default LoginPage;

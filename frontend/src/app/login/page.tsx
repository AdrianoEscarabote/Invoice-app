import "../../styles/global.css";
import Link from "next/link";
import style from "./style.module.css";
import HeaderLoginSignup from "@/components/HeaderLoginSignup";
import FormLoginPage from "./components/FormLoginPage";

const LoginPage = () => {
  return (
    <>
      <HeaderLoginSignup />
      <main className="min-h-screen flex items-center justify-center">
        <div className="max-w-[476px] p-10 w-full bg-2 shadow flex items-center flex-col  rounded-3xl">
          <h1 className="mb-3 self-start HeadingM text-color2">Login</h1>

          <p className="BodyM mb-5 self-start text-color3">
            Add your details below to get back into the app
          </p>
          <FormLoginPage />
          <div className="mt-4 flex gap-1 text-color2 BodyM">
            <p>Don’t have an account?</p>
            <Link href={"/signup"} className="text-dark_purple hover:underline">
              Create account
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;

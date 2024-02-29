import "../../styles/global.css";
import Link from "next/link";
import HeaderLoginSignup from "@/components/HeaderLoginSignup";
import LoginForm from "./components/LoginForm";
import style from "./style.module.css";

export const metadata = {
  title: "Login",
};

const LoginPage = () => {
  return (
    <>
      <HeaderLoginSignup />
      <main
        className={`${style.main} min-h-screen flex items-center justify-center p-4`}
      >
        <div
          className={`${style.container} max-w-[476px] p-10 w-full bg-2 shadow flex items-center flex-col  rounded-3xl`}
        >
          <h1 className="mb-3 self-start HeadingM text-color2">Login</h1>

          <p className="BodyM mb-5 self-start text-color3">
            Add your details below to get back into the app
          </p>
          <LoginForm />
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

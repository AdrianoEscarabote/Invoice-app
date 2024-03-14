import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useUserAuthenticated = (route) => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const [error, setError] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const callApi = async () => {
      const response = await fetch(`${url}/auth/checktoken`, {
        method: "GET",
        credentials: "include",
      });

      if (response.status === 200) {
        setError(false);
        return;
      }
      setError(true);
      if (route === "login") router.push("/login");
      if (route === "signup") router.push("/signup");
    };
    callApi();
  }, []);

  return { error };
};

export default useUserAuthenticated;

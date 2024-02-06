import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useLogout = () => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const [callApi, setCallApi] = useState<boolean>(false);
  const router = useRouter();

  const handleLogoutUserFn = async () => {
    const response = await fetch(`${url}/auth/logout`, {
      credentials: "include",
      method: "POST",
    });

    if (response.status === 200) {
      router.push("/login");
    }
  };

  useEffect(() => {
    if (callApi) {
      handleLogoutUserFn();
    }
  }, [callApi]);

  return {
    setCallApi,
  };
};

export default useLogout;

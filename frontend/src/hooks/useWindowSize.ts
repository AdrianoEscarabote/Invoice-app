import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const isClient = typeof window === "object";

    if (!isClient) {
      return;
    }

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let screenSize;
  if (windowSize.width <= 620) {
    screenSize = "mobile";
  } else if (windowSize.width > 620) {
    screenSize = "desktop";
  }
  return { ...windowSize, screenSize };
};

export default useWindowSize;

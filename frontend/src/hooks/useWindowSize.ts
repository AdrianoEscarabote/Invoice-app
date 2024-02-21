import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
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

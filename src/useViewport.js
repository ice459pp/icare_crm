import { useState, useEffect } from "react";

export const useViewport = () => {
  const [innerWidth, setWidth] = useState(window.innerWidth);
  const [innerHeight, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [innerWidth,innerHeight]);

  return { innerWidth, innerHeight };
};

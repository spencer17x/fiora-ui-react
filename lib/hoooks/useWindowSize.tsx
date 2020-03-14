import React, { useState, useEffect } from "react";

interface State {
  width: number;
  height: number;
}

const useWindowSize = () => {
  const [size, setSize] = useState<State>({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const handleWindowSize = (event: any) => {
    const { innerWidth: width, innerHeight: height } = event.currentTarget;
    setSize({
      width,
      height
    });
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowSize);
    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, []);
  return size;
};

export default useWindowSize;

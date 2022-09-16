import { useEffect, useState } from "react";

export const MOBILE_SIZE = 767;

const useIsMobile = ({ size }) => {
  const mobileSize = size ?? MOBILE_SIZE;

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Set window width to state
    const handleWindowSizeChange = () => setWidth(window?.innerWidth);

    // Add event listener
    window.addEventListener("resize", handleWindowSizeChange);

    // Call handler right away so state gets updated with initial window size
    handleWindowSizeChange();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleWindowSizeChange);
  });

  return width <= mobileSize;
};

export default useIsMobile;

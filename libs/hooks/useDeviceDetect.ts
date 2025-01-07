import { useEffect, useState } from "react";

const useDeviceDetect = () => {
  const [device, setDevice] = useState<string>("desktop");

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const issMobile =
      /Android|webOS|iphone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );
    setDevice(issMobile ? "mobile" : "desjtop");
  }, [device]);

  return device;
};

export default useDeviceDetect;

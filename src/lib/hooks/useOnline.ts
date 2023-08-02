import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const checkConnectivity = () => {
    fetch("https://www.google.com/", { mode: "no-cors" })
      .then(() => setIsOnline(true && navigator.onLine))
      .catch((error) => {
        setIsOnline(false);
        setError(error);
      });
  };

  return {
    isOnline: isOnline,
    isOffline: !isOnline,
    checkConnectivity: checkConnectivity,
    error: error,
  };
};

export default useOnline;

import { useState, useCallback } from "react";
import { useSelector } from "react-redux";

const useHttp = () => {
  const [error, setError] = useState(null);

  const token = useSelector((state) => state.auth.token);

  const sendRequest = useCallback(async (requestConfig, responseData) => {
    setError(null);

    try {
      var header = {
        "access-control-allow-origin": "*",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      };

      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : header,
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      console.log(response.status);
      const data = await response.json();

      responseData({ ...data, status: response.status });
    } catch (e) {
      setError(e.message || "something went wrong");
      // console.log("akash" + e);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    error,
    setError,

    sendRequest,
  };
};

export default useHttp;

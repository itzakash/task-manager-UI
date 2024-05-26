/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { error, setError, sendRequest: loginRequest } = useHttp();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const responseForm = (responseData) => {
    // console.log(responseData);

    if (responseData.status === 200) {
      dispatch({
        type: "LOGIN",
        payload: {
          email: responseData.user.email,
          name: responseData.user.name,
          token: responseData.token,
        },
      });
      navigate("/");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      url: "http://localhost:3000/users/login",
      method: "POST",
      headers: {
        "access-control-allow-origin": "*",
        "Content-Type": "application/json",
      },
      body: login,
    };

    loginRequest(payload, responseForm);
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login page</h2>
      {error && <p>{error}</p>}
      <input
        type="email"
        value={login.email}
        onChange={(e) => {
          setLogin({ ...login, email: e.target.value });
        }}
        placeholder="email"
      />
      <input
        type="password"
        value={login.password}
        onChange={(e) => {
          setLogin({ ...login, password: e.target.value });
        }}
        placeholder="password"
      />
      <input type="submit" />
    </form>
  );
};

export default Login;

// import Login from "./pages/Login";
import { useState } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";

const Auth = () => {
  const [active, setActive] = useState("login");
  return (
    <>
      <button
        onClick={() => {
          setActive("register");
        }}
      >
        Register
      </button>
      <button
        onClick={() => {
          setActive("login");
        }}
      >
        Login
      </button>

      {active === "register" ? <Register /> : <Login />}
      {/* <Login /> */}
    </>
  );
};

export default Auth;

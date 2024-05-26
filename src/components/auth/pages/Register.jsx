import { useState } from "react";
import useHttp from "../../hooks/use-http";

const Register = () => {
  const { error, setError, sendRequest: logInRequest } = useHttp();
  //   const [error, setError] = useState("");
  //   setError("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: 18,
  });

  const responseHandle = (response) => {
    // console.log(response);

    if (response.status === 200) {
      alert("Register successfully");
      setForm({
        name: "",
        email: "",
        password: "",
        age: 18,
      });
    } else {
      alert("Please check the error");
    }
  };
  const handleSubmit = async (e) => {
    // alert();
    // console.log(form);
    e.preventDefault();

    for (const key in form) {
      if (Object.hasOwnProperty.call(form, key)) {
        // const element = object[key];

        if (form[key] === "") {
          setError(`${key} should not be null`);

          return false;
        }
      }
    }
    const payload = {
      method: "POST",
      headers: {
        "access-control-allow-origin": "*",
        "Content-Type": "application/json",
      },
      body: form,
    };

    logInRequest(
      {
        url: "http://localhost:3000/users",
        ...payload,
      },
      responseHandle
    );

    setError("");
  };
  return (
    <form onSubmit={handleSubmit} method="post">
      <h1>Register Page</h1>
      {error && <p>{error}</p>}
      <input
        type="text"
        onChange={(e) => {
          setForm({ ...form, name: e.target.value });
        }}
        value={form.name}
        placeholder="name"
      />
      <input
        type="email"
        onChange={(e) => {
          setForm({ ...form, email: e.target.value });
        }}
        value={form.email}
        placeholder="email"
      />
      <input
        type="password"
        onChange={(e) => {
          setForm({ ...form, password: e.target.value });
        }}
        value={form.password}
        placeholder="password"
      />
      <input
        type="number"
        onChange={(e) => {
          setForm({ ...form, age: Number(e.target.value) });
        }}
        value={form.age}
        placeholder="age"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Register;

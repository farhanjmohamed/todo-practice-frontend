import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div className="w-screen h-auto min-h-screen">
      <div id="login" className="text-white flex items-left">
        <br />
        <h1>Login</h1>
        <br />
        <ul>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <div className="mx-auto">
            Email:{" "}
            <input className="border-black bg-slate-200 text-black border-2 rounded-md" name="email" type="email" />
          </div>
          <div>
            Password:{" "}
            <input
              className="border-black bg-slate-200 text-black border-2 rounded-md"
              name="password"
              type="password"
            />
          </div>
          <button className="bg-gray-400 w-20  text-black rounded-lg" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

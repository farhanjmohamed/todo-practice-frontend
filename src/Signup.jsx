import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup" className="w-screen min-h-screen h-auto">
      <h1>Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input className="border-black border-2 rounded-md" name="name" type="text" />
        </div>
        <div>
          Email: <input className="border-black border-2 rounded-md" name="email" type="email" />
        </div>
        <div>
          Password: <input className="border-black border-2 rounded-md" name="password" type="password" />
        </div>
        <div>
          Password confirmation:{" "}
          <input className="border-black border-2 rounded-md" name="password_confirmation" type="password" />
        </div>
        <button className="bg-gray-200 w-20 rounded-lg" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

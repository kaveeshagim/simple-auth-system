import React, { useState } from "react";
import axios from "axios";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [alert, setAlert] = useState({ message: "", type: "" });

  const handleRegister = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        { username, email, password }
      );

      if (response.data === "success") {
        console.log(response.data);
        setAlert({ message: "Registration successful!", type: "success" });
      } else {
        setAlert({
          message: "Request wasn't recieved by the backend",
          type: "error",
        });
      }
    } catch (err: any) {
      console.log(err);
      setAlert({ message: err.response.data, type: "error" });
    }
  };

  return (
    <div className="bg-gray-900 text-gray-300 ">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-gray-800 rounded-lg shadow-md p-8 w-full max-w-xl">
          <h1 className="text-2xl font-bold mb-4">Anywhere app.</h1>
          <h2 className="text-xl font-semibold mb-4">Create new account.</h2>
          <p className="text-sm mb-6">
            Already a member?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Log In
            </a>
          </p>

          {/* Alert Box */}
          {alert.message && (
            <div
              className={`p-3 rounded-md mb-4 text-center ${
                alert.type === "success"
                  ? "bg-green-500 text-gray-700 font-semibold"
                  : "bg-red-500 text-white font-semibold"
              }`}
            >
              {alert.message}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleRegister}>
            <div>
              <label htmlFor="username" className="block mb-2 text-sm">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 text-blue-login border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-blue-login border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 text-blue-login border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

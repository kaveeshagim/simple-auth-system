import React, { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({ message: "", type: "" });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      if (response.data && response.data.token) {
        console.log(response.data);
        localStorage.setItem("authToken", response.data.token);
        setAlert({ message: "Login successful!", type: "success" });
      } else {
        setAlert({
          message: "Request wasn't recieved by the backend",
          type: "error",
        });
      }
    } catch (err) {
      console.log(err);
      setAlert({ message: err.response.data, type: "error" });
    }
  };

  return (
    <div className="bg-gray-900 text-gray-300 ">
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <div className="bg-gray-800 rounded-lg shadow-md p-8 w-full max-w-xl">
          <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>

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

          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 text-blue-login"
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
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500 text-blue-login"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </form>
          <p className="text-sm mt-8">
            Not a member?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

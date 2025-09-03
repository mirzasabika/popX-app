import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormFilled = email.trim() !== "" && password.trim() !== "";

  return (
    <div className="flex min-h-screen mt-5 items-start bg-white">
      <div className="w-full max-w-sm px-6 py-10">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-900 leading-snug">
          Signin to your <span className="text-purple-600">PopX</span> account
        </h1>
        <p className="mt-4 text-md text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        {/* Form */}
        <form className="mt-9 space-y-5">
          {/* Email */}
          <div className="relative">
            <label
              htmlFor="email"
              className="absolute -top-2 left-3 bg-white px-1 text-xs font-semibold text-purple-600"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="w-full h-12 rounded-md border border-2 border-gray-300 bg-white px-3 text-sm text-gray-700 placeholder-gray-400 
              focus:outline-none hover:border-purple-500 focus:border-purple-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label
              htmlFor="password"
              className="absolute -top-2 left-3 bg-white px-1 text-xs font-semibold text-purple-600"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full h-12 rounded-md border border-2 border-gray-300 bg-white px-3 text-sm text-gray-700 placeholder-gray-400 
              focus:outline-none hover:border-purple-500 focus:border-purple-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            onClick={() => navigate("/profile")}
            disabled={!isFormFilled}
            className={`w-full h-11 rounded-md font-semibold text-white transition-colors ${
              isFormFilled
                ? "bg-purple-600 hover:bg-purple-700 cursor-pointer"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

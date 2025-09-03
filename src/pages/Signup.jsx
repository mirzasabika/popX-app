import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

  const isFormFilled =
    formData.fullName &&
    formData.phone &&
    formData.email &&
    formData.password &&
    formData.company;

  return (
    <div className="flex min-h-screen items-start bg-white my-5">
      

      <div className="flex flex-col justify-between items-center min-h-screen">

   <div className="w-full max-w-sm px-7 py-10">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-900 leading-snug pr-9">
          Create your <span className=" text-purple-600">PopX</span> account
        </h1>

        {/* Form */}
        <form className="mt-9 space-y-5">
          {/* Full Name */}
          <div className="relative">
            <label
              htmlFor="fullName"
              className="absolute -top-2 left-3 bg-white px-1 text-xs font-semibold text-purple-600"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              placeholder="Full Name"
              className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-700 placeholder-gray-400 
              focus:outline-none hover:border-purple-500 focus:border-purple-500"
            />
          </div>

          {/* Phone Number */}
          <div className="relative">
            <label
              htmlFor="phone"
              className="absolute -top-2 left-3 bg-white px-1 text-xs font-semibold text-purple-600"
            >
              Phone number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              placeholder="Phone Number"
              className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-700 placeholder-gray-400 
              focus:outline-none hover:border-purple-500 focus:border-purple-500"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <label
              htmlFor="email"
              className="absolute -top-2 left-3 bg-white px-1 text-xs font-semibold text-purple-600"
            >
              Email address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Email address"
              className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-700 placeholder-gray-400 
              focus:outline-none hover:border-purple-500 focus:border-purple-500"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label
              htmlFor="password"
              className="absolute -top-2 left-3 bg-white px-1 text-xs font-semibold text-purple-600"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="Password"
              className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-700 placeholder-gray-400 
              focus:outline-none hover:border-purple-500 focus:border-purple-500"
            />
          </div>

          {/* Company */}
          <div className="relative">
            <label
              htmlFor="company"
              className="absolute -top-2 left-3 bg-white px-1 text-xs font-semibold text-purple-600"
            >
              Company name
            </label>
            <input
              id="company"
              type="text"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
              placeholder="Company name"
              className="w-full h-12 rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-700 placeholder-gray-400 
              focus:outline-none hover:border-purple-500 focus:border-purple-500"
            />
          </div>

          {/* Agency Radio */}
          <div>
            <p className="text-sm font-semibold text-purple-600 mb-2">
              Are you an Agency? <span className="text-red-500">*</span>
            </p>
            <div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={formData.agency === "yes"}
                  onChange={() => setFormData({ ...formData, agency: "yes" })}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                />
                <span className="text-gray-700 text-sm">Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={formData.agency === "no"}
                  onChange={() => setFormData({ ...formData, agency: "no" })}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                />
                <span className="text-gray-700 text-sm">No</span>
              </label>
            </div>
          </div>

        
        </form>
      </div>


          {/* Button */}
          <button
            type="submit"
            onClick={() => navigate("/profile")}
            disabled={!isFormFilled}
            className={`w-[90%] h-11 rounded-md font-semibold text-white transition-colors my-8  ${
              isFormFilled
                ? "bg-purple-600 hover:bg-purple-700 cursor-pointer"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Create Account
          </button>
      </div>
    </div>
  );
}

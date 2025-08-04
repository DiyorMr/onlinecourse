import React, { useState } from "react";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <p className="text-sm text-gray-500 text-center">
          Create an account to unlock exclusive features.
        </p>

        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Enter your Name"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your Password"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10"
              />
              <span
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer select-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

          {/* Terms and Policy */}
          <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
            <p className="text-sm text-gray-600">
              I agree with <a className="text-orange-500 underline">Terms of Use</a> and{" "}
              <a className="text-orange-500 underline">Privacy Policy</a>
            </p>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-xl hover:bg-orange-600 transition cursor-pointer"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-sm text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Google Signup */}
        <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-xl hover:bg-gray-50 transition cursor-pointer">
          <img
            src="img/google.svg"
            alt="google"
            className="w-5 h-5 mr-2"
          />
          Sign Up with Google
        </button>

        {/* Already have account */}
        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-orange-500 font-medium hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react"; // Import signIn function from next-auth
import { FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { client } from "@/sanity/lib/client";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and registration forms
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    let isValid = true;
    const newErrors = { email: "", password: "", confirmPassword: "" };

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
      isValid = false;
    }

    if (!isLogin && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted", formData);

      if (isLogin) {
        // Check if the user exists in Sanity
        const user = await client.fetch(
          `*[_type == "user" && email == $email][0]`,
          { email: formData.email }
        );

        if (user && user.password === formData.password) {
          // Simulate successful login
          localStorage.setItem("userToken", "some-auth-token");
          alert("Login successful! Redirecting to Cart...");
          window.location.href = "/cart"; // Redirect to Cart page
        } else {
          alert("Invalid credentials, please try again.");
        }
      } else {
        // Register new user if not found
        const existingUser = await client.fetch(
          `*[_type == "user" && email == $email][0]`,
          { email: formData.email }
        );

        if (existingUser) {
          alert("This email is already registered. Please log in.");
        } else {
          // Create new user in Sanity
          const newUser = {
            _type: "user",
            email: formData.email,
            password: formData.password,
          };

          await client.create(newUser);
          alert("Registration successful! Please log in.");
          setIsLogin(true); // Switch to login form
        }
      }
    }
  };

  const handleSocialLogin = (provider: string) => {
    signIn(provider); // Trigger the provider
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-10">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-lg">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
          {isLogin ? "Login to Your Account" : "Create a New Account"}
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Email address"
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Password"
            />
            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
          </div>

          {/* Confirm Password Field for Registration */}
          {!isLogin && (
            <div>
              <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && (
                <p className="text-sm text-red-500 mt-1">{errors.confirmPassword}</p>
              )}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        {/* Social Login Options */}
        <div className="mt-6 flex gap-4">
          <button
            onClick={() => handleSocialLogin("google")}
            className="flex items-center justify-center w-1/2 py-3 px-4 bg-red-500 hover:bg-red-600 text-white font-medium text-lg rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 transition duration-200"
          >
            <FaGoogle className="mr-3" /> Google
          </button>
          <button
            onClick={() => handleSocialLogin("instagram")}
            className="flex items-center justify-center w-1/2 py-3 px-4 bg-pink-500 hover:bg-pink-600 text-white font-medium text-lg rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400 transition duration-200"
          >
            <FaInstagram className="mr-3" /> Instagram
          </button>
          <button
            onClick={() => handleSocialLogin("twitter")}
            className="flex items-center justify-center w-1/2 py-3 px-4 bg-blue-400 hover:bg-blue-500 text-white font-medium text-lg rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 transition duration-200"
          >
            <FaTwitter className="mr-3" /> Twitter
          </button>
        </div>

        {/* Switch between Login and Registration */}
        <div className="mt-6 text-center">
          <span className="text-sm text-gray-600">
            {isLogin ? "Need an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-medium text-indigo-600 hover:text-indigo-500 transition"
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

import React from "react";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <section className="h-screen bg-gray-100">
      <div className="container mx-auto flex h-full items-center justify-center px-4 md:px-8 lg:px-16">
        <div className="w-full max-w-5xl flex flex-wrap shadow-lg bg-white rounded-lg overflow-hidden">
          {/* Left column container with background */}
          <div className="hidden w-full bg-blue-100 p-6 md:flex md:w-6/12 lg:p-8">
            <img
              src="https://manubhai.in/SocialMedia/post_artworks/DGBD00687.jpg"
              alt="Sample illustration"
              className="mx-auto h-auto max-w-full"
            />
          </div>

          {/* Right column container */}
          <div className="w-full p-6 sm:p-8 md:w-6/12 lg:p-10">
            <h2 className="text-center text-2xl font-bold text-gray-700 sm:text-3xl">
              Create an Account
            </h2>
            <p className="mt-2 text-center text-gray-500">
              Join us today and enjoy exclusive features
            </p>
            <form className="mt-6">
              {/* Sign up with social media */}
              <div className="flex justify-center space-x-4">
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
                >
                  <FaFacebookF size={20} />
                </button>
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-400"
                >
                  <FaGoogle size={20} />
                </button>
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-400 text-white hover:bg-blue-500 focus:ring-2 focus:ring-blue-300"
                >
                  <FaLinkedinIn size={20} />
                </button>
              </div>

              {/* Separator */}
              <div className="my-6 flex items-center">
                <div className="flex-1 border-t border-gray-300"></div>
                <p className="mx-4 text-center text-sm font-semibold text-gray-500">
                  OR
                </p>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              {/* Name input */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  className="w-full rounded border-gray-300 px-4 py-2 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Email input */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full rounded border-gray-300 px-4 py-2 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Password input */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full rounded border-gray-300 px-4 py-2 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Confirm Password input */}
              <div className="mb-6">
                <label
                  htmlFor="confirm-password"
                  className="block text-sm font-medium text-gray-600"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="Confirm your password"
                  className="w-full rounded border-gray-300 px-4 py-2 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Sign Up
              </button>
            </form>

            {/* Login link */}
            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;

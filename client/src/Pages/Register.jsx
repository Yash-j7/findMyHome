import React, { useState } from "react";
import Layout from "../components/Layout";
import bg from "../../public/bg.png";
import search from "../../public/search.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [error, setError] = useState(false); // Fixed the typo here
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userName = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const res = await axios.post("http://localhost:8080/auth/register", {
        userName,
        email,
        password,
      });
      console.log(res.data);
      navigate("/login");
    } catch (err) {
      setError(true); // Fixed the typo here
      console.log(err);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[50%]">
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                Register
              </h2>
              <form onSubmit={handleSubmit}>
                {/* Username Field */}
                <div className="mb-4">
                  <label
                    htmlFor="username"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    placeholder="Enter your username"
                  />
                </div>

                {/* Email Field */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Password Field */}
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    placeholder="Enter your password"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors duration-300"
                >
                  Sign Up
                </button>
              </form>
              {error && <span className="text-red-500">Error in Signup</span>}{" "}
              {/* Display error */}
              {/* Additional Info */}
              <p className="text-center text-gray-600 mt-4">
                Already have an account?{" "}
                <a href="#" className="text-indigo-500 hover:underline">
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-[50%]">
          <div className="mt-10 md:mt-0">
            <img
              src={bg}
              alt="background"
              className="bg-orange-100 mx-auto h-[350px] md:min-h-[700px] w-[80%] md:w-auto min-w-[200px] md:min-w-[450px]"
              srcSet=""
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Register;

import React, { useState } from "react";
import Layout from "../components/Layout";
import bg from "../../public/bg.png";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Don't forget to import  axios
import { useContext } from "react";
import { AuthContext } from "../../src/context/authContext.jsx";

function Login() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false); // Initially false
  const { updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userName = e.target.username.value;
    const password = e.target.password.value;
    setLoading(true); // Set loading to true when submitting
    try {
      const res = await axios.post(
        "http://localhost:8080/auth/login",
        {
          userName,
          password,
        },
        {
          withCredentials: true, // Required to send/receive cookies
        }
      );
      console.log(res.data);
      updateUser(res.data);
      setLoading(false); // Set loading to false after success
      navigate("/");
    } catch (err) {
      setLoading(false); // Set loading to false after error
      setError(true);
      console.log(err);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[50%]">
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-5xl font-semibold text-center text-gray-800 mb-6">
                Welcome Back
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
                    name="username"
                    className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    placeholder="Enter your username"
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
                    name="password"
                    className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    placeholder="Enter your password"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors duration-300"
                  disabled={loading} // Disable button when loading
                >
                  {loading ? "Signing In..." : "Sign In"}{" "}
                  {/* Show loading state */}
                </button>
              </form>
              {error && <span className="text-red-500">Error encountered</span>}

              {/* Additional Info */}
              <p className="text-center text-gray-600 mt-4">
                New to us?{" "}
                <a href="#" className="text-indigo-500 hover:underline">
                  Register
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

export default Login;

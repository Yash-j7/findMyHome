import React, { useContext, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import UploadWidget from "./../components/UploadWidget";

function UpdatePage() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // For error messages

  const navigate = useNavigate();
  const { currUser, updateUser } = useContext(AuthContext);
  const [avatar, setAvatar] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userName || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const res = await axios.put(
        `http://localhost:8080/user/updateUser/${currUser.id}`,
        { userName, email, password, avatar: avatar[0] }, // Update data
        {
          withCredentials: true, // Include cookies in request
        }
      );
      updateUser(res.data);
      navigate("/profile");
    } catch (err) {
      console.error(err);
      if (err.response?.status === 401 || err.response?.status === 403) {
        setError("Authentication error. Please log in again.");
      } else {
        setError(
          err.response?.data?.message || "Update failed. Please try again."
        );
      }
    }
  };

  return (
    <Layout>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[50%]">
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                Update
              </h2>
              <form onSubmit={handleSubmit}>
                {/* UserName Field */}
                <div className="mb-4">
                  <label
                    htmlFor="userName"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    UserName
                  </label>
                  <input
                    type="text"
                    name="userName"
                    value={userName} // Controlled value
                    onChange={(e) => setUserName(e.target.value)} // Handle change
                    id="userName"
                    className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    placeholder="Enter your userName"
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
                    name="email"
                    onChange={(e) => setEmail(e.target.value)} // Handle change
                    value={email} // Controlled value
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
                    name="password"
                    value={password} // Controlled value
                    onChange={(e) => setPassword(e.target.value)} // Handle change
                    className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    placeholder="Enter your password"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors duration-300"
                >
                  Update
                </button>
              </form>
              {error && <span className="text-red-500">{error}</span>}{" "}
              {/* Display error */}
            </div>
          </div>
        </div>
        <div className="md:w-[50%]">
          <div className="mt-10 md:mt-0">
            <img
              src={avatar[0] || currUser.avatar || "/noavatar.jpg"}
              alt="User Avatar"
              className="bg-orange-100 mt-20 mx-auto h-[350px] md:min-h-[400px] w-[80%] md:w-auto min-w-[400px] md:min-w-[450px]"
              srcSet=""
            />
            <UploadWidget
              uwConfig={{
                cloudName: "du8f2sn0y",
                uploadPreset: "estate",
                multiple: "false",
                maxImageFileSize: 20000000,
                folder: "avatars",
              }}
              setState={setAvatar}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UpdatePage;

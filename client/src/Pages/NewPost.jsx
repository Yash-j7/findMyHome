import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../components/UploadWidget.jsx";
// import apiRequest from "../../lib/apiRequest";
import Layout from "../components/Layout";
import axios from "axios";

function NewPostPage() {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputs = Object.fromEntries(formData);
    console.log(inputs);
    try {
      const res = await axios.post(
        "http://localhost:8080/post",
        {
          postData: {
            title: inputs.title,
            price: parseInt(inputs.price),
            address: inputs.address,
            city: inputs.city,
            bedroom: parseInt(inputs.bedroom),
            bathroom: parseInt(inputs.bathroom),
            type: inputs.type,
            property: inputs.property,
            latitude: inputs.latitude,
            longitude: inputs.longitude,
            images: images,
          },
          PostDetail: {
            desc: value,
            utilities: inputs.utilities,
            pet: inputs.pet,
            income: inputs.income,
            size: parseInt(inputs.size),
            school: parseInt(inputs.school),
            bus: parseInt(inputs.bus),
            restaurant: parseInt(inputs.restaurant),
          },
        },
        {
          withCredentials: true, // Include cookies in request
        }
      );
      navigate("/" + res.data.id);
    } catch (err) {
      console.log(err);
      setError(error);
    }
  };

  return (
    <Layout>
      {" "}
      <div className="newPostPage pl-10 pr-10 flex h-screen">
        {/* Form Container */}
        <div className="formContainer flex-3 w-2/3 bg-white p-8 overflow-y-auto shadow-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Add New Post
          </h1>
          <div className="wrapper space-y-6">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="item flex flex-col space-y-2">
                  <label
                    htmlFor="title"
                    className="text-sm font-medium text-gray-600"
                  >
                    Title
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="item flex flex-col space-y-2">
                  <label
                    htmlFor="price"
                    className="text-sm font-medium text-gray-600"
                  >
                    Price
                  </label>
                  <input
                    id="price"
                    name="price"
                    type="number"
                    className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="item flex flex-col space-y-2">
                  <label
                    htmlFor="address"
                    className="text-sm font-medium text-gray-600"
                  >
                    Address
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div className="item flex flex-col space-y-2 mb-3">
                <label
                  htmlFor="desc"
                  className="text-sm font-medium text-gray-600"
                >
                  Description
                </label>

                <ReactQuill
                  theme="snow"
                  onChange={setValue}
                  value={value}
                  className="w-[100%] h-[250px] mb-2 text-lg"
                />
              </div>
              <div className="grid grid-cols-1 mt-10 pt-10 md:grid-cols-3 gap-6">
                <div className="item flex flex-col space-y-2">
                  <label
                    htmlFor="city"
                    className="text-sm font-medium text-gray-600"
                  >
                    City
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="item flex flex-col space-y-2">
                  <label
                    htmlFor="bedroom"
                    className="text-sm font-medium text-gray-600"
                  >
                    Bedroom Number
                  </label>
                  <input
                    id="bedroom"
                    name="bedroom"
                    type="number"
                    min={1}
                    className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="item flex flex-col space-y-2">
                  <label
                    htmlFor="bathroom"
                    className="text-sm font-medium text-gray-600"
                  >
                    Bathroom Number
                  </label>
                  <input
                    id="bathroom"
                    name="bathroom"
                    type="number"
                    min={1}
                    className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="item flex flex-col space-y-2">
                  <label
                    htmlFor="latitude"
                    className="text-sm font-medium text-gray-600"
                  >
                    Latitude
                  </label>
                  <input
                    id="latitude"
                    name="latitude"
                    type="text"
                    className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="item flex flex-col space-y-2">
                  <label
                    htmlFor="longitude"
                    className="text-sm font-medium text-gray-600"
                  >
                    Longitude
                  </label>
                  <input
                    id="longitude"
                    name="longitude"
                    type="text"
                    className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="item flex flex-col space-y-2">
                  <label
                    htmlFor="type"
                    className="text-sm font-medium text-gray-600"
                  >
                    Type
                  </label>
                  <select
                    name="type"
                    className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="rent">Rent</option>
                    <option value="buy">Buy</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="item flex flex-col space-y-2">
                  <label
                    htmlFor="property"
                    className="text-sm font-medium text-gray-600"
                  >
                    Property
                  </label>
                  <select
                    name="property"
                    className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="appartment">Appartment</option>
                    <option value="house">House</option>
                    <option value="condo">Condo</option>
                    <option value="land">Land</option>
                  </select>
                </div>
                <div className="item flex flex-col space-y-2">
                  <label
                    htmlFor="utilities"
                    className="text-sm font-medium text-gray-600"
                  >
                    Utilities Policy
                  </label>
                  <select
                    name="utilities"
                    className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="owner">Owner is responsible</option>
                    <option value="tenant">Tenant is responsible</option>
                    <option value="shared">Shared</option>
                  </select>
                </div>
                <div className="item flex flex-col space-y-2">
                  <label
                    htmlFor="pet"
                    className="text-sm font-medium text-gray-600"
                  >
                    Pet Policy
                  </label>
                  <select
                    name="pet"
                    className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="allowed">Allowed</option>
                    <option value="not-allowed">Not Allowed</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="item flex flex-col space-y-2">
                  <label
                    htmlFor="income"
                    className="text-sm font-medium text-gray-600"
                  >
                    Income Policy
                  </label>
                  <input
                    id="income"
                    name="income"
                    type="text"
                    className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Income Policy"
                  />
                </div>
                <div className="item flex flex-col space-y-2">
                  <label
                    htmlFor="size"
                    className="text-sm font-medium text-gray-600"
                  >
                    Total Size (sqft)
                  </label>
                  <input
                    id="size"
                    name="size"
                    type="number"
                    min={0}
                    className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="item flex flex-col space-y-2">
                  <label
                    htmlFor="school"
                    className="text-sm font-medium text-gray-600"
                  >
                    School
                  </label>
                  <input
                    id="school"
                    name="school"
                    type="number"
                    min={0}
                    className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {/* Row 7 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="item flex flex-col space-y-2">
                  <label
                    htmlFor="bus"
                    className="text-sm font-medium text-gray-600"
                  >
                    Bus
                  </label>
                  <input
                    id="bus"
                    name="bus"
                    type="number"
                    min={0}
                    className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="item flex flex-col space-y-2">
                  <label
                    htmlFor="restaurant"
                    className="text-sm font-medium text-gray-600"
                  >
                    Restaurant
                  </label>
                  <input
                    id="restaurant"
                    name="restaurant"
                    type="number"
                    min={0}
                    className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
              {/* Additional fields */}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Add
              </button>
              {error && (
                <span className="text-red-500 text-sm">
                  Error occurred while submitting.
                </span>
              )}
            </form>
          </div>
        </div>
        {/* Side Container */}
        <div className="sideContainer flex-2 w-1/3 bg-gray-50 p-6 flex flex-col items-center gap-6">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className="w-48 h-36 rounded-md object-cover shadow-md"
            />
          ))}
          <UploadWidget
            uwConfig={{
              multiple: true,
              cloudName: "du8f2sn0y",
              uploadPreset: "estate",
              folder: "posts",
            }}
            setState={setImages}
          />
        </div>
      </div>
    </Layout>
  );
}

export default NewPostPage;

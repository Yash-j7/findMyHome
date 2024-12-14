import React, { useContext, useState } from "react";
import Layout from "./../components/Layout";
import Slider from "../components/Slider";
import Mapp from "../components/Map"; // Ensure this is correctly imported
import pin from "../../public/pin.png"; // Ensure the correct path or use a public path like "/pin.png"
import { MapContainer, Marker, Popup } from "react-leaflet";
import { TileLayer } from "react-leaflet";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import { AuthContext } from "../context/authContext";
import axios from "axios";
import { useEffect } from "react";
function SinglePage() {
  const post = useLoaderData();
  console.log("post details are", post);
  const { currUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [saved, setSaved] = useState(post.isSaved);

  const handleClick = async () => {
    if (!currUser) {
      navigate("/login");
      return;
    }

    setSaved((prev) => !prev);

    try {
      await axios.post(
        "http://localhost:8080/user/save",
        { postId: post.id },
        { withCredentials: true }
      );
    } catch (err) {
      setSaved((prev) => !prev); // Revert on error
      console.error("Error saving post:", err);
    }
  };

  return (
    <Layout>
      <div className="md:flex md:flex-row p-5 m-2 flex flex-col">
        <div className="left w-full md:w-[60%]">
          <div className="slider">
            <Slider images={post.images} />
          </div>
          <div className="info font-mono m-5">
            <div className="top flex  justify-between mr-10">
              <div className="decsc flex flex-col gap-2">
                <h1 className="text-3xl font-bold">{post.title}</h1>
                <div className="flex">
                  <img src={pin} height={10} width={20} alt="Location Pin" />
                  {post.address}
                </div>
                <h1 className="bg-orange-300 w-min ">${post.price}</h1>
              </div>
              <div className="user rounded-lg h-[100px] w-[100px] bg-orange-200 flex flex-col justify-center items-center">
                <img
                  className="rounded-full"
                  src={post.user.avatar}
                  height={70}
                  width={70}
                  alt={post.user.userName}
                />
                {post.user.userName}
              </div>
            </div>
            <div
              className="bottom mt-3"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  post.PostDetail.desc || "<p>No description available.</p>"
                ),
              }}
            ></div>
          </div>
        </div>
        <div className="right w-full md:w-[50%] h-full">
          <div className="features font-mono">
            <div className="wrapper">
              <p className="title text-3xl">General</p>
              <div className="listVertical bg-[#f0ebe2] mt-4 p-3">
                <div className="feature flex gap-2">
                  <img
                    src="/utility.png"
                    className="h-[25px] w-[25px]"
                    alt="Utilities"
                  />
                  <div className="featureText">
                    <span className="text-md">Utilities</span>
                    <p className="text-xs">
                      {post.PostDetail.utilities} is responsible
                    </p>
                  </div>
                </div>
                <div className="feature flex gap-2">
                  <img
                    src="/pet.png"
                    className="h-[25px] w-[25px]"
                    alt="Pet Policy"
                  />
                  <div className="featureText">
                    <span className="text-md">Pet Policy</span>
                    <p className="text-xs">{post.PostDetail.pet}</p>
                  </div>
                </div>
                <div className="feature flex gap-2">
                  <img
                    src="/fee.png"
                    className="h-[25px] w-[25px]"
                    alt="Property Fees"
                  />
                  <div className="featureText">
                    <span className="text-md">Property Fees</span>
                    <p className="text-xs">
                      Must have 3x the rent in total household income
                    </p>
                  </div>
                </div>
              </div>
              <p className="title text-xl mt-5 mb-3">Room Sizes</p>
              <div className="sizes bg-[#f0ebe2] flex justify-between p-7">
                <div className="size">
                  <img
                    className="h-[25px] w-[25px]"
                    src="/size.png"
                    alt="Size"
                  />
                  <span>{post.PostDetail.size} sqft</span>
                </div>
                <div className="size">
                  <img
                    className="h-[25px] w-[25px]"
                    src="/bed.png"
                    alt="Beds"
                  />
                  <span>{post.bedroom} beds</span>
                </div>
                <div className="size">
                  <img
                    className="h-[25px] w-[25px]"
                    src="/bath.png"
                    alt="Bathroom"
                  />
                  <span>1 bathroom</span>
                </div>
              </div>
              <p className="title text-xl mt-5 mb-3">Nearby Places</p>
              <div className="listHorizontal bg-[#f0ebe2] flex justify-between p-7">
                <div className="feature">
                  <img
                    className="h-[25px] w-[25px]"
                    src="/school.png"
                    alt="School"
                  />
                  <div className="featureText">
                    <span>School</span>
                    <p>250m away</p>
                  </div>
                </div>
                <div className="feature">
                  <img
                    className="h-[25px] w-[25px]"
                    src="/pet.png"
                    alt="Bus Stop"
                  />
                  <div className="featureText">
                    <span>Bus Stop</span>
                    <p>100m away</p>
                  </div>
                </div>
                <div className="feature">
                  <img
                    className="h-[25px] w-[25px]"
                    src="/fee.png"
                    alt="Restaurant"
                  />
                  <div className="featureText">
                    <span>Restaurant</span>
                    <p>200m away</p>
                  </div>
                </div>
              </div>
              <p className="title mt-3 mb-2 text-xl">Location</p>
              <div className="mapContainer ">
                {/* <MapContainer
                  center={[52.4797, -1.90269]}
                  zoom={6}
                  scrollWheelZoom={false}
                  className="h-[200px] w-full "
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[post.latitude, post.longitude]}>
                    <Popup>
                      <div className="flex">
                        <img
                          src={post.img}
                          alt=""
                          className="w-[70px] h-[70px]"
                        />
                        <div className="text-sm ml-2">
                          <Link to={`/${post.id}`}>{post.title}</Link>

                          <span> bedroom {post.bedroom}</span>
                          <br />
                          <b>$ {post.price}</b>
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer> */}
              </div>
              <div className="buttons flex justify-around mt-3">
                <button>
                  <img
                    className="h-[25px] w-[25px]"
                    src="/chat.png"
                    alt="Chat"
                  />
                  Send a Message
                </button>
                <button
                  onClick={handleClick}
                  style={{ backgroundColor: saved ? "#fece51" : "white" }}
                  className="bg-red-50 p-8"
                >
                  <img
                    className="h-[25px] w-[25px]"
                    src="/save.png"
                    alt="Save"
                  />
                  {saved ? "Saved " : "Save"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SinglePage;

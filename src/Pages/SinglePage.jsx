import React from "react";
import Layout from "./../components/Layout";
import Slider from "../components/Slider";
import { singlePostData, userData } from "../components/dummydata";
import Map from "../components/Map"; // Ensure this is correctly imported
import pin from "../../public/pin.png"; // Ensure the correct path or use a public path like "/pin.png"
import { listData } from "./../components/dummydata";
import { MapContainer, Marker, Popup } from "react-leaflet";
import { TileLayer } from "react-leaflet";
import { Link } from "react-router-dom";

function SinglePage() {
  return (
    <Layout>
      <div className="md:flex md:flex-row p-5 m-2 flex flex-col">
        <div className="left w-full md:w-[60%]">
          <div className="slider">
            <Slider images={singlePostData.images} />
          </div>
          <div className="info font-mono m-5">
            <div className="top flex  justify-between mr-10">
              <div className="decsc flex flex-col gap-2">
                <h1 className="text-3xl font-bold">{singlePostData.title}</h1>
                <div className="flex">
                  <img src={pin} height={10} width={20} alt="Location Pin" />
                  {singlePostData.address}
                </div>
                <h1 className="bg-orange-300 w-min ">
                  ${singlePostData.price}
                </h1>
              </div>
              <div className="user rounded-lg h-[100px] w-[100px] bg-orange-200 flex flex-col justify-center items-center">
                <img
                  className="rounded-full"
                  src={userData.img}
                  height={70}
                  width={70}
                  alt={userData.name}
                />
                {userData.name}
              </div>
            </div>
            <div className="bottom mt-3">
              <p className="text-xs"> {singlePostData.description}</p>
            </div>
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
                    <p className="text-xs">Renter is responsible</p>
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
                    <p className="text-xs">Pets Allowed</p>
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
                  <span>80 sqft</span>
                </div>
                <div className="size">
                  <img
                    className="h-[25px] w-[25px]"
                    src="/bed.png"
                    alt="Beds"
                  />
                  <span>2 beds</span>
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
                <MapContainer
                  center={[52.4797, -1.90269]}
                  zoom={6}
                  scrollWheelZoom={false}
                  className="h-[200px] w-full "
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker
                    position={[
                      singlePostData.latitude,
                      singlePostData.longitude,
                    ]}
                  >
                    <Popup>
                      <div className="flex">
                        <img
                          src={singlePostData.img}
                          alt=""
                          className="w-[70px] h-[70px]"
                        />
                        <div className="text-sm ml-2">
                          <Link to={`/${singlePostData.id}`}>
                            {singlePostData.title}
                          </Link>

                          <span> bedroom {singlePostData.bedroom}</span>
                          <br />
                          <b>$ {singlePostData.price}</b>
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
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
                <button>
                  <img
                    className="h-[25px] w-[25px]"
                    src="/save.png"
                    alt="Save"
                  />
                  Save the Place
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

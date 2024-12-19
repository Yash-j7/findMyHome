import React from "react";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <div className="flex flex-col p-5 m-3 md:flex-row bg-white rounded-lg shadow-lg overflow-hidden ml-10 mb-10 md:mb-0 md:ml-0">
      <div className="w-full md:w-[250px] h-[250px] relative">
        <Link to={`/${item.id}`}>
          <img
            src={item.images[0]}
            alt="property"
            className="w-[300px] h-[300px] object-cover hover:scale-110 transition-transform duration-500 ease-in-out"
          />
        </Link>
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            <Link to={`/${item.id}`}>{item.title}</Link>
          </h2>
          <p className="flex items-center text-gray-600 mt-2">
            <img className="h-5 w-5 mr-2" src="/pin.png" alt="location" />
            <span>{item.address}</span>
          </p>
          <p className="text-xl font-bold text-gray-800 mt-2">$ {item.price}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-6">
            <div className="flex items-center">
              <img src="/bed.png" className="h-5 w-5 mr-1" alt="bedroom" />
              <span className="text-gray-600">{item.bedroom} Beds</span>
            </div>
            <div className="flex items-center">
              <img src="/bath.png" className="h-5 w-5 mr-1" alt="bathroom" />
              <span className="text-gray-600">{item.bathroom} Baths</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300">
              <img src="/save.png" className="h-5 w-5" alt="save" />
            </button>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300">
              <img src="/chat.png" className="h-5 w-5" alt="chat" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

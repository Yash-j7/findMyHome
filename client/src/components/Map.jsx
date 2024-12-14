import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";

function Mapp({ listData }) {
  const defaultPosition = [52.4797, -1.90269]; // Fallback coordinates

  return (
    <MapContainer
      center={
        listData.length === 1 &&
        !isNaN(listData[0].latitude) &&
        !isNaN(listData[0].longitude)
          ? [Number(listData[0].latitude), Number(listData[0].longitude)]
          : defaultPosition
      }
      zoom={7}
      scrollWheelZoom={false}
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {listData.map((item, index) => {
        const isValidLatLng =
          !isNaN(Number(item.latitude)) && !isNaN(Number(item.longitude));
        const position = isValidLatLng
          ? [Number(item.latitude), Number(item.longitude)]
          : defaultPosition;

        return (
          <Marker key={item.id || index} position={position}>
            <Popup>
              <div className="flex">
                <img
                  src={item.img || "/placeholder.png"}
                  alt={item.title || "No Title"}
                  className="w-[70px] h-[70px]"
                />
                <div className="text-sm ml-2">
                  <Link to={`/${item.id}`}>{item.title || "No Title"}</Link>
                  <span> bedroom {item.bedroom || "N/A"}</span>
                  <br />
                  <b>$ {item.price || "N/A"}</b>
                </div>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

export default Mapp;

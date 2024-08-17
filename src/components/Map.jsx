import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";
function Map({ listData }) {
  return (
    <MapContainer
      center={[52.4797, -1.90269]}
      zoom={7}
      scrollWheelZoom={false}
      className="h-full ww-full "
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {listData.map((item) => (
        <Marker position={[item.latitude, item.longitude]}>
          <Popup>
            <div className="flex">
              <img src={item.img} alt="" className="w-[70px] h-[70px]" />
              <div className="text-sm ml-2">
                <Link to={`/${item.id}`}>{item.title}</Link>

                <span> bedroom {item.bedroom}</span>
                <br />
                <b>$ {item.price}</b>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Map;

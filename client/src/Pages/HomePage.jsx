import React, { useState } from "react";
import Layout from "../components/Layout";
import bg from "../../public/bg.png";
import search from "../../public/search.png";
import { Link } from "react-router-dom";

function HomePage() {
  const types = ["buy", "rent"];
  const [query, setQuery] = useState({
    type: "buy",
    city: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery((prev) => ({ ...prev, [name]: value }));
  };

  const validatePrices = () => {
    return query.minPrice >= 0 && query.maxPrice >= query.minPrice;
  };

  return (
    <Layout>
      <div className="flex flex-col md:flex-row justify-around ml-5 mr-5 md:ml-10 md:mr-20 overflow-hidden">
        {/* Text Section */}
        <div className="text-center mt-32 md:top-0 md:ml-10 mr-5">
          <h1 className="text-2xl md:text-4xl font-semibold font-serif">
            Find Real Estate & Get Your Dream Place
          </h1>
          <p className="mt-5 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            deleniti, voluptate id nesciunt dignissimos pariatur neque delectus
            ratione assumenda, itaque officiis impedit inventore incidunt,
            tempora excepturi consequuntur nostrum culpa at.
          </p>

          {/* Type Switcher */}
          <div className="mt-16">
            {types.map((t) => (
              <button
                className={`btn rounded-none border-black ${
                  query.type === t ? "bg-orange-300" : "bg-white"
                }`}
                onClick={() => switchType(t)}
                key={t}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Search Form */}
          <form className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-sm md:text-lg md:font-medium font-mono">
              <label>
                <input
                  placeholder="City Location"
                  className="p-2 border-[1px] outline-none w-full"
                  type="text"
                  name="city"
                  onChange={handleChange}
                  //value={query.city}
                />
              </label>
              <label>
                <input
                  className="p-2 border-[1px] outline-none w-full"
                  placeholder="Min Price"
                  min={0}
                  name="minPrice"
                  type="number"
                  onChange={handleChange}
                  //value={query.minPrice}
                />
              </label>
              <label>
                <input
                  className="border-[1px] p-2 outline-none w-full"
                  placeholder="Max Price"
                  min={0}
                  name="maxPrice"
                  type="number"
                  onChange={handleChange}
                  //value={query.maxPrice}
                />
              </label>
              <Link
                to={
                  validatePrices()
                    ? `/listpage?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`
                    : "#"
                }
              >
                <button
                  className="bg-orange-300 p-2 rounded-md w-full flex items-center justify-center"
                  disabled={!validatePrices()}
                >
                  <img src={search} alt="Search" className="h-5 w-5" />
                </button>
              </Link>
            </div>
            {!validatePrices() && (
              <p className="text-red-500 mt-2">
                Please ensure Min Price is less than or equal to Max Price.
              </p>
            )}
          </form>
        </div>

        {/* Image Section */}
        <div className="mt-10 md:mt-0">
          <img
            src={bg}
            alt="Real Estate Background"
            className="mx-auto h-[350px] md:min-h-[700px] w-[80%] md:w-auto min-w-[200px] md:min-w-[450px]"
          />
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;

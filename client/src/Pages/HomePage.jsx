import React, { useState } from "react";
import Layout from "../components/Layout";
import bg from "../../public/bg.png";
import search from "../../public/search.png";

function HomePage() {
  const type = ["buy", "rent"];
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <Layout>
      <div className="flex flex-col md:flex-row justify-around ml-5 mr-5 md:ml-10 md:mr-20 overflow-hidden">
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
          <div className="mt-16">
            {type.map((t) => (
              <button
                className="btn rounded-none border-spacing-1 border-black"
                onClick={() => switchType(t)}
                key={t}
              >
                {t}
              </button>
            ))}
          </div>

          <br />
          <form action="" className="">
            <div className="grid grid-flow-col text-sm md:text-lg md:font-medium font-mono">
              <input
                placeholder="City Location"
                className="p-1 border-[1px] outline-none"
                type="text"
                onChange={(e) =>
                  setQuery({ ...query, location: e.target.value })
                }
                value={query.location}
              />
              <input
                className="p-1 border-[1px] outline-none"
                placeholder="Min Price"
                min={0}
                max={100000}
                type="number"
                onChange={(e) =>
                  setQuery({ ...query, minPrice: e.target.value })
                }
                value={query.minPrice}
              />
              <input
                className="border-[1px] p-2 outline-none"
                placeholder="Max Price"
                min={0}
                max={100000}
                onChange={(e) =>
                  setQuery({ ...query, maxPrice: e.target.value })
                }
                value={query.maxPrice}
                type="number"
              />

              <button className=" bg-orange-300 p-[10px] rounded-md w-10">
                <img src={search} alt="" />
              </button>
            </div>
          </form>
        </div>
        <div className="mt-10 md:mt-0">
          <img
            src={bg}
            alt="background"
            className="bg-red-100 mx-auto h-[350px] md:min-h-[700px] w-[80%] md:w-auto min-w-[200px] md:min-w-[450px]"
            srcSet=""
          />
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;

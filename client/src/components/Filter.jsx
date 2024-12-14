import { useState } from "react";
import search from "../../public/search.png";
import { useSearchParams } from "react-router-dom";

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("search params", searchParams);
  const [query, setQuery] = useState({
    type: searchParams.get("type") || "",
    city: searchParams.get("city") || "",
    property: searchParams.get("property") || "",
    minPrice: searchParams.get("minPrice") || "",
    maxPrice: searchParams.get("maxPrice") || "",
    bedroom: searchParams.get("bedroom") || "",
  });
  const handleChange = (e) => {
    setQuery({
      ...query,
      [e.target.name]: e.target.value,
    });
  };

  const handleFilter = () => {
    setSearchParams(query);
  };
  return (
    <div className="filter font-mono ">
      <h1 className="pl-5 pt-5 text-2xl">
        Search Results For <b>{searchParams.get("city")}</b>
      </h1>
      <div className="top mt-2 p-5">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            className="w-full p-1"
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
            onChange={handleChange}
            defaultValue={query.city}
          />
        </div>
      </div>
      <div>
        <div className="bottom flex-col gap-3 flex md:flex-row p-5 gap-x-2">
          <div className="item">
            <label htmlFor="type">Type</label>
            <select
              name="type"
              className="ml-3"
              id="type"
              onChange={handleChange}
              defaultValue={query.type}
            >
              <option value="">any</option>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>
          <div className="item">
            <label htmlFor="property">Property</label>
            <select
              name="property"
              className="ml-3"
              id="property"
              onChange={handleChange}
              defaultValue={query.property}
            >
              <option value="">any</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="land">Land</option>
            </select>
          </div>
          <div className="item">
            <label htmlFor="minPrice">Min Price</label>
            <input
              type="number"
              id="minPrice"
              name="minPrice"
              placeholder="any"
              className="ml-3"
              onChange={handleChange}
              defaultValue={query.minPrice}
            />
          </div>
          <div className="item">
            <label htmlFor="maxPrice">Max Price</label>
            <input
              type="text"
              className="ml-3"
              id="maxPrice"
              name="maxPrice"
              placeholder="any"
              onChange={handleChange}
              defaultValue={query.maxPrice}
            />
          </div>
          <div className="item">
            <label htmlFor="bedroom">Bedroom</label>
            <input
              type="text"
              id="bedroom"
              className="ml-3"
              name="bedroom"
              placeholder="any"
              onChange={handleChange}
              defaultValue={query.bedroom}
            />
          </div>
        </div>
        <div className="flex justify-center align-middle">
          <button
            className="z-1 btn bg-orange-200 hover:bg-red-400 w-[50px] h-[50px] mt-2"
            onClick={handleFilter}
          >
            <img src={search} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;

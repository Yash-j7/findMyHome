import search from "../../public/search.png";
function Filter() {
  return (
    <div className="filter font-mono ">
      <h1 className="pl-5 pt-5 text-2xl">
        Search Results For <b>London</b>
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
          />
        </div>
      </div>
      <div>
        <div className="bottom flex-col gap-3 flex md:flex-row p-5 gap-x-2">
          <div className="item">
            <label htmlFor="type">Type</label>
            <select name="type" className="ml-3" id="type">
              <option value="">any</option>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>
          <div className="item">
            <label htmlFor="property">Property</label>
            <select name="property" className="ml-3" id="property">
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
            />
          </div>
        </div>
        <div className="flex justify-center align-middle">
          <button className="z-1 btn bg-orange-200 hover:bg-red-400 w-[50px] h-[50px] mt-2">
            <img src={search} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;

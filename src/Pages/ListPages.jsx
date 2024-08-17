import React from "react";
import Layout from "../components/Layout";
import Filter from "./../components/Filter";
import { listData } from "../components/dummydata.js";
import Card from "./../components/Card";
import Map from "../components/Map.jsx";
function ListPages() {
  return (
    <Layout>
      <div className=" flex flex-col md:flex md:flex-row md:justify-around">
        <div className="md:w-[70%]">
          <div className="">
            <Filter />
          </div>
          <div className="mt-8">
            {listData.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        </div>
        <div className="md:w-[30%] md:min-h-[100vh] w-full  mt-20 p-3">
          <Map listData={listData} />
        </div>
      </div>
    </Layout>
  );
}

export default ListPages;

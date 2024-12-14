import React from "react";
import Layout from "../components/Layout";
import Filter from "./../components/Filter";
import Card from "./../components/Card";
import Map from "../components/Map.jsx";
import { useLoaderData } from "react-router-dom";
function ListPages() {
  const posts = useLoaderData();
  return (
    <Layout>
      <div className=" flex flex-col md:flex md:flex-row md:justify-around">
        <div className="md:w-[70%]">
          <div className="">
            <Filter />
          </div>
          <div className="mt-8">
            {posts.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </div>
        </div>
        {/* <div className="md:w-[30%] md:min-h-[100vh] w-full  mt-20 p-3">
          <Map posts={posts} />
        </div> */}
      </div>
    </Layout>
  );
}

export default ListPages;

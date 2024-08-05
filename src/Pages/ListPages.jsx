import React from "react";
import Layout from "../components/Layout";
import Filter from "./../components/Filter";

function ListPages() {
  return (
    <Layout>
      <div className="flex justify-around">
        <div className="w-full">
          <div className="">
            <Filter />
          </div>
          <div></div>
        </div>
        <div className="w-full">map</div>
      </div>
    </Layout>
  );
}

export default ListPages;

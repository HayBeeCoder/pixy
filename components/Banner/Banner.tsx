import React from "react";
import BannerItem from "./BannerItem";

const Banner = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-start-1 col-span-4 bg-green-400">
        <BannerItem active />
      </div>
      <div className="col-start-5 col-span-4">
        <BannerItem />
      </div>
      <div className="col-start-9 col-span-4">
        <BannerItem />
      </div>
    </div>
  );
};

export default Banner;

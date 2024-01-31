import React from "react";
import BoraBora from "../assets/borabora.jpg";
import BoraBora2 from "../assets/borabora2.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import KeyWest from "../assets/keywest.jpg";

const DestinationsHeader = () => {
  return (
    <>
      <h1>All-Inclusive Resorts</h1>
      <p className="py-4">On the Caribbean's best beaches</p>
    </>
  );
};

const DestinationsGallery = () => {
  return (
    <div className="resorts grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
      <img
        className="col-span-2 md:col-span-3 row-span-2"
        src={BoraBora}
        alt=""
      />
      <img src={BoraBora2} alt="" />
      <img src={Maldives} alt="" />
      <img src={Maldives2} alt="" />
      <img src={KeyWest} alt="" />
    </div>
  );
};

const Destinations = () => {
  return (
    <section className="text-center py-0">
      <DestinationsHeader />
      <DestinationsGallery />
    </section>
  );
};

export default Destinations;

import React from "react";
import BoraBora from "../assets/borabora.jpg";
import BoraBora2 from "../assets/borabora2.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import Maldives3 from "../assets/maldives3.jpg";
import KeyWest from "../assets/keywest.jpg";

const SelectsCard = ({ name, imageSrc }) => {
  return (
    <div className="relative">
      <img src={imageSrc} className="w-full h-full object-cover" />
      <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
        <p className=" absolute left-4 bottom-4 text-2xl font-bold text-white">
          {name}
        </p>
      </div>
    </div>
  );
};

const Selects = () => {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SelectsCard name="BoraBora" imageSrc={BoraBora} />
      <SelectsCard name="Maldives" imageSrc={BoraBora2} />
      <SelectsCard name="Antigua" imageSrc={Maldives} />
      <SelectsCard name="Cozumel" imageSrc={Maldives2} />
      <SelectsCard name="Jamaica" imageSrc={Maldives3} />
      <SelectsCard name="Key West" imageSrc={KeyWest} />
    </section>
  );
};

export default Selects;

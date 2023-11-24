import React from "react";
import { drugs } from "../../assets/data/drugs";
import DrugsCard from "./DrugsCard";

const drugList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {drugs.map((drug) => (
        <DrugsCard key={drug.id} drug={drug} />
      ))}
    </div>
  );
};

export default drugList;

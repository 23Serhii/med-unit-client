/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { FiDollarSign } from "react-icons/fi";

const DrugsCard = ({ drug }) => {
  const { name, title, price, img, id } = drug;

  const pathTo = `/drug/${id}`;
  return (
    <div className="p-3 lg:p-5 ">
      <img
        src={img}
        style={{
          borderRadius: 20,
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.8)",
        }}
        className="w-full"
        alt=""
      />
      <h2 className="text-18[px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-6 lg:mt-5">
        {name}
      </h2>
      <div className="mt-2 lg:mt-4 flex items-center justify-between">
        <span className="bg-[#6EBA6E] text-Green py-1 px-2 lg:py-2 lg:px-6 text-[18px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
          {price}
        </span>
        <div className="flex items-center gap-[6px]">
          <span className="flex items-center gap-[10px] text-[14px] leading-6 lg:text-[16px] ml-5 leading -7 font-semibold text-headingColor">
            {title}
          </span>
        </div>
        <Link
          to={pathTo}
          className="w-[44px] h-[40px] rounded-full border
                     border-solid border-[#181A1E] mt-[10px] mx-auto 
                     flex items-center justify-center group
                      hover:bg-primaryColor hover:border-none"
        >
          <FiDollarSign></FiDollarSign>
        </Link>
      </div>
    </div>
  );
};

export default DrugsCard;

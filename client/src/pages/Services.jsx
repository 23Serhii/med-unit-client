import React from "react";
import ServiceCard from "./Services/ServiceCard";
import { services } from "../assets/data/services";

const Services = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            {services.map((item, index) => (
              <ServiceCard item={item} index={index} key={index} />
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default Services;

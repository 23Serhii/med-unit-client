import React from "react";
import { doctors } from "../../assets/data/doctors";
import DoctorCard from "./DoctorCard";
import Testimonial from "../../components/Testimonial/Testimonial";

const Doctors = () => {
  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Знайти доктора</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Пошук доктора"
            />
            <button className="btn mt-0 rounded-[20px] rounded-r-md">
              Пошук
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
            {doctors.map((doctors) => (
              <DoctorCard key={doctors.id} doctor={doctors} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Що наші пацієнти кажуть про нас
            </h2>
            <p className="text__para text-center">
              Медичне обслуговування світового рівня для кожного. Наша система
              охорони здоров'я пропонує неперевершену кваліфіковану медичну
              допомогу. Від лабораторії до клініки.
              </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Doctors;

import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import patientAvatar from "../../assets/images/patient-avatar.png";
import zelya from "../../assets/images/zelya.jpg";
import yshchenko from "../../assets/images/yshchenko.jpg";
import vitya from "../../assets/images/yanich.jpg";

import { HiStar } from "react-icons/hi";

export const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-10 rounded-[15px]">
            <div className="flex items-center gap-[5]">
              <img
                src={patientAvatar}
                style={{ width: 50, height: 50 }}
                alt=""
              />
              <div>
                <h4 className="text-[15px] ml-5 leading-[30px] font-semibold text-headingColor">
                  Олександр Шевченко
                </h4>
                <div className="flex items-center gap-[0px]">
                  <HiStar className="text-yellowColor ml-4 w-[18px] h-5"></HiStar>
                  <HiStar className="text-yellowColor ml-4 w-[18px] h-5"></HiStar>
                  <HiStar className="text-yellowColor ml-4 w-[18px] h-5"></HiStar>
                  <HiStar className="text-yellowColor ml-4 w-[18px] h-5"></HiStar>
                  <HiStar className="text-yellowColor ml-4 w-[18px] h-5"></HiStar>
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400] ">
              Кваліфікований доктор, всім раджу. Супер класне відношення
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-10 rounded-[15px]">
            <div className="flex items-center gap-[5]">
              <img
                src={zelya}
                style={{ width: 50, height: 50, borderRadius: 10 }}
                alt=""
              />
              <div>
                <h4 className="text-[15px] ml-5 leading-[30px] font-semibold text-headingColor">
                  Володимир Зеленський
                </h4>
                <div className="flex items-center gap-[0px]">
                  <HiStar className="text-yellowColor ml-4 w-[18px] h-5"></HiStar>
                  <HiStar className="text-yellowColor ml-4 w-[18px] h-5"></HiStar>
                  <HiStar className="text-yellowColor ml-4 w-[18px] h-5"></HiStar>
                  <HiStar className="text-yellowColor ml-4 w-[18px] h-5"></HiStar>
                  <HiStar className="text-yellowColor ml-4 w-[18px] h-5"></HiStar>
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400] ">
              Чоткий колір сайту, мені сподобалось. Смішно жартують про русню! І
              лікують теж непогано.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-10 rounded-[15px]">
            <div className="flex items-center gap-[5]">
              <img
                src={yshchenko}
                style={{ width: 50, height: 50, borderRadius: 10 }}
                alt=""
              />
              <div>
                <h4 className="text-[15px] ml-5 leading-[30px] font-semibold text-headingColor">
                  Віктор Ющенко
                </h4>
                <div className="flex items-center gap-[0px]">
                  <HiStar className="text-yellowColor ml-4 w-[18px] h-5"></HiStar>
                  <HiStar className="text-yellowColor ml-4 w-[18px] h-5"></HiStar>
                  <HiStar className="text-yellowColor ml-4 w-[18px] h-5"></HiStar>
                  <HiStar className="text-yellowColor ml-4 w-[18px] h-5"></HiStar>
                  <HiStar className="text-yellowColor ml-4 w-[18px] h-5"></HiStar>
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400] ">
              Смачний мед порадили для лікування болю в горлі. Раджу!
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="py-[30px] px-10 rounded-[15px]">
            <div className="flex items-center gap-[5]">
              <img
                src={vitya}
                style={{ width: 50, height: 50, borderRadius: 10 }}
                alt=""
              />
              <div>
                <h4 className="text-[15px] ml-5 leading-[30px] font-semibold text-headingColor">
                  Вітя Янич
                </h4>
                <div className="flex items-center gap-[0px]">
                  <HiStar className="text-yellowColor ml-4 w-[18px] h-5"></HiStar>
                  <HiStar className="text-yellowColor ml-4 w-[18px] h-5"></HiStar>
                  <HiStar className="text-yellowColor ml-4 w-[18px] h-5"></HiStar>
                  <HiStar className="text-yellowColor ml-4 w-[18px] h-5"></HiStar>
                  <HiStar className="text-yellowColor ml-4 w-[18px] h-5"></HiStar>
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400] ">
              Все таки знають хто кладе гроші в тумбочу! Дякую за відповідь та
              якісне лікування!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;

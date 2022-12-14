import React from "react";
import "./TestimonyCard.css";
import datas from "./CardData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import 'swiper/css/pagination';
import 'swiper/css';

const TestimoyCard = () => {
  return (
    <div className="t-wrapper">
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
      >
        {datas.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="lg:w-[55%] border-8 border-main rounded-xl m-auto ">
                <img src={data.image} alt='' className="w-full rounded" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TestimoyCard;

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
              <div className="flex flex-col text-center justify-center items-center w-[50rem] md:w-[35rem] border-8 border-main rounded-lg p-5 px-10">
                <img src={data.image} alt="" className="w-28 rounded-full" />
                <p>{data.testimony}</p>
                <p className="mt-5">{data.name}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TestimoyCard;

import React, { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const carouselData = [
  {
    url: "https://images.unsplash.com/photo-1618064541372-289bdb6f5b7b?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1582300857444-5ddd87c86797?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Carousel = () => {
  let [slide, setSlide] = useState(0);
  const slidesLength = carouselData.length;
  const prevSlide = () => {
    setSlide(slide === 0 ? slidesLength - 1 : slide - 1);
  };
  const nextSlide = () => {
    setSlide(slide === slidesLength - 1 ? 0 : slide + 1);
  };

  return (
    <section className="relative flex justify-center items-center">
      <BsArrowLeftSquareFill
        onClick={prevSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer left-8"
      />
      {carouselData.map((item, index) => {
        return (
          <div
            className={
              index === slide
                ? "rounded-md max-h-[650px] overflow-clip opacity-100"
                : "opacity-0"
            }
          >
            {index === slide && (
              <img src={item["url"]} className="w-full h-full object-cover" />
            )}
          </div>
        );
      })}
      <BsArrowRightSquareFill
        onClick={nextSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer right-8"
      />
    </section>
  );
};

export default Carousel;

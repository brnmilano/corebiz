// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import imageSlide from "./Assets/slide.png";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

export default function Slide() {
  const settings = {
    modules: [Pagination, Autoplay],
    pagination: { clickable: true },
    watchOverflow: true,
    spaceBetween: 20,
    slidesPerView: 1,
    slidesPerGroup: 1,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
    },
  };

  return (
    <Swiper {...settings}>
      <SwiperSlide>
        <img src={imageSlide} alt="" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={imageSlide} alt="" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={imageSlide} alt="" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={imageSlide} alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

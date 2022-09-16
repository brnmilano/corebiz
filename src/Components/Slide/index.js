// import Swiper core and required modules
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import imageSlide from "./Assets/slide.png";
import styles from "./styles.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slide() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className={styles.slides}
    >
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

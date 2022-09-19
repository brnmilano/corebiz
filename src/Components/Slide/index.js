// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import useIsMobile from "../../helpers/useIsMobile";
import imageSlideMobile from "./Assets/slide-mobile.png";
import imageSlide from "./Assets/slide.png";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

export default function Slide() {
  const isMobile = useIsMobile({ size: 768 });

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
        <img
          style={{ width: isMobile && "100%" }}
          src={isMobile ? imageSlideMobile : imageSlide}
          alt=""
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          style={{ width: isMobile && "100%" }}
          src={isMobile ? imageSlideMobile : imageSlide}
          alt=""
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          style={{ width: isMobile && "100%" }}
          src={isMobile ? imageSlideMobile : imageSlide}
          alt=""
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          style={{ width: isMobile && "100%" }}
          src={isMobile ? imageSlideMobile : imageSlide}
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
}

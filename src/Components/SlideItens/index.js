// import Swiper core and required modules
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Box } from "@mui/system";
import Button from "../Button";
import Container from "../Container";
import Heading from "../Heading";
import Text from "../Text";
import Bota from "./Assets/bota.png";
import Chinelo from "./Assets/chinelo.png";
import Cinto from "./Assets/cinto.png";
import Rating from "./Assets/rating.png";
import Sapato from "./Assets/sapato.png";
import styles from "./styles.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function SlideItens() {
  return (
    <Box className={styles.container}>
      <Container>
        <Heading fontWeight={900} fontSize={20}>
          Mais Vendidos
        </Heading>
        <Box className={styles.titleWrapper}></Box>

        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          className={styles.slides}
        >
          <SwiperSlide>
            <Box className={styles.itensWrapper}>
              <img src={Sapato} alt="" />

              <Box className={styles.itemInfo}>
                <Text color="#7A7A7A" fontSize={12} textTransform="uppercase">
                  Sapato floater pretos
                </Text>

                <img src={Rating} alt="" />

                <Heading fontSize={18}>por R$ 259,90</Heading>
                <Text color="#7A7A7A" fontSize={11}>
                  ou em 9x de R$ 28,87
                </Text>
                <Button backgroundColor="#000000" color="#ffffff">Comprar</Button>
              </Box>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box className={styles.itensWrapper}>
              <img src={Chinelo} alt="" />

              <Box className={styles.itemInfo}>
                <Text color="#7A7A7A" fontSize={12} textTransform="uppercase">
                  Sapato floater pretos
                </Text>

                <img src={Rating} alt="" />

                <Heading fontSize={18}>por R$ 259,90</Heading>
                <Text color="#7A7A7A" fontSize={11}>
                  ou em 9x de R$ 28,87
                </Text>
                <Button backgroundColor="#000000" color="#ffffff">Comprar</Button>
              </Box>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box className={styles.itensWrapper}>
              <img src={Bota} alt="" />

              <Box className={styles.itemInfo}>
                <Text color="#7A7A7A" fontSize={12} textTransform="uppercase">
                  Sapato floater pretos
                </Text>

                <img src={Rating} alt="" />

                <Heading fontSize={18}>por R$ 259,90</Heading>
                <Text color="#7A7A7A" fontSize={11}>
                  ou em 9x de R$ 28,87
                </Text>
                <Button backgroundColor="#000000" color="#ffffff">Comprar</Button>
              </Box>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box className={styles.itensWrapper}>
              <img src={Cinto} alt="" />

              <Box className={styles.itemInfo}>
                <Text color="#7A7A7A" fontSize={12} textTransform="uppercase">
                  Sapato floater pretos
                </Text>

                <img src={Rating} alt="" />

                <Heading fontSize={18}>por R$ 259,90</Heading>
                <Text color="#7A7A7A" fontSize={11}>
                  ou em 9x de R$ 28,87
                </Text>
                <Button backgroundColor="#000000" color="#ffffff">Comprar</Button>
              </Box>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box className={styles.itensWrapper}>
              <img src={Sapato} alt="" />

              <Box className={styles.itemInfo}>
                <Text color="#7A7A7A" fontSize={12} textTransform="uppercase">
                  Sapato floater pretos
                </Text>

                <img src={Rating} alt="" />

                <Heading fontSize={18}>por R$ 259,90</Heading>
                <Text color="#7A7A7A" fontSize={11}>
                  ou em 9x de R$ 28,87
                </Text>
                <Button backgroundColor="#000000" color="#ffffff">Comprar</Button>
              </Box>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box className={styles.itensWrapper}>
              <img src={Chinelo} alt="" />

              <Box className={styles.itemInfo}>
                <Text color="#7A7A7A" fontSize={12} textTransform="uppercase">
                  Sapato floater pretos
                </Text>

                <img src={Rating} alt="" />

                <Heading fontSize={18}>por R$ 259,90</Heading>
                <Text color="#7A7A7A" fontSize={11}>
                  ou em 9x de R$ 28,87
                </Text>
                <Button backgroundColor="#000000" color="#ffffff">Comprar</Button>
              </Box>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box className={styles.itensWrapper}>
              <img src={Bota} alt="" />

              <Box className={styles.itemInfo}>
                <Text color="#7A7A7A" fontSize={12} textTransform="uppercase">
                  Sapato floater pretos
                </Text>

                <img src={Rating} alt="" />

                <Heading fontSize={18}>por R$ 259,90</Heading>
                <Text color="#7A7A7A" fontSize={11}>
                  ou em 9x de R$ 28,87
                </Text>
                <Button backgroundColor="#000000" color="#ffffff">Comprar</Button>
              </Box>
            </Box>
          </SwiperSlide>

          <SwiperSlide>
            <Box className={styles.itensWrapper}>
              <img src={Cinto} alt="" />

              <Box className={styles.itemInfo}>
                <Text color="#7A7A7A" fontSize={12} textTransform="uppercase">
                  Sapato floater pretos
                </Text>

                <img src={Rating} alt="" />

                <Heading fontSize={18}>por R$ 259,90</Heading>
                <Text color="#7A7A7A" fontSize={11}>
                  ou em 9x de R$ 28,87
                </Text>
                <Button backgroundColor="#000000" color="#ffffff">Comprar</Button>
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
}

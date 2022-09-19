// import Swiper core and required modules
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";

import { Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import useCart from "../../Contexts/Cart/useCart";
import useProducts from "../../Contexts/Products/useProducts";
import useIsMobile from "../../helpers/useIsMobile";
import Button from "../Button";
import Container from "../Container";
import Heading from "../Heading";
import Text from "../Text";
import offImage from "./Assets/off.png";
import styles from "./styles.module.scss";

export default function SlideItens() {
  const isMobile = useIsMobile({ size: 768 });

  const { data, isLoading } = useProducts();
  const { addItem } = useCart();

  console.log(data);

  const settings = {
    modules: [Autoplay, Navigation],
    navigation: true,
    watchOverflow: true,
    spaceBetween: 20,
    slidesPerView: 2,
    slidesPerGroup: 1,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      580: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 70,
      },
    },
  };

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const ratingFormatter = [
    "images/rating1.png",
    "images/rating2.png",
    "images/rating3.png",
    "images/rating4.png",
    "images/rating5.png",
  ];

  function convertPrice(str) {
    return (
      str.substring(0, str.length - 2) + "." + str.substring(str.length - 2)
    );
  }

  return (
    <Box className={styles.container}>
      <Container>
        <Heading fontWeight={900} fontSize={20}>
          Mais Vendidos
        </Heading>
        <Box className={styles.titleWrapper}></Box>

        {isLoading ? (
          <Box className={styles.skeletonWrapper}>
            <Box className={styles.skeletonWrapperDesktop}>
              <Skeleton variant="text" width={216} height={420} />
              <Skeleton variant="text" width={216} height={420} />
              <Skeleton variant="text" width={216} height={420} />
              <Skeleton variant="text" width={216} height={420} />
            </Box>

            <Box className={styles.skeletonWrapperTablet}>
              <Skeleton variant="text" width={175} height={420} />
              <Skeleton variant="text" width={175} height={420} />
              <Skeleton variant="text" width={175} height={420} />
            </Box>

            <Box className={styles.skeletonWrapperMobile}>
              <Skeleton variant="text" width={160} height={380} />
              <Skeleton variant="text" width={160} height={380} />
            </Box>
          </Box>
        ) : (
          <Swiper {...settings}>
            {data.length > 0 &&
              data.map((product, index) => {
                const listPrice = convertPrice(String(product.listPrice));
                const price = convertPrice(String(product.price));
                const installmentPrice = convertPrice(
                  String(product?.installments[0]?.value)
                );

                return (
                  <SwiperSlide key={` ${product.productId} ${index}`}>
                    <Box className={styles.itensWrapper}>
                      {listPrice > null && (
                        <div className={styles.offWrapper}>
                          <img src={offImage} alt="" />
                        </div>
                      )}

                      <img
                        className={styles.itensImage}
                        src={product.imageUrl}
                        alt={product.productName}
                      />

                      <Box className={styles.itemInfo}>
                        <Text
                          color="#7A7A7A"
                          fontSize={isMobile ? 10 : 12}
                          textTransform="uppercase"
                        >
                          {product.productName}
                        </Text>

                        <img
                          className={styles.imageRating}
                          src={ratingFormatter[product.stars - 1]}
                          alt="Rating"
                        />

                        <div style={{ height: 20 }}>
                          <Text color="#7A7A7A" fontSize={isMobile ? 11 : 12}>
                            {listPrice > null &&
                              `de ${formatter.format(listPrice)}`}
                          </Text>
                        </div>

                        <Heading fontWeight={700} fontSize={isMobile ? 16 : 18}>
                          por {formatter.format(price)}
                        </Heading>

                        <div style={{ height: 20 }}>
                          {product.installments.length > 0 && (
                            <Text color="#7A7A7A" fontSize={11}>
                              ou em {product.installments[0]?.quantity}x de {formatter.format(installmentPrice)}
                            </Text>
                          )}
                        </div>

                        <Button
                          backgroundColor="#000000"
                          color="#ffffff"
                          onClick={() => addItem(product)}
                        >
                          Comprar
                        </Button>
                      </Box>
                    </Box>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        )}
      </Container>
    </Box>
  );
}
